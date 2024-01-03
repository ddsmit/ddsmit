<script>
    export let roleSkills;
    export let allSkills;
</script>

{#if roleSkills != null}
    {#each roleSkills as skill}
        {allSkills[skill].description}
    {/each}
{/if}