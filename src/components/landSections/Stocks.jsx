import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import MyImage from "../landSections/images/maize.jpg";
import Potato from "../landSections/images/potato.jpg";
import Tomato from "../landSections/images/Tomato.webp";
const cropStockData = [
  {
    id: 1,
    name: "MAIZE",
    image: MyImage,
    quantity: "1000 kg",
    price: "Ksh220/kg",
  },
  {
    id: 2,
    name: "Potato",
    image: Potato,
    quantity: "800 kg",
    price: "Ksh120/kg",
  },
  {
    id: 3,
    name: "Tomato",
    image: Tomato,
    quantity: "1200 kg",
    price: "Ksh80/kg",
  },
];

const Stock = () => {
  return (
    <Box sx={{ marginTop: "4%" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Recently Added Stock
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {cropStockData.map((crop) => (
          <Grid item xs={12} sm={6} md={4} key={crop.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={crop.image}
                alt={crop.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {crop.name}
                </Typography>
                <Typography variant="body1">
                  Quantity: {crop.quantity}
                </Typography>
                <Typography variant="body1">Price: {crop.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stock;
