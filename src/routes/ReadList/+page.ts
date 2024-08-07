import { getReadList } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const readList = await getReadList();
	if (readList) {
		const readListWithMetadata = await Promise.all(
			readList.map(async (readitem) => {
				const response = await fetch(`https://www.ddsmit.com/api/metadata?url=${encodeURIComponent(readitem.link)}`);
				if (response.status == 200) {
					const metadata = await response.json()
					return {
						...readitem,
						metadata
					} 
				} else {
					return readitem
				}
			})
		);
		return {
			readList: readListWithMetadata
		};
	} else {
		throw error(404, 'Not found');
	}
}) satisfies PageLoad;
