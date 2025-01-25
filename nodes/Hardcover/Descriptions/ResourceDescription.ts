import type { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties[] = [
    {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
            { name: 'Search', value: 'search' },
            { name: 'User', value: 'user' },
			{ name: 'List', value: 'list' },
			{ name: 'Book', value: 'book' },
			{ name: 'Edition', value: 'edition' },
			{ name: 'Author', value: 'author' },
			{ name: 'Publisher', value: 'publisher' },
            { name: 'Series', value: 'series' },
        ],
        default: 'user',
    },
];