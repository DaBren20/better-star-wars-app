import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Menu inverted>
            <Container>
                <Link to="/">
                    <Menu.Item name="star wars API"></Menu.Item>
                </Link>
                <Link to="/people">
                    <Menu.Item name="People"></Menu.Item>
                </Link>
                <Link to="/planets">
                    <Menu.Item name="Planets"></Menu.Item>
                </Link>
            </Container>
        </Menu>
    </div>
  )
}

export default Navbar