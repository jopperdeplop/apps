# Agentic Onboarding: Saleor Apps Monorepo

> **Goal**: A Turborepo-managed monorepo containing multiple Saleor Apps (Stripe, CMS, Search, etc.).

## 1. Project Identity

- **Architecture**: Monorepo using Turborepo & PNPM Workspaces.
- **Stack**:
  - **Frontend**: Next.js (App Router & Pages Router), Macaw UI.
  - **Macaw UI**: [agent-docs/tech/macaw-ui.md](agent-docs/tech/macaw-ui.md) (Component library).
  - **Backend**: tRPC, Next.js API Routes.
  - **Database**: **DynamoDB** (used via `dynamo-config-repository`).
  - **Testing**: Vitest, PactumJS.
- **Deployment**: Vercel (Applications).

## 2. Agent Protocol

> **Methodology**: Follow this cycle for every task.

1. **Explore**: Read this file (`AGENTS.md`) and relevant `agent-docs/` deep dives.
2. **Plan**: If the task is complex, draft a plan in `agent-docs/scratchpad.md`.
3. **Verify**: Run `pnpm lint` (Architecture Check) and `pnpm test:ci` (Logic Check) BEFORE stopping.

## 3. Critical Rules

> [!IMPORTANT]
> These rules are non-negotiable.

- **Dependencies**: Uses `pnpm`. Respect `workspace:*` protocols.
- **Error Handling**: Uses `neverthrow` extensively. Functions return `Result<T, E>`.
- **Validation**: Use Zod with branded types for primitives (ADR 0002).
- **Environment**: All apps use `.env` files. `n/no-process-env` rule is enforced; use validated env objects.
- **Automated Guardrails**:
  - **Architecture**: `eslint-plugin-boundaries` enforces `UseCase` (Domain) cannot import `RepositoryImpl` (Infrastructure).
  - **Linting**: Run `pnpm lint` to verify architecture compliance.
- **Documentation Maintenance**: If you add new major tech, change the build process, or discover a repeated "gotcha", YOU MUST update this file (`AGENTS.md`) to reflect the new state. **If you find yourself struggling, fix the docs for the next agent.**

## 3. Map of the Territory

- `/apps/`: Individual Saleor applications.
  - `cms`, `stripe`, `search`, `smtp`, `segment`, etc.
- `/packages/`: Shared libraries.
  - `dynamo-config-repository`: Shared logic for DynamoDB access.
  - `apps-shared`: Common utilities.
- `pnpm-workspace.yaml`: Workspace definitions.

## 4. Golden Paths

### Bootstrap

```bash
pnpm install
# Generate Context Map (Useful for exploring)
node scripts/context-map.js
# Setup local environment files for specific apps
```

### Development

```bash
# Start all apps
pnpm dev

# Start specific app (Recommended)
pnpm --filter saleor-app-stripe dev
```

### Testing

```bash
# Unit tests
pnpm test:ci

# E2E tests
pnpm e2e
```

### Building

```bash
pnpm build
```

## 5. Key Technologies & Patterns

- **DynamoDB**: The primary data store for app configuration and simple state.
- **Result Pattern**: Check `apps/AGENTS.md` (legacy) for detailed coding patterns on `neverthrow`.

## 6. Ecosystem Links

- **Consumers**:
  - `c:/Users/jopbr/Documents/GitHub/storefront/AGENTS.md` (Storefront using these apps).
  - `c:/Users/jopbr/Documents/GitHub/SaleorPortal/AGENTS.md` (Vendor Portal using these apps).
- **Templates**: `c:/Users/jopbr/Documents/GitHub/saleor-app-template/AGENTS.md` (Starter for new apps).

## 7. Deep Dive Documentation

- **Coding Standards**: `agent-docs/rules/coding-standards.md` (Result pattern, clean architecture).
- **Workflows**:
  - [Add Webhook](agent-docs/workflows/add-webhook.md)
  - [Local Development](agent-docs/workflows/local-dev.md)
  - [Maintain Docs](agent-docs/workflows/maintain-docs.md)
- **Scratchpad**: `agent-docs/scratchpad.md` (Quick notes).
