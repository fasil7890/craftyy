import { Box, Divider, Grid2, Typography } from "@mui/material";
import React from "react";
import hero1 from "../assets/hero2.jpg";

function Hero() {
  return (
    <div>
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            p={3}
          
            height={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection:'column'
            }}
          >
            <Box mb={2}>
              <Typography fontWeight={"bold"} textAlign={"center"} variant="h3">
                Handmade with Love
              </Typography>
              <Typography fontWeight={"bold"} textAlign={"center"} variant="h3">
                Start Crafting Today!
              </Typography>
            </Box>
            <Divider />
            <Box mt={2}>
              <Typography
                fontFamily={"cursive"}
                textAlign={"center"}
                variant="h5"
              >
                Preserve your precious memories in style with our elegant frame
                albums. Perfect for showcasing your favorite moments, they blend
                beauty and functionality for a timeless keepsake.
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box height={"500px"} width={"500px"} p={3}>
            <img
              height={"100%"}
              width={"100%"}
              src={hero1}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Hero;
