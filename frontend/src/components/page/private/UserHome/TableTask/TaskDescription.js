import React from "react"
import {TaskDescriptionBackground ,IconTask,ContainerDescription,TitleDescreption,ParagraphDescription} from "./Style" 



export default function TaskDescription({ open, Name, Description }) {

    function formTitle(string) {
        let formString = string.split(" ")
        let myformar=""

        if ((formString.length > 1)) {
            myformar=formString[0][0] + formString[1][0]
            return myformar
        }
        else {
            
            if (formString[0].length > 1) {
                 myformar = formString[0][0] + formString[0][1]
            }
            else{
                myformar = formString[0][0] 
            }
             
            return myformar
        }
    }

    if (!open) {
        return null

    }

    return (
        <TaskDescriptionBackground>
            <IconTask>{
                formTitle(Name)
            }</IconTask>
            <ContainerDescription>
                <TitleDescreption>{Name}</TitleDescreption>
                <ParagraphDescription>
                    {Description}
                </ParagraphDescription>
            </ContainerDescription>
        </TaskDescriptionBackground>
    )
}