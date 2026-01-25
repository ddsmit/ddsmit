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
    /* vertical line down the side for items at the same level */
    ul.posterize,
    ul.posterize ul {
        position: relative;
        padding-left: 36px;
        margin: 0 0 0 0;
    }
    ul.posterize::before,
    ul.posterize ul::before {
        content: "";
        position: absolute;
        left: 16px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--primary-hover);
    }
    ul.posterize li {
        position: relative;
        padding: 8px 0;
    }
</style>

<slot></slot>

<ul class="posterize">
    {#if show}
        {#if postData.slug}
            <li><a href="/{postData.slug}">{postData.name}</a></li>
        {:else if postData.slug === '' && postData.name}
            <li>{postData.name}</li>
        {/if}
        {#each postData.children as post}
            {#if post.children && post.children.length > 0}
                <svelte:self postData={post} {page} />
            {:else if post.slug}
                <ul class="posterize"><li><a href="/{post.slug}">{post.name}</a></li></ul>
            {:else if post.slug === ''}
                <ul class="posterize"><li>{post.name}</li></ul>
            {/if}
        {/each}
    {/if}
</ul>


