import type { INodeProperties } from 'n8n-workflow';

export const listOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['list'],
			},
		},
		options: [
			{
				name: 'Get List By ID',
				value: 'getListById',
				description: 'Get a list by ID',
				action: 'Get a list by ID',
			},
			{
				name: 'Get List(s) By User ID',
				value: 'getListsByUserId',
				description: 'Get list(s) by user ID',
				action: 'Get list(s) by user ID',
			},
			{
				name: 'Get List(s) By Username',
				value: 'getListsByUsername',
				description: 'Get list(s) by username',
				action: 'Get list(s) by username',
			},
			{
				name: 'Get List(s) By List Name',
				value: 'getListsByListName',
				description: 'Get list(s) by list ame',
				action: 'Get list(s) by list name',
			},
		],
		default: 'getListById',
	},
];

export const listFields: INodeProperties[] = [
    /////////////////
    // getListById //
    /////////////////
    {
		displayName: 'List Id',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['getListById'],
			},
		},
	},
	//////////////////////
    // getListsByUserId //
    //////////////////////
    {
		displayName: 'User Id',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['getListsByUserId'],
			},
		},
	},
	////////////////////////
    // getListsByUsername //
    ////////////////////////
    {
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['getListsByUsername'],
			},
		},
	},
	////////////////////////
    // getListsByListName //
    ////////////////////////
    {
		displayName: 'List Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['list'],
				operation: ['getListsByListName'],
			},
		},
	},
];