/** @type {import('./$types').PageLoad} */

// import {personalToken} from '$lib/stores';
// import { get } from 'svelte/store';
import { getEdgeDomains } from '$lib/server/data.js';

export async function load({ params, depends, cookies, request }) {
   // console.log("token from store: " + get(personalToken));

   // console.log("request to page load",request);
    depends('domains:list');
    let token = cookies.get('token');

    console.log("Token from store: " + token);

    if (token === '' || token === undefined) {
        console.log("No token");
        return {
            domainList: []
        };
    } else {
        console.log("Token: " + token);
        return {
            domainList: await getEdgeDomains(token)
        };
    }
}