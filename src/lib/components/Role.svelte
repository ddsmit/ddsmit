<script>
    import { each, has_prop } from "svelte/internal";
    
    import Accomplishment from "./Accomplishment.svelte";
    export let role;
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
        color: var(--green);
    }
    h3, h4 {
        margin: 0;
    }
    h4 {
        color: var(--green);
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
        border:var(--contrast) dotted 3px;
        background-color: var(--background);
        padding: 0px;
        padding-left: 10px;
        padding-right: 10px;
        margin: 1rem;
        width: auto;
    }

    button:hover {
        border: solid 3px var(--primary-hover);
        color: var(--primary-hover)
    }

    section.role {
        padding: 1rem;
        border: solid 3px var(--primary-hover);
        border-radius: 10px;
    }
.divider{

    flex-wrap: wrap;
    color: var(--green);
    width:90%;
    /* margin:5px auto; */
    margin-bottom: 25px;
    overflow:hidden;
    text-align:center;   
    line-height:1.2em;
    border-bottom: 3px dashed var(--green);
}

blockquote {
    margin-bottom: 100px;
    border-left: var(--green) 10px dashed;
}
PortableText {
    color: red;
}
</style>

<blockquote class="role">
    <div class="main-header">
        {#if role.companyAt.link == null}
            <h3>{role.companyAt.name} - {role.name}</h3>
        {:else}
            <h3><a href="{role.companyAt.link}">{role.companyAt.name}</a> - {role.name}</h3>
        {/if}
    </div>

    <i>{role.startDate} to {role.endDate}</i>
    <p>
        {role.description}
    </p>
    <button on:click={handleHide} on:keydown={handleHide} class="{hideClass} expand arrow">↓ more</button>
    <div class="{hideClass} animate blur">

        <h4 class="divider">Accomplishments</h4>
        <ul>
            {#each role.accomplishments as accomplishment}
                <Accomplishment accomplishment={accomplishment} />
            {/each}

        </ul>
    </div>
    <button on:click={handleHide} on:keydown={handleHide} class="{hideClass} arrow">↑ less</button>
</blockquote>