import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { FaCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <Divider />
      <Box mt={2} mb={3}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
          color="#333300"
        >
          <FaCopyright />
          <Typography textAlign={"center"}>Copyright reserved 2025</Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default Footer;
