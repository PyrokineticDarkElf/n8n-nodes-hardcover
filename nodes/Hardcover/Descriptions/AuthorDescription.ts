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
				description: 'Get an author by ID',
				action: 'Get an author by ID',
			},
            {
				name: 'Get Author(s) By Name',
				value: 'getAuthorsByName',
				description: 'Get author(s) by name',
				action: 'Get author(s) by name',
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
		displayName: 'Author Id',
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