import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Container,
  Divider,
  Hidden,
  Link,
  List,
  ListItem,
  makeStyles,
  SwipeableDrawer,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '/resume.pdf' },
];
const AppHeader = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Hidden xsDown>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div
            onClick={() => setOpen(false)}
            onKeyPress={() => setOpen(false)}
            role="button"
            tabIndex={0}
          >
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem key={item.name}>
                <Link
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </header>
  );
};

export default AppHeader;
