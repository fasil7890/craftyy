import { Box, Button, Container, Divider, Stack } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import Works from "./Works";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div>
      <Container maxWidth="xl">
        <Navbar />
      </Container>
      <Container>
        <Box py={2}>
          <Hero />
        </Box>
        <Box py={2}>
          <Works />
        </Box>
        <Box py={2}>
          <ContactUs />
        </Box>
        <Box py={2}>
          <Footer />
        </Box>
        <Divider />
      </Container>
    </div>
  );
}

export default HomePage;
