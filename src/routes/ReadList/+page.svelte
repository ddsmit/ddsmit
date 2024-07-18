<script>
    export let data
    console.log(data)
</script>
<style>
    * {
        text-decoration: none;
    }
    section {
        max-width: 900px;
        margin: 3rem;
        padding: 1rem;   
    }
    .need-to-read {
        border: dashed 1px var(--green);
    }
    .read {
        border: grey solid 1px;
    }
    .read > h3, .read > p {
        color: grey;
        text-decoration: line-through;
    }
    br {
        border-top: var(--green) solid 1px;
    }
</style>
<h2>Need To Read</h2>
<!-- {#each data.readList as read}
    {#if read.status == 'needToRead'}
    <a href="{read.link}">
        <section class="need-to-read">
            <h3>{read.metadata.title}</h3>
            <p>{read.metadata.description}</p>
        </section>
    </a>
    {/if}
{/each}
<h2>Read</h2>
{#each data.readList as read}
    {#if read.status == 'read'}
    <a href="{read.link}">
        <section class="read">
            {#if read.recomend}👍🏻{/if}
            <h3>{read.metadata.title}</h3>
            <p>{read.metadata.description}</p>
        </section>
    </a>
    {/if}
{/each} -->
