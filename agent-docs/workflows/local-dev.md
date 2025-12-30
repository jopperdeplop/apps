# Local Development Workflow

## 1. Database Dependencies

Integration tests require a local DynamoDB instance.

- **Location**: `src/__tests__/integration/docker-compose.yml` (in each app, e.g., `apps/stripe`).
- **Command**:
  ```bash
  cd apps/stripe/src/__tests__/integration
  docker-compose up -d
  ```

## 2. Running Tests

- **Unit**: `pnpm test:ci` (Fast, mocked).
- **Integration**: `pnpm test` or `vitest` (Requires Docker).

## 3. Environment Variables

- Ensure `.env` is populated from `.env.example`.
- Never commit `.env`.
