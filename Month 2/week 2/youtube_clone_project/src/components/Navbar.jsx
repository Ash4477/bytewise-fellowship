import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: "sticky", background: "#0f0f0f", top: 0, justifyContent: "space-between", zIndex: 10}}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h6" color="#fff" className="remove">
        FireTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar