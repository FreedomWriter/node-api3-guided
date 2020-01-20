## Types (how we got it)

- Built in: no need to install, it's part of express (express.json()).
- 3rd party: need to `npm install` it (cors()).
- Custom: we build this one.

## Types (how we use it)

- global: applies to all requests
- local: applies to a set of routes (URLs)

## Misc

- middleware gets access to both response and request and can therefore modify either
