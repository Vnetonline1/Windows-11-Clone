import { Search } from '@mui/icons-material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Avatar, Box, Button, Grid, IconButton, InputAdornment, Popover, PopoverProps, Stack, TextField, Typography, useTheme } from "@mui/material";

import { pinnedApps, recommendedApps } from '../../utils/apps';

interface MenuLabelProps {
  title: string,
  buttonText: string
}

const Menu = ({ open, anchorEl, onClose }: PopoverProps) => {

  const theme = useTheme();

  const MenuLabel = ({ title, buttonText }: MenuLabelProps) => (
    <Stack
      direction='row'
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        px: {
          xs: 2,
          lg: 4
        },
        mb: 2
      }}
    >
      <Typography variant='body2'>
        {title}
      </Typography>

      <Button
        size='small'
        variant='contained'
        disableElevation
        sx={{
          ...theme.typography.caption,
          textTransform: 'inherit',
          backgroundColor: 'rgba(255,255,255,0.1)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)'
          }
        }}
      >
        {buttonText}
      </Button>
    </Stack>
  )

  const MenuContent = () => (
    <Stack sx={{
      width: '94vw',
      height: '94vh',
      [theme.breakpoints.up('md')]: {
        width: 640,
        height: '100%',
        maxHeight: '94vh',
        overflow: 'scroll'
      }
    }}>
      {/* Apps Section */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          border: '1px solid #525252'
        }}
      >
        {/* Search Bar */}
        <TextField
          variant='filled'
          fullWidth
          size='small'
          hiddenLabel
          placeholder='Type here to search'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search
                  fontSize='small'
                  sx={{
                    transform: 'rotateY(180deg)',
                    WebkitTransform: 'rotateY(180deg)'
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            pb: {
              xs: 2,
              lg: 4
            },
            "& .MuiFilledInput-root": {
              background: 'rgba(0,0,0,0.3)'
            }
          }}
        />

        {/* Pinned Text */}
        <MenuLabel
          title='Pinned'
          buttonText='All Apps'
        />

        {/* Pinned Apps */}
        <Stack
          direction='row'
          flexWrap='wrap'
          sx={{
            maxHeight: '33vh',
            mb: 3,
            overflow: 'scroll',
            [theme.breakpoints.up('md')]: {
              overflow: 'scroll',
              justifyContent: 'flex-start',
              mb: 3,
              height: '100%',
              maxHeight: '32vh'
            }
          }}
        >
          {
            pinnedApps.map((app, index) => (
              <Button
                key={index}
                sx={{
                  height: 85,
                  minWidth: 98,
                  width: 98,
                  color: '#FFF',
                  textTransform: 'inherit',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <Stack
                  spacing={1}
                  direction='column'
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    style={{
                      height: 30
                    }}
                  />
                  <Typography variant='caption'>
                    {app.name}
                  </Typography>
                </Stack>
              </Button>
            ))
          }
        </Stack>

        {/* Recommended Text */}
        <MenuLabel
          title='Recommended'
          buttonText='More >'
        />

        {/* Recommended Apps */}
        <Grid
          container
          direction='row'
          flexWrap='wrap'
          justifyContent='flex-start'
          spacing={2}
          sx={{
            maxHeight: '25vh',
            px: 2,
            overflow: 'scroll',
            [theme.breakpoints.up('md')]: {
              overflow: 'scroll',
              px: 2,
              height: '100%',
              maxHeight: '22vh'
            }
          }}
        >
          {
            recommendedApps.map((app, index) => (
              <Grid
                item
                key={index}
                xs={12}
                lg={6}
              >
                <Button
                  fullWidth
                  sx={{
                    py: 1,
                    px: 2,
                    justifyContent: 'flex-start',
                    textTransform: 'inherit',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    spacing={2}
                  >
                    <img
                      src={app.icon}
                      alt={`${app.name} app icon`}
                      style={{
                        height: 30
                      }}
                    />
                    <Stack
                      alignItems='flex-start'
                    >
                      <Typography
                        variant='caption'
                        sx={{
                          color: '#FFF'
                        }}
                      >
                        {app.name}
                      </Typography>
                      <Typography
                        variant='caption'
                        sx={{
                          color: theme.palette.primary.light
                        }}
                      >
                        Recently Added
                      </Typography>
                    </Stack>
                  </Stack>
                </Button>
              </Grid>
            ))
          }
        </Grid>
      </Box>

      {/* User Data Section */}
      <Stack
        justifyContent='center'
        sx={{
          px: 3,
          height: 60,
          backgroundColor: theme.palette.secondary.dark,
          border: '1px solid #525252',
          borderTop: 'none',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            px: {
              xs: 2, lg: 4
            }
          }}
        >
          <Button
            sx={{
              flexDirection: 'row',
              alignContent: 'center',
              gap: 0.5,
              textTransform: 'inherit',
              color: '#FFF',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            <Avatar
              sx={{
                mr: 1.5,
                width: 30,
                height: 30
              }}
            />
            <Typography>LeoHPC</Typography>
          </Button>

          <IconButton size='small'>
            <PowerSettingsNewIcon fontSize='small' />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }}
    >
      <MenuContent />
    </Popover>
  );
};

export default Menu;