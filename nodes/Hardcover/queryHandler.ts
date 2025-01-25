import { IExecuteFunctions } from 'n8n-workflow';
import { executeQuery } from './GenericFunctions';
import { queryMap } from './queryMap';

export async function handleResourceQuery(
    this: IExecuteFunctions,
    resource: string,
    queryBy: string,
    i: number
): Promise<any> {
    const resourceConfig = queryMap[resource];
    if (!resourceConfig) {
        throw new Error(`Unsupported resource: ${resource}`);
    }

    const queryConfig = resourceConfig[queryBy];
    if (!queryConfig) {
        throw new Error(`Unsupported query type: ${queryBy} for resource: ${resource}`);
    }

    const variables: { [key: string]: string | number } = {
        [queryConfig.param]: this.getNodeParameter(queryConfig.param, i) as string | number
    };

    if (queryConfig.additionalParams) {
        for (const param of Object.keys(queryConfig.additionalParams)) {
            variables[param] = this.getNodeParameter(param, i) as string | number;
        }
    }

    return await executeQuery.call(this, queryConfig.query, variables, i);
} 