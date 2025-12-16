import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CountUp from 'react-countup';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import "../Dash.css";
import GeoChart from "../Chart/GeoChart";
import PieChart from "../Chart/PiChart";
import HbarChart from "../Chart/HbarChart";

function Home() {
  return (
    <div className="bgcolor">
      <Box height={80} />

      <Grid container spacing={2}>
        {/* ================= LEFT SECTION ================= */}
        <Grid item xs={6}>
          <Grid container spacing={2}>
            {/* Column 1 */}
            <Grid item xs={6}>
              <Stack spacing={2}>
                <Card
                  sx={{ height: 150, width:180 }}
                  style={{
                    background:
                      "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography sx={{ fontSize: 18 }}>Visitors
                       <Typography variant="h4"> <CountUp delay={0.2} end={22000} duration={0.7} /></Typography>
                    <Typography variant="body2" sx={{ color: "#ccd1d1" }}>
                      Since last week
                    </Typography>
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{ height: 120 }}
                  style={{
                    background:
                      "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,196,1) 100%)",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">New Data</Typography>
                    <Typography variant="h4"> <CountUp delay={0.4} end={32000} duration={0.7} /></Typography>
                     <Typography variant="body2">Since last week </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={6}>
              <Stack spacing={2}>
                <Card
                  sx={{ height: 150, width:180 }}
                  style={{
                    background:
                      "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,196,1) 100%)",
                    color: "white",
                  }}
                >
                  <CardContent>
                 
                    <Typography variant="h5">Visitor</Typography>
                    <Typography variant="h4"sx={{ color: "#ccd1d1" }}>
                     <CountUp delay={0.3} end={12000} duration={0.4} />
                    </Typography>
                    <Typography variant="body2">Since last week </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{ height: 120 }}
                  style={{
                    background:
                      "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">Visitor</Typography>
                    <Typography variant="h4"> <CountUp delay={0.4} end={2000} duration={0.5} /></Typography>
                    <Typography variant="body2">Since last week </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* ================= RIGHT TOP ================= */}
        <Grid item xs={6}>
          <Card sx={{ height: 300, width:470 }}>
            <CardContent>
              <HbarChart />
            </CardContent>
          </Card>
        </Grid>

        {/* ================= GEO + PIE ================= */}
        <Grid item xs={6}>
          <Card sx={{ height: 350,width:450 }}>
            <CardContent>
              <GeoChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{ height: 350,width:400 }}>
            <CardContent>
              <PieChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
