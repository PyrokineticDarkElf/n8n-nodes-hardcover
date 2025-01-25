import type { INodeProperties } from 'n8n-workflow';

export const authorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['author'],
			},
		},
		options: [
            {
				name: 'Get Author By ID',
				value: 'getAuthorById',
				action: 'Get an author by id',
			},
            {
				name: 'Get Author(s) By Name',
				value: 'getAuthorsByName',
				action: 'Get authors by name',
			},
			{
				name: 'Search For Authors',
				value: 'search',
				action: 'Search for authors',
			},
		],
		default: 'getAuthorById',
	},
];

export const authorFields: INodeProperties[] = [
    ///////////////////
    // getAuthorById //
    ///////////////////
    {
		displayName: 'Author ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['author'],
                operation: ['getAuthorById'],
			},
		},
	},
    //////////////////////
    // getAuthorsByName //
    //////////////////////
    {
		displayName: 'Author Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['author'],
                operation: ['getAuthorsByName'],
			},
		},
	},
];