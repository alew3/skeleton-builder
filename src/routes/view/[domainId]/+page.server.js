/** @type {import('./$types').PageLoad} */

import { PT } from '$env/static/private';

import { getEdgeDomains } from '$lib/server/data.js';

export async function load({ params, depends, cookies, request }) {

    let token = PT;
    console.log("params", params)
    let domainData = await fetch(`/api/domain/${params.domainId}`)

    //console.log("Token from store: " + token);

    if (token === '' || token === undefined) {
        console.log("No token");
        return {
            domainList: []
        };
    } else {
        console.log("Token: " + token);
        let domains = await getEdgeDomains(token);
        //console.log("domains", domains);
        return {

            domainList: domains
        };
    }
}