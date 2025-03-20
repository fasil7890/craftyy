import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import wrk1 from "../assets/wrk11.jpeg";
import wrk2 from "../assets/wrk12.jpeg";
import wrk3 from "../assets/wrk7.jpeg";
import wrk4 from "../assets/wrk8.jpeg";

function Works() {
  const images = [wrk1, wrk2, wrk3, wrk4];
  return (
    <div>
      <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
        Our Works
      </Typography>
      <Typography variant="h5" fontFamily={"cursive"} textAlign={"center"}>
        Timeless frame albums, crafted with elegance to turn your memories into
        art.
      </Typography>
      <Grid2 mt={2} container columnSpacing={2}>
        {images.map((image, idx) => {
          console.log(image);
          return (
            <Grid2 key={idx} size={{ xs: 6, md: 3 }}>
              <Box height={"300px"} width={"100%"}>
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
      <Stack mt={3} alignItems={'center'} >
        <Button sx={{backgroundColor:'lightgray',width:'250px',padding:'15px',fontWeight:'bold',textTransform:'capitalize',fontSize:'20px'}}>Explore Our Works</Button>
      </Stack>
    </div>
  );
}

export default Works;
