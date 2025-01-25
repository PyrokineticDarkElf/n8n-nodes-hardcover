import type { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties[] = [
    {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
			{ name: 'Author', value: 'author' },
			{ name: 'Book', value: 'book' },
			{ name: 'Edition', value: 'edition' },
			{ name: 'List', value: 'list' },
			{ name: 'Publisher', value: 'publisher' },
            { name: 'Series', value: 'series' },
            { name: 'User', value: 'user' },
        ],
        default: 'user',
    },
];