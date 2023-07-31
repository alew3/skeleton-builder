import { PT } from '$env/static/private';
import { personalToken } from "$lib/stores";
import { get } from 'svelte/store';

export function extractToken(request) {
	const auth = request.headers.get('authorization');
	if (auth && auth.toLowerCase().startsWith('token ')) {
		return auth.slice(6);
	}
	return null;
}

export async function getEdgeDomains(token) {
	const res = await fetch('https://api.azionapi.net/domains?page_size=100&sort=asc', {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data for Edge Domains: ');
	}
	let results = await res.json();
	return results["results"];
}

export async function getEdgeDomainsById(token,id) {
	const res = await fetch(`https://api.azionapi.net/domains/${id}`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${$token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Domain: ${id}`);
	}
	let results = await res.json();
	return results["results"];
}

export async function getEdgeApplicationById(token,id) {
	const res = await fetch(`https://api.azionapi.net/edge_applications/${id}`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Application: ${id}`);
	}
	let results = await res.json();
	return	results["results"];
}


export async function getEdgeApplicationCacheSettingsById(token,id) {
	const res = await fetch(`https://api.azionapi.net/edge_applications/${id}/cache_settings?order_by=name&sort=asc&page=1&page_size=100`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Application Caches: ${id}`);
	}
	let results = await res.json();
	return results["results"];
}

export async function getEdgeApplicationDeviceGroupsById(id) {
	const res = await fetch(`https://api.azionapi.net/edge_applications/${id}/device_groups?order_by=name&sort=asc&page=1&page_size=100`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Application Device Groups: ${id}`);
	}
	let results = await res.json();
	return results["results"];
}

export async function getEdgeApplicationFunctionInstancesById(token,id) {
	const res = await fetch(`https://api.azionapi.net/edge_applications/${id}/functions_instances?order_by=name&sort=asc&page=1&page_size=100&filter=name`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Application Function Instances: ${id}`);
	}
	let results = await res.json();
	return results["results"];
}

export async function getEdgeApplicationOriginsById(token,id) {
	const res = await fetch(`https://api.azionapi.net/edge_applications/${id}/origins?order_by=name&sort=asc&page=1&page_size=10`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Application Origins: ${id}`);
	}
	let results = await res.json();
	return results["results"];
}


export async function getEdgeApplicationRulesEngineById(token,id,phase) {
	const res = await fetch(`https://api.azionapi.net/edge_applications/${id}/rules_engine/${phase}/rules?order_by=order&sort=asc&page=1&page_size=10`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Rules Engines: ${id}  ${phase}`);
	}
	let results = await res.json();
	return results["results"];
}

export async function getEdgeFireWallById(token,id) {
	const res = await fetch(`https://api.azionapi.net/edge_firewall/${id}`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Firewall: ${id}`);
	}
	let results = await res.json();
	return	results["results"];
}

export async function getEdgeFireWallRulesEngineById(token,id) {
	const res = await fetch(`https://api.azionapi.net/edge_firewall/${id}/rules_engine?order_by=order&sort=asc&page=1&page_size=100`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Firewall Rules Engine: ${id}`);
	}
	let results = await res.json();
	return	results["results"];
}

export async function getEdgeFireWallFunctionInstancesById(token,id) {
	const res = await fetch(`https://api.azionapi.net/edge_firewall/${id}/functions_instances?order_by=name&sort=asc&page=1&page_size=10`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Edge Firewall Function Instances: ${id}`);
	}
	let results = await res.json();
	return	results["results"];
}



export async function getCertificateById(token,id) {
	const res = await fetch(`https://api.azionapi.net/digital_certificates/${id}`, {
		headers: {
			Accept: 'application/json; version=3',
			Authorization: `Token ${token}`
		}
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch data for Digital Certificate: ${id}`);
	}
	let results = await res.json();
	return results["results"];
}
