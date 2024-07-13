import { c as create_ssr_component, e as escape, b as add_attribute, f as each, v as validate_component } from "../../../chunks/index.js";
const Role_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-158qege>a.svelte-158qege{color:green}h3.svelte-158qege.svelte-158qege,h4.svelte-158qege.svelte-158qege{margin:0}ul.svelte-158qege li.svelte-158qege{list-style-type:none}p.svelte-158qege.svelte-158qege{margin:2rem}.hide.svelte-158qege.svelte-158qege{display:none}.hide.expand.svelte-158qege.svelte-158qege{display:block}.expand.svelte-158qege.svelte-158qege{display:none}.arrow.svelte-158qege.svelte-158qege{font-size:1rem}button.svelte-158qege.svelte-158qege{border-radius:5px;color:var(--primary);border:white dotted 3px;background-color:black;padding:0px;padding-left:10px;padding-right:10px;margin:1rem;width:auto}button.svelte-158qege.svelte-158qege:hover{border:solid 3px var(--primary-hover)}",
  map: null
};
const Role = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { role } = $$props;
  let { skills: skills2 } = $$props;
  if (role.endDate == null) {
    role.endDate = "Present";
  }
  let hideClass = "hide";
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.skills === void 0 && $$bindings.skills && skills2 !== void 0)
    $$bindings.skills(skills2);
  $$result.css.add(css);
  return `<section><div class="main-header">${role.companyURL == null ? `<h3 class="svelte-158qege">${escape(role.company)} - ${escape(role.title)}</h3>` : `<h3 class="svelte-158qege"><a${add_attribute("href", role.companyURL, 0)} class="svelte-158qege">${escape(role.company)}</a> - ${escape(role.title)}</h3>`}</div>
       
    <i>${escape(role.startDate)} to ${escape(role.endDate)}</i>
    <button class="${escape(hideClass, true) + " expand arrow svelte-158qege"}">↓ more</button>
    <div class="${escape(hideClass, true) + " animate blur svelte-158qege"}"><p class="svelte-158qege">${escape(role.description)}</p>
        <h4 class="svelte-158qege">Accomplishments</h4>
        <ul class="svelte-158qege">${each(role.accomlishments, (accomplishment) => {
    return `<li class="svelte-158qege"><h5>${escape(accomplishment.title)}</h5><section>${escape(accomplishment.description)}</section></li>`;
  })}</ul>
        <h4 class="svelte-158qege">Technologies/Skills Used</h4>
        <ul class="svelte-158qege">${each(role.skills, (roleSkill) => {
    return `${skills2[roleSkill.id].url == null ? `<li class="svelte-158qege">${escape(skills2[roleSkill.id].description)}</li>` : `<li class="svelte-158qege"><a${add_attribute("href", skills2[roleSkill.id].url, 0)}>${escape(skills2[roleSkill.id].description)}</a></li>
                    <p class="svelte-158qege">${escape(roleSkill.use)}</p>`}`;
  })}</ul></div>
    <button class="${escape(hideClass, true) + " arrow svelte-158qege"}">↑ less</button></section>`;
});
const flask = {
  url: "https://flask.palletsprojects.com/en/2.2.x/",
  description: "Python Flask"
};
const fastapi = {
  url: "https://fastapi.tiangolo.com/",
  description: "Python Fast API"
};
const jenkins = {
  url: "http://www.jenkins.io",
  description: "Jenkins"
};
const gRPC = {
  url: "https://grpc.io/",
  description: "gRPC"
};
const datafactory = {
  url: "https://azure.microsoft.com/en-us/products/data-factory/?ef_id=_k_CjwKCAjwr_CnBhA0EiwAci5silzJoTQT9RIu-2J1UWbVnmhA9hrcy-HKBjlpUXUC806zzUHeaB6FpBoCDT8QAvD_BwE_k_&OCID=AIDcmm5edswduu_SEM__k_CjwKCAjwr_CnBhA0EiwAci5silzJoTQT9RIu-2J1UWbVnmhA9hrcy-HKBjlpUXUC806zzUHeaB6FpBoCDT8QAvD_BwE_k_&gad=1&gclid=CjwKCAjwr_CnBhA0EiwAci5silzJoTQT9RIu-2J1UWbVnmhA9hrcy-HKBjlpUXUC806zzUHeaB6FpBoCDT8QAvD_BwE",
  description: "Azure Data Factory"
};
const dataflows = {
  url: "https://azure.microsoft.com/en-us/products/data-factory/?ef_id=_k_CjwKCAjwr_CnBhA0EiwAci5silzJoTQT9RIu-2J1UWbVnmhA9hrcy-HKBjlpUXUC806zzUHeaB6FpBoCDT8QAvD_BwE_k_&OCID=AIDcmm5edswduu_SEM__k_CjwKCAjwr_CnBhA0EiwAci5silzJoTQT9RIu-2J1UWbVnmhA9hrcy-HKBjlpUXUC806zzUHeaB6FpBoCDT8QAvD_BwE_k_&gad=1&gclid=CjwKCAjwr_CnBhA0EiwAci5silzJoTQT9RIu-2J1UWbVnmhA9hrcy-HKBjlpUXUC806zzUHeaB6FpBoCDT8QAvD_BwE",
  description: "Azure Data Factory"
};
const skills = {
  flask,
  fastapi,
  jenkins,
  gRPC,
  datafactory,
  dataflows
};
const roles = [
  {
    company: "Schaeffler",
    companyURL: "https://www.schaeffler.com/en/",
    startDate: "2022-07-25",
    title: "Data Engineer",
    description: 'I am part of a small team that supports region americas and includes Data Analysts, Data Scientists, and Data Engineers. Even thought we are a smaller team, our work is at the heart of many of the leading edge projects and digitalization initiatives in the company. In my Data Engineer role, I have had an opportunity to learn and leverage cloud resources, manage big data, write "severless" functions, write CI/CD pipelines, develop Data Visualizations, and productionize solutions our data scientists have developed.',
    accomlishments: [
      {
        title: "Component Visual Inspection Process Productionization and Improvement",
        description: "Re-architected and refactored an existing visual inspection application to improve performance and maintainability including developing the CI/CD pipeline for automated deployments.",
        results: "New potential revenue streams opened up because increase inspection frequency was now possible."
      }
    ],
    skills: [
      {
        id: "fastapi",
        use: "Leveraged Fast API to create asynchonous API's for batching inference and to wrap algorithms developed by the data scientists."
      },
      {
        id: "gRPC",
        use: "Leveraged gRPC to communicate between the API containers and the TensorFlow serving container."
      },
      {
        id: "jenkins",
        use: "Created CI/CD tailored to our specific architecture requirements."
      }
    ]
  },
  {
    company: "GKN",
    companyURL: "https://www.gknautomotive.com/",
    startDate: "2019-12-18",
    endDate: "2022-07-22",
    title: "Product Development Engineer",
    description: "I worked with a cross-functional team including Design Engineers, Systems Engineers, Manufacturing Engineers, Quality Engineers, and project managers to develop product improvements to reduce costs and improve quality. I also acted as the subject matter expert for the hydraulically actuated clutches, including being the primary owner of the EOL test processes.",
    accomlishments: [
      {
        title: "Improve the EOL failure rate",
        description: "Productionized an AI Image inspection application",
        results: "It's great"
      }
    ],
    skills: [
      {
        id: "flask",
        use: "Created apis for AI"
      },
      {
        id: "jenkins",
        use: "Created CI/CD"
      }
    ]
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>David D. Smit</h1>
<section><h2>Overview</h2>
    <p>Accomplished engineer with 9+ years of experience in data engineering, software engineering, 
        product development, and manufacturing engineering.  I have produced data driven results through 
        the application of various data analytics and engineering tools in conjunction with Six Sigma 
        methodologies.  I have extensive experience with process automation, new product development, vendor 
        relationship management, root cause analysis, and corrective actions. I am highly effective in a fast 
        paced, continuous improvement environment.
    </p>
    <h2>Career History</h2>
    ${each(roles, (role) => {
    return `${validate_component(Role, "Role").$$render($$result, { role, skills }, {}, {})}`;
  })}</section>`;
});
export {
  Page as default
};
