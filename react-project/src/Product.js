import React, { Component } from 'react';
import Rating from './Ratings';
import { Media } from 'react-bootstrap';

/* A. 
  1. initializing the props
  2. using the bootstrap media tag to create a props data tag for the product information
  3. call the Rating component and setting the rating value and the number of reviews value*/
class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={this.props.data.imageUrl}
                        alt="Image"
                    />
                    <Media.Body>
                        <h5>{this.props.data.productName}</h5>
                        {this.props.data.releasedDate}
                        <Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews} />
                        <p>{this.props.data.description}</p>
                    </Media.Body>
                </Media>
            </div>
        );
    }
}

export default Product;