import type {
	ICredentialType,
	INodeProperties
} from 'n8n-workflow';

export class HardcoverApi implements ICredentialType {
	name = 'hardcoverApi';

	displayName = 'Hardcover API';

	documentationUrl = 'hardcover';

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