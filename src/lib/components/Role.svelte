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

    h3>a {
        color: green;
    }
    h3, h4 {
        margin: 0;
    }
    h4 {
        color: green;
        size: 5 rem;
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

    section.role {
        padding: 1rem;
        border: solid 3px var(--primary-hover);
        border-radius: 10px;
    }
.divider{
    display: flex;
    flex-wrap: wrap;
    color: green;
    width:80%;
    margin:5px auto;
    margin-bottom: 25px;
    overflow:hidden;
    text-align:center;   
    line-height:1.2em;
}

.divider:before, .divider:after{
    content:"";
    vertical-align:middle;
    display:inline-block;
    width:80%;
    border:green dotted 3px;
    margin:0 2% 0 -55%;
}
.divider:after{
    margin:0 -55% 0 2%;
}
blockquote {
    margin-bottom: 100px;
    border-left: green 10px dashed;
}

</style>

<blockquote class="role">
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
        <h4 class="divider">Accomplishments</h4>
        <ul>
        {#each role.accomlishments as accomplishment}
        
        <li><h5>{accomplishment.title}</h5><p>{accomplishment.description}</p></li>
        {/each}
        </ul>
        <h4 class="divider">Technologies/Skills Used</h4>
        <ul>
            {#each role.skills as roleSkill}
                {#if skills[roleSkill.id].url == null}
                    <li><h5>skills[roleSkill.id].description}</h5></li>
                {:else}
                    <li><h5><a href="{skills[roleSkill.id].url}">{skills[roleSkill.id].description}</a></h5></li>
                    <p>{roleSkill.use}</p>
                {/if}
            {/each}
        </ul>
    </div>
    <button on:click={handleHide} on:keydown={handleHide} class="{hideClass} arrow">↑ less</button>
</blockquote>