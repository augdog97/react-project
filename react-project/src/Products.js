/** Importing the Component from the react library */
import React, {Component} from 'react';
import Product from './Product';


/*   A.
 * Making a component that renders Products
 * Class components must have a render () 
 * HTML has to be wrapped in at least one root element (a div)
 */

/*   B.
        * Create the listProdcuts variable which loops through each of the products using .map.
        * As the .map loops it returns a list item for each of the products
        * the key attribute is only for when creating list items so no error will be thrown. Its for when items are created, edited, or deleted
        */

/* C.
create a getProducts method and hardcoded the product values  */

/* B and D
D(2):
1.Passed in this.products function which loops thorugh each element and calls the function which returns a Product component for each product.
2.We are returned a new array of Product components which we assign to listProducts */

/* D(1).
  1.Decalaring the use of props from getProducts method
  2.this.products (lower in code) is used to loop through the products in the object to render them
  3.We set data equal to the product object from Product.js to render the information from the getProducts
  */

/*  E.
 * 1. Anthing left of "?" is the if and after the ":" is the else
    2. If the length of listProducts is greater than 0 then show the products ELSE
    3. show message "No products to display"
 */

class Products extends Component /* A. */{
  

    /*D. */
    products;
    
    constructor(props) {
        super(props);
        this.products = this.getProducts();
    }

   
   
    /*C.*/getProducts() {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 5,
                numOfReviews: 2
            }];
    }

    render () {

         /*B.*/const listProducts = this.products.map((product) =>
         /*D*/ <  Product key={product.productName}> data={product}</Product>   
            ); 
        return (
            <div>
                {/* E. */}
                {listProducts.length > 0 ? (
                    <ul>{listProducts}</ul>
                ): (
                        <ul>No Products to display</ul>
                )}
                 </div>
        );
    }
}

export default Products;