# IU JS

IUJS is a modern client-side JavaScript framework for building SPAs (Single Page Applications).

## Examples

```
const root = document.body;
const page = [
  {
    param: {
      style: {
        "background": "red"
      },
    },
    text: "Hello, World with custom style!"
  },
];
iu.mount(root, page);
```

### Development

#### Build flow

```
npm run build
```

#### Check flow

```
npm run check
```

#### Flow lint

```
npm run lint
```

#### lint-staged

```
npm run test
```

#### Check es-lints

```
npm run eslint
```

#### Fix es-lint errors

```
npm run eslint:fix
```

© Copyright 2021, IU Team
