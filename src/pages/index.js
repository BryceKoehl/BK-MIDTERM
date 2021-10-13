import { Link } from 'gatsby';
import React from "react";
import 'semantic-ui-css/semantic.css';
import { Menu, Segment, Button } from "semantic-ui-react";

const HomePage = () => {
  function onHomeClick() {
    <Link to='/index'></Link>
  }
  function onGameClick() {
    <Link to='/game'></Link>
  }
  function onGroupClick() {
    <Link to='/group'></Link>
  }


  return (
    <React.Fragment>
      <Menu>
        <Menu.Item icon="home" onClick={onHomeClick} ></Menu.Item>

        <Menu.Item icon="gamepad" onClick={onGameClick} ></Menu.Item>

        <Menu.Item icon="group" onClick={onGroupClick} ></Menu.Item>
      </Menu>


      <Segment textAlign="center">
        <h1>Home</h1>
        <p>Some random text that needs not readen.</p>
        <Button color="green">Join now! </Button>
      </Segment>

      <h3>News</h3>
      <p>Somwhere random text</p>
      <Link to='/index' ></Link>
      <Link to='/game' ></Link>
      <Link to='/group' ></Link>

    </React.Fragment >
  );
};

export default HomePage;

