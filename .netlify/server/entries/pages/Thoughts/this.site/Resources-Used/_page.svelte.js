import { c as create_ssr_component } from "../../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Resouces I Used to Build This Site</h1>
<p>Although I didn&#39;t take any formal training in web development (or any coding for that matter), I wouldn&#39;t have been able to 
be where I&#39;m at without some amazing people sharing resources openly with the world wide internets. Below is a list of resources
I used to develop this site.
</p>
<h2>The Svelte/SvelteKit Website and Documentation</h2>
<p>The Svelte website is a fantastic resource. The ability to try out examples in the in browser editor helped keep me engaged and
ultimately made it easier for me to learn.
</p>
<ul><li><a href="https://svelte.dev/tutorial/basics">Svelte Tutorial</a></li>
    <li><a href="https://svelte.dev/docs">Svelte Docs</a></li>
    <li><a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">SvelteKit</a></li></ul>

<h2>Pico CSS</h2>
<p>Pico CSS is a fantastic library that makes your website look much better with nothing more than semantic HTML. I really like
how it&#39;s lightweight and doesn&#39;t require a bunch of tags, which makes the code cleaner. 
</p>
<ul><li><a href="https://picocss.com/">PicoCSS</a></li></ul>
<h2>Kevin Powell&#39;s YouTube</h2>
<p>Kevin Powell has some fantatic videos primarily centered around CSS. The triangle pattern on the header/footer were inspired 
by one of his videos. I&#39;ve watched many others, but those will be things I may add in the future. 
</p>
<ul><li><a href="https://www.youtube.com/@KevinPowell">Kevin&#39;s YouTube Channel</a></li>
    <li><a href="https://www.youtube.com/watch?v=hWGgw1K-i8Y">Creative Border Shape</a></li></ul>

<h2>Animation.css</h2>
<p>I used the css file Neale outlines in a <a href="https://css-tricks.com/a-handy-little-system-for-animated-entrances-in-css/">CSS Tricks article</a> for many of the open animations (the nav bar, the roles in History). I&#39;ve also been referencing this file in my own attempts at animation.
</p>
<h2>PrismJS</h2>
<p>For code snippets, I created a small component based on PrismJS. Unfortunately, I wasn&#39;t able to get the Python support working in this context. For the small snippets I&#39;ve done so far, the JavaScript formatting has been fine, but it is likely something I&#39;ll need to resolve in the future.
</p>`;
});
export {
  Page as default
};
