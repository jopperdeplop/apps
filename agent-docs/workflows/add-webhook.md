# Workflow: Add a Saleor Webhook

## 1. Define the Definition

Create `webhook-definition.ts` in `src/app/api/webhooks/saleor/<event-name>/`.
Use `SaleorSyncWebhook` class with the generated GraphQL fragment.

## 2. Implement the Use Case

Create `use-case.ts`.

- **Constructor**: Inject dependencies (Repos, Factories).
- **Execute Method**:
  1.  Parse arguments.
  2.  Fetch Config (using `appId`).
  3.  Execute logic (e.g., call Stripe).
  4.  Return `Result<Success, Error>`.

## 3. Create the Handler (Route)

Create `route.ts`.

- Instantiate the Use Case (Dependency Injection Root).
- Create handler using `webhookDefinition.createHandler`.
- Wrap with `compose(withLoggerContext, appContextContainer.wrapRequest, ...)`.

## 4. Integration Test (MANDATORY)

Create `__tests__/integration/webhooks/<event-name>.test.ts`.

- **Setup**: Use `DynamoAPL` to seed the mock database.
- **Run**: Use `testApiHandler` (from `next-test-api-route-handler`) to fire a real HTTP request at your route.
- **Assert**: Check the JSON response and status code.

> **Note**: You must have the local DynamoDB running via Docker for tests to pass. See `agent-docs/workflows/local-dev.md`.
