import { Container, Skeleton } from "@mui/material";
import React from "react";

const Skeletons = () => {
    
 return ( 
    <Container maxWidth="xxl">
        <Skeleton variant="rounded" width={"100%"} height={100}/>
        <Skeleton variant="rounded" width={"100%"} height={100}/>
        <Skeleton variant="rounded" width={"100%"} height={100}/>
        <Skeleton variant="rounded" width={"100%"} height={100}/>
    </Container>
     
    )
 
    
}

export default Skeletons;