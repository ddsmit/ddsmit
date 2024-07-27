<script>
    export let data
    import Sticky from "$lib/components/Sticky.svelte";
</script>
<style>
    section {
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
</style>
<h1>{data.board.name}</h1>
<p>{data.board.description}</p>
{#if data.board.stickies}
<section>
    {#each data.board.stickies as sticky}
        <Sticky sticky={sticky} />
    {/each}
</section>
{/if}