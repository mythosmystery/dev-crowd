import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary color="purple">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <br />
      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />{" "}
        <br />
        <Menu.Item
          name="Create Account"
          active={activeItem === "create account"}
          onClick={handleItemClick}
          as={Link}
          to="/createaccount"
        />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
