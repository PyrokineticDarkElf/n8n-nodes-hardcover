import type { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties[] = [
    {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
            { name: 'User', value: 'user' },
			{ name: 'List', value: 'list' },
			{ name: 'Lists', value: 'lists' },
            { name: 'Book', value: 'book' },
			{ name: 'Books', value: 'books' },
			{ name: 'Edition', value: 'edition' },
			{ name: 'Editions', value: 'editions' },
			{ name: 'Author', value: 'author' },
			{ name: 'Character', value: 'character' },
			{ name: 'Prompt', value: 'prompt' },
			{ name: 'Publisher', value: 'publisher' },
			{ name: 'Series', value: 'series' },
        ],
        default: 'user',
    },
];

export const searchQueryOptions: INodeProperties[] = [
	{
		displayName: 'Search',
		name: 'search',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				queryBy: ['search'],
			},
		},
	},
];

export const userQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'Username', value: 'username' },
			{ name: 'User ID', value: 'userId' },
			{ name: 'Search', value: 'search' },
		],
		default: 'username',
		displayOptions: {
			show: {
				resource: ['user'],
			},
		},
	}
];

export const listQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'ID', value: 'id' },
			{ name: 'Search', value: 'search' },
		],
		default: 'id',
		displayOptions: {
			show: { 
				resource: ['list'],
			},
		},
	}
];

export const listsQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'Username', value: 'username' },
			{ name: 'User ID', value: 'userId' },
			{ name: 'Name', value: 'name' },
		],
		default: 'userId',
		displayOptions: {
			show: {
				resource: ['lists'],
			},
		},
	}
];

export const bookQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'ID', value: 'id' },
			{ name: 'Search', value: 'search' },
		],
		default: 'id',
		displayOptions: {
			show: {
				resource: ['book'],
			},
		},
	}
];

export const booksQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'Title', value: 'title' },
			{ name: 'Author Name', value: 'authorName' },
			{ name: 'Author ID', value: 'authorId' },
			{ name: 'Status', value: 'status' },
		],
		default: 'title',
		displayOptions: {
			show: {
				resource: ['books'],
			},
		},
	}
];

export const editionQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'ID', value: 'id' },
		],
		default: 'id',
		displayOptions: {
			show: {
				resource: ['edition'],
			},
		},
	}
];

export const editionsQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'Title', value: 'title' },
			{ name: 'Author Name', value: 'authorName' },
			{ name: 'Author ID', value: 'authorId' },
		],
		default: 'title',
		displayOptions: {
			show: {
				resource: ['editions'],
			},
		},
	}
];

export const authorQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'Name', value: 'name' },
			{ name: 'ID', value: 'id' },
			{ name: 'Search', value: 'search' },
		],
		default: 'id',
		displayOptions: {
			show: {
				resource: ['author'],
			},
		},
	}
];

export const characterQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'Name', value: 'name' },
			{ name: 'Search', value: 'search' },
		],
		default: 'id',
		displayOptions: {
			show: {
				resource: ['character'],
			},
		},
	}
];

export const promptQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'ID', value: 'id' },
			{ name: 'Title', value: 'title' },
			{ name: 'Name', value: 'name' },
			{ name: 'Search', value: 'search' },
		],
		default: 'id',
		displayOptions: {
			show: {
				resource: ['prompt'],
			},
		},
	}
];

export const publisherQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'ID', value: 'id' },
			{ name: 'Name', value: 'name' },
			{ name: 'Search', value: 'search' },
		],
		default: 'id',
		displayOptions: {
			show: {
				resource: ['publisher'],
			},
		},
	}
];

export const seriesQueryOptions: INodeProperties[] = [
	{
		displayName: 'Query By',
		name: 'queryBy',
		type: 'options',
		options: [
			{ name: 'ID', value: 'id' },
			{ name: 'Title', value: 'title' },
			{ name: 'Name', value: 'name' },
			{ name: 'Author Name', value: 'authorName' },
			{ name: 'Author ID', value: 'authorId' },
			{ name: 'Search', value: 'search' },
		],
		default: 'id',
		displayOptions: {
			show: {
				resource: ['series'],
			},
		},
	}
];


export const queryFields: INodeProperties[] = [
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		placeholder: 'Orange_Tsunami',
		default: '',
		displayOptions: {
			show: {
				resource: ['user', 'lists'],
				queryBy: ['username'],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'number',
		required: true,
		default: '',
		placeholder: '12345',
		displayOptions: {
			show: {
				resource: ['user', 'lists', 'books'],
				queryBy: ['userId', 'status'],
			},
		},
	},
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['user', 'book', 'books', 'edition', 'editions', 'author', 'prompt', 'publisher', 'series', 'list'],
				queryBy: ['id', 'authorId'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['book', 'books', 'editions', 'prompt', 'series'],
				queryBy: ['title'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['books', 'editions', 'author', 'character', 'prompt', 'publisher', 'series', 'list'],
				queryBy: ['name', 'authorName'],
			},
		},
	},
	{
		displayName: 'String',
		name: 'string',
		type: 'string',
		required: true,
		placeholder: 'Book title, Author name, Publisher name, etc.',
		default: '',
		displayOptions: {
			show: {
				resource: ['user', 'list', 'book', 'author', 'character', 'prompt', 'publisher', 'series'],
				queryBy: ['search'],
			},
		},
	},
];

export const statusFields: INodeProperties[] = [
	{
		displayName: 'Status',
		name: 'status',
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
				resource: ['books'],
				queryBy: ['status'],
			},
		},
	},
];

//export const additionalFields: INodeProperties[] = [
//	{
//		displayName: 'Status Fields',
//		name: 'statusFields',
//		type: 'collection',
//		placeholder: 'Add Field',
//		default: {},
//		displayOptions: {
//			show: {
//				resource: ['books'],
//				queryBy: ['status'],
//			},
//		},
//		options: [
//			{
//				displayName: 'User Id',
//				name: 'userId',
//				type: 'number',
//				required: true,
//				default: '',
//			},
//			{
//				displayName: 'Username',
//				name: 'username',
//				type: 'string',
//				required: true,
//				default: '',
//			},
//		],
//	},
//	{
//		displayName: 'Search Fields',
//		name: 'searchFields',
//		type: 'collection',
//		placeholder: 'Add Field',
//		default: {},
//		displayOptions: {
//			show: {
//				operation: ['search'],
//			},
//		},
//		options: [
//			{
//				displayName: 'Per Page',
//				name: 'perPage',
//				type: 'number',
//				default: 25,
//				placeholder: '25',
//			},
//			{
//				displayName: 'Page',
//				name: 'page',
//				type: 'number',
//				default: 1,
//				placeholder: '1',
//			},
//		],
//	}
//];
