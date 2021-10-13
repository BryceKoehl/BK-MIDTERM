import { Link } from 'gatsby';
import React from "react";
import 'semantic-ui-css/semantic.css';
import { Menu, Container, Header, Card, Rating, Icon, Grid } from "semantic-ui-react";

const gamePage = () => {
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

            <Card.Group>
                <Card>

                    <Card.Content>
                        <Card.Header>Tic-Tac-Toe</Card.Header>
                        <Card.Meta>3 in a row</Card.Meta>
                        <Rating color="yellow" icon='star' defaultRating={2} maxRating={5} />
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Checkers</Card.Header>
                        <Card.Meta>Jumping race</Card.Meta>
                        <Rating color="yellow" icon='star' defaultRating={3} maxRating={5} />
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Snakes & Ladders</Card.Header>
                        <Card.Meta>Snake!</Card.Meta>
                        <Rating color="yellow" icon='star' defaultRating={4} maxRating={5} />
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Yahtzee</Card.Header>
                        <Card.Meta>Feeling lucky?</Card.Meta>
                        <Rating color="yellow" icon='star' defaultRating={5} maxRating={5} />
                    </Card.Content>
                </Card>


            </Card.Group>

        </React.Fragment>

    )
};

export default gamePage;
