# @monadiam/ui-kit

Language: **EN** | [RU](README.ru.md)

Shared React components, icons, and styles for the MonadIAM platform.

----

<details>
<summary><strong>Package Integration</strong></summary>

The package exports TypeScript source. The consuming application compiles it and
provides React, React DOM, and Tailwind CSS. Supported peer dependency ranges are
listed in [package.json](package.json).

| Entry point                   | Contents                                |
| ----------------------------- | --------------------------------------- |
| `@monadiam/ui-kit`            | Components, form hooks, and UI types.   |
| `@monadiam/ui-kit/enums`      | Component variants and options.         |
| `@monadiam/ui-kit/icons`      | SVG icons imported as React components. |
| `@monadiam/ui-kit/styles.css` | Tailwind source registration.           |

```tsx
import { ButtonVariant } from "@monadiam/ui-kit/enums";
import { Button } from "@monadiam/ui-kit";

export function CancelAction() {
    return <Button variant={ButtonVariant.OUTLINE}>Cancel</Button>;
}
```

Import the stylesheet into the application's Tailwind entry:

```css
@import "@monadiam/ui-kit/styles.css";
```

The application supplies the theme tokens used by components, such as `background`,
`foreground`, `primary`, and `border`. See the working integration in
[client-web styles](../client-web/src/app/styles/index.css) and
[theme definitions](../client-web/src/shared/theme/themes.css).

The bundler must support TypeScript/TSX and `*.svg?react` imports. The existing
[Rspack configuration](../client-web/rspack.config.mjs) includes both.

</details>

----

<details>
<summary><strong>Project Commands</strong></summary>

Run these commands from `ui-kit`:

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `make tsc`           | Check TypeScript types.                          |
| `make lint`          | Run ESLint, including configured Prettier rules. |
| `make lint-fix`      | Apply available ESLint fixes.                    |
| `make knip`          | Find unused files, exports, and dependencies.    |
| `make secrets-check` | Scan staged changes for secrets with Gitleaks.   |
| `make clean`         | Remove generated build and cache files.          |

Visual checks and application builds run through `client-web`.

</details>
