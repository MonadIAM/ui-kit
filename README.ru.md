# @monadiam/ui-kit

Language: [EN](README.md) | **RU**

Общие React-компоненты, иконки и стили платформы MonadIAM.

----

<details>
<summary><strong>Подключение пакета</strong></summary>

Пакет экспортирует исходный код TypeScript. Приложение компилирует его и предоставляет
React, React DOM и Tailwind CSS. Поддерживаемые версии peer-зависимостей указаны
в [package.json](package.json).

| Точка входа                   | Содержимое                           |
| ----------------------------- | ------------------------------------ |
| `@monadiam/ui-kit`            | Компоненты, хуки форм и типы UI.     |
| `@monadiam/ui-kit/enums`      | Варианты и параметры компонентов.    |
| `@monadiam/ui-kit/icons`      | SVG-иконки в виде React-компонентов. |
| `@monadiam/ui-kit/styles.css` | Регистрация исходников для Tailwind. |

```tsx
import { ButtonVariant } from "@monadiam/ui-kit/enums";
import { Button } from "@monadiam/ui-kit";

export function CancelAction() {
    return <Button variant={ButtonVariant.OUTLINE}>Отмена</Button>;
}
```

Подключите стили в точке входа Tailwind приложения:

```css
@import "@monadiam/ui-kit/styles.css";
```

Приложение предоставляет токены темы, используемые компонентами: `background`,
`foreground`, `primary`, `border` и другие. Пример подключения находится в
[стилях client-web](../client-web/src/app/styles/index.css), а значения токенов —
в [определениях тем](../client-web/src/shared/theme/themes.css).

Сборщик должен поддерживать TypeScript/TSX и импорты `*.svg?react`.
В существующей [конфигурации Rspack](../client-web/rspack.config.mjs) настроено и то и другое.

</details>

----

<details>
<summary><strong>Команды проекта</strong></summary>

Выполняйте команды из `ui-kit`:

| Команда              | Описание                                                |
| -------------------- | ------------------------------------------------------- |
| `make tsc`           | Проверить типы TypeScript.                              |
| `make lint`          | Запустить ESLint, включая настроенные правила Prettier. |
| `make lint-fix`      | Применить доступные исправления ESLint.                 |
| `make knip`          | Найти неиспользуемые файлы, экспорты и зависимости.     |
| `make secrets-check` | Проверить подготовленные изменения на секреты.          |
| `make clean`         | Удалить созданные файлы сборки и кэша.                  |

Визуальная проверка и сборка приложения выполняются через `client-web`.

</details>
