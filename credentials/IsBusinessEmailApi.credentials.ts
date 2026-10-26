import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class IsBusinessEmailApi implements ICredentialType {
	name = 'isBusinessEmailApi';

	displayName = 'isBusinessEmail API';

	icon: Icon = {
		light: 'file:../icons/isbusinessemail.svg',
		dark: 'file:../icons/isbusinessemail.dark.svg',
	};

	documentationUrl = 'https://isbusinessemail.com/docs/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description:
				'Your secret key (starts with ibe_live_). Create one for free at https://isbusinessemail.com/app/keys.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.isbusinessemail.com',
			url: '/v1/usage',
			method: 'GET',
		},
	};
}
