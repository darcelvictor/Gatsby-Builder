import styled, {createGlobalStyle} from "styled-components"

//colors :

//const primary = "blue";
//const header = "red";
//const headerIconColor = "White";


//font



//max-width 




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

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width:1300px;
margin-left:auto;
margin-right:auto;
padding-left:50px;
padding-right:50px;
@media screen and (max-width:991px)
{
    padding-left: 30px;
    padding-right: 30px;
}
`

export const Button = styled.button`
    border-radius:4px;
    background : blue;
    border:none;
    white-space:no-wrap;
    cursor: pointer;
`