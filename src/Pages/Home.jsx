import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccordionDash from '../Components/Accordian';
import BarChart from '../Chart/BarChart';



function Home() {
  return (
    <>
    <div className="bgcolor">
         <Box height={80}/>
          <Box sx={{ display:"flex" }}/>
    
        <Grid container spacing={2}>
        <Grid size={8}>
          <Stack spacing={2} direction="row">
         <Card
  sx={{ minWidth: "49%", height: 150 }}
  style={{ background:"rgb(40,38,70)",
    background: "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",
    color: "white"
  }}
>

        <CardContent>
           <div>
              <CreditCardIcon />
            </div>
          <Typography gutterBottom variant="h5" component="div">
           
            $500.00
          </Typography>
          <Typography gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1" }}>
            Total Order
          </Typography>
        
        </CardContent>
    </Card>
    
      <Card
  sx={{ minWidth: "49%", height: 150 }}
  style={{ background:"rgb(53,138,148)",
    background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,196,1) 100%)",
    color: "white"
  }}
>

        <CardContent>
           <div>
              <ShoppingBagIcon />
            </div>
          <Typography gutterBottom variant='h5' >
            $900.00
          </Typography>
         
          <Typography gutterBottom variant="body2" component="div" sx={{ color:"#ccd1d1" }}>
            Total Earnings
          </Typography>
         
        </CardContent>
    </Card>
    </Stack>
        </Grid>
        <Grid size={4}>
        <Stack spacing={2} >
           <Card style={{
    background: "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",
    color: "white"
  }}
>

  
        
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
        </Stack>

        </Grid>
        </Grid>
         <Box height={20}/>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Card sx={{ height: 60 + "vh" }}>
        <CardContent>
         <BarChart />
        </CardContent>
    </Card>
        </Grid>
        <Grid size={4}>
           <Card sx={{ height: 60 + "vh" }}>
        <CardContent>
        <AccordionDash />
        </CardContent>
    </Card>
        </Grid>
        </Grid>
     </div>
    </>
  );
}

export default Home;
