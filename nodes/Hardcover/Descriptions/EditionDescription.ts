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
				action: 'Get an edition by id',
			},
			{
				name: 'Get Edition(s) By Book ID',
				value: 'getEditionsByBookId',
				action: 'Get editions by book id',
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
		displayName: 'Edition ID',
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
		displayName: 'Book ID',
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