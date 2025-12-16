
import Sidebar from "../Components/Sidebar";
import NavaBar from "./Components/Navabar";
import Box from '@mui/material/Box';
import Productlist from "./products/productlist";


function Product() {
  return<>
  <div className="bgcolor">
    <NavaBar />
  <Box height={70}/>
  <Box sx={{ display:"flex" }}/>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1,p: 3 }} />
    <Productlist />
    
    </div>

   
   </>
}

export default Product;
