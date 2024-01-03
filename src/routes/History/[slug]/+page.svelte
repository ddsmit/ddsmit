<script>
	import { each } from 'svelte/internal';
	/** @type {import('./$types').PageData} */
	export let data;
	import roles from '../roles.json'
	import SkillListing from '$lib/components/SkillListing.svelte';
</script>
<h1>{data.skill}</h1>
{#each data.accomplishments as accomplishment}
	<SkillListing accomplishment={accomplishment}/>
{/each}