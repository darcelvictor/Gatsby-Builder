import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 3.052em;
}

h2 {font-size: 2.441em;}

h3 {font-size: 1.953em;}

h4 {font-size: 1.563em;}

h5 {font-size: 1.25em;}

p {
    font-size: 1em; 
    font-family: 'Montserrat', sans-serif;
    font-weight:400;
}`

export default GlobalStyle;
