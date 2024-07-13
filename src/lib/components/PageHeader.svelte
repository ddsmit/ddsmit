<script>
    // import { position } from './stores.js';
    let hideClass = "hide"
    function handleHide() {
        hideClass = (hideClass == "hide"? "": "hide")
    }
</script> 

<style>
  @-moz-document url-prefix() {
    .last {margin-left: 3rem;}
  }
  @media not all and (-moz-windows-compositor) {
    .last {margin-left: -2.2rem;}
  }
  header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    top: 0;
    padding: 0.5rem;
    z-index: 1000;

    margin: 0;
    background-image: linear-gradient(var(--nav-background) 5rem,var(--primary-hover));
    border-bottom: solid var(--primary-hover) 1px;
    --mask: conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) 50% / 60px 100%;
    -webkit-mask: var(--mask);
    mask: var(--mask);
  }

  ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .logo {
    display: inline-block;
    width: 80vw;  
  }

  .first:first-letter {
    font-size: 3rem;
    padding:0;
    margin-bottom: -10px;
  }

  .middle:first-letter {
    color: var(--middle-letter);
    font-size: 3rem;
    padding:0;
    margin-bottom: -10px;
  }

  .first {
    writing-mode: vertical-rl;
    text-orientation: upright;
    display: inline;
    vertical-align: top;
    padding: 0;
    margin-top: 0px;  
  }

  .middle {
    writing-mode: vertical-rl;
    margin-left: -3.6rem;
    text-orientation: upright;
    display: inline;
    vertical-align: top;
    padding:0;
    margin-top: 0px;
    margin-bottom: 2rem;
  }

  .last {
    font-size: 3rem;
    padding:0;
    color:var(--green);
    display: inline-block;
    margin-left: -2.2rem;
    /* margin-top: -7px; */
    vertical-align: top;
  }

  .hide {
    display: none;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    padding: 0;
    margin-bottom: 1.5rem;
    width: 100%;
  }

  nav ul {
    list-style-type: none;
  }

  nav li {
    border-radius: 5px;
    border:var(--primary-hover) dotted 3px;
    background-color:var(--nav-background);
    padding: 20px;
    margin: 5px;
  }

  nav li:hover {
    border: solid 3px var(--primary-hover);
  }

</style>

<header id="hidebutton" on:click={handleHide} on:keydown={handleHide}>
    <div class="logo">
        <span class="first">d<span class='{hideClass} animate blur'>avid</span></span><span class="middle">d<span class=' {hideClass} animate blur'>ouglas</span></span><span class="last" id="last">smit</span>
        <!-- <span class="first">d</span><span class="middle">d</span><span class="last" id="last">smit</span> -->
    </div>
    <nav class=" {hideClass} animate drop">
        <ul class="">
            <a href="/"><li>Home</li></a>
            <a href="/Thoughts"><li>Thoughts</li></a>
            <a href="/History"><li>History</li></a>
            <a href="/Future"><li>Future</li></a>
        </ul>
    </nav>
</header>

