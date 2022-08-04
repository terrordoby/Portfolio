import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const steps = [
  {
    label: 'Softwell Solutions Outubro 2021 - Atual' ,
    description: 'Estágio em Desenvolvimento front-end com React js. Criação de um framework No-Code para usuários que não são da área de programação. Utilização de diversas bibliotecas, ex: React Maker Flow, Material UI, Styled Components etc.',
  },
  {
    label: 'Bios Informática Janeiro de 2017 - Fevereiro de 2018',
    description:
      'Estágio em Infraestutura e Manutenção de Computadores e redes ',
  },
];

export default function VerticalLinearStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box width="500px"  >
      <Stepper id='experience' activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label} 
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finalizar' : 'Continuar'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Voltar
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography color={theme.palette.text.secondary}>Todas etapas concluídas</Typography>
          <Button variant="contained" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Resetar
          </Button>
        </Paper>
      )}
    </Box>
  );
}
