<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</svelte:head>
<script>
  import PageHeader from '$lib/components/PageHeader.svelte'
  import PageFooter from '$lib/components/PageFooter.svelte'
  import Me from '$lib/components/Me.svelte';
  import '$lib/css/animation.css'
  import '$lib/css/main.css'

  import { onNavigate } from '$app/navigation';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  const mePath = new URL('../assets/img/dave.png', import.meta.url).href
  

</script> 




<style>

  * {
    margin: 0;
    padding: 0;
    /* border: red solid 1px; */
  }

  .layout-container {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: 
      1fr 
      auto;
    
  }
  main {
      max-width: 1100px;
      width: 90vw;
      margin-left: auto;
      margin-right: auto;
      margin-top: 6rem;
  }

</style>


<div class="layout-container">
  <PageHeader />
  
  <main>
      <slot></slot>
      
  </main>
  <PageFooter />
  <Me path={mePath}/>
</div>
  