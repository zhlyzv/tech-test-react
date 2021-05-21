import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
::before,
::after { box-sizing: border-box; }

:root {
    /* Colors */
    --color-dark: #111;
    --color-light: #d9d5dc;
    --color-borders: rgba(138, 138, 174, 0.7);

    /* Typography */
    --font-normal: Georgia, Verdana, serif;
    --font-special: Impact, 'Arial Black', sans-serif;
    // This makes our font size fluid
    font-size: calc(1rem + .5vw);
    font-family: var(--font-normal);
    line-height: 1.42;
    color: var(--color-dark);
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-special);
    margin-bottom: 1rem;
    line-height: 1;
    font-weight: 400;
}

h1 { font-size:2.8rem; }

h2 { font-size:2.12rem; }

h3 { font-size:1.666rem; }

h4 { font-size:1.25rem; }

/* Utility */
.visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}
`

export default GlobalStyles
