import { e as error } from "../../../../chunks/index.js";
const roles = [
  {
    company: "Schaeffler",
    companyURL: "https://www.schaeffler.com/en/",
    startDate: "2022-07-25",
    title: "Data Engineer",
    description: "I'm part of a forward thinking IT and Digitalization team that is focused on delivering innovative, customer centered solutions. I work on specific business problems in addition to creating valuable data products.",
    accomlishments: [
      {
        title: "SAP BW ETL Process Migration",
        description: "Developed tooling in Python using the Typer, Rich, and the Azure Data Factory SDK, and Requests to extract the Denodo VQL database definition via the github API to automate the MDX query generation, column mapping JSON, and data source validation.",
        results: "Completed migration of dozens of views to the new system with near 0 disruption to production processes, and now have a toolset that will continue to provide benefits in the future."
      },
      {
        title: "Component Visual Inspection Process Productionization and Improvement",
        description: "Re-architected an existing visual inspection application to leverage TensorFlow Serving via gRPC to batch process requests. I also refactored the application in Python to FastAPI to use azync io to better utilize pre and post processing workers, and to improve maintainability. On top of the application code and architecture improvements, I also created a CI/CD pipeline using Jenkins to allow automatic deployments to the productive environment when changes are merged to the main branch in github.",
        results: "New potential revenue streams opened up because increase inspection frequency was now possible."
      },
      {
        title: "Supported migration to automated systems as part of a Tableau to Power BI Migration",
        description: "We migrated dozens of manual and on-prem/local processes to the cloud using resources like Azure Data Factory, Data Flows, Azure SQL server, and Azure Data Lake. We then supported the migration of the original Tableau reports to Power BI.",
        results: "Reduced toil hours by 300+ hours a year over all of the processes we automated, freeing up the people manually pulling the data to focus more on devleoping insights to the data."
      }
    ],
    skills: [
      {
        id: "adf",
        use: "Developed modular and parameterized Azure Data Factory processes adaptable to multiple use cases."
      },
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
  },
  {
    company: "GKN",
    companyURL: "https://www.gknautomotive.com/",
    startDate: "2019-12-18",
    endDate: "2022-07-22",
    title: "Advanced Manufacturing Engineer",
    description: "I was responsible for working with equipment suppliers to design, validate, and implement new equipment for either added capacity requirements or new product introductions. I was also responsible for developing the initial quality documentation (PFMEA, Control Plans, Work Instructions) as well as working with the AQE to get PPAP approval from our automotive customers.",
    accomlishments: [
      {
        title: "Implemented (2) Assembly Lines From Initial Concept Through PPAP",
        description: "Worked with ATC to implement (2) new assembly lines that included all lessons learned and best practices developed on early iterations of the line.",
        results: "Increased capacity by over 50%, and had one of the lowest Not Right First Time Through rates of a new assembly line."
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
  },
  {
    company: "John Deere",
    companyURL: "https://www.gknautomotive.com/",
    startDate: "2019-12-18",
    endDate: "2022-07-22",
    title: "Manufacturing Engineer",
    description: "",
    accomlishments: [
      {
        title: "Implemented (2) Assembly Lines From Initial Concept Through PPAP",
        description: "Worked with ATC to implement (2) new assembly lines that included all lessons learned and best practices developed on early iterations of the line.",
        results: "Increased capacity by over 50%, and had one of the lowest Not Right First Time Through rates of a new assembly line."
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
function inDescription(skill, accomplishmentDescription) {
  if (typeof accomplishmentDescription == "string") {
    return accomplishmentDescription.toLowerCase().includes(skill.toLowerCase());
  }
  return this.toLowerCase().includes(skill.toLowerCase());
}
function load({ params }) {
  let accomplishmentsForSkill = [];
  roles.forEach((role) => {
    role.accomlishments.forEach((accomplishment) => {
      if (inDescription(params.slug, accomplishment.description)) {
        accomplishmentsForSkill.push({
          "role": role,
          "accomplishment": accomplishment
        });
      }
    });
  });
  if (accomplishmentsForSkill.length) {
    return {
      "accomplishments": accomplishmentsForSkill,
      "skill": params.slug
    };
  }
  error(404, "Not found");
}
export {
  load
};
