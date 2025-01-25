import type { INodeProperties } from 'n8n-workflow';

export const searchFields: INodeProperties[] = [
    {
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
                operation: ['search'],
			},
		},
	},
    {
		displayName: 'Advanced',
		name: 'advanced',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				operation: ['search'],
			},
		},
		options: [
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: 25,
				placeholder: '25',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				placeholder: '1',
			},
		],
	}
];