import { Box, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import MenuButton from "../../components/MenuButton";
import { menuIcon, taskbarApps } from "../../utils/apps";
import Menu from "../Menu";

interface InitialProps {
  numberOfApps: number;
  currentDate: string;
  currentTime: string
}

export default function MenuBar({ numberOfApps, currentDate, currentTime }: InitialProps) {

  /* const [numberOfApps, setNumberOfApps] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState(''); */
  const [anchorEl, setAnchorEl] = useState(undefined);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(undefined);
  }

  /* useEffect(() => {
    setNumberOfApps(taskbarApps.length);

    const date = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    setCurrentDate(date);

    const time = new Date();
    var currentHours = String(time.getHours());
    if (Number(currentHours) < 10) currentHours = '0' + currentHours;
    var currentMinutes = String(time.getMinutes());
    if (Number(currentMinutes) < 10) currentMinutes = '0' + currentMinutes;
    setCurrentTime(`${currentHours}:${currentMinutes}`);
  }, []); */

  return (
    <Box sx={(theme) => ({
      width: '100vw',
      height: 50,
      backgroundColor: `${theme.palette.secondary.main}D9`,
      backdropFilter: 'blur(2px)'
    })}>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Box
          alignItems='center'
          justifyContent='center'
          sx={{
            p: 0,
            m: 0
          }}
        >
          <Stack
            direction='row'
            alignItems='center'
            spacing={0.5}
            sx={{
              height: 50,
              pl: 1.8
            }}
          >

            <MenuButton onClick={handleClick}>
              <img
                src={menuIcon}
                alt="Windows start icon"
                style={{ height: 23 }}
              />
            </MenuButton>

            <ImageList
              cols={numberOfApps}
              sx={{
                width: '100%',
                maxWidth: '60vw',
                overflow: 'scroll',
                mr: 10
              }}
            >
              {
                taskbarApps.map((app, index) => (
                  <ImageListItem key={index}>
                    <MenuButton>
                      <img
                        src={app.icon}
                        alt={`${app.name} app icon`}
                        style={{ height: 24 }}
                      />
                    </MenuButton>
                  </ImageListItem>
                ))
              }
            </ImageList>

          </Stack>
        </Box>

        <Stack
          direction='column'
          alignItems='center'
          sx={{
            mr: 1.8
          }}
        >
          <Typography
            sx={{
              color: '#FFF',
              fontSize: 14
            }}
          >
            {currentTime}
          </Typography>
          <Typography
            sx={{
              color: '#FFF',
              fontSize: 14
            }}
          >
            {currentDate}
          </Typography>
        </Stack>
      </Stack>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </Box>
  );
};

export async function getServerSideProps() {
  const numberOfApps = taskbarApps.length;

  const date = new Date();

  const currentDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  var currentHours = String(date.getHours());
  if (Number(currentHours) < 10) currentHours = '0' + currentHours;
  var currentMinutes = String(date.getMinutes());
  if (Number(currentMinutes) < 10) currentMinutes = '0' + currentMinutes;
  const currentTime = `${currentHours}:${currentMinutes}`;

  return {
    props: {
      numberOfApps,
      currentDate,
      currentTime
    },
  }
}