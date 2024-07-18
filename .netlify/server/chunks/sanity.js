import { createClient } from "@sanity/client";
import groq from "groq";
const PUBLIC_SANITY_PROJECT_ID = "9dnukgxn";
const PUBLIC_SANITY_DATASET = "production";
const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false,
  // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20"
  // date of setup
});
async function getHistory() {
  return await client.fetch(
    groq`*[_type == "role"]
		{
			...,
			'accomplishments': accomplishments[]->{
				...,
				'skillsUsed': skillsUsed[]->{
					...
				}
			}|order(order asc),
			'companyAt': companyAt->{
				...
			}
		}| order(startDate desc)`
  );
}
async function getReadList() {
  return await client.fetch(
    groq`*[_type == "readItem"]
		{
			...,
			'tags': tags-> {
				...
			}
		}| order(status, _createdAt)`
  );
}
export {
  getReadList as a,
  getHistory as g
};
