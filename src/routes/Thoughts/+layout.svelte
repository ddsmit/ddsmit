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
    export let postData = data.posts
</script>
<style>
    .postTitle {
        text-align: center;
        font-size: 3rem;
    }
</style>

<slot></slot>

<PostsContainer posts={postData} page={currentPage}/>

