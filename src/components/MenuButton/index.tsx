import { Button, ButtonProps } from "@mui/material"

interface MenuButtonProps extends ButtonProps {
  children?: React.ReactNode
}

const MenuButton = ({ children, ...rest }: MenuButtonProps) => {
  return (
    <Button sx={{
      height: 40,
      minWidth: 40,
      '&:hover': {
        backgroundColor: 'rgba(255,255,255, 0.1)'
      }
    }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default MenuButton