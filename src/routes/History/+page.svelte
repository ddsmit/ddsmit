<script>
    import Role from "../../components/Role.svelte";
    import skills from "./skills.json"
    import roles from "./roles.json"
    // let roles = [
    //     {
    //         company: "Schaeffler",
    //         companyURL: "https://www.schaeffler.com/en/",
    //         startDate: "2022-07-25",
    //         title: "Data Engineer",
    //         description: "I am part of a small team that supports region americas and includes Data Analysts, Data Scientists, and Data Engineers. Even thought we are a smaller team, our work is at the heart of many of the leading edge projects and digitalization initiatives in the company. In my Data Engineer role, I have had an opportunity to learn and leverage cloud resources, manage big data, write \"severless\" functions, write CI/CD pipelines, develop Data Visualizations, and productionize solutions our data scientists have developed.",
    //         accomlishments: [
    //             {
    //                 title: "Component Visual Inspection Process",
    //                 description:"Productionized an AI Image inspection application",
    //                 results:"It's great"
    //             }
    //         ],
    //         skills: [
    //             {id:"flask",use:"Created apis for AI"},
    //             {id:"jenkins",use:"Created CI/CD"}
    //         ]

    //     },
    //     {
    //         company: "Schaeffler",
    //         companyURL: "https://www.schaeffler.com/en/",
    //         startDate: "2022-07-25",
    //         title: "Data Engineer",
    //         description: "I am part of a small team that supports region americas and includes Data Analysts, Data Scientists, and Data Engineers. Even thought we are a smaller team, our work is at the heart of many of the leading edge projects and digitalization initiatives in the company. In my Data Engineer role, I have had an opportunity to learn and leverage cloud resources, manage big data, write \"severless\" functions, write CI/CD pipelines, develop Data Visualizations, and productionize solutions our data scientists have developed.",
    //         accomlishments: [
    //             {
    //                 title: "Component Visual Inspection Process",
    //                 description:"Productionized an AI Image inspection application",
    //                 results:"It's great"
    //             }
    //         ],
    //         skills: [
    //             {id:"flask",use:"Created apis for AI"},
    //             {id:"jenkins",use:"Created CI/CD"}
    //         ]
    //     }
    // ]
    // let skills = {
    //     flask: {url:"http://www.flask.com", description: "Python Flask"},
    //     jenkins: {url:"http://www.jenkins.com", description: "Jenkins"}
    // }
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
    {#each roles as role}
        <Role role={role} skills={skills}/>
    {/each}
</section>