import React, { Component } from 'react'
import './product.css'

class Product extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render() {
        return(
            <article className="repeat-holder">
                <img width="50%" src={this.props.obj.image_url} className='img-repeat'></img>
                <article className="repeat-text">{this.props.obj.name}</article>
                <article className="repeat-text">${this.props.obj.price}</article>
                <button className="delete" onClick={() => {this.props.deleteItem(this.props.obj.product_id)}}>DELETE</button>
                <button className="edit" >EDIT</button>
            </article>
        )
    }
}
 
export default Product