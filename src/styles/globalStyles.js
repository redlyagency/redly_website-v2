import { createGlobalStyle } from "styled-components"
import "@fontsource/poppins"
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: "Poppins", sans-serif;
    }
`