/* Importing the react component from the react library*/
import React, { Component } from 'react'; 
import Products from './Products';
import GitHub from './GitHub';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Product from './Product';





/** A.
 *  1. Imported the Browser Router, Route, and Switch.
 *      - BrowserRouter contains a list of Route components. The routes tell the router which componetns to render when the windows location changes.
 *   
 *  2. Render the Header Component in the app component
 * 
 *  3. Each Router call has two properties. Path: the unique name we assign the route, component: The associated component.
 *    - When the browsers location matches the path, the component will be displayed.
 *    - example: if the path containes github then react will create an instance of the gitHubComponent and render it in the DOM.
 
 *    - We specify exact in the Home path because without it paths are matched to a path if the URL we are on contains the path. This means if someone navigates to /github both / and /github will render. 

 *    - /* is a wildcard, if someone naviagates to a page that is not is  not valid, it navigates to the NotFound Component 
  
 *    - We want to specify more specific paths first (/github) and then more inclusive paths later (/).
 
 *     - Wrapping routes in a Switch component is an additional method to make sure only one component renders. Switch only displates the first route that matches. This assures that only one of the routes will lbe rendered. 
 
 * 4. Home and NotFound components basic components that display a message. This is to illustrate navigating to different views.

 * 5. The Navbar componet is taken from the react-bootstrap template. We are creating a dropdown with two items. 
        - We provide 2 navigation items in the navbar with two Navitems
        - The React Router will navigate the user to the target route specified by finding the route definition with that name. It then creates an instance of the component and renders it. 
 */
class App extends Component { 
  render() {
    return (
    <div>   
    {/* A(1) */ }  <Header />
    </div>
    );
   } 
  }


export default App;

 class Header extends Component {
  render(){
    return (
      <BrowserRouter>
      <div>
        {/* A(5) */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-mavbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/github">GitHub</Nav.Link>
              <Nav.link href="https://www.02designstudio.com">Main Portfolio</Nav.link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          {/* A(3) */}
          <Route path="/github" component={GitHub} />
          <Route exact path="/" component={Home} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

/* A(4) */
class Home extends Component {
  render() {
    return (
      <div> 
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return (
      <div>
        Not Found
      </div>
    )
  }
}
