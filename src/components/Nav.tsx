import { Link, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav: React.FC = () => {
  const { email } = useAuth();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "lightblue",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Link underline="none" color="inherit" component={RouterLink} to="/">
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </Link>
          <Link  underline="none" color="inherit" component={RouterLink} to="/charts">
            <Typography variant="h6" color="inherit">
              Charts
            </Typography>
          </Link>
          {email ? (
            <Link
              style={{ marginLeft: "auto" }}
              underline="none"
              color="inherit"
              component={RouterLink}
              to="/logout"
            >
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Link>
          ) : (
            <Link
              style={{ marginLeft: "auto" }}
              underline="none"
              color="inherit"
              component={RouterLink}
              to="/login"
            >
              <Typography variant="h6" color="inherit">
                Login
              </Typography>
            </Link>
          )}
        </Toolbar>
      </Box>
    </>
  );
};

export default Nav;
