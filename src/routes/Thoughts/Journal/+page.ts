import { getJournal } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "../../ReadList/$types";

export const load = (async () => {
    const journal = await getJournal();
    if (journal) {
        return {
            journal: journal
        }
    }

    throw error(404, 'Not Found');
}) satisfies PageLoad