<script>
    // import { position } from './stores.js';
    let hideClass = "hide"
    function handleHide() {
        hideClass = (hideClass == "hide"? "": "hide")
        // position.set(hideClass == "hide"? "closed": "menu")
    }
</script> 

<style>

  header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    top: 0;
    padding: 0.5rem;

    margin: 0;
    /* background-color: var(--background-color); */
    background-image: linear-gradient(var(--background-color) 5rem,var(--primary-hover));
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
    color: var(--primary-hover);
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
    color:green;
    display: inline-block;
    margin-left: -2.2rem;
    margin-top: -7px;
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
    width: 100%;
  }

  nav ul {
    list-style-type: none;
  }

  nav li {
    border-radius: 5px;
    border:white dotted 3px;
    background-color: black;
    padding: 20px;
    margin: 5px;
  }

  nav li:hover {
    border: solid 3px var(--primary-hover);
  }

</style>

<header id="hidebutton" on:click={handleHide} on:keydown={handleHide}>
    <div class="logo">
        <span class="first">d<span class='menu {hideClass} animate blur'>avid</span></span>
        <span class="middle">d<span class='menu {hideClass} animate blur'>ouglas</span></span>
        <span class="last" id="last">smit</span>
    </div>
    <nav class="menu {hideClass} animate drop">
        <ul class="menu">
            <a href="/"><li>Home</li></a>
            <a href="/Thoughts"><li>Thoughts</li></a>
            <a href="/History"><li>History</li></a>
            <a href="/Future"><li>Future</li></a>
        </ul>
    </nav>
</header>

