const __vite_glob_0_0 = `<h1>What Is A Data</h1>
<h2>So Much Datas, So Much Confusion</h2>
<p>
    There are many, many, many roles with "Data" in the title. There are Data Wranglers, Data Analysts, Data Scientists, Data Engineers,
    etc. What do all of the different titles mean and what does their day to day work look like? Unfortunately, the answer is 
    (as many answers are), "it depends".
</p>
<h2>What is Data and Why Should We Care</h2>
<p>
    Throughout history, we have been collecting and acting on data. Whether it's a restaurante counting various orders to understand
    how they want to prep for the next day, or a company like Facebook analyzing extrememly grainular data points like dwell time, 
    mouse positions, clicks, etc (and processing them in a massive and highly advanced model), people have been using data to try
    and make better decisions. 
</p>`;
const __vite_glob_0_1 = "testing ai";
const __vite_glob_0_2 = "<h1>Just a Rusty Old Crab</h1>\nfhjlahjs hfjhdjfh hfkh djhfk";
const __vite_glob_0_3 = '<img src="../../../../../static/main.webp" alt="Cydneys main page">';
const __vite_glob_0_4 = "<h1>My First, My Last, My Everything</h1>\n<p>\n    I'm a super lucky man to be married to such a smart, beautiful, kind, and driven woman. We met at John Deere\n</p>";
const __vite_glob_0_5 = "<h1>Today I Learned What TIL Means</h1>\n<p>\n    I'm hoping that I can use this section to document the little things I learn \n    every day. This should help keep me writing more consistently as well as improve\n    documentation of the things I learn.\n</p>";
const __vite_glob_0_6 = "<h1>TIL: The pains of the Python Azure Data Factory SDK</h1>\n<h2>Why was I digging into this abyss</h2>\n<p>\n    Our team uses a couple common data factories to handle some of the most common data tasks. We recently ran into a limit that \n    would prevent us from migrating from the development environment to the productive environment. We decided to use a different \n    approach to parameters to bring down this limit, but we wanted to have the pipeline fully tested, which could be very time \n    consuming. \n</p>\n<p>\n    I had been wanting to look into the Python Azure Data Factory SDK for a while (I dream of creating a TUI interface that lets \n    me keyboard navigate my way through the pipelines), and automating the tests seemed like a good reason to dive in. \n</p>\n<h2>So Why The Pain?</h2>\n<p>\n    The biggest pain I ran into was how highly nested the data structures are. From an API vs SDK consistency standpoint, it makes\n    sense, but it felt really combersome to figure out. Also, I still have not found out how to get all of the information I need.\n</p>";
const __vite_glob_0_7 = '<script>\n	import { sortUserPlugins } from "vite";\n\n<\/script>\n<h1>A Non-Coders Guide to the GitHUB</h1>\n<h2>What is a GitHUB, the answer is not 42</h2>\n<p>\n    To start, we should talk about git. According to the <a href="https://git-scm.com/">Git website</a>, git is a \n    "free and open source distributed version control system". Lets break down the pieces of this description a bit.\n</p>\n<h3>Free</h3>\n<p>\n    This one has a couple different meanings. The first is users are not charged to use the software. The second is the software is\n    licenses with the intent to keep the use of the code free to all users. The specifics can be found on the <a href="https://git-scm.com/">Git website</a>.\n</p>\n<h3></h3>Open Source - The code is available to the public, which allows contributions back to the code base from anyone.\n';
const __vite_glob_0_8 = `<h1>Resouces I Used to Build This Site</h1>
<p>
Although I didn't take any formal training in web development (or any coding for that matter), I wouldn't have been able to 
be where I'm at without some amazing people sharing resources openly with the world wide internets. Below is a list of resources
I used to develop this site.
</p>
<h2> The Svelte/SvelteKit Website and Documentation</h2>
<p>
The Svelte website is a fantastic resource. The ability to try out examples in the in browser editor helped keep me engaged and
ultimately made it easier for me to learn.
</p>
<ul>
    <li><a href="https://svelte.dev/tutorial/basics">Svelte Tutorial</a></li>
    <li><a href="https://svelte.dev/docs">Svelte Docs</a></li>
    <li><a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">SvelteKit</a></li>
</ul>

<h2>Pico CSS</h2>
<p>
Pico CSS is a fantastic library that makes your website look much better with nothing more than semantic HTML. I really like
how it's lightweight and doesn't require a bunch of tags, which makes the code cleaner. 
</p>
<ul>
    <li><a href="https://picocss.com/">PicoCSS</a></li>
</ul>
<h2>Kevin Powell's YouTube</h2>
<p>
Kevin Powell has some fantatic videos primarily centered around CSS. The triangle pattern on the header/footer were inspired 
by one of his videos. I've watched many others, but those will be things I may add in the future. 
</p>
<ul>
    <li><a href="https://www.youtube.com/@KevinPowell">Kevin's YouTube Channel</a></li>
    <li><a href="https://www.youtube.com/watch?v=hWGgw1K-i8Y">Creative Border Shape</a></li>
</ul>

<h2>Animation.css</h2>

I used the css file Neale outlines in a <a href="https://css-tricks.com/a-handy-little-system-for-animated-entrances-in-css/">CSS Tricks article</a> for many of the open animations (the nav bar, the roles in History). I've also been referencing this file in my own attempts at animation.`;
function getSlug(path) {
  if (path.split("/").at(-1) == "+page.svelte") {
    return path.replace(".", "Thoughts").replace("/+page.svelte", "");
  } else {
    return "";
  }
}
function getName(path) {
  let slug = getSlug(path);
  return slug.split("/").at(-1).replaceAll("-", " ");
}
function createTree(pages, children) {
  children = !!children ? [] : children;
  pages.forEach((page) => {
    let name = getName(page);
    let slug = getSlug(page);
    children.push({
      name,
      slug,
      children: []
    });
  });
  return children;
}
function load() {
  const pages = Object.keys(/* @__PURE__ */ Object.assign({ "./Data/What-Is-A-Data/+page.svelte": __vite_glob_0_0, "./LearningPath/AI/+page.svelte": __vite_glob_0_1, "./LearningPath/Rust/+page.svelte": __vite_glob_0_2, "./My-Family/Kiddos/Cyddy-Biddy-Art/+page.svelte": __vite_glob_0_3, "./My-Family/My-Wife/+page.svelte": __vite_glob_0_4, "./TIL/+page.svelte": __vite_glob_0_5, "./TIL/Coding/ADF-Python-SDK/wip-page.svelte": __vite_glob_0_6, "./Tutorials/A-Non-Coders-Guide-To-GitHUB/wip-page.svelte": __vite_glob_0_7, "./this.site/ResourcesUsed/+page.svelte": __vite_glob_0_8 }));
  const allPosts = {
    name: "Thoughts",
    slug: "Thoughts",
    children: createTree(pages, {})
  };
  return {
    posts: allPosts
  };
}
export {
  load
};
