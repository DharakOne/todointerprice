import Styled from "styled-components"


export const ContainerSingIn = Styled.div`
    width:100%;
    background: radial-gradient(54.05% 102.79% at 50% 50%, #9256DB 0%, #3A5CB4 100%);
    display:flex; 
    justify-content:center;
`

export const Form=Styled.form`
    width:400px;
    background:white;
    margin: 120px 0 120px;
    padding: 40px 0 40px;
    border-radius:10px;
`
 
export const Title=Styled.div`
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
`

export const ContentForm=Styled.div`
    margin: 20px 20px 0;
    padding:10px;
    display:flex;
    flex-direction:column;
`

export const InputContainer=Styled.div`
    margin-bottom:20px;
    display:grid;
    grid-template-rows: auto auto;
    grid-row-gap: 15px;
`

export const InputPassword = Styled.input.attrs({
    type: 'password',
})`
    width:100%;
    background: #EFEFEF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);
    height: 40px;
`
export const Input=Styled.input`
    width:100%;
    background: #EFEFEF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);
    height: 40px;
`

export const InputLabel=Styled.label`
    
`

export const ButtomSumit=Styled.div.attrs({
    type: 'submit',
})`
    color:black;
    text-decoration: none;    
    padding: 10px 20px 10px;
    background: rgb(57, 241, 165);
    border-radius:10px;
    width:min-content;
    font-weight: bold;   
    margin: 20px 0 10px;
    cursor: pointer;
`

export const BlockErrorContainer=Styled.div`
    background:rgb(255, 143, 143);
    color:rgb(231, 34, 34);
    padding:3px;
    font-weight: bold;   
`