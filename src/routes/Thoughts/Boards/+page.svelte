<script>
    export let data
</script>

<h1>Boards!</h1>
<p>
    Boards are a place to stick sticky notes for me to gather and collect smaller, more fleeting
    thoughts that tend to be less organized and ripe for development. 
</p>

{#if data.boards}
    {#each data.boards as board}
        <section>
            <h3><a href="/Thoughts/Boards/{board.slug.current}">{board.name}</a></h3>
            <p>{board.description}</p>
        </section>
    {/each}
{/if}