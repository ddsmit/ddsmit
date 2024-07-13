<script>
    export let accomplishment
    import { PortableText } from '@portabletext/svelte';
    let hideClass = 'hide'
    function handleHide() {
        hideClass = (hideClass == "hide"? "": "hide")
    }

</script>
<style>
    /* * {
        border: red solid 1px;
    } */
    .accomplishment {
        padding: 1rem;
        border: 1px var(--green) solid;
        max-width: 800px;
        margin-inline: auto;
        
    }

    .hide {
        height: 15rem;
        overflow: hidden;
        mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    }

    .accomplishment-hidden:hover {
        color: var(--primary-hover);
        border: 1px var(--primary-hover) solid;
        /* border-right: 1px var(--primary-hover) solid; */
    }

    section h5 {
        text-decoration: dashed;
    }
    .skills-block {
        display: grid;
        grid-template-columns: 1fr 50fr;
        align-items: stretch;
        border: solid var(--primary-hover) 1px;
        padding: 1rem;
        gap: 1rem;
    }
    .skill {
        padding-inline: 0.2rem;
        padding-block: auto;
        margin: 0.5rem;
        border-radius: 3px;
        border: 2px dashed;
        color: var(--green);
        text-align: center;
        text-decoration: none;
    }
    .skill:hover {
        border: solid;
        text-decoration: dotted;
        box-shadow: 10px 10px 0 0;
    }
    .skills {
        display: flex;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
    }
    i {
        color: var(--primary-hover);
        writing-mode: vertical-lr;
        text-align: center;
    }

</style>
<section on:click={handleHide} on:keydown={handleHide} class="accomplishment {hideClass}">
    <h3 class="divider">{accomplishment.name}</h3>
    <p>{accomplishment.problem}</p>
    <PortableText onMissingComponent={false} value={accomplishment.action} />
    <p>{accomplishment.result}</p>

    {#if accomplishment.skillsUsed != null}
        <section class="skills-block">
            <i>Skills Used</i>
            <section class="skills">
            
            {#each accomplishment.skillsUsed as skill}
                <a href="{skill.link}" class="skill">{skill.name}</a>
            {/each}
            </section>
        </section>
    {/if}
</section>