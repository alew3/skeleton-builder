import { json } from '@sveltejs/kit';

// list domains for account
export async function GET({cookies, params}) {
    cookies.set('token',params.tokenId,{ path: '/' });
	return json({token : params.tokenId});
}