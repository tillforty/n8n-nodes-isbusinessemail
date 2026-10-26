# n8n-nodes-isbusinessemail

An [n8n](https://n8n.io) community node for [isBusinessEmail](https://isbusinessemail.com). Use it to:

- tell work emails from personal, disposable and relay addresses,
- detect Google Workspace and Microsoft 365,
- check that a mailbox exists, without sending an email.

## Installation

Follow n8n's [community nodes installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) and install `n8n-nodes-isbusinessemail`.

## Operations

| Operation | What it does |
|---|---|
| **Check** | Classifies an email address, domain or website URL. Returns `category` (business, personal, disposable, relay, education, government, invalid, unknown), `recommendation` (allow, review, block), `reasons`, and Google Workspace / Microsoft 365 detection. Options: policy (`b2b`, `strict`, `lenient`), deep check, workspace detection. |
| **Verify Mailbox** | Asks the domain's mail server whether the mailbox exists. Returns `status` (deliverable, undeliverable, risky, unknown) and `reason`. |
| **Get Usage** | Returns your plan limits and how much of your quota you have used. |

The node can also be used as a tool by n8n's AI Agent.

## Credentials

1. Create a free account at [isbusinessemail.com](https://isbusinessemail.com) and copy your secret key (`ibe_live_…`) from **API keys**.
2. In n8n, create an **isBusinessEmail API** credential and paste the key. n8n tests it with `GET /v1/usage`.

## Usage

Put a **Switch** node after **Check** and route on `{{ $json.recommendation }}`:

- `allow`: create the CRM contact
- `review`: send it to a review list
- `block`: drop it, or ask for a work email

Each item is one API call and counts toward your quota (100 a day on the free plan). These test addresses return fixed results and are not counted: `workspace@test.isbusinessemail.com`, `personal@test.isbusinessemail.com`, `disposable@test.isbusinessemail.com`.

To keep leads flowing if the API is unreachable, set the node's **Settings → On Error** to *Continue (using error output)* and route that output the same way as `allow`.

## Compatibility

Built with `@n8n/node-cli` 0.53 (n8n Nodes API version 1).

## Resources

- [isBusinessEmail API docs](https://isbusinessemail.com/docs)
- [Response fields](https://isbusinessemail.com/docs/response-fields)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## License

[MIT](LICENSE)
