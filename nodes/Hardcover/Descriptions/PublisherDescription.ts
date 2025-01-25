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
				description: 'Get a publisher by ID',
				action: 'Get a publisher by ID',
			},
			{
				name: 'Get Publisher(s) By Name',
				value: 'getPublishersByName',
				description: 'Get publisher(s) by name',
				action: 'Get publisher(s) by name',
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
		displayName: 'Publisher Id',
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