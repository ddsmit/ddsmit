<script>
  import PageHeader from '../components/PageHeader.svelte'
  import PageFooter from '../components/PageFooter.svelte'
  import Me from '../components/Me.svelte';
  import '../css/animation.css'
  import '../css/main.css'
  const mePath = new URL('../assets/img/dave.png', import.meta.url).href
  

</script> 
<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</svelte:head>



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
  