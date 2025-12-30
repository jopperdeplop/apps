# Coding Standards: Saleor Apps

## 1. Error Handling (Crucial)

**Pattern**: Functional Error Handling with `neverthrow`.

- **Rule**: NEVER throw exceptions for business logic errors. Only throw for "Category 5" crashes (OOM, missing non-optional env vars).
- **Usage**:

  ```typescript
  import { ok, err, Result } from "neverthrow";

  // Return Result<SuccessType, ErrorType>
  function doSomething(): Result<string, BaseError> {
    if (bad) return err(new BaseError("Bad happened"));
    return ok("Success");
  }
  ```

- **Async**: Use `ResultAsync` or just `Promise<Result<...>>`.

## 2. Architecture (Clean Architecture)

- **Route Layer** (`src/app/api/...`):
  - Responsible for: HTTP Parsing, Validation, Headers.
  - Delegates to: `UseCase`.
- **Domain Layer** (`UseCase`):
  - Pure business logic.
  - Dependencies injected via constructor.
  - Returns: `Result`.
- **Data Layer** (`Repositories`):
  - DynamoDB / Saleor API access.
  - Returns: `Result`.

## 3. Observability

- **Logger**: Use `createLogger` from `@/lib/logger`.
- **Context**: Use `loggerContext` to set attributes (e.g., `loggerContext.set(ObservabilityAttributes.TRANSACTION_AMOUNT, amount)`).
- **Tracing**: Wrap handlers with `withSpanAttributesAppRouter` and `compose`.

## 4. Environment

- **Access**: `process.env` is BANNED in business logic.
- **Pattern**: Use `appContextContainer` or injected config objects.
