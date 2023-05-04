<script>
    import PostsContainer from '../../components/PostsContainer.svelte';
    import { page } from '$app/stores';
    let currentPage = $page.url.pathname;

    /** @type {import('./$types').LayoutData} */
    export let data;
    let hideClass = "hide"
    function handleHide() {
        hideClass = (hideClass == "hide"? "": "hide")
    }
    export let testData = data.posts

</script>

<slot></slot>

<PostsContainer posts={testData} page={currentPage}/>

