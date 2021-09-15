import React, { Component } from "react";
class Food extends Component {
    state = {
        food: "*Klik Lainnya...*"
    }
    componentDidMount(){
        alert(`Proses mount dimulai!`)
    }
    ChangeFood = () => {
        this.setState((state) => { 
            if (state.food === "1. Sayur-sayuran = Rp. 5.000") {
                return {food : "2. Cabe = Rp. 3.000"}          
            } else {
                return {food: "1. Sayur-sayuran = Rp. 5.000"}                 
            }
        })
    }
    componentWillUnmount(){
        alert('Selamat memesan makanan')
    }
    render() {
        return (
            <div>                         
                <p>1. Burger = Rp. 12.000</p>  
                <p>2. Kebab = Rp. 15.000</p>
                <p>3. Nasi Ayam = Rp. 13.000</p>
                <p>4. Nasi Lele = Rp. 11.000</p>
                <button onClick={this.ChangeFood}>Lainnya...</button>
                <br />
                <p>{this.state.food}</p>
            </div>
        );
    }
}
export default Food;
