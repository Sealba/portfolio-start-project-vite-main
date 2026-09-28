import {createGlobalStyle} from 'styled-components';

export const DefaultStyle = createGlobalStyle`
    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url("./fonts/Poppins-SemiBold.woff") format("woff"), url("./fonts/Poppins-SemiBold.woff2") format("woff2"), url("./fonts/Poppins-SemiBold.ttf") format("truetype");
    }

    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url("./fonts/Poppins-Medium.woff") format("woff"), url("./fonts/Poppins-Medium.woff2") format("woff2"), url("./fonts/Poppins-Medium.ttf") format("truetype");
    }
    
    body {
        font-family: "Poppins";
    }
    @use "breakpoints" as *;

    * {
        outline: none;
        box-sizing: border-box;
    }

    html,
    body {
        //height: 100%;
        //scrollbar-gutter: stable;
    }

    html {
        scroll-behavior: smooth;
        scrollbar-width: thin;
        //scrollbar-color: var(--blue) #00a2ff;

        //font-size: 0.278vw; -- 320px
        font-size: 0.2667vw;
        
        @include tablet {
            //font-size: 0.13vw;
        }
        @media (min-width: 1024px) {
            font-size: 0.069vw;
        }
        @media (min-width: 1440px) {
            font-size: 0.069vw;
        }

        @media (min-width: 1450px) {
            font-size: 1px;
        }
    }

    body {
        margin: 0;
        color: black;
        background-color: white;
        font-family: "Poppins" , sans-serif;
        font-style: normal;
        font-weight: normal;
    }

    p {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-family: "Poppins" , sans-serif;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }

    input,
    button,
    textarea {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background-color: transparent;
        font-family: "Poppins" , sans-serif;
        resize: none;
    }

    /* Убираем стрелки для Chrome, Safari, Edge, Opera */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Убираем стрелки для Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    button {
      cursor: pointer;
    }
    .max-container {
        max-width: 1440px;
        margin: 0 auto;
    }
`;
