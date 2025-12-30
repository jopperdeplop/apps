# Workflow: Maintain Documentation

> **Goal**: Keep the agentic knowledge base (`AGENTS.md` and `agent-docs/`) alive.

## When to Update

1.  **New Pattern**: You write code that doesn't fit existing `coding-standards.md`.
    - _Action_: Update `coding-standards.md` with the new pattern.
2.  **New Script**: You add a script to `package.json`.
    - _Action_: Update "Golden Paths" in `AGENTS.md`.
3.  **Recurring Bug**: You fix a bug that was caused by a "gotcha" (e.g., "Always restart dev server after X").
    - _Action_: Add to "Critical Rules" or `scratchpad.md`.
4.  **Friction**: You struggled to understand a task or found the docs outdated.
    - _Action_: Update `AGENTS.md` to clarify the confusing part.
5.  **New Capabilities**: You (the Agent) have a new capability (e.g., "Deep Research" or "Browser Access") that changes the workflow.
    - _Action_: Propose a change to `workflows/` to leverage this new skill.

## How to Update

1.  **Be Concise**: Agents read tokens. Don't write fluff.
2.  **Link It**: If you add a new file, link it in `AGENTS.md`.
3.  **Verify**: creating a doc is useless if the next agent doesn't know it exists.

## The "Scratchpad"

If you learned something small, dump it in `agent-docs/scratchpad.md`.

- Format: `- [YYYY-MM-DD] Note about X...`
