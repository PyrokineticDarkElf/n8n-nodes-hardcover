import type { INodeProperties } from 'n8n-workflow';

export const seriesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['series'],
			},
		},
		options: [
			{
				name: 'Get Series By ID',
				value: 'getSeriesById',
				action: 'Get a series by id',
			},
			{
				name: 'Get Series By Author ID',
				value: 'getSeriesByAuthorId',
				action: 'Get a series by author id',
			},
			{
				name: 'Search For Series',
				value: 'search',
				action: 'Search for series',
			},
		],
		default: 'getSeriesById',
	},
];

export const seriesFields: INodeProperties[] = [
    ///////////////////
    // getSeriesById //
    ///////////////////
    {
		displayName: 'Series ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['series'],
                operation: ['getSeriesById'],
			},
		},
	},
	/////////////////////////
    // getSeriesByAuthorId //
    /////////////////////////
    {
		displayName: 'Author ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['series'],
                operation: ['getSeriesByAuthorId'],
			},
		},
	}
];