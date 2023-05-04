<script>
    import { each } from "svelte/internal";
    export let role;
    export let skills;

    if (role.endDate == null) {
        role.endDate = "Present"
    }

    let hideClass = 'hide'
    function handleHide() {
        hideClass = (hideClass == "hide"? "": "hide")
    }
</script>
<style>
    h3, h4 {
        margin: 0;
    }
    ul li {
        list-style-type: none;
    }
    p { 
        margin: 2rem;
    }
    .hide {
        display: none;
    }
    .hide.expand {
        display: block;
    }
    .expand {
        display: none;
    }
    .arrow {
        font-size: 1rem;
    }

    button {
        border-radius: 5px;
        color: var(--primary);
        border:white dotted 3px;
        background-color: black;
        padding: 0px;
        padding-left: 10px;
        padding-right: 10px;
        margin: 1rem;
        width: auto;
    }

    button:hover {
        border: solid 3px var(--primary-hover);
    }

</style>

<section>
    <div class="main-header">
        {#if role.companyURL == null}
            <h3>{role.company} - {role.title}</h3>
        {:else}
            <h3><a href="{role.companyURL}">{role.company}</a> - {role.title}</h3>
        {/if}
    </div>
       
    <i>{role.startDate} to {role.endDate}</i>
    <button on:click={handleHide} on:keydown={handleHide} class="{hideClass} expand arrow">↓ more</button>
    <div class="{hideClass} animate blur">
        <p>
            {role.description}
        </p>
        <h4>Accomplishments</h4>
        <ul>
        
        {#each role.accomlishments as accomplishment}
        
        <li><section>{accomplishment.description}</section></li>
        {/each}
        </ul>
        <h4>Technologies/Skills Used</h4>
        <ul>
            {#each role.skills as roleSkill}
                {#if skills[roleSkill.id].url == null}
                    <li>{skills[roleSkill.id].description}</li>
                {:else}
                    <li><a href="{skills[roleSkill.id].url}">{skills[roleSkill.id].description}</a></li>
                    <p>{roleSkill.use}</p>
                {/if}
            {/each}
        </ul>
    </div>
    <button on:click={handleHide} on:keydown={handleHide} class="{hideClass} arrow">↑ less</button>
</section>