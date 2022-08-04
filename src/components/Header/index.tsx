import { AppBar, Avatar, Box, Button, Stack, useTheme } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { AboutMe } from '../SobreMim';
import {Link} from 'react-scroll';

export function Header() {
  
  const [open, setOpen] = useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };
    
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  return (
    <>
      <Box>
        <AppBar position='fixed'>
          <Container  maxWidth="lg" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(2)
          }}>
            <Box>
              <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFlEZJyb6PTrg/profile-displayphoto-shrink_800_800/0/1638469233171?e=1664409600&v=beta&t=rCJB48CQTmfAaA4ds0vJK4QXa7DNbL6dWa1RegjTtjU">GJ</Avatar>
            </Box>
            <Stack direction="row" spacing={2}>
              <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                <Button>Home</Button>
              </Link>
              <Button onClick={handleClickOpen}>Sobre</Button>
              <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>
                <Button>Experiência</Button>
              </Link>
              <Link to="projetos" spy={true} smooth={true} offset={50} duration={500}>
                <Button>Projetos</Button>
              </Link>
            </Stack>
          </Container>
        </AppBar>
      </Box>
      <AboutMe open={open} onClose={handleClose}  />
    </>
  );
}