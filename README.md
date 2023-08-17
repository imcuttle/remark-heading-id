# remark-heading-id

[![Build status](https://img.shields.io/travis/imcuttle/remark-heading-id/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/remark-heading-id)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/remark-heading-id.svg?style=flat-square)](https://codecov.io/github/imcuttle/remark-heading-id?branch=master)
[![NPM version](https://img.shields.io/npm/v/remark-heading-id.svg?style=flat-square)](https://www.npmjs.com/package/remark-heading-id)
[![NPM Downloads](https://img.shields.io/npm/dm/remark-heading-id.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/remark-heading-id)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> The remark plugin for supporting [custom heading id](https://www.markdownguide.org/extended-syntax/#heading-ids) and Default Id

### Custom Heading Input

```markdown
### My Great Heading {#custom-id}
```

### Custom Heading Output

```html
<h3 id="custom-id">My Great Heading</h3>
```

### API

This package exports no identifiers. The default export is `remarkHeaderId`.

`unified().use(remarkHeadingId[, options])`

#### options

Configuration (optional).

#### options.defaults

Whether to add default titles based on the title text (boolean, default: false).

##### Default Heading Input

```markdown
### My Great Heading
```

##### Default Heading Output

```html
<h3 id="my-great-heading">My Great Heading</h3>
```

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:moyuyc95@gmail.com">moyuyc95@gmail.com</a>.

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
