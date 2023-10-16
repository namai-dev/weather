import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

const { Box, Typography } = require("@mui/material");

const App = () => {
  return (
    <Box>
      <Header />
      <LandingPage />
    </Box>
  );
};

export default App;
