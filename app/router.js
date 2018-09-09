import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from "containers/Home";
import Example from "containers/Example";
import Header from "components/Header";
import Footer from "components/Footer";

const Background = styled.div`
  background-color: #555;
`
const RootRouter = () => (
  <Router>
    <Background>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/example" component={Example} />
      <Footer />
    </Background>
  </Router>
);

export default RootRouter;