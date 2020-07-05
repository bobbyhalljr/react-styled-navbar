# react-styled-navbar

> A simple, responsive, customizable navbar made with react and styled-components.

[![NPM](https://img.shields.io/npm/v/react-styled-navbar.svg)](https://www.npmjs.com/package/react-styled-navbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-styled-navbar

or

yarn add react-styled-navbar
```

## Usage

```jsx
import React from 'react'

import { Navbar, List, ListMenu } from 'react-styled-navbar'

const App = () => {
    return (
      <Navbar backgroundColor='#f1f1f1'>
        <List>
          <ListMenu fontSize='22px' hover='pink'>
            <a href='/' target='_blank'>item 1</a>
          </ListMenu>
          <ListMenu color='RoyalBlue'>
            <a href='/'>item 2</a>
          </ListMenu>
          <ListMenu color='RoyalBlue'>
            <a href='/'>item 3</a>
          </ListMenu>
          <ListMenu color='RoyalBlue'>
            <a href='/'>item 4</a>
          </ListMenu>
        </List>
      </Navbar>
  )
}
```

## Props coming soon ...

## License

MIT © [bobbyhalljr](https://github.com/bobbyhalljr)
