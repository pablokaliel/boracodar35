import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --blue: #7fc4ed;
  --blue-dark: #659aba;
  --gray-100: #faf8fd;
  --gray-200: #312e3f;
  --gray-300: #272533;
  --gray-400: #1d1b26;
  --gray-500: #0f0e13;
}

  body{
    width:100%;
    height:100%;
    background-color: var(--gray-500);

    color: var(--gray-100);
  }

  #root,
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor:pointer;
  }
`;