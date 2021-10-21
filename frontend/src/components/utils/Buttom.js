import Styled from "styled-components"


const Button = Styled.button.attrs(props => ({
    type:props.type? props.type: "button"
}))`
    display:block;
    background:${props => props.background};
    border: none;
    border-radius:${props => props.BorderRadius?props.BorderRadius:"20px"}; 
    padding: ${(props) => props.padding ? props.padding : " 10px 20px"};

    font-family: Roboto;
    font-style: normal; 
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    &:active {
        background:${props => props.backgroundActive}; 
        cursor:grab;
    }
`
export default Button