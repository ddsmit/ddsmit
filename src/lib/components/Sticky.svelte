<script>
	import { disableScrollHandling } from '$app/navigation';
    export let sticky
    import { PortableText } from '@portabletext/svelte';

    let hideClass = 'hide'
    
    function open() {
        hideClass = (hideClass == "hide"? "": "hide")
    }

    function getText(obj) {
        let result = '';

        function recursiveExtract(o) {
            for (let key in o) {
                if (typeof o[key] === 'object' && o[key] !== null) {
                    recursiveExtract(o[key]);
                } else if (key === 'text') {
                    result += o[key] + ' ';
                }
            }
        }

        recursiveExtract(obj);
        return result.trim();
    }

</script>
<style>
    /* * {
        border: red solid 1px;
    } */
    .sticky {
        padding: 1rem;
        border: 1px var(--green) solid;
        margin-inline: auto;
        transition:.2s ease-in-out;
        transform: scale(1);
        z-index: 9999;
        max-width: 15rem;
        z-index: 0;
        height: 100%;
    }

    .hide {
        max-height: 15rem;
        overflow: hidden;
        z-index: 0;
        mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    }

    .sticky-hidden:hover {
        color: var(--primary-hover);
        border: 1px var(--primary-hover) solid;
        /* border-right: 1px var(--primary-hover) solid; */
    }

    section h5 {
        text-decoration: dashed;
    }
    dialog {
        max-width: 800px;
    }

    .backdrop {

    }


</style>
<section on:click={open} on:keydown={open} class="sticky {
    getText(sticky).length  > 300? hideClass:''}"
>
    {#if sticky.Link}
        <a href={sticky.Link}><h2 class="divider">{sticky.name}</h2></a>
    {:else}
        <h2 class="divider">{sticky.name}</h2>
    {/if}
    <PortableText onMissingComponent={false} value={sticky.information} />
</section>
