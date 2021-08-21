import Styled from "styled-components"


export const Background = Styled.div`
    display: flex;
    justify-content: center;
    padding: 0 auto;
    background: radial-gradient(54.05% 102.79% at 50% 50%, #9256DB  0%, #3A5CB4 100%);
`

export const ContainerSignUp = Styled.div`
    display:grid;
    grid-auto-flow: row;
    row-gap:28px ;
    background: #FBFBFB;
    padding:43px;
    margin:5%;
    justify-items: center;
`


//Head

export const HeadContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeadTitle = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
`
export const HeadSubTitle = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #818181;
`


// Form
export const InputContainer = Styled.div`
    display:grid;
    row-gap: 5px;
`


export const Input = Styled.input.attrs((props) => ({
    type: props.typeInput
}))`

    background: none;
    width:max(359px,280px);
    border:none;
    border-bottom:1px solid rgb(121, 71, 182);
    &:focus{
        outline:none;
    }
`
export const InputLabel = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #818181;
`

export const FomrContainer = Styled.div`
    display:grid;
    row-gap:29px ;
`

//Term and Condition
export const TermCondContainer = Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display:flex;
    justify-content: center;
    align-items: center;
`



export const TermCondURL = Styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #7947B6;
    margin-left:3px;
`
export const Terminput = Styled.input.attrs({
    type: "checkbox"
})`
    margin: 0 12px 0 0;
    width:23px;
    height:22px;
`

export const ButtomSubmit = Styled.button`
    display:block;
    background:#9256DB;
    background:${props => props.waitAnswer ? "#c8aaed" : "#9256DB"};

    width: 274px;
    height: 48.22px;
    border: none;
    border-radius: 39px; 


    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    &:after {
        background:red; 
    }
    &:active {
        background:rgba(185, 130, 252); 
        cursor:grab;

    }
`