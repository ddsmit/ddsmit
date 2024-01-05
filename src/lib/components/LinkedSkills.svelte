<script>
    export let accomplishmentDescription
    export let skills

    import { inDescription } from "./skills"
    import { createLink } from "./skills"

    let usedSkills = Object.keys(skills).filter(inDescription, accomplishmentDescription)
    Object.keys(skills).forEach(skill => {
        accomplishmentDescription = accomplishmentDescription.replace(skill,createLink(skill, skills[skill]))
    });

    let output = accomplishmentDescription
    let usedSkillsLinks = []
    usedSkills.forEach(skill => {
        usedSkillsLinks.push(createLink(skill,{"url":`/History/${skill}`,"description":`See other uses of ${skill}`}))
    })
    let usedSkillsOutput = usedSkillsLinks.join(' | ')

</script>
<p>
    {@html output}
</p>
<section>
    Skills Used: {@html usedSkillsOutput}
</section>
