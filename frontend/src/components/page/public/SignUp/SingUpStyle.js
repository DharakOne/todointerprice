import Styled from "styled-components"
import Container from "../../../utils/Container"


export const ContainerSingUp = Styled(Container)`
    background: radial-gradient(54.05% 102.79% at 50% 50%, #9256DB 0%, #3A5CB4 100%);
`

export const ContainerForm = Styled.form`
    margin-left: 71px ;
    margin-right:71px;
    @media (max-width: 450px) {
        margin-left: 20px;
        margin-right:20px;
    }
`

export const Form = Styled.form`
    border-radius: 34px;
    width: 656px;
    height: 600px;
    padding-top:30px;
    padding-bottom:15px;
    background: #FBFBFB;
    margin: 69px auto 69px auto;
    @media (max-width: 730px) {
        max-width:500px;
        height: auto;
        padding-bottom:45px;
    }
    @media (max-width: 570px) {
        max-width:400px;
    }
    @media (max-width: 450px){
        max-width:300px;
    }

`


export const FormC = Styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;
    row-gap: 18px;

    @media (max-width: 730px) {
        grid-template-columns:1fr; 
    }
      
`
export const ContainerInput = Styled.div`
    grid-column:${props => props.gColumn ? props.gColumn : "auto"};
   
`
export const Input = Styled.input`
    type: ${(props) => props.type ? props.type : "text"};
    width:100%;
    background: #EFEFEF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);
    height: 40px;
`
export const InputPassword = Styled.input.attrs({
    type: "password",
    autocomplete: "new-password"
})`
    width:100%;
    background: #EFEFEF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);
    height: 40px;
`

export const InputSelect = Styled.input.attrs({
    type: 'radio',
})`
    margin:${(props) => { props.margin ? props.margin : "0" }};

`

export const InputName = Styled.div`
    margin-bottom: 13px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    font-style: normal;
`

export const TitleForm = Styled.div`
    margin-left: 60px;
    margin-top: 40px;
    margin-bottom: 43px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
    
    @media (max-width: 404px) {
        margin-left:auto;
        margin-right:auto;
        width:max-content;
    }

`

export const ButtomSubmit = Styled.div` 
    width: 163px;
    height: 39px;
    margin-top:46px;
    background: ${props => props.active ? 'rgb(80, 99, 148)' : '#5988FF'};
    border-radius: 7px;
    display:flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
`

export const LabelButtom = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    cursor: pointer;
`

export const InputLabel = Styled.label`
`

export const BlockErrorContainer = Styled.div`
    background:rgb(255, 143, 143);
    color:rgb(231, 34, 34);
    padding:3px;
    font-weight: bold;  
    margin-top:20px; 
`