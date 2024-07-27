<script>
    import Role from "$lib/components/Role.svelte";

    export let data;
    console.log(data)

</script>
<h1>David D. Smit</h1>
<section>
    <h2>Overview</h2>
    <p>
        Accomplished engineer with 9+ years of experience in data engineering, software engineering, 
        product development, and manufacturing engineering.  I have produced data driven results through 
        the application of various data analytics and engineering tools in conjunction with Six Sigma 
        methodologies.  I have extensive experience with process automation, new product development, vendor 
        relationship management, root cause analysis, and corrective actions. I am highly effective in a fast 
        paced, continuous improvement environment.
    </p>
    <h2>Career History</h2>
    {#each data.history as role}
            <Role 
            role={role}            
            />
    {/each}
</section>