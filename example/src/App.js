import React from 'react'

import { Navbar, List, ListMenu } from 'react-styled-navbar'
import 'react-styled-navbar/dist/index.css'

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

export default App
