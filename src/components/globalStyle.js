import styled, {createGlobalStyle} from "styled-components"




const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto";
}
h1{
    font-family: "Roboto";
}
`
export default GlobalStyle;

export const MyContainer = styled.div`
z-index: 1;
width: 100%;
max-width:${props => props.theme.maxWidth};
margin-left:auto;
margin-right:auto;
padding-left:50px;
padding-right:50px;
@media screen and (max-width: ${props => props.theme.maxWidth})
{
    padding-left: 30px;
    padding-right: 30px;
}
`

// export const MyButton = styled.button`
//     border-radius:4px;
//     background : blue;
//     border:none;
//     white-space:no-wrap;
//     cursor: pointer;
// `