import { getHistory } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const history = await getHistory();
	if (history) {
		return {
			history: history
		}
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
