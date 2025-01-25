import type { INodeProperties } from 'n8n-workflow';

export const bookOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['book'],
			},
		},
		options: [
			{
				name: 'Get Book By ID',
				value: 'getBookById',
				action: 'Get a book by id',
			},
			{
				name: 'Get Book(s) By Author ID',
				value: 'getBooksByAuthorId',
				action: 'Get books by author id',
			},
			{
				name: 'Get Book(s) By List ID',
				value: 'getBooksByListId',
				action: 'Get books by list id',
			},
			{
				name: 'Get Book(s) By Status And User ID',
				value: 'getBooksByStatusAndUserId',
				action: 'Get books by status and user id',
			},
			{
				name: 'Search For Books',
				value: 'search',
				action: 'Search for books',
			},
		],
		default: 'getBookById',
	},
];

export const bookFields: INodeProperties[] = [
    /////////////////
    // getBookById //
    /////////////////
    {
		displayName: 'Book ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['book'],
                operation: ['getBookById'],
			},
		},
	},
	////////////////////////
    // getBooksByAuthorId //
    ////////////////////////
    {
		displayName: 'Author ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['book'],
                operation: ['getBooksByAuthorId'],
			},
		},
	},
	//////////////////////
    // getBooksByListId //
    //////////////////////
    {
		displayName: 'List ID',
		name: 'list_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['book'],
                operation: ['getBooksByListId'],
			},
		},
	},
	///////////////////////////////
    // getBooksByStatusAndUserId //
    ///////////////////////////////
	{
		displayName: 'Status',
		name: 'status_id',
		type: 'options',
		required: true,
		options: [
			{
				name: 'Want to Read',
				value: '1',
			},
			{
				name: 'Currently Reading',
				value: '2',
			},
			{
				name: 'Read',
				value: '3',
			},
			{
				name: 'Did Not Finish',
				value: '5',
			}
		],
		default: '1',
		displayOptions: {
			show: {
				resource: ['book'],
				operation: ['getBooksByStatusAndUserId'],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'user_Id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['book'],
                operation: ['getBooksByStatusAndUserId'],
			},
		},
	},
];