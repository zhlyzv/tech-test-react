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

const Header = styled.header`
    @media only screen and (max-width: 767px) {
        padding-top: 20px;
    }
`

const Layout: React.FC<React.ReactNode> = ({ children }) => (
    <Wrapper>
        <GlobalStyles />
        <Header>
            <h1>Hello Tech Test</h1>
        </Header>
        <main>{children}</main>
    </Wrapper>
)

export default Layout
