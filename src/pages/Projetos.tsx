import { Box, Button, Card, CardContent, CardMedia, Stack, Typography, useTheme } from '@mui/material';
import foodApp from '../assets/images/FoodApp.jpg';

export function Projetos() {
  const theme= useTheme();
  
  return (
    <Box  maxWidth="lg" margin="50px auto" >
      <Box>
        <Typography  letterSpacing="5px" fontWeight="bold" fontSize="6rem" margin=" 2rem 0" >Projetos</Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box>
          <Box className='images-project'>
            <img id='projetos' height="300px"  src={foodApp} alt="" />
          </Box>
          <Box>
            <Stack  spacing={2}>
              <Typography fontWeight="bold">FoodApp</Typography>
              <Typography color={theme.palette.text.secondary}>Projeto Desenvolvido para simular um sistema de Delivery</Typography>
              <Typography mb="1rem !important">Tecnologias utilizadas no projeto: React Js, Html e Css Modules</Typography>
            </Stack>
          </Box>
          <Button target="_blank" href='https://food-app-chi-blue.vercel.app/' variant="outlined">Visualizar</Button>
        </Box>
      </Box>
    </Box>
  );
}