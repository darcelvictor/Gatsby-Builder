import styled from "styled-components"


export const HeroContainer = styled.div`
    background-color : #0c0c0c;
    display:flex;
    height:800px;
    position:relative;
    justify-content: center;
    align-items : center;
    padding: 0 30px;
    z-index:1;
    margin-top: ${({firstSection}) => firstSection ? "-80px" : "0px"};
`
export const HeroBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
`

export const VideoBg = styled.video`
width:100%;
height:100%;
object-fit: cover;
-o-object-fit:cover;
background:red;
`