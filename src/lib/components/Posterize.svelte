<script>
    export let postData
    export let page
    
    import { each } from "svelte/internal";
	// import { slide } from "svelte/types/runtime/transition";
    
    let show=true

    function prettySlug(slug) {
        const no_thoughts = slug.replace('/Thoughts','')
        const path_parts = no_thoughts.split('/')
        let stem = path_parts.pop()
        // path_parts.remove('Thoughts')
        const [_,...pp] = path_parts
        const partial_path = pp.join(': ').replaceAll('-',' ')
        if (pp.length == 0){
            return stem.replaceAll('-',' ')
        }
        return `${partial_path}: ${stem.replaceAll('-',' ')}`
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
        {#if postData.slug != undefined}
            <li><a href="/{postData.slug}">{prettySlug(postData.slug)}</a></li>
        {:else}
            <li>/{postData.slug.replace('Thoughts/','')}</li>
        {/if}
        {#each postData.children as post}
            {#if post.children != undefined}
                <svelte:self postData = {post} page={page}/>
            {:else}
                {#if post.slug != undefined}
                    <ul><li><a href="{post.slug}">/{post.slug}</a></li></ul>
                {:else}
                    <ul><li>/{post.slug}</li></ul>
                {/if}
            {/if}
        {/each}
    {/if}

</ul>


