import React, {  useState } from 'react'
// import styles from './styles.module.css'
import styled from 'styled-components'

export const Navbar = ({ text }) => {
  const [navbarContent, setNavbarContent] = useState()
  

  const navbarData = [
    {
      name: 'Navbar',
      url: '/',
    }
  ]

  const items = [
    {
      name: 'items1',
      url: '/'
    },
    {
      name: 'items2',
      url: '/'
    },
    {
      name: 'items3',
      url: '/'
    }
  ]

  const showNavbarContent = (e) => {
    e.preventDefault()

    setNavbarContent({
      navbarContent: !navbarContent
    })
  }

  return (
   <StyledDiv>
     {text}
   </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: red
`

