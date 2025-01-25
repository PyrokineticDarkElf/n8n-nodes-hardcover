import type {
	ICredentialType,
	INodeProperties
} from 'n8n-workflow';

export class HardcoverApi implements ICredentialType {
	name = 'hardcoverApi';

	displayName = 'Hardcover API';

	documentationUrl = 'https://docs.hardcover.app/api/getting-started/';

	properties: INodeProperties[] = [
		{
			displayName: 'Personal Access Token',
			name: 'personalAccessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
}