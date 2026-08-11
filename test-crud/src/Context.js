import React, { Component } from 'react'
import { rowData } from './appdata';

const ProductContext = React.createContext();

export default class Context extends Component {
    state = {
        Alldata: rowData
    }
    render() {
        // console.log(this.state.Alldata,"yes")
        return (
            <div>
                <ProductContext.Provider
                    value={{ ...this.state }}
                >
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { Context, ProductConsumer }