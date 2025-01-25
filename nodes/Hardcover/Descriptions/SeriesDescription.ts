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
				description: 'Get a series by ID',
				action: 'Get a series by ID',
			},
			{
				name: 'Get Series By Author ID',
				value: 'getSeriesByAuthorId',
				description: 'Get a series by author ID',
				action: 'Get a series by author ID',
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
		displayName: 'Series Id',
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
		displayName: 'Author Id',
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