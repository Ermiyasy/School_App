import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

import { Card } from "@mui/material";
import './Admin_Home.css'
function preventDefault(event) {
  event.preventDefault();
}

function Logout() {
  return (
    <>
    <h1>
     Logout
     </h1>
    </>
  );
}
export default Logout;
