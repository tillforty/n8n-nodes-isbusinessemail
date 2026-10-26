import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { emailDescription } from './resources/email';

export class IsBusinessEmail implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'isBusinessEmail',
		name: 'isBusinessEmail',
		icon: {
			light: 'file:../../icons/isbusinessemail.svg',
			dark: 'file:../../icons/isbusinessemail.dark.svg',
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description:
			'Tell work emails from personal and disposable ones, detect Google Workspace and Microsoft 365, and verify mailboxes',
		defaults: {
			name: 'isBusinessEmail',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'isBusinessEmailApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.isbusinessemail.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Email',
						value: 'email',
					},
				],
				default: 'email',
			},
			...emailDescription,
		],
	};
}
