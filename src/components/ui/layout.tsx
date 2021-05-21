import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Layout: React.FC<React.ReactNode> = ({ children }) => (
    <Wrapper>
        <GlobalStyles />
        <header>
            <h1>Hello Tech Test</h1>
        </header>
        <main>{children}</main>
    </Wrapper>
)

export default Layout
