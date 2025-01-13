import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject
} from 'n8n-workflow';

import { NodeConnectionType } from 'n8n-workflow';

import {
	resources,
	
	userQueryOptions,
	listQueryOptions,
	listsQueryOptions,
	bookQueryOptions,
	booksQueryOptions,
	editionQueryOptions,
	editionsQueryOptions,
	authorQueryOptions,
	characterQueryOptions,
	promptQueryOptions,
	publisherQueryOptions,
	seriesQueryOptions,
	
	searchQueryOptions,
	queryFields,
	statusFields,
//	additionalFields
} from './UserDescription';

import { makeGraphQLRequest, queries } from './GenericFunctions';

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
			inputs: [NodeConnectionType.Main],
			outputs: [NodeConnectionType.Main],
			credentials: [
				{
					name: 'hardcoverApi',
					required: true,
				},
			],
			properties: [
				...resources,
				
				...userQueryOptions,
				...listQueryOptions,
				...listsQueryOptions,
				...bookQueryOptions,
				...booksQueryOptions,
				...editionQueryOptions,
				...editionsQueryOptions,
				...authorQueryOptions,
				...characterQueryOptions,
				...promptQueryOptions,
				...publisherQueryOptions,
				...seriesQueryOptions,
				
				...searchQueryOptions,
				...queryFields,
				...statusFields,
//				...additionalFields,
			],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Handle data coming from previous nodes
		const items = this.getInputData();
		let responseData;
		const returnData = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const queryBy = this.getNodeParameter('queryBy', 0) as string;

		for (let i = 0; i < items.length; i++) {

			// Search
			if (queryBy === 'search') {

				const query = this.getNodeParameter('string', i) as string;
				const resource = this.getNodeParameter('resource', i) as string;
				const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
				
				const variables = {
					query,
					queryBy: resource,
					perPage: (additionalFields.perPage as number) || 25, // Default matches API docs
					page: (additionalFields.page as number) || 1,        // Default matches API docs
				};

				responseData = await makeGraphQLRequest.call(this, 
					queries.search,
					variables
				);
				returnData.push(responseData.data);

			} else {

				// Query User Resource
				if (resource === 'user') {
					if (queryBy === 'username') {
						const username = this.getNodeParameter('username', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getUserByUsername,
							{ username }
						);
						returnData.push(responseData.data)
					}
					if (queryBy === 'userId') {
						const userId = this.getNodeParameter('userId', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getUserById,
							{ userId }
						);
						returnData.push(responseData.data);
					}
				}

				if (resource === 'list') {
					if (queryBy === 'id') {
						const id = this.getNodeParameter('id', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getBooksByListId,
							{ id }
						);
						returnData.push(responseData.data);
					}
				}

				if (resource === 'lists') {
					if (queryBy === 'username') {
						const username = this.getNodeParameter('username', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getListsByUserName,
							{ username }
						);
						returnData.push(responseData.data);
					}
					if (queryBy === 'userId') {
						const userId = this.getNodeParameter('userId', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getListsByUserId,
							{ userId }
						);
						returnData.push(responseData.data);
					}
					if (queryBy === 'name') {
						const name = this.getNodeParameter('name', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getListsByListName,
							{ name }
						);
						returnData.push(responseData.data);
					}
				}

				if (resource === 'book') {
					if (queryBy === 'id') {
						const id = this.getNodeParameter('id', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getBookById,
							{ id }
						);
						returnData.push(responseData.data);
					}
				}

				if (resource === 'books') {
					if (queryBy === 'authorName') {
						const authorName = this.getNodeParameter('name', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getBooksByAuthorName,
							{ authorName }
						);
						returnData.push(responseData.data);
					}
					if (queryBy === 'authorId') {
						const authorId = this.getNodeParameter('id', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getBooksByAuthorId,
							{ authorId }
						);
						returnData.push(responseData.data);
					}
					if (queryBy === 'title') {
						const title = this.getNodeParameter('title', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getBooksByTitle,
							{ title }
						);
						returnData.push(responseData.data);
					}
					// Books by status
					if (queryBy === 'status') {
						const status = this.getNodeParameter('status', i) as number;
						const userId = this.getNodeParameter('userId', i) as number;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getBooksByStatusAndUserId,
							{ status, userId }
						);
						returnData.push(responseData.data);
					} 
				}

				if (resource === 'edition') {
					if (queryBy === 'id') {
						const id = this.getNodeParameter('id', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getEditionById,
							{ id }
						);
						returnData.push(responseData.data);
					}
				}

				if (resource === 'editions') {
					if (queryBy === 'title') {
						const title = this.getNodeParameter('title', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getEditionsByTitle,
							{ title }
						);
						returnData.push(responseData.data);
					} else if (queryBy === 'id') {
						const id = this.getNodeParameter('id', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getEditionsById,
							{ id }
						);
						returnData.push(responseData.data);
					}
				}

				if (resource === 'author') {
					if (queryBy === 'name') {
						const name = this.getNodeParameter('name', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getAuthorByName,
							{ name }
						);
						returnData.push(responseData.data);
					}
					if (queryBy === 'id') {
						const id = this.getNodeParameter('id', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getAuthorById,
							{ id }
						);
						returnData.push(responseData.data);
					}
				}

				if (resource === 'character') {
					if (queryBy === 'name') {
						const name = this.getNodeParameter('name', i) as string;
						responseData = await makeGraphQLRequest.call(this, 
							queries.getCharacterByName,
							{ name }
						);
						returnData.push(responseData.data);
					}
				}

				if (resource === 'prompt') {

				}

				if (resource === 'publisher') {

				}

				if (resource === 'series') {

				}
			
			}		
		}

        // Map data to n8n data structure
        return [this.helpers.returnJsonArray(returnData)];
    }
}