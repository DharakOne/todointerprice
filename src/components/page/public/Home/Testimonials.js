import React, { useState } from "react"
import Styled, { keyframes } from "styled-components"

import Container from "../../../utils/Container"
import TestimonialUser from "./TestimonialUser"

import ArrowLeft from "./Icons/ArrowLeft.svg"
import ArrowRight from "./Icons/ArrowRight.svg"

const animationSlider = (position) => keyframes`
        0% {
            left: ${position.initial}% ;
        }

        100% {
            left:${position.end}% ;
        }
    }
`

const TestimonialsContainer = Styled(Container)`
    margin:0 20px 109px;
    align-items:center;
    width:auto;

`
const Title = Styled.label`
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #818181;
    font-style: normal;
    text-align: center;
    margin-bottom: 40px;
`
const CarrouserContainer = Styled.div`
    overflow:hidden;
    width:100%;
    @media (max-width: 582px) {
    grid-row:1;
    grid-column:1/3;
    }
`

const AnimationContainer = Styled.div`
    position: relative;
    display:flex;
    animation-name: ${props => props.active ? animationSlider(props.position) : "none"};
    animation-duration: 1.5s;
    animation-iteration-count:1;
    animation-fill-mode: both;
   
`

const TestimonyContent = Styled.div`
    display:grid;
    grid-template-columns:  auto auto auto;
    align-items: center;

    @media (max-width: 582px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        justify-items:center;
    }

`
const IconsStyle = Styled.div`
    margin:${props => props.margin};
    @media (max-width: 582px) {
        margin:0;
    }

`

export default function Testimonials() {
    const [position, setPosition] = useState({
        initial: 0,
        end: -100,
        int: 0
    })
    const [active, setActive] = useState(false)
    function handleAnimation(name) {
        if (name === "right") {
            if (position.int < 2) {
                if (active === false) {
                    setActive(true)
                    setPosition({
                        initial: 0,
                        end: -100,
                        int: 1
                    })
                } else {
                    setPosition({
                        initial: position.end,
                        end: position.end - 100,
                        int: position.int + 1
                    })
                }

            }

        }
        else {
            if (position.int > 0) {
                setActive(true)
                setPosition({
                    initial: position.end,
                    end: position.end + 100,
                    int: position.int - 1
                })
            }

        }
    }
    return (
        <TestimonialsContainer>
            <Title>JUST SOME OF THE TESTIMONIALS.</Title>
            <TestimonyContent>
                <IconsStyle margin="0 22px 0 0"> <ArrowLeft onClick={() => handleAnimation("left")} /></IconsStyle>
                <CarrouserContainer>
                    <AnimationContainer active={active} position={position}>
                        <TestimonialUser name="Junior Castro" background="#EEEEEE" />
                        <TestimonialUser name="Benjamin Flores" background="aqua" />
                        <TestimonialUser name="Flores Castro" background="greenyellow" />
                    </AnimationContainer>
                </CarrouserContainer>
                <IconsStyle margin="0 0 0 22px"> <ArrowRight onClick={() => handleAnimation("right")} /></IconsStyle>
            </TestimonyContent>
        </TestimonialsContainer>
    )
}