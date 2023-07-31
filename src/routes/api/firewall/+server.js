import { json } from '@sveltejs/kit';
import { getEdgeFireWallById, getEdgeFireWallRulesEngineById } from '$lib/server/data.js';
import {getEdgeFireWallFunctionInstancesById} from '$lib/server/data.js';


export async function GET() {

    let firewall_id = 12246;
    let firewall = await getEdgeFireWallById(firewall_id);
    let rules_engine = await getEdgeFireWallRulesEngineById(firewall_id);
    let function_instances = await getEdgeFireWallFunctionInstancesById(firewall_id);

    firewall.rules_engine = rules_engine;
    firewall.function_instances = function_instances;


	return json(firewall);
    //return json(Date.now());
}
