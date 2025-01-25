import type { INodeProperties } from 'n8n-workflow';

export const publisherOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['publisher'],
			},
		},
		options: [
			{
				name: 'Get Publisher By ID',
				value: 'getPublisherById',
				action: 'Get a publisher by id',
			},
			{
				name: 'Get Publisher(s) By Name',
				value: 'getPublishersByName',
				action: 'Get publishers by name',
			},
			{
				name: 'Search For Publishers',
				value: 'search',
				action: 'Search for publishers',
			},
		],
		default: 'getPublisherById',
	},
];

export const publisherFields: INodeProperties[] = [
    //////////////////////
    // getPublisherById //
    //////////////////////
    {
		displayName: 'Publisher ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['publisher'],
                operation: ['getPublisherById'],
			},
		},
	},
    /////////////////////////
    // getPublishersByName //
    /////////////////////////
    {
		displayName: 'Publisher Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['publisher'],
                operation: ['getPublishersByName'],
			},
		},
	}
];