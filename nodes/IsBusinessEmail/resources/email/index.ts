import type { INodeProperties } from 'n8n-workflow';
import { emailCheckDescription } from './check';
import { emailVerifyDescription } from './verify';

const showOnlyForEmail = {
	resource: ['email'],
};

export const emailDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEmail,
		},
		options: [
			{
				name: 'Check',
				value: 'check',
				action: 'Check an email address or domain',
				description:
					'Classify an address as business, personal, disposable, relay, education or government, with a recommendation to allow, review or block',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/check',
					},
				},
			},
			{
				name: 'Verify Mailbox',
				value: 'verify',
				action: 'Verify that a mailbox exists',
				description:
					'Ask the mail server whether the mailbox exists, without sending an email',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/verify',
					},
				},
			},
			{
				name: 'Get Usage',
				value: 'usage',
				action: 'Get your quota and usage',
				description: 'Get your plan limits and how many checks you have used',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/usage',
					},
				},
			},
		],
		default: 'check',
	},
	...emailCheckDescription,
	...emailVerifyDescription,
];
