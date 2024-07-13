export function inDescription(skill, accomplishmentDescription) {
    if (typeof accomplishmentDescription == 'string') {
        return accomplishmentDescription.toLowerCase().includes(skill.toLowerCase())
    }
    return this.toLowerCase().includes(skill.toLowerCase())
}
export function createLink (skillName, skillData){
    return `<a href="${skillData.url}" title="${skillData.description}">${skillName}</a>`
}