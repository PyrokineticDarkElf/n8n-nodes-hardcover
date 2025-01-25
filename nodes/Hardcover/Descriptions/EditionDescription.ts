import type { INodeProperties } from 'n8n-workflow';

export const editionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['edition'],
			},
		},
		options: [
			{
				name: 'Get Edition By ID',
				value: 'getEditionById',
				description: 'Get an edition by ID',
				action: 'Get an edition by ID',
			},
			{
				name: 'Get Edition(s) By Book ID',
				value: 'getEditionsByBookId',
				description: 'Get edition(s) by book ID',
				action: 'Get edition(s) by book ID',
			},
		],
		default: 'getEditionById',
	},
];

export const editionFields: INodeProperties[] = [
    ////////////////////
    // getEditionById //
    ////////////////////
    {
		displayName: 'Edition Id',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['edition'],
                operation: ['getEditionById'],
			},
		},
	},
    /////////////////////////
    // getEditionsByBookId //
    /////////////////////////
    {
		displayName: 'Book Id',
		name: 'book_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['edition'],
                operation: ['getEditionsByBookId'],
			},
		},
	}
];