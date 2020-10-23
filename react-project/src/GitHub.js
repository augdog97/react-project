
import React, { Component } from 'react';
/*Axio is a promised based HTTP clinet for the browser and Node.js We use this to make ajax calls to the server */
import axios from 'axios';
import ReactLoading from "react-loading";
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

/* A. 
 *  1. Create a Github component and initialize the props constructor
    2. Set the is loading state to false becuase no call is being to GitHub in the start (Is for the loading icon animation), and  
        - initilize an empty data array.
        - create a search term state property for the term that the user will enter
        - Add bindings for the handlechange and handleSubmit methods of the form
    3.
    4. getGitHubData method with the searchterm param, we run a GET method on the github endpoint url + the searchterm param
    5. chain .then because axios is promised based and we log the response data items
    6. We set the state of isLoading to false in the githubdata methode to hide the loading icon. 
        - Assigned the return result to the data array. We do this by using data.items because this is how the array is structured in the JSON reponse
    7. We add a condition that only renders the div when isLoading is true
    8. We use the .map to repeat the media object for each user that we get from Github
    9. We then add javascript inside the {} in the template.
        - key. the user id is the list item that is changing
        - the link reference is the users html url
        - the source of the picture is the users avatar url 
        - body of the media tag has the users login and ID
    10. We then render the list of users to the user
    11. When the user submits the form we set the state of isLoading to true just before the call to the getGitHubData to show the loading icon 
        - We pass the state of searchterm into our github data method
    12. handleChange sets the tpyed in input to the state
    13. Create a form that runs the onSubmit method
        - creates a form controle which the value is the search term state
        - has a placeholder
        - runs the on change method when there is a change
 */

 /* A(1) */
class Github extends Component {
    /* A(1) */constructor(props) {
        super();
       /* A(2) */ this.state = {
            data: [],
            searchTerm: "",
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


  
    /* A(4/5) */ getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" +_searchTerm)
        .then(res => {
          /* A(6) */  this.setState({
                isLoading: false,
                data: res.data.items
            })
            console.log(res.data.items);
        });
    }
    render() {
        /* A(8) */
        const listUsers = this.state.data.map((user) => 
      /* A(9) */  <Media key={user.id}>
            <a href={user.html_url}>
                <img
                width={64}
                height={64}
                className="mr-3"
                src={user.avatar_url}
                alt="Generic placeholder"
                />
            </a>
            <Media.Body>
                <h5>
                    Login: {user.login}
                </h5>
                <p>
                    Id: {user.id}
                </p>
            </Media.Body>
        </Media>
        );

        return (
/* A(7) */ <div>
        {/* A(13) */}
            <Form inline onSubmit={this.handleSubmit}>
                <Form.Group controlId="formInlineName">
                    <Form.Control
                        type="text"
                        value={this.state.searchTerm}
                        placeholder="Enter Search Term"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>              
            <h3>GitHub Users Results</h3>
                {this.state.isLoading && 
                <ReactLoading type="spinningBubbles" color="#444"/> 
                }
               {/* A(10) */} {listUsers}
            </div>
        );
    }
    /* A(11) */
    handleSubmit(e) {
        e.preventDeault();
        this.setState({
            isLoading: true
        })
        this.getGitHubData(this.state.searchTerm);
    }

    /* A(12) */
    handleChange(e) {
        this.setState({searchTerm: e.target.value});
    }

}

export default Github;
