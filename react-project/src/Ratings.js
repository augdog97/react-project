
import React, { Component } from 'react';
import {IoIosStar, IoIosStarOutline} from 'react-icons/io';


class Rating extends Component {

    /*  A.
    Set intial state locally with a Constructor */
    /*always call constructor with props 
    2. Super(props) initializes a component instance which React.Component then gives the instance functionality that includes state management
    3. after super is invoked we can set state
    4. state is set to an object with an attribute of rating which is assigned the value from the props*/
    
    constructor(props) /* A. */ {
        super(props);
        this.state = {rating: this.props.rating};
    }
    /*   B.
     * 1.assigning ratingValue ot the onClick event
     * 2.When the user clicks on  a one start it assigns the rating to 1 
     * 3. Use .bind to bind the function to the component and value
     */

     /* C.
        Decalaring the handleClick Function
      */
    handleClick(ratingValue) {
        this.setState({ rating: ratingValue });
    }
    render() {
        return (
            <div style={styles.starStyle}>
                <h1>
                    Rating: { /* A. */ this.state.rating}
                </h1>
                {this.state.rating >= 1 ? (
                    < IoIosStar onClick={ /* B */ this.handleClick.bind(this,1)}/>
                ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 1)}/>)}
                {this.state.rating >= 2 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 2)} />
                ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 2)} />)}
                {this.state.rating >= 3 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 3)} />
                ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />)}
                {this.state.rating >= 4 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 4)} />
                ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 4)} />)}
                {this.state.rating >= 5 ? (
                    <IoIosStar onClick={this.handleClick.bind(this, 5)} />
                ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 5)} />)}
                {/*Adding number of reviews prop to display next to the rating */}
                { this.props.numOfReviews}
            </div>
        );
    }
}


export default Rating;

const styles = {
    starStyle: {
        color: 'orange'
    }
}