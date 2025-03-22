import { Box, Container, Divider, Grid2, Typography } from "@mui/material";
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import wrk1 from "../assets/wrk1.jpeg";
import wrk2 from "../assets/wrk2.jpeg";
import wrk3 from "../assets/wrk3.jpeg";
import wrk4 from "../assets/wrk4.jpeg";
import wrk5 from "../assets/wrk5.jpeg";
import wrk6 from "../assets/wrk6.jpeg";
import wrk7 from "../assets/wrk7.jpeg";
import wrk8 from "../assets/wrk8.jpeg";
import wrk9 from "../assets/wrk9.jpeg";
import wrk10 from "../assets/wrk10.jpeg";
import wrk11 from "../assets/wrk11.jpeg";
import wrk12 from "../assets/wrk12.jpeg";
import Footer from "./Footer";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const images = [
  //   { src: wrk1, width: 300, height: 300 },
  //   { src: wrk2, width: 300, height: 300 },
  //   { src: wrk3, width: 300, height: 300 },
  //   { src: wrk4, width: 300, height: 300 },
  //   { src: wrk5, width: 300, height: 300 },
  //   { src: wrk6, width: 300, height: 300 },
  //   { src: wrk7, width: 300, height: 300 },
  //   { src: wrk8, width: 300, height: 300 },
  //   { src: wrk9, width: 300, height: 300 },
  //   { src: wrk10, width: 300, height: 300 },
  //   { src: wrk11, width: 300, height: 300 },
  //   { src: wrk12, width: 300, height: 300 },
  // ];
  const images = [
    wrk1,
    wrk2,
    wrk3,
    wrk4,
    wrk5,
    wrk6,
    wrk7,
    wrk8,
    wrk9,
    wrk10,
    wrk11,
    wrk12,
  ];
  return (
    <div>
      <Container maxWidth="xl">
        <Navbar />
      </Container>

      <Container>
        <Box mt={2}>
          <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
            Gallery
          </Typography>
          <Box mt={2} mb={2}>
            <Divider />
          </Box>

          <Grid2 container spacing={2} justifyContent="center">
            {images.map((img, index) => (
              <Grid2 size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                <a href={img} style={{ display: "block" }}>
                  <img
                    src={img}
                    alt={`Gallery item ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </a>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <Box mt={2}>
          <Divider />
        </Box>
        <Footer />
      </Container>
    </div>
  );
}

export default Gallery;
