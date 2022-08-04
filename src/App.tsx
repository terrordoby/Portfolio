import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import { theme } from './themes';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { AboutMe } from './components/SobreMim';
import VerticalTabs from './components/Experience';
import '../src/styles/global.css';
import { Projetos } from './pages/Projetos';



export function App() {
  return (
    
    <ThemeProvider theme={theme}>      
      <CssBaseline />
      <Header />
      <Home />
      <Projetos />     
    </ThemeProvider>
    
  );
}