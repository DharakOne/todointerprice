import React from 'react'

function ModeLarge() {
    return (

        <React.Fragment>
            <SearchBar upDateFilterOut={upDateFilterOut} />
            <ContainerTable>

                <BarTitle>
                    {[" ", "Name", "Company", "Assigned", "End Date", "Done", ""].map((e, index) => <Title key={index}> {e}</Title>)}
                </BarTitle>

                {table.Tasks.map((props, index) => <TaskBar key={index}  {...props} />)}
            </ContainerTable>
        </React.Fragment>
    )
}