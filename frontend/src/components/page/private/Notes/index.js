import React, { useEffect } from "react"

function Note() {
    useEffect(
        function () {
            const getData=async ()=> {
                try {
                    const response = await fetch("https://7000-a8fdd359-8631-4bc6-88ab-a414bc9b7346.ws-us03.gitpod.io/");  // Fetch the resource
                    const text = await response.text(); // Parse it as text
                   const data = JSON.parse(text); // Try to parse it as json
                    console.log(data)
                    // Do your JSON handling here
                } catch (err) {
                    // This probably means your response is text, do you text handling here
                    console.log("An error has ocurred")
                    console.log(err)
                }
            }
            getData()

        }, [])
    return (
        <div>
            <h1>
                My first task.
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
                porro quae rerum laborum! Ex fuga quaerat tenetur porro non necessitatibus
                at, animi, cumque, beatae dolores incidunt ipsam eos doloremque.
            </p>
        </div>
    )
}

export default function MyNotes() {
    return (
        <div>
            <Note />
        </div>
    )
}