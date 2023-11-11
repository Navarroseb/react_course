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
        const actualValue = this.state.initialValue;
        if (actualValue === 15){
            console.log("Llegamos a 15")
            console.log("Dejamos de sumar")
            return;

        }
        this.setState({ initialValue: actualValue + 1 })
    }

    decrement(){
        const actualValue = this.state.initialValue;
        if(actualValue === 0){
            console.log("No puedes setar el valor en menos de 0")
            return;
        }
        this.setState({ initialValue: actualValue - 1 })
    }

    changeDeveloperName(name){
        this.setState({ developer: name});
    }


    render() {
        const {initialValue, developer} = this.state;
        const {subject} = this.props;

        return (
            <>
                <hr />
                <h2>Contador</h2>
                <p>El valor del contador es: <strong>{initialValue}</strong></p>
                <button onMouseOver={() => this.increment()} >Incrementar</button>
                <button onClick={() => this.decrement()} >Restamos</button>
                <button onClick={() => this.changeDeveloperName("Peter")} >Cambiar nombre del developer</button>


                <em>El developer es: {developer} y le encanta programar en {subject}</em>
                <hr />
            </>
        )
    }
}

export default Counter;