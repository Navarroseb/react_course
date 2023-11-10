import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: 0,
            developer: this.props.developerName
        }
    }

    componentDidMount(){
        console.log("%c Se monto el componente ", "background: red")
    }

    componentDidUpdate(){
        console.log("%c Se actualizó el componente ", "background: yellow")
    }

    componentWillUnmount(){
        console.log("%c Se desmonto el componente ", "background: blue")
    }

    increment(){
        console.log("Vamos a incrementar el value")
    }


    render() {
        const {initialValue, developer} = this.state;
        const {subject} = this.props;

        return (
            <>
                <hr />
                <h2>Contador</h2>
                <p>El valor del contador es: <strong>{initialValue}</strong></p>
                <button onClick={this.increment} >Incrementar</button>
                <em>El developer es: {developer} y le encanta programar en {subject}</em>
                <hr />
            </>
        )
    }
}

export default Counter;