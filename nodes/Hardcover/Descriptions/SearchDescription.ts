import type { INodeProperties } from 'n8n-workflow';

export const searchOperations: INodeProperties[] = [
    {
        displayName: 'Query Type',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
			show: {
				resource: ['search'],
			},
		},
        options: [
			{ name: 'Author', value: 'author' },
			{ name: 'Book', value: 'book' },
            { name: 'Character', value: 'character' },
			{ name: 'List', value: 'list' },
            { name: 'Prompt', value: 'prompt' },
			{ name: 'Publisher', value: 'publisher' },
            { name: 'Series', value: 'series' },
            { name: 'User', value: 'user' },
        ],
        default: 'book',
    },
];

export const searchFields: INodeProperties[] = [
    {
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
                resource: ['search'],
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
				resource: ['search'],
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