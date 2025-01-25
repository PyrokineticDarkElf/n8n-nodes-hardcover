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
				action: 'Get a list by id',
			},
			{
				name: 'Get List(s) By List Name',
				value: 'getListsByListName',
				action: 'Get lists by list name',
			},
			{
				name: 'Get List(s) By User ID',
				value: 'getListsByUserId',
				action: 'Get lists by user id',
			},
			{
				name: 'Get List(s) By Username',
				value: 'getListsByUsername',
				action: 'Get lists by username',
			},
			{
				name: 'Search For Lists',
				value: 'search',
				action: 'Search for lists',
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
		displayName: 'List ID',
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
		displayName: 'User ID',
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