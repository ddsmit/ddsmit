import { getBoard } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";


export const load = (async (params) => {
    console.log(params.params.slug)
    const board = await getBoard(params.params.slug);
    console.log(board[0])
    if (board) {
        return {
            board: board[0]
        }
    }

    throw error(404, 'Not Found');
}) satisfies PageLoad