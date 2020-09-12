import React from "react"
import Styled from "styled-components"
import FooterBrand from "./FooterBrand"


import IconEmail from "./Icons/email.svg"
import IconWhatsapp from "./Icons/whatsapp.svg"
import IconFacebook from "./Icons/Facebook.svg"
import IconInstagram from "./Icons/Instagram.svg"
import IconTwitter from "./Icons/Twitter.svg"
import IconPhone from "./Icons/Phone.svg"




const FooterCont = Styled.div`
    display:grid;
    background: #F8F8F8;
    justify-items: space-around;
    padding:10px 10%;
    grid-template-columns:1fr;
    @media (min-width: 670px) {
        grid-template-columns:1fr 1fr;
    }
    @media (min-width: 1260px) {
        grid-template-columns:1fr 1fr 1fr 1fr;
        padding:10px 30px  70px;
    }
`
const Contenedor = Styled.div`
    margin:0 auto 0;
`
const Title = Styled.h1`
    white-space: normal; 
    text-align:center;
    color:rgb(36, 36, 36);
`
const SubTitle = Styled.h2`
    color:rgb(36, 36, 36);
`
const Typography = Styled.div`
    display:flex;
    align-items: center;
`
const Link = Styled.a`
    text-decoration:none;
    color:rgb(64, 115, 255);
`

const IconCont = Styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    justify-content:center;
    column-gap:15px;
`

const IconStyle = Styled.span`
    margin:${props => props.margin ? props.margin : "0 10px 0 0"};
`

export default function Footer() {
    return (
        <FooterCont>
            <FooterBrand />
            <Contenedor>
                <Title>
                    Contact us
                </Title>
                <SubTitle>Client Service</SubTitle>
                <Typography>
                    <IconStyle>
                        <IconWhatsapp />
                    </IconStyle>
                    <IconStyle>
                        <IconPhone />
                    </IconStyle>
                    504+ 9465-5634
                </Typography>
                
                <Typography>
                    <IconStyle><IconEmail /></IconStyle>
                    todointerprice@todo.com
                    </Typography>
                <SubTitle>Hours of Operation</SubTitle>
                <Typography>
                    Monday to Saturday  of 8:00 am  to 6:00 pm
                </Typography>
            </Contenedor>
            <Contenedor>
                <Title>Follow us in Social Network</Title>
                <IconCont>
                    <IconFacebook />
                    <IconInstagram />
                    <IconTwitter />
                </IconCont>
            </Contenedor>
            <Contenedor>
                <Title>
                    Links of interest
                    </Title>
                <SubTitle>
                    <Link href="/PreguntasFrecuentes" >Who are us?</Link>
                </SubTitle>
                <SubTitle>
                    <Link href="/PoliticasDeDevolucion" >Frequent questions</Link>
                </SubTitle>
                <SubTitle>
                    <Link href="/QuieneSomos">Privacy policy</Link>
                </SubTitle>
                <SubTitle>
                    <Link href="/QuieneSomos">Terms</Link>
                </SubTitle>
                <SubTitle>
                    <Link href="/QuieneSomos">Repository</Link>
                </SubTitle>

            </Contenedor>
        </FooterCont>
    )
}