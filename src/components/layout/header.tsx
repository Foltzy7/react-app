import { Box, Button, Flex, Heading, Link, Spacer, Switch, Text } from "@chakra-ui/react";
import React from "react";
import { Route } from "react-router-dom";
import "./header.scss";
import Home from "../../pages/home";
import About from "../../pages/about";

// @ts-ignore
const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export default function Header() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    // <Box w="100%">
    <Flex
      as="nav"
      align="right"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      w="100%"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Chakra UI
        </Heading>
      </Flex>
      <Spacer />
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
          <Switch>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Box>
    </Flex>
  );
}
