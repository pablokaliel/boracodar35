import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --blue: #7fc4ed;
  --white:#fff;
  --text:#4e4964;
  --blue-dark: #659aba;
  --blue-input: rgba(127, 196, 237, 0.2);
  --blue-dark-input: rgba(127, 196, 237, 0.1);
  --gray-100: #faf8fd;
  --gray-150:#f3f4f633;
  --gray-200: #312e3f;
  --gray-300: #272533;
  --gray-400: #1d1b26;
  --gray-500: #0f0e13;
  --bg-gitmodal: rgba(0, 0, 0, 0.8);
  --shadow-modalcontent: rgba(17, 16, 24, 0.25);
}

  body{
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
