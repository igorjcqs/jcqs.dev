import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   body {
       background: #121214;
       font-size: 14px;
       color: #fff;
       font-family: 'Poppins', sans-serif;
   }

   a {
       text-decoration: none;
       color: #fff;
   }
`;