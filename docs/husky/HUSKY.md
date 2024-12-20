# Husky Documentation


# npx lint-staged

![Скріншот файла _pre-commit](./screenshots/pre-commit.png)

Команда npx lint-staged виконується перед комітом

Це дозволяє виконати перевірку коду перед комітом

# lint-staged

![Скрішот файла package.json](./screenshots/package-json-lint-staged.png)

Команда lint-staged виконується перед комітом і перевіряє файли які знаходяться в git-стані modify (тобто ті файли 
які були змінені, модифіковані)

Виконуються команды:

Для файлів з розширенням .js та .jsx:
- prettier --write
- eslint --fix --max-warnings=0

Для файлів з розширенням .css та .scss:

- prettier --write
- stylelint --fix

# Ігнорування файлів для перевірки

### Ігнорування файлів для prettier
![Скріншот файла .prettierignore](./screenshots/prettier-ignore.png)

### Ігнорування файлів для eslint
![Скріншот файла .eslintignore](./screenshots/eslint-ignore.png)

Щоб ігнорувати файли від перевірки, потрібно вказати шлях до файлу в файлі .prettierignore або eslint.config.js