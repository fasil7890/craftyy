import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

function ContactUs() {
  const contact = [
    {
      title: "Email",
      content: "sidhabeeran@gmail.com",
      icon: <IoMail size={45} />,
    },
    {
      title: "Mobile",
      content: "8921267046",
      icon: <FaPhone size={45} />,
    },
    {
      title: "Location",
      content: "Vailathur,Ponmundam",
      icon: <MdLocationOn size={45} />,
    },
  ];
  return (
    <div>
        <Divider/>
        <Box mt={2}>
      <Typography mb={2} fontWeight={"bold"} textAlign={"center"} color="#333300" variant="h3">
        Contact Details
      </Typography>
      <Grid2 container spacing={2}>
        {contact.map((item, idx) => {
          return (
            <Grid2 key={idx} size={{ xs: 12, md: 4 }}>
              <Box
                p={3}
                borderRadius={3}
                color={"#333300"}
                fontWeight={"bold"}
                bgcolor={"lightgray"}
              >
                <Stack mb={1} alignItems={"center"}>
                  {item.icon}
                </Stack>
                <Typography
                  fontWeight={"bold"}
                  mb={1}
                  textAlign={"center"}
                  variant="h4"
                >
                  {item.title}
                </Typography>
                <Typography textAlign={"center"} variant="h5">
                  {item.content}
                </Typography>
              </Box>
            </Grid2>
          );
        })}
      </Grid2>
      </Box>
    </div>
  );
}

export default ContactUs;
