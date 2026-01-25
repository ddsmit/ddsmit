import { getBoards } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async (params) => {
    const boards = await getBoards();
    if (boards) {
        return {
            boards: boards
        }
    }

    throw error(404, 'Not Found');
}) satisfies PageLoad