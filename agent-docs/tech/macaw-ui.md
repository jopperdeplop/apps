# Macaw UI Cheat Sheet

> **Proprietary Library**: `@saleor/macaw-ui`

## Common Components

- **Layout**: `Box`, `Grid`, `Columns` (do not use raw `div` for layout).
- **Text**: `Text`, `List`, `ListItem`.
- **Form**: `Input`, `Select`, `Multiselect`, `Checkbox`.
- **Buttons**: `Button` (variants: `primary`, `secondary`, `tertiary`).

## Patterns

- **Styling**: Prop-based styling (e.g., `<Box padding={4} backgroundColor="default1">`).
- **Icons**: Import from `@saleor/macaw-ui/next` (not `lucide` in apps, `lucide` is for `SaleorPortal`/`storefront`).

## Verification

- If you see `className="..."` in an `apps` component, check if it should be a Macaw prop instead.
