import { error } from '@sveltejs/kit';
import { inDescription } from '$lib/components/skills'
import roles from '../roles.json'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let accomplishmentsForSkill = []
	roles.forEach(role => {
		role.accomlishments.forEach(accomplishment => {
			if (inDescription(params.slug, accomplishment.description)) {
				accomplishmentsForSkill.push({
					"role":role,
					"accomplishment": accomplishment
				})
			}
		})
	})
	if (accomplishmentsForSkill.length) {
		return {
			"accomplishments":accomplishmentsForSkill,
			"skill":params.slug
		}
	}

	error(404, 'Not found');
}