
<script>
    import Prism from 'prismjs';
    export let code;
    export let language;
    let selectedLanguage = language? language: 'javascript'
    let highlights = Prism.highlight(code, Prism.languages[selectedLanguage])
</script>

<style>
    .code {
        white-space: pre-wrap;
        padding: 3rem;
    }
</style>

<svelte:head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-dark.min.css" rel="stylesheet" />
</svelte:head>

<div class="code">
    {@html highlights}
</div>

