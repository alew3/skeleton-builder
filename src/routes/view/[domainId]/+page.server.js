/** @type {import('./$types').PageLoad} */

import { PT, baseURL } from '$env/static/private';

import { getEdgeDomains } from '$lib/server/data.js';

export async function load({ params, depends, cookies, request }) {

    let token = PT;
    console.log("params", params)
    let domainData = await fetch(`${baseURL}api/domain/${params.domainId}`)
    let data = await domainData.json();
    console.log("data", data);

    return {
        domainData: data
    }

}