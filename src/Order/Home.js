import { Component } from "react";
import React from "react";
import Food from "./Food";
import Drink from "./Drink";
class Home extends Component {
    state = {
        komponen1: false,
        komponen2: false
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Food /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Menu Makanan</button>
                <div style={{ border: "0.5px solid black" }}>
                </div>
                {this.state.komponen2 ? <Drink /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Menu Minuman</button>
            </div>
        );
    }
}
export default Home;