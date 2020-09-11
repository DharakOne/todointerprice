import React from "react"
import Styled from "styled-components"


const FooterBrandConte=Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
`
const Box=Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:  rgb(255, 64, 64);
    color:white;
    font-size:32px;
    font-weight:bold;
    width:130px;
    height:130px;
    margin:30px;
    border-radius:10px;
`

export default function FooterBrand(){
    return(
        <FooterBrandConte>
            <Box>
                MyStorez
            </Box>
        </FooterBrandConte>
    )
}