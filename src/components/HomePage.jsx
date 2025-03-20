import { Box, Button, Container, Divider, Stack } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Works from "./Works";

function HomePage() {
  return (
    <div>
      <Container maxWidth="xl">
        <Box px={3} py={2}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack height={100} width={100}>
              <img src={logo} alt="logo" />
            </Stack>
            <Stack direction={"row"}>
              <Button>Home</Button>
              <Button>Gallery</Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
      <Container>
        <Box px={3} py={2}>
          <Hero />
        </Box>
        <Box px={3} py={2}>
          <Works />
        </Box>
        <Divider />
      </Container>
    </div>
  );
}

export default HomePage;
