<script>
    export let data;
</script>
<h1>Articles</h1>
<p>
    The Articles section of my site offers in-depth and evergreen content. My target is that I can 
    provide value to any readers who find my page, which will likely include a future version of myself 
    looking to revisit a topic. 
</p>
{#if data.articles}
    <ul>
    {#each data.articles as article}
        <li>
            <a href="/Thoughts/Articles/{article.slug}">{article.name}</a>
        </li>
    {/each}
    </ul>
{/if}