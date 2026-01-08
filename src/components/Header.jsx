import {Box, Typography, Button, useMediaQuery, useTheme, AppBar, Container, Toolbar, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const toggleDrawerOpen = (open) => () => {
    setDrawerOpen(open);
  };
  const links = [
    { text: "Home", href: "home" },
    { text: "Works", href: "works" },
    { text: "contact", href: "contact" },
  ];

  return (
    <>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Battle
            </Typography>

            {isMobile && <IconButton color="inherit"><MenuIcon onClick={toggleDrawerOpen(true)} /> </IconButton>}
            
            {!isMobile && (links.map((link, index)=>
              <Button key={index} color="inherit">
                {link.text}
              </Button>
            ))}
            {/* <Button variant="text" color="inherit">
              Home
            </Button>
            <Button variant="text" color="inherit">
              Works
            </Button>
            <Button variant="text" color="inherit">
              Contact
            </Button> */}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        aria-hidden="false"
        onClose={toggleDrawerOpen(false)}
      >
        <Box
          sx={{ width: "150px" }}
          role="presentation"
          onClick={toggleDrawerOpen(false)}
        >
          <List color="black">
            {links.map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  color="black"
                  component="a"
                  href={link.href}
                  onClick={toggleDrawerOpen(false)}
                  aria-label={`Navigate to ${link.text}`}
                >
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
