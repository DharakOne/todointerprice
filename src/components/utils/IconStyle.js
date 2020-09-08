import Styled from "styled-components"

const IconStyle = Styled.div`
    display:flex;
    align-items:center;
    fill:${props => props.background ? props.background  : "rgb(226, 226, 226)"};
    margin: ${props=>props.margin?props.margin:"0 3px"};
    backgroud:${props=>props.background?props.background:"none"};
`
 
export default IconStyle