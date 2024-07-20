<script>
    export let data
    import { PortableText } from '@portabletext/svelte';
    console.log(data.journal[0])
    function toLocalDate(date) {
        let utcDate = new Date(date);
        return utcDate.toLocaleString();
    }
</script>
<style>
    h2 {
        font-size: 1.25rem;
    }
    section {
        border: var(--green) solid 1px;
        padding: 1rem;
    }
</style>
<h1>My Journal</h1>
<p>This section will be my day to day, week to week log of anything I learn, try, and fail on.</p>
{#each data.journal as entry}
<section>
    <h2>{toLocalDate(entry._createdAt)} - {entry.name}</h2>
    <PortableText onMissingComponent={false} value={entry.entry} />
</section>
{/each}