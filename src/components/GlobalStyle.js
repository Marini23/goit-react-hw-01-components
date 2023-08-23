import { createGlobalStyle } from "styled-components";

import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
margin: 0 auto;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
width: 800px;
background-color: #C8C8C8;
padding: 30px;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;