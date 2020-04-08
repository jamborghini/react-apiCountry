import React, { useState } from "react";
import "./Nav.css";
import { Paper, Tabs, Tab} from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";

function Nav() {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = useState(0);

  return (
    <div>
      <Paper elevation={4}>
        
        <Tabs
          className="Nav"
          onChange={handleChange}
          value={value}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          
        >
          <Tab
            icon={<HomeRoundedIcon />}
            label="Home"
            to="/"
            component={Link}
          />
          <Tab
            icon={<FlagRoundedIcon />}
            label="Countries"
            to="/countries"
            component={Link}
          />
          
        </Tabs>
      </Paper>
    </div>
  );
}

export default Nav;
