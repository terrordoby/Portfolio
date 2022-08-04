/* eslint-disable react/no-unescaped-entities */
import { Box, Card, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Fade, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, {useState} from 'react';

interface AboutMeProps {
  open: boolean;
  onClose: () => void;
}

export function AboutMe(props: AboutMeProps) {


  return (
    <Box>
      <Dialog maxWidth="lg" open={props.open} onClose={props.onClose}>
        <DialogTitle>Sobre Mim</DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center">
            <Box>
              <img height="200px" src='https://avatars.githubusercontent.com/u/90464524?s=400&u=3c9922032a042b9154328a132ec3a843feb356ac&v=4'>
              </img>
            </Box>
            <Box>
              <Typography  maxWidth="40rem" padding="0 1rem" lineHeight="1.8">Olá, sou estudante do terceiro semestre do curso de Análise e Desenvolvimento de Sistema e tenho o sonho de me tornar um grande desenvolvedor da area de front-end. Além de ser apaixonado por tecnologia, gosto muito de ter que aprender coisas novas no meu dia a dia. O ambiente de local ideal seria aquele onde eu pudesse conviver com pessoas que têm metas parecidades ou maiores que as minhas, até porque: "somos a media das pessoas que convivemos". </Typography>
            </Box>           
          </Box>
        </DialogContent>  
      </Dialog>
    </Box>
  );
}
