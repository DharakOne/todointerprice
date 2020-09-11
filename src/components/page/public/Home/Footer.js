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
                    Contactenos
                </Title>
                <SubTitle>Servicio al cliente</SubTitle>
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
                    storejunior@gmail.com
                    </Typography>
                <SubTitle>Horario de atencion</SubTitle>
                <Typography>
                    Lunes a Sabado  de 8:00 am  a 6:00 pm
                </Typography>
            </Contenedor>
            <Contenedor>
                <Title>Siguenos en las redes sociales</Title>
                <IconCont>
                    <IconFacebook />
                    <IconInstagram />
                    <IconTwitter />
                </IconCont>
            </Contenedor>
            <Contenedor>
                <Title>
                    Enlaces de interes
                    </Title>
                <SubTitle>
                    <Link href="/PreguntasFrecuentes" >Preguntas Frecuentes</Link>
                </SubTitle>
                <SubTitle>
                    <Link href="/PoliticasDeDevolucion" >Politicas de devolucion</Link>
                </SubTitle>
                <SubTitle>
                    <Link href="/QuieneSomos">Quienes  somos?</Link>
                </SubTitle>

            </Contenedor>
        </FooterCont>
    )
}