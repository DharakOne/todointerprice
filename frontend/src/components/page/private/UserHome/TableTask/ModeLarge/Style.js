import Styled from "styled-components"
import IconStyle from "../../../../../utils/IconStyle"


export const ContainerTable = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:84.35%;
    min-height: 430px;
`

//Task Title
export const BarTitle = Styled.div`
    display:grid;
    grid-template-columns: 50px 1.5fr 1.5fr 1.5fr 1.5fr 1fr 1fr;
    justify-items:center;
    align-items:center;

    height:47px;
    width:100%;


    border-bottom: 1px solid #DBDBDB;

`
export const Title = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    color: #000000;
`

//TaskBar 



export const IconRotate = Styled(IconStyle)`
    transform:${(props) => `rotate(${props.Rotate})`};
`
export const  TaskContainerMain =Styled.div`
    width:100%;
`


export const TaskContainer = Styled.div`
    display:grid;
    grid-template-columns: 50px 1.5fr 1.5fr 1.5fr 1.5fr 1fr 1fr;
    justify-items:center;
    align-items:center;
    width:100%;
    height:47px;
    border-bottom: 1px solid #DBDBDB;
`

export const Typography = Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: ${(props) => props.weight ? "bold" : "normal"};
    font-size: 16px;
    line-height: 19px;
    color:${(props) => props.color ? props.color : "#363636;"} ;
`

export const ToolContainer = Styled.div`
    display:flex;
    width:46%;
    justify-content:space-between;
`
export const CheckInput =Styled.input.attrs({ type: "checkbox" })`
    
`
//Task Description

export const TaskDescriptionBackground = Styled.div`
    background: #FAFAFA;
    width:100%;
    display:flex;
    padding:25px;
`

export const IconTask = Styled.div`
    padding:18px 18px;
    background: #25D366;
    height:min-content;
    width:min-content;
   
    font-weight: bold;
    font-family: Roboto;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
`

export const ContainerDescription = Styled.div`
    margin-right:27px;
    margin-left:20px;
    display:flex;
    flex-direction:column;
`
export const TitleDescreption = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

`
export const ParagraphDescription = Styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    font-size: 16px;
    color: #000000;
`


