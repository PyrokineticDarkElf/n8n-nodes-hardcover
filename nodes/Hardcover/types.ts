interface QueryConfig {
    param: string;
    query: string;
    additionalParams?: {
        [key: string]: {
            type: 'string' | 'number';
            required: boolean;
        }
    };
}

interface ResourceConfig {
    [queryType: string]: QueryConfig;
}

interface QueryMapConfig {
    [resource: string]: ResourceConfig;
} 