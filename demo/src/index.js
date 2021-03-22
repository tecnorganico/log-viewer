import React, { Component } from "react";
import { render } from "react-dom";
import { Title } from "./styles";
import css from "./styles.css";
import LogViewer from "../../src";

class Demo extends Component {
    state = {
        logs: null
    };

    componentDidMount() {
        fetch(
            "https://gist.githubusercontent.com/abequar/f763693ba8dc6e0379c92bdfa9068c7b/raw/7b4789bfafbc7560766b65e41543bfeac6cf3efd/auth.log"
        )
            .then(response => response.text())
            .then(logs => this.setState({ logs }));
    }

    render() {
        const { logs } = this.state;

        return (
            <div className="container">
                <Title>Visualizador de Logs</Title>
                {logs ? <LogViewer logs={logs} /> : "Loading ..."}
            </div>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
