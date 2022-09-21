React Chart
========

Installation
---

Requires Node >=14.x

Install Yarn:

```bash
https://yarnpkg.com/lang/en/docs/install/
```

Clone and install Yarn dependencies:

```bash
$ git clone git@github.com:sotatek-dev/tai-chart-d3.git
$ cd chartjs
$ yarn
```

Development
---
To lift the dev server (default port 3000) with hot module reloading.
```bash
$ yarn dev
```
The application can be reached at http://localhost:3000

Build
---

To bundle the React application
```bash
$ yarn dist
```

Testing
---

```bash
# run all tests including coverage report and linting
$ yarn test

# run tests in watch mode
$ yarn test:watch

# run single test without coverage or linting
$ yarn test:lite
```

Linting
---
```bash
$ yarn lint
```
