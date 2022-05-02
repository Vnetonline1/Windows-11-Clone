import { Button, Stack, Typography } from "@mui/material";
import { useDrag } from "react-dnd";

interface AppProps {
  id: string;
  left: number;
  top: number;
  name: string;
  icon: string;
}

const AppButton = ({ id, left, top, name, icon }: AppProps) => {

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'box',
      item: {
        id,
        left,
        top
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [id, left, top]
  );

  if (isDragging) {
    return <div ref={drag} />
  }

  return (
    <Button
      ref={drag}
      sx={{
        position: 'absolute',
        left, top, color: '#FFF',
        textTransform: 'inherit',
        textShadow: '1px 4px 8px rgba(0,0,0,0.1)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.1)'
        }
      }}
    >
      <Stack
        spacing={1}
        alignItems='center'
        sx={{
          maxWidth: 50,
          textAlign: 'center'
        }}
      >
        <img
          src={icon}
          alt={`${name} app icon`}
          style={{
            height: 30
          }}
        />
        <Typography variant='caption'>{name}</Typography>
      </Stack>
    </Button>
  )
}

export default AppButton