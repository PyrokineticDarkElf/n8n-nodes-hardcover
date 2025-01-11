import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	OptionsWithUri,
} from 'request';

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
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'User',
						value: 'user',
					},
				],
				default: 'user',
				noDataExpression: true,
				required: true,
				description: 'Resource to consume',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				displayOptions: {
					show: {
						resource: [
							'user',
						],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						description: 'Get a user by username',
						action: 'Get a user by username',
					},
				],
				default: 'get',
				noDataExpression: true,
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: [
							'get',
						],
						resource: [
							'user',
						],
					},
				},
				default: '',
				placeholder: 'bookworm',
				description: 'Username of the Hardcover user',
			},
		],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        // Handle data coming from previous nodes
        const items = this.getInputData();
        let responseData;
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;

        // For each item, make an API call to create a contact
        for (let i = 0; i < items.length; i++) {
            if (resource === 'user') {
                if (operation === 'get') {
                    // Get email input
                    const username = this.getNodeParameter('username', i) as string;
                    // Get additional fields input
                    const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
                    const data: IDataObject = {
                        username,
                    };

                    Object.assign(data, additionalFields);

                    // Make request according to https://docs.hardcover.app/api/
                    const options: OptionsWithUri = {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        method: 'POST',
                        body: {
                            query: `
                                query GetUserByUsername($username: String!) {
                                    users(where: {username: {_eq: $username}}, limit: 1) {
                                        id,
                                        username
                                    }
                                }
                            `,
                            variables: {
                                username,
                            },
                        },
                        uri: `https://api.hardcover.app/v1/graphql`,
                        json: true,
                    };
                    responseData = await this.helpers.requestWithAuthentication.call(this, 'hardcoverApi', options);
                    returnData.push(responseData);
                }
            }
        }
        // Map data to n8n data structure
        return [this.helpers.returnJsonArray(returnData)];
    }
}