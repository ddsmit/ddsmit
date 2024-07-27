<script>
    import PostsContainer from '../../lib/components/PostsContainer.svelte';
    import { page } from '$app/stores';
    let currentPage = $page.url.pathname;

    /** @type {import('./$types').LayoutData} */
    export let data;
    let hideClass = "hide"
    function handleHide() {
        hideClass = (hideClass == "hide"? "": "hide")
    }
    export let testData = data.posts
    console.log($page.url.pathname)
</script>
<style>
    .postTitle {
        text-align: center;
        font-size: 3rem;
    }
</style>

<slot></slot>

<PostsContainer posts={testData} page={currentPage}/>

