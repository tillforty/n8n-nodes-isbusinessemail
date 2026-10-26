import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCheck = {
	operation: ['check'],
	resource: ['email'],
};

export const emailCheckDescription: INodeProperties[] = [
	{
		displayName: 'Input Type',
		name: 'inputType',
		type: 'options',
		options: [
			{
				name: 'Email',
				value: 'email',
			},
			{
				name: 'Domain',
				value: 'domain',
			},
			{
				name: 'Website URL',
				value: 'url',
				description: 'Its host (without www.) is checked',
			},
		],
		default: 'email',
		displayOptions: {
			show: showOnlyForCheck,
		},
		description: 'What to check',
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. jane@acme.io',
		displayOptions: {
			show: showOnlyForCheck,
		},
		description: 'The email address, domain or website URL to check',
		routing: {
			send: {
				type: 'body',
				property: '={{$parameter.inputType}}',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForCheck,
		},
		options: [
			{
				displayName: 'Policy',
				name: 'policy',
				type: 'options',
				options: [
					{
						name: 'B2B',
						value: 'b2b',
						description: 'Allow company, education and government addresses; send role accounts and unknown domains to review; block personal, relay and disposable',
					},
					{
						name: 'Strict',
						value: 'strict',
						description: 'Like B2B, but block role accounts and unknown domains instead of sending them to review',
					},
					{
						name: 'Lenient',
						value: 'lenient',
						description: 'Allow personal and relay addresses too; only block disposable, invalid and blocklisted ones',
					},
				],
				default: 'b2b',
				description: 'Which rules turn the category into a recommendation',
				routing: {
					send: {
						type: 'body',
						property: 'policy',
					},
				},
			},
			{
				displayName: 'Deep Check',
				name: 'deep',
				type: 'boolean',
				default: false,
				description:
					'Whether to also look up the domain age and check the homepage. Counts as 5 checks.',
				routing: {
					send: {
						type: 'body',
						property: 'deep',
					},
				},
			},
			{
				displayName: 'Workspace Detection',
				name: 'workspace',
				type: 'boolean',
				default: true,
				description: 'Whether to look up the Microsoft 365 tenant. Turn off for faster answers.',
				routing: {
					send: {
						type: 'body',
						property: 'workspace',
					},
				},
			},
		],
	},
];
