import Styled from "styled-components";

const Container = Styled.div`
    background:${(props) => props.background ? props.background : "none"};
    width: ${(props) => props.width ? props.width : "100%"};
    height:${(props) => props.height?props.height:"auto"};
    display:${(props) => props.display ? props.display : "flex"};
    flex-direction:${(props)=>props.direction ? props.direction : "column"};
`;

export default Container; 