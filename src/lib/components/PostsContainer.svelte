<script>
    export let posts
    export let page
    import Posterize from "./Posterize.svelte";
    let hideClass = ''
    function handleHide() {
        hideClass = (hideClass == "hide"? "": "hide")
    }
</script>
<style>
    ul li {
        list-style-type: none;
    }
    .hide {
        display: none;
    }
    .post-container {
        border-top: solid green 2px;

        padding: 1rem;
        width: auto;

    }
</style>
<div class="post-container" >
    <!-- <h3 on:click={handleHide} on:keydown={handleHide}>Click Here For More!<span>↑</span><span>↓</span></h3> -->
    <h3>Posts</h3>
    <div id="posts" class="{hideClass} animate blur">
        <Posterize postData={posts} page={page} />
    </div>
</div>
