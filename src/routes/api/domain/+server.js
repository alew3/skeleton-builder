import { json } from '@sveltejs/kit';
import { getEdgeDomainsById, getCertificateById, getEdgeApplicationById, getEdgeApplicationCacheSettingsById } from '$lib/server/data.js';
import { getEdgeApplicationDeviceGroupsById, getEdgeApplicationFunctionInstancesById } from '$lib/server/data.js';
import { getEdgeApplicationOriginsById, getEdgeApplicationRulesEngineById } from '$lib/server/data.js';


export async function GET({request, params}) {

    let domain_id = params.domainId;
    console.log(domainId);
    let domain = await getEdgeDomainsById(domain_id);

    let certificate = null;
    if (domain.certificate !== undefined && domain.certificate !== null) {
        // get certificate details
        certificate = await getCertificateById(domain.certificate.id);
        domain.digital_certificate = certificate;
    }

    let edge_application_id = domain.edge_application_id;
    if (edge_application_id !== undefined && edge_application_id !== null) {
        // get edge application details
        let edge_application = await getEdgeApplicationById(edge_application_id);
        domain.edge_application = edge_application;

        // get cache settings
        let cache_settings = await getEdgeApplicationCacheSettingsById(edge_application_id);
        domain.edge_application.cache_settings = cache_settings;

        // get device groups
        let device_groups = await getEdgeApplicationDeviceGroupsById(edge_application_id);
        domain.edge_application.device_groups = device_groups;

        // get edge application function instances
        let function_instances = await getEdgeApplicationFunctionInstancesById(edge_application_id);
        domain.edge_application.function_instances = function_instances;

        // get edge application origins
        let origins = await getEdgeApplicationOriginsById(edge_application_id);
        domain.edge_application.origins = origins;

        domain.edge_application.rules_engine = {};

        // get edge application rules engine request
        let rules_engine_request = await getEdgeApplicationRulesEngineById(edge_application_id,"request");
        domain.edge_application.rules_engine.request = rules_engine_request;

         // get edge application rules engine response
         let rules_engine_response = await getEdgeApplicationRulesEngineById(edge_application_id,"response");
         domain.edge_application.rules_engine.response = rules_engine_response;
    }



	return json(domain);
    //return json(Date.now());
}
