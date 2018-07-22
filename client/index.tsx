import React from "react"
import ReactDOM from "react-dom"
import MonacoEditor from "react-monaco-editor"
import "./style.css"
import styled from "styled-components"

type State = {

}

const ContainerDiv = styled.div`
    height:100%;
    display:flex;
    flex-direction: row;
`

const options = {
    automaticLayout: true,
    fontLigatures: true,
    fontSize: 14,
    minimap: {
        enabled: false
    }
} as any


export class App extends React.Component<{}, State> {

    render() {
        return (
            <ContainerDiv>
                <MonacoEditor options={options} language="csharp" width="600" theme="vs-dark"></MonacoEditor>
            </ContainerDiv>
        );
    }
}

var el = document.getElementById("root")
ReactDOM.render(<App />, el)