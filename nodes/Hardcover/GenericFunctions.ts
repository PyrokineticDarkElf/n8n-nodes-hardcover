import { IExecuteFunctions, ILoadOptionsFunctions, IHookFunctions, NodeApiError, JsonObject } from 'n8n-workflow';
import { queries } from './Queries';

interface QueryExecutorOptions {
    operation: keyof typeof queries;
    variables: { [key: string]: string | number | boolean };
}


//////////////////////////////
// Executes a GraphQL query //
//////////////////////////////
export async function executeGraphQLQuery(
    this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions,
    options: QueryExecutorOptions,
    itemIndex: number
): Promise<any> {
    
    const { operation, variables } = options;
    
    try {
        // Get the query from our queries object
        const query = queries[operation];
        if (!query) {
            throw new Error(`Query not found for operation: ${operation}`);
        }

        // Get credentials
        const credentials = await this.getCredentials('hardcoverApi');
        const token = credentials.personalAccessToken as string;

        // Make the request
        const response = await this.helpers.requestWithAuthentication.call(
            this,
            'hardcoverApi',
            {
                method: 'POST',
                url: 'https://api.hardcover.app/v1/graphql',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: {
                    query,
                    variables,
                },
                json: true,
            },
        );

        // Check for GraphQL errors
        if (response.errors) {
            throw new Error(response.errors[0].message);
        }

        return response.data;
    } catch (error) {
        throw new NodeApiError(this.getNode(), error as JsonObject);
    }
};

///////////////////////////////////////////////////
// Execute query based on resource and operation //
///////////////////////////////////////////////////
export async function executeResourceOperation(
    this: IExecuteFunctions,
    operation: string,
    i: number
): Promise<any> {
    // Get all parameters defined for this node
    const nodeParameters = this.getNode().parameters as { [key: string]: any };
    
    // Build variables object from node parameters
    const variables: { [key: string]: string | number } = {};
    
    // Get all parameters that aren't resource or operation
    Object.entries(nodeParameters).forEach(([key]) => {
        if (key !== 'resource' && key !== 'operation') {
            variables[key] = this.getNodeParameter(key, i) as string | number;
        }
    });

    const operationName = `${operation}`;

    return await executeGraphQLQuery.call(
        this,
        {
            operation: operationName as keyof typeof queries,
            variables,
        },
        i
    );
};

////////////////////////////////////////////////////
// Validate if an operation exists for a resource //
////////////////////////////////////////////////////
export function validateResourceOperation(operation: string): boolean {
    const operationName = `${operation}`;
    return operationName in queries;
};

/////////////////////////
// Search Query Helper //
/////////////////////////
export async function executeSearchOperation(
    this: IExecuteFunctions,
    i: number
): Promise<any> {
    const query = this.getNodeParameter('query', i) as string;
    const query_type = this.getNodeParameter('resource', i) as string;
    const advanced = this.getNodeParameter('advanced', i) as { per_page?: number; page?: number };
    
    const variables = {
        query,
        query_type,
        per_page: advanced.per_page || 25,
        page: advanced.page || 1,
    };

    return await executeGraphQLQuery.call(
        this,
        {
            operation: 'search',
            variables,
        },
        i
    );
};