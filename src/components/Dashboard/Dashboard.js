import React, { Component } from 'react'
import Product from '../Product/Product'
import './dashboard.css'
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    deleteItem = id => {
        axios
          .delete(`/api/products/${id}`)
          .then(res => {
           this.props.didMount()
          })
          .catch(err => console.log(`brkn`));
      };

    render() {
        let { inventory } = this.props
        console.log('DASH', inventory)
        return(
            <div className='dash-holder'>{this.props.inventory.map(obj => {
                return (<div>
                     < Product obj={obj} deleteItem={this.deleteItem}/>
                </div>)
            })}
            </div>
        )
    }
}

export default Dashboard