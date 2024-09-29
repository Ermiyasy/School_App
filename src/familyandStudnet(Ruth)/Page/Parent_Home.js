import * as React from "react";
import Link from "@mui/material/Link";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Admin_Home.css'
import Calendar from "../Componet/Calendar"
import Table_Home from "../Componet/Table_Home";

function preventDefault(event) {
  event.preventDefault();
}

function Parent_Home() {
  return (
    <>
      <div className="home-main">
        <div className="cards">
          <div>
          <Card sx={{ minWidth: 400,maxHeight:350,borderRadius:"8px",backgroundColor:'#f9e489' }}>
            <CardMedia
              sx={{ height: 100 ,borderRadius:"2px"}}
              image="https://images.unsplash.com/photo-1598981457915-aea220950616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
              title="Student"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Payment Report
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               Termily payment status
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">More</Button>
              <Button size="small">Payment</Button>
            </CardActions>
          </Card>
          </div>
          {/* The Teacher Card */}
          <div>
          <Card sx={{ minWidth: 400,maxHeight:350,borderRadius:"8px" ,backgroundColor:'#d4d3fd '}}>
            <CardMedia
              sx={{ height: 100 ,borderRadius:"2px"}}
              image="https://plus.unsplash.com/premium_photo-1682888442432-a1bc427c0d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D"
              title="Teacher"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Attendance
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               weekly attendance report
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">More</Button>
              <Button size="small">Attendance</Button>
            </CardActions>
          </Card>
          </div>
          {/* The Parent Card */}
          <div>
          <Card sx={{ minWidth: 400,maxHeight:350,borderRadius:"8px" ,backgroundColor:'#f9e489' }}>
            <CardMedia
              sx={{ height: 100 ,borderRadius:"2px"}}
              image="https://media.istockphoto.com/id/950786472/photo/mother-and-pupil-and-kids-holding-hands-going-to-school-in-first-class-with-schoolbag-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Q13_yd8y6rhQNRRyvXa9gvFx5IRgBIELoEJKhRlm20="
              title="Parent"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Grade Report
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               termal grade report
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">More</Button>
              <Button size="small">Grade Report</Button>
            </CardActions>
          </Card>
          </div>
        </div>
        
      </div>
    
    </>
  );
}
export default Parent_Home;
