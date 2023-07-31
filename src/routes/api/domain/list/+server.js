import { json } from '@sveltejs/kit';
import { getEdgeDomains, extractToken} from '$lib/server/data.js';

// list domains for account
export async function GET({request, cookies}) {
    let token = cookies.get('token');
    if (token === null) {
        return json({error: "Invalid token"});
    }
    let domains = await getEdgeDomains(token);
	return json(domains);
}