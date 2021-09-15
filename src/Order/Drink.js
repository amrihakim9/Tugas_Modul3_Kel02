import React, { Component } from "react";
class Drink extends Component {
    state = {
        order: 0
    }
    componentDidMount(){
        alert(`Proses mount dimulai!`)
    }
    tambahOrder = () => {
        this.setState((state) => { return { order: state.order + 1 } })
    }
    kurangiOrder = () => {
        this.setState((state) => { return { order: state.order - 1 } })
    }
    componentWillUnmount(){
        alert('Yuk dipesan minumannya :)')
    }
    render() {
        return (
            <div>
                <p>1. Ice Bubble = Rp. 5.000</p>
                <p>2. Juz Alpukat = Rp. 10.000</p>
                <p>3. Juz Jeruk = Rp. 8.000</p>
                <h4>Anda memesan sebanyak {this.state.order} minuman</h4>
                <p>(Catatan : Anda tidak dapat memesan kurang dari 0)</p>
                <button onClick={this.tambahOrder}>Tambah</button>
                <button onClick={this.kurangiOrder}>Kurang</button>
                <br/>
                <p>{this.state.order}</p>
            </div>
        );
    }
}
export default Drink;
