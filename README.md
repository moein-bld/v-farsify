# vue-farsify

A Vue 3 toolkit for Persian localization, including utilities and directives for number conversion and more. Designed to integrate seamlessly with Vue 3 projects, `vue-farsify` provides developers with an easy way to handle Persian-specific data manipulation.

## Directives

Included in this toolkit is the vConvertNumbers directive, which provides real-time number conversion within your Vue templates.

## Usage of `vConvertNumbers`

Apply the directive in your template by specifying the desired language conversion:

```vue
<!-- Convert to Persian numbers -->
<input v-convert-numbers:persian />
```

## Project Setup

Install dependencies:

```sh
yarn install
```

Compile and hot-reload for development:

```sh
yarn install
```

Run unit tests developed with Jest:

```sh
yarn test:unit
```

Run end-to-end tests with Cypress:

```sh
yarn test:e2e
```

## Contributing

Contributions are welcome! If you've got an idea for a new feature or an improvement, we'd love to hear about it. You can contribute by adding new utilities, improving existing tools, or writing documentation.

### To get started:

-   Fork the repository.
-   Create a feature branch (git checkout -b feature/amazing-feature).
-   Commit your changes (git commit -am 'Add some amazing feature').
-   Push to the branch (git push origin feature/amazing-feature).
-   Open a Pull Request.

## Adding New Tools or Directives

-   Develop your utility or directive in the src/utility or src/directives directory.
-   Ensure you include unit tests for your new feature.
-   Document the usage of your utility or directive in the README.
-   Follow the coding conventions established in the project.

Remember to keep your PRs concise and focused. They should only contain one feature or fix per PR.

Thank you for making `vue-farsify` even better!
