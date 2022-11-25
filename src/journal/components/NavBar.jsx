import { MenuBookOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar } from "@mui/material"


export const NavBar = () => {
  return (
    <AppBar 
        position="fixed"
        sx={{}}
        >
            <Toolbar>
                <IconButton>
                    <MenuBookOutlined/>
                </IconButton>
            </Toolbar>
    </AppBar>
  )
}
