import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import { Link } from 'gatsby'

import { Grid } from './Grid'

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.grayDark};
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 0.95rem;

  a {
    color: #fff;
  }

  h4 {
    color: var(--color-gray-light);
  }
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Composition as={Grid} templateCols="repeat(3, 1fr)" paddingVertical={64}>
        <div>
          <p>Mock Service Worker is released under the MIT license.</p>
        </div>
        <div>
          <h4>Documentation</h4>
          <ul>
            <li>
              <Link to="/docs/getting-started">Getting started</Link>
            </li>
            <li>
              <Link to="/docs/api">API</Link>
            </li>
            <li>
              <Link to="/docs/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link to="/docs/recipes">Recipes</Link>
            </li>
          </ul>
        </div>
      </Composition>
    </StyledFooter>
  )
}