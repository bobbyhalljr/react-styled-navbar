import React, {  useState } from 'react'
// import styles from './styles.module.css'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const Navbar = ({
  fontFamily,
  backgroundColor,
  color,
  height,
  text,
  children,
  href,
  target
}) => {
  return (
   <Wrapper style={{ backgroundColor, fontFamily}}>
     <List>
        <ListMenu color>
          <a href={href} target={target} color>{children}</a>
        </ListMenu>
     </List>
   </Wrapper>
  )
}

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  font-size: 15px;
  font-family: ${props => props.fontFamily || 'sans-serif'};
  font-weight: 600;
  z-index: 1000;
  background-color: ${props => props.backgroundColor || '#fff' };
  opacity: 1;

  @media (max-width: 740px) {
    height: 80px;
    line-height: 60px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  height: ${props => props.height || '80px'};

  @media (max-width: 740px) {
    display: none;
  }
`; 

export const ListMenu = styled.li`
  display: inline-block;
  position: relative;
  padding: 0 0 0 2em;
  font-weight: 500;

  @media (max-width: 740px) {
    display: none;
  }

  a {
    color: ${props => props.color || '#333'};
    text-decoration: none;
    font-size: ${props => props.fontSize || '16px'};
    &:hover {
      color: ${props => props.hover || '#333'}
    }
  }

  ul {
    max-height: 0;
    white-space: nowrap;
  }

  &:hover {
    ul {
      max-height: 360px;
    }
  }

  small {
    font-size: 10px;
  }
`;

Navbar.propTypes = {
    fontFamily: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string
}


