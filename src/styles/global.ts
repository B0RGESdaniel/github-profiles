import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --gray-800: #0d1117;
        --gray-700: #2d333b;
        --gray-600: #373e47;
        --gray-500: #30363d;
        --gray-300: #afbac5;
        --gray-200: #cdd9e5;
        --gray-100: #fafbfc;

        --green-600: #2dba4e;
        --green-500: #39d353;

        --blue: #51a6ff;
        --purple: #b083f0;
    }
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--gray-800);
        color: var(--gray-100);
        font: 1rem sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
