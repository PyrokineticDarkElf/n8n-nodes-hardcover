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
				description: 'Get a user by ID',
				action: 'Get a user by ID',
			},
			{
				name: 'Get User By Username',
				value: 'getUserByUsername',
				description: 'Get a user by Username',
				action: 'Get a user by Username',
			}
		],
		default: 'getUserById',
	},
];

export const userFields: INodeProperties[] = [
    /////////////////
    // getUserById //
    /////////////////
    {
		displayName: 'User Id',
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