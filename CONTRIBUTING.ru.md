# Участие в разработке

Language: [EN](CONTRIBUTING.md) | **RU**

----

<details>
<summary><strong>Подготовка окружения</strong></summary>

Для локальной разработки используйте версии Node.js и pnpm, указанные
в [client-web/package.json](../client-web/package.json).

Установите зависимости:

```sh
pnpm install --frozen-lockfile
```

> Для Git-хуков установите [`gitleaks`](https://github.com/gitleaks/gitleaks#installing).
> Без него коммит не пройдёт проверку.

Команды проекта: [README](README.ru.md).

Рекомендуемый редактор — [VSCode](https://code.visualstudio.com/).

#### Настройка VSCode

Для интеграции [ESLint](https://eslint.org/docs/latest/), [Prettier](https://prettier.io/docs/en/)
и [EditorConfig](https://editorconfig.org/) установите расширения:

1. `dbaeumer.vscode-eslint`
2. `rvest.vs-code-prettier-eslint`
3. `esbenp.prettier-vscode`
4. `EditorConfig.EditorConfig`

</details>

----

<details>
<summary><strong>Git-хуки</strong></summary>

Подключите хуки:

```sh
chmod +x .githooks/*
git config core.hooksPath .githooks
```

#### Проверки перед коммитом

`pre-commit` выполняет проверки по порядку и останавливается при первой ошибке:

1. `Secret scan` — Gitleaks проверяет подготовленные к коммиту изменения.
2. `Type check`  — TypeScript проверяет пакет.
3. `Unused code` — Knip ищет неиспользуемые экспорты, файлы и зависимости.
4. `ESLint`      — ESLint проверяет исходный код пакета.

TypeScript, Knip и ESLint проверяют рабочую копию. Gitleaks проверяет
подготовленные к коммиту изменения.

#### Допустимые префиксы коммитов и веток

`feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

#### Формат сообщения коммита

```text
<type>(<scope>)?[!]: <subject>
```

- `<type>` — один из допустимых префиксов выше.
- `<scope>` — необязательная область в скобках: латинские буквы, цифры и `-`.
- `!` — необязательная отметка несовместимого изменения.
- `: ` — обязательные двоеточие и пробел.
- `<subject>` — краткое описание изменения.

> Первая строка сообщения коммита ограничена 70 символами.

Примеры:

- `feat(list): add column layout`
- `fix(radio): center the checked indicator`
- `docs: describe local development`
- `chore: update lint configuration`

#### Формат имени ветки

```text
<type>/<slug>
<type>/<scope-or-id>/<slug>
```

- `<type>` — один из допустимых префиксов выше.
- `/<scope-or-id>` — необязательная область или номер задачи: латинские буквы, цифры и `-`.
- `/<slug>` — краткое описание: латинские буквы, цифры, `_` и `-`.

Примеры:

- `feat/add-qr-code`
- `fix/radio-alignment`
- `docs/update-development-guide`

> Имя ветки ограничено 50 символами.
> Исключения: `dev`, `main`, `master`.

</details>
