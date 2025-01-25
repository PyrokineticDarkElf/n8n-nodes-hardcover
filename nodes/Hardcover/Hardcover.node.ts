import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { 
	executeResourceOperation,
	executeSearchOperation,
	
} from './GenericFunctions';

import { resources } from './Descriptions/ResourceDescription';

import { userFields, userOperations } from './Descriptions/UserDescription';
import { listFields, listOperations } from './Descriptions/ListDescription';
import { bookFields, bookOperations } from './Descriptions/BookDescription';
import { editionFields, editionOperations } from './Descriptions/EditionDescription';
import { authorFields, authorOperations } from './Descriptions/AuthorDescription';
import { publisherFields, publisherOperations } from './Descriptions/PublisherDescription';
import { seriesFields, seriesOperations } from './Descriptions/SeriesDescription';

import { searchFields } from './Descriptions/SearchDescription';

export class Hardcover implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Hardcover',
		name: 'hardcover',
			icon: 'file:hardcover.svg',
			group: ['transform'],
			version: 1,
			description: 'Consume Hardcover API',
			defaults: {
				name: 'Hardcover',
			},
			inputs: ['main'],
			outputs: ['main'],
			credentials: [
				{
					name: 'hardcoverApi',
					required: true,
				},
			],
			properties: [
				// Resources
				...resources,

				// Users
				...userOperations,
				...userFields,
				// Lists
				...listOperations,
				...listFields,
				// Books
				...bookOperations,
				...bookFields,
				// Editions
				...editionOperations,
				...editionFields,
				// Authors
				...authorOperations,
				...authorFields,
				// Publishers
				...publisherOperations,
				...publisherFields,
				// Series
				...seriesOperations,
				...seriesFields,

				// Search
				...searchFields,
			],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
	
		for (let i = 0; i < items.length; i++) {
			const operation = this.getNodeParameter('operation', i) as string;
	
			try {
				let result;
				if (operation === 'search') {
					result = await executeSearchOperation.call(this, i);
				} else {
					result = await executeResourceOperation.call(this, operation, i);
				}
				returnData.push({ json: result });
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: error.message } });
					continue;
				}
				throw error;
			}
		}
	
		return [returnData];
	}
}