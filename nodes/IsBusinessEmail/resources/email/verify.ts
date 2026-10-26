import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVerify = {
	operation: ['verify'],
	resource: ['email'],
};

export const emailVerifyDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'name@email.com',
		displayOptions: {
			show: showOnlyForVerify,
		},
		description: 'The email address to verify',
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
];
