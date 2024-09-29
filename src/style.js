import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }




    .d-none {
        display: none;
    }

    .flex {
        display: flex;
    }

    .flex-center {
        align-items: center;
    }

    .flex-end {
        align-items: flex-end;
    }

    .justify-center {
        justify-content: center;
    }

    .justify-end {
        justify-content: flex-end;
    }

    .space-between {
        justify-content: space-between;
    }

    .full-width {
        width: 100%;
    }

`

export default GlobalStyle;