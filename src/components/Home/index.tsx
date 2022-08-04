import { Box, Button, ListItemIcon, Typography, useTheme } from '@mui/material';
import { Header } from '../Header';
import {FaLinkedin} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import { AboutMe } from '../SobreMim';
import { useState } from 'react';
import VerticalTabs from '../Experience';
import VerticalLinearStepper from '../Experience';

export function Home() {
  const theme = useTheme();
  return (
    <>
      <Box maxWidth="lg" margin="0 auto" height="100vh" display="flex" alignItems="center">
        <Box display="flex" alignItems="center" maxWidth="lg" width="100%" padding="0 24px" >
          <Box minWidth="700px">
            <Typography  letterSpacing={5} fontSize={28} gutterBottom>OLÁ, EU SOU </Typography> 
            <Typography letterSpacing={10} color={theme.palette.text.secondary} fontSize={28} gutterBottom>GABRIEL JORGE | </Typography>
            <Typography letterSpacing={5} fontSize={28} gutterBottom>DESENVOLVEDOR FRONT-END </Typography>
            <Button href='https://www.linkedin.com/in/gabriel-jorge-2548a3b7/' target="_blank" variant="outlined" size='large' startIcon={<FaLinkedin />}>
            Linkedin
            </Button>
            <Button href='https://github.com/terrordoby' target="_blank" variant="outlined" size='large' startIcon={<AiFillGithub />} sx={{
              marginLeft: theme.spacing(2)
            }}>Github</Button>
          </Box>
          <Box>
            <Box display="flex" justifyContent="center">
              <img width="450px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth="lg" margin="0 auto 13rem auto">
        <Typography  fontSize="6rem">Experiência</Typography>
        <VerticalLinearStepper />
      </Box>
    </>
  );
}