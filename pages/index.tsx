import { Box } from "@mui/material";

import Background from '../public/background.jpg';
import Apps from "../src/containers/Apps";
import MenuBar from "../src/containers/MenuBar";

const Home = () => {
  return (
    <Box sx={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      background: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'fixed'
    }}>
      <Box sx={{
        height: '100%'
      }}>
        <Apps />
      </Box>

      <Box sx={{
        bottom: '0px',
        position: 'fixed'
      }}>
        <MenuBar />
      </Box>
    </Box>
  );
};

export default Home;