import { Box, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div>
      <Box sx={{ padding: { xs: 0, md: "20px" } }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack height={100} width={100}>
            <img src={logo} alt="logo" />
          </Stack>
          <Stack direction={"row"} gap={3}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              to={"/gallery"}
            >
              Gallery
            </NavLink>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default Navbar;
