<script>
    // import { position } from "./stores.JS";
    export let path;
    let myPosition = 'closed';
    // position.subscribe(value => {
	// 	myPosition = value;
	// });
</script>
<style>
    img.closed {
        width: 15vw;
        rotate: 180deg;
        left: 25vw;
        top: -15vw;
        position: fixed;
        display: none;
        z-index: 10;
    }
    img.menu {
        width:15vw;
        rotate: 180deg;
        left: 25vw;
        top: -10vw;
        position: fixed;
        display: block;
        z-index: 10;
    }

    img.menu { 
        animation-name: menu-animate; 
        /* animation-timing-function: cubic-bezier(.77, .14, .91, 1.25); */
        animation-duration: 0.5s;
    }

    img.closed { 
        animation-name: close-animate; 
        animation-timing-function: cubic-bezier(.77, .14, .91, 1.25);
        animation-duration: 0.5s;
    }

    @keyframes close-animate {
        0% {
            transform: translate(0, 0vw);
        }
        100% {
            transform: translate(0, 2vw);
        }
    }

    @keyframes menu-animate {
        0% {
            transform: translate(0, 6vw);
        }
        100% {
            transform: translate(0, 0vw);
        }
    }
</style>
<img alt="My current favorite image of myself per my 8 yo daughter" src="{path}" class="{myPosition} menu-animate" />