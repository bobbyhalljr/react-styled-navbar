import React, {  useState } from 'react'
// import styles from './styles.module.css'

const Navbar = () => {
  const [navbarContent, setNavbarContent] = useState()
  

  const navbarData = [
    {
      name: 'Navbar',
      route: '/',
      items: [
        {
          name: 'items1',
          route: '/'
        },
        {
          name: 'items2',
          route: '/'
        },
        {
          name: 'items3',
          route: '/'
        }
      ]
    }
  ]

  const showNavbarContent = (e) => {
    e.preventDefault()

    setNavbarContent({
      navbarContent: !navbarContent
    })
  }

  return (
    <Navbar
      navbarData={navbarData}
      navbarContent={navbarContent}
      showNavbarContent={showNavbarContent}
    />
  )
}

export default Navbar
