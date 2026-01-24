<script>
    export let postData
    export let page
    
    let show = true

    function prettySlug(slug) {
        const no_thoughts = slug.replace('/Thoughts', '')
        const path_parts = no_thoughts.split('/')
        let stem = path_parts.pop()
        const [_, ...pp] = path_parts
        const partial_path = pp.join(': ').replaceAll('-', ' ')
        if (pp.length == 0) {
            return stem.replaceAll('-', ' ')
        }
        return `${partial_path}: ${stem.replaceAll('-', ' ')}`
    }
</script>

<style>
    ul li {
        list-style-type: none;
    }
</style>

<slot></slot>

<ul>
    {#if show}
        {#if postData.slug}
            <li><a href="/{postData.slug}">{postData.name}</a></li>
        {/if}
        {#each postData.children as post}
            {#if post.children && post.children.length > 0}
                <svelte:self postData={post} {page} />
            {:else if post.slug}
                <ul><li><a href="/{post.slug}">{post.name}</a></li></ul>
            {/if}
        {/each}
    {/if}
</ul>


