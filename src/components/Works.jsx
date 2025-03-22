import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import wrk1 from "../assets/wrk11.jpeg";
import wrk2 from "../assets/wrk12.jpeg";
import { useNavigate } from "react-router-dom";

function Works() {
  const naviagte = useNavigate();
  const images = [wrk1, wrk2];
  return (
    <div>
      <Box mt={2}>
        <Divider />
      </Box>
      <Box mt={3}>
        <Typography
          variant="h3"
          fontWeight={"bold"}
          textAlign={"center"}
          color="#333300"
        >
          Our Works
        </Typography>
        <Typography variant="h5" fontFamily={"cursive"} textAlign={"center"}>
          Timeless frame albums, crafted with elegance to turn your memories
          into art.
        </Typography>
        <Grid2 mt={2} container spacing={2} sx={{ rowGap: { xs: 2, md: 0 } }}>
          {images.map((image, idx) => {
            console.log(image);
            return (
              <Grid2 key={idx} size={{ xs: 12, md: 6 }}>
                <Box
                  height={"250px"}
                  sx={{ width: { xs: "90vw", md: "100%" } }}
                >
                  <img
                    src={image}
                    alt="works"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Grid2>
            );
          })}
        </Grid2>
        <Stack mt={3} alignItems={"center"}>
          <Button
            onClick={() => naviagte("/gallery")}
            sx={{
              backgroundColor: "lightgray",
              width: "250px",
              padding: "15px",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: "20px",
              color: "#333300",
            }}
          >
            Explore Our Works
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Works;
