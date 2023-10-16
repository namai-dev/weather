import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Thika from "../landSections/images/Thika.webp";
import Gatundu from "../landSections/images/Gatudu.jpeg";
import Juja from "../landSections/images/Juja.jpeg";
import Ruiru from "../landSections/images/Ruiru.jpeg";
import "../../App.css";
const weatherData = [
  {
    id: 1,
    location: "Kiambu, Juja",
    temperature: "22°C",
    condition: "Partly Cloudy",
    image: Juja,
  },
  {
    id: 2,
    location: "Kiambu, Gatundu",
    temperature: "25°C",
    condition: "Sunny",
    image: Gatundu,
  },
  {
    id: 3,
    location: "Kiambu, THika",
    temperature: "18°C",
    condition: "Rainy",
    image: Thika,
  },
  {
    id: 4,
    location: "Kiambu, Ruiru",
    temperature: "18°C",
    condition: "Rainy",
    image: Ruiru,
  },
  // Add more weather data as needed
];

const Weather = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards shown on larger screens
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Show only one card on smaller screens
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: "5%" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Current Weather
        </Typography>
      </Box>
      <Slider {...settings}>
        {weatherData.map((weather) => (
          <Card key={weather.id} style={{ marginRight: "10px" }}>
            <CardMedia
              component="img"
              height="140"
              image={weather.image} // You can use an image related to the weather if needed
              alt={weather.location}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {weather.location}
              </Typography>
              <Typography variant="body1">
                Temperature: {weather.temperature}
              </Typography>
              <Typography variant="body1">
                Condition: {weather.condition}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Weather;
