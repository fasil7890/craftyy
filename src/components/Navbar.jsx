import { Box, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiWhatsappFill } from "react-icons/ri";
function Navbar() {
  const phoneNumber = "+918921267046";
  return (
    <div>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "10px",
          borderRadius: "50%",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          textDecoration: "none",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <RiWhatsappFill />
      </a>

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
