import { Link } from 'gatsby';
import React from "react";
import 'semantic-ui-css/semantic.css';
import { Menu, Segment, Form, Button } from "semantic-ui-react";

const contactPage = () => {
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


            <h1>Contact Us!</h1>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.TextArea label='About' placeholder='Enter your message...' />
            </Form>
            <Button color="green">Join now! </Button>

        </React.Fragment>

    )
};

export default contactPage;