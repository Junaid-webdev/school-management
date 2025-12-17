import React, { useState } from "react";
import { Box, Tabs, Tab, Card, CardContent, Typography } from "@mui/material";

import NavaBar from "../Components/NavaBar";
import Sidebar from "../Components/Sidebar";
import Persnol from "../settings/Persnol";
import Profile from "../settings/Profile";

function Setting() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    
    <div className="bgcolor">
      <NavaBar />
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>          
      <Card>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Profile" />
              <Tab label="Personal" />
            </Tabs>

            <CardContent sx={{ pt: 2 }}>
              {value === 0 && <Profile />}
              {value === 1 && <Persnol />}
            </CardContent>
          </Card>
          </Box> 
            </div>
        </>
  );
}

export default Setting;
