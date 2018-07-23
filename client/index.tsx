import React from "react"
import ReactDOM from "react-dom"
import MonacoEditor from "react-monaco-editor"
import "./style.css"
import styled from "styled-components"

type State = {
    content: string
}

const ContainerDiv = styled.div`
    padding-top: 10px;
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

    constructor(props) {
        super(props)
        this.state = {
            content: ""
        }
    }

    removeSpace(input: string) {
        var lines = input.split('\n')
        var space = lines.map(x => x.match(/^\s+/g)).map(x => x === null ? 0 : x[0].length)
        var min = Math.min(...space)
        var regex = new RegExp(`^\\s{${min}}`, "g");
        var clean = lines.map(x => x.replace(regex, ''))
        return clean.reduce((a, b) => a + "\n" + b)
    }

    onChange = (value: string) => {
        this.setState({
            content: value
        })
    }

    onClick = (e) => {
        var content = this.state.content
        var newContent = this.removeSpace(content)
        this.setState({
            content: newContent
        })
    }

    render() {
        const language = "csharp"
        return (
            <ContainerDiv onClick={this.onClick}>
                <MonacoEditor onChange={this.onChange} value={this.state.content} options={options} language={language} width="600" theme="vs-dark"></MonacoEditor>
            </ContainerDiv>
        )
    }
}

var el = document.getElementById("root")
ReactDOM.render(<App />, el)