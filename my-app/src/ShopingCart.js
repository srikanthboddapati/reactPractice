import React, { Component } from 'react';
import './shopingCart.css';

function Button({handleAction,data1,title}) {
    
    function action(event) {
        debugger;
        event.preventDefault();
        console.log(event.target.name);
        
       handleAction(event.target.name);
    }
    return <button name = {data1.id} onClick={action} value = {data1}>{title}</button>;
}

function ProductDetailList({list,count,addtocart,increment,decrement}) {
    // let listItems = props.list;
    // let count = props.count;
    function addtocart1(value1) {
        addtocart(value1);
    }
    function increment1(value1) {
        console.log(value1);
        increment(value1);
    }
    function decrement1(value1) {
        decrement(value1);
    }
    return (
        <div className="flex-container">
            <div className="">
                <img src={list.imageURL} />
                <p>{list.OfferText}</p>
            </div>
            <div className="">
                <h2>{list.Brandname}</h2>
                <p>{list.productname}</p>
                <p>{list.Quantity}</p>
                <p>{list.MRP}</p>
                <p>{list.Price}</p>
                <div className=" ">
                    <Button handleAction={addtocart1} data1 = {list}>ADD CART</Button>
                    <div className="">
                        {/* <button>plus</button>
                   <button>negative</button> */}
                        <Button handleAction={increment1} title={'+'} data1 = {list}></Button>
                        <p>{count}</p>
                        <Button handleAction={decrement1} title={'-'} data1 = {list}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

class ShopingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            total : 0,
            isLoading: false,
            products: []
        }
        this.handleAddtocart = this.handleAddtocart.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleAddtocart = (data2) => {
        debugger;
        let { products } = this.props;
        let  total = this.state.total;
        
        for(var i = 0; i < products.length; i++){
            console.log(products[i].id);
             if(products[i].id === parseInt(data2)){
                 total += products[i].MRP;
             }
        }
        console.log(products);
        console.log(data2);
        this.setState(
            { 
                count: this.state.count + 1 ,
                total: total
            }
            );
    }
    handleDecrement = (data2) => {
        let { products } = this.props;
        let total = this.state.total;
        for(var i = 0; i < products.length; i++){
           if(products[i].id === parseInt(data2)){
                if(total === 0){
                  total = 0
                }else {
                 total -= products[i].MRP;
                }
           }
        }
        console.log(data2);
        this.setState(
            { 
                count: this.state.count - 1,
                total: total
            }
            );
    }
    handleIncrement = (data2) => {
        let { products } = this.props;
        let total = this.state.total;
        for(var i = 0; i < products.length; i++){
          if(products[i].id === parseInt(data2)){
              total += products[i].MRP;
          }
        }
        console.log(data2);
        this.setState(
            { 
                count: this.state.count + 1 ,
                total: total
            }
            );
    }
    render() {
        let { products } = this.props;
        let count = this.state.count;
        let total = this.state.total;
        return (
            <div className = "">
            <ul> {
                products.map((data) =>
                    <li key = {data.id}>
                        {<ProductDetailList
                            list={data}
                            increment={this.handleIncrement}
                            decrement={this.handleDecrement}
                            addtocart={this.handleAddtocart}
                            count={count}
                        />
                        }
                    </li>
                )} </ul>
                <div className = "">
                    <div className = "">
                    <h3>Qty {count}</h3>
                    <h3>Total {total}</h3>
                    </div>
                    <div className = "">
                        <button>CHECKOUT</button>
                    </div>
                </div>
                </div>
        );
    }
}
export default ShopingCart;