import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import GeoChart from '../Chart/GeoChart';



function Home() {
  return (
    <>
    <div className="bgcolor">
         <Box height={80}/>
          <Box sx={{ display:"flex" }}/>
     <Grid container spacing={2}>
       <Grid size={6}>
  <Grid container spacing={2}>

    {/* $500 COLUMN */}
    <Grid size={6}>
      <Stack spacing={2}>
        <Card
          sx={{ height: 150 }}
          style={{
            background: "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",
            color: "white"
          }}
        >
          <CardContent>
         
            <Typography variant="p" sx={{ textAlign:"center",fontSize:"20px" }}>Visitors</Typography>
            <Typography variant="h5" sx={{ color:"#ccc" }}>24,630</Typography>
           
            <Typography variant="body2" sx={{ color:"#ccd1d1" }}>
            Since Last week
            </Typography>
          </CardContent>
        </Card>

        {/* NEW BOX BELOW $500 */}
        <Card
          sx={{ height: 120 }}
          style={{
            background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,196,1) 100%)",
            color: "white"
          }}
        >
          <CardContent>
            <Typography variant="h6">New Data</Typography>
            <Typography variant="body2">Extra Info</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Grid>

    {/* $900 COLUMN */}
    <Grid size={6}>
      <Stack spacing={2}>
        <Card
          sx={{ height: 150 }}
          style={{
            background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,196,1) 100%)",
            color: "white"
          }}
        >
          <CardContent>
            <ShoppingBagIcon />
            <Typography variant="h5">$900.00</Typography>
            <Typography variant="body2" sx={{ color:"#ccd1d1" }}>
              Total Earnings
            </Typography>
          </CardContent>
        </Card>

        {/* NEW BOX BELOW $900 */}
        <Card
          sx={{ height: 120 }}
          style={{
            background: "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",
            color: "white"
          }}
        >
          <CardContent>
            <Typography variant="h6">New Data</Typography>
            <Typography variant="body2">Extra Info</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Grid>

  </Grid>
</Grid>

        <Grid size={6}>
        <Stack spacing={1} >
           <Card   sx={{ minWidth: "100%", height: 300 }} >

  
        
          <Stack spacing={2} direction="row">
            <div className="iconstyle">
               <StorefrontIcon />
            </div>
       
          <div className='paddingAll'>
           <span className='title'>$205k</span>
           <br />
          <span className='subtitle'>Total Income</span>
          </div>
          </Stack>
        
    </Card>
           <Card style={{ background:"rgb(53,138,148)",
    background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,196,1) 100%)",
    color: "white"
  }}
>
        

          
      
    </Card>
        </Stack>

        </Grid>
        <Grid size={8}>
        <Stack spacing={1} >
           <Card   sx={{ minWidth: "100%", height: 250 }} >
            <Stack spacing={2} direction="row">
        <CardContent>
            <GeoChart />
          </CardContent>
         
          </Stack>
        
    </Card>
           <Card style={{ background:"rgb(53,138,148)",
    background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,196,1) 100%)",
    color: "white"
  }}
>
        

          
      
    </Card>
        </Stack>

        </Grid>
        <Grid size={4}>
        <Stack spacing={1} >
           <Card   sx={{ minWidth: "100%", height: 250 }} >

  
        
          <Stack spacing={2} direction="row">
            <div className="iconstyle">
               <StorefrontIcon />
            </div>
       
          <div className='paddingAll'>
           <span className='title'>$205k</span>
           <br />
          <span className='subtitle'>Total Income</span>
          </div>
          </Stack>
        
    </Card>
           <Card style={{ background:"rgb(53,138,148)",
    background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,196,1) 100%)",
    color: "white"
  }}
>
        

          
      
    </Card>
        </Stack>

        </Grid>
        </Grid>
         <Box height={20}/>
      
     </div>
    </>
  );
}

export default Home;
