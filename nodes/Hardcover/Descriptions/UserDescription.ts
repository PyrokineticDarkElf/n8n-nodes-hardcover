import type { INodeProperties } from 'n8n-workflow';

export const userOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['user'],
			},
		},
		options: [
			{
				name: 'Get User By ID',
				value: 'getUserById',
				action: 'Get a user by id',
			},
			{
				name: 'Get User By Username',
				value: 'getUserByUsername',
				action: 'Get a user by username',
			},
			{
				name: 'Search For Users',
				value: 'search',
				action: 'Search for users',
			},
		],
		default: 'getUserById',
	},
];

export const userFields: INodeProperties[] = [
    /////////////////
    // getUserById //
    /////////////////
    {
		displayName: 'User ID',
		name: 'userId',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
                operation: ['getUserById'],
			},
		},
	},
	///////////////////////
    // getUserByUsername //
    ///////////////////////
    {
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
                operation: ['getUserByUsername'],
			},
		},
	}
];