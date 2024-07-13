import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { Image, ImageAsset, Slug } from '@sanity/types';

import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getHistory(): Promise<Role> {
	return await client.fetch(
		groq`*[_type == "role"]
		{
			...,
			'accomplishments': accomplishments[]->{
				...,
				'skillsUsed': skillsUsed[]->{
					...
				}
			},
			'companyAt': companyAt->{
				...
			}
		}| order(startDate desc)`
	)
}


export interface Role {
	_id: string;
	_type: 'role';
	name: string;
	startDate?: string;
	endDate?: string;
	description: string;
	accomplishments?: Array<{ 
	  _type: 'reference'; 
	  _ref: string; 
	}>;
  }

