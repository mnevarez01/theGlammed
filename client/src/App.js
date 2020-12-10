import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Carousel from './components/Carousels'
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron'


function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <Jumbotron />
      <Footer fixed='bottom' />
    </>
    // <Router>
    //   <Route path="/" component={PresentationPage} />


    //   {/* <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/" component={Books} />
    //       <Route exact path="/books" component={Books} />
    //       <Route exact path="/books/:id" component={Detail} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </div> */}
    // </Router>
  );
}

export default App;
