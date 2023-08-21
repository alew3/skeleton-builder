import { json } from '@sveltejs/kit';
import { getEdgeDomainsById, getCertificateById, getEdgeApplicationById, getEdgeApplicationCacheSettingsById } from '$lib/server/data.js';
import { getEdgeApplicationDeviceGroupsById, getEdgeApplicationFunctionInstancesById } from '$lib/server/data.js';
import { getEdgeApplicationOriginsById, getEdgeApplicationRulesEngineById } from '$lib/server/data.js';

import { PT } from '$env/static/private';

export async function GET({ request, params }) {

    console.log("params in /api/domain/id", params)

    let domainId = params.domainId;
    let token = PT;
    let domain = await getEdgeDomainsById(token, domainId);

    let certificate = null;
    if (domain.digital_certificate_id !== undefined && domain.digital_certificate_id !== null) {
        // get certificate details
        certificate = await getCertificateById(token, domain.digital_certificate_id);
        domain.digital_certificate = certificate;
    }

    let edge_application_id = domain.edge_application_id;
    console.log("domain", domain);
    if (edge_application_id !== undefined && edge_application_id !== null) {
        // get edge application details
        console.log("edge_application ID", edge_application_id);

        let edge_application = await getEdgeApplicationById(token, edge_application_id);
        domain.edge_application = edge_application;

        // get cache settings
        let cache_settings = await getEdgeApplicationCacheSettingsById(token, edge_application_id);
        domain.edge_application.cache_settings = cache_settings;

        // get device groups
        let device_groups = await getEdgeApplicationDeviceGroupsById(token, edge_application_id);
        domain.edge_application.device_groups = device_groups;

        // get edge application function instances
        let function_instances = await getEdgeApplicationFunctionInstancesById(token, edge_application_id);
        domain.edge_application.function_instances = function_instances;

        // get edge application origins
        let origins = await getEdgeApplicationOriginsById(token, edge_application_id);
        domain.edge_application.origins = origins;

        domain.edge_application.rules_engine = {};

        // get edge application rules engine request
        let rules_engine_request = await getEdgeApplicationRulesEngineById(token, edge_application_id, "request");
        domain.edge_application.rules_engine.request = rules_engine_request;

        // get edge application rules engine response
        let rules_engine_response = await getEdgeApplicationRulesEngineById(token, edge_application_id, "response");
        domain.edge_application.rules_engine.response = rules_engine_response;
    }



    return json(domain);
    //return json(Date.now());
}
