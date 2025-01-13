// import * as React from 'react';
// import { emphasize, styled } from '@mui/material/styles';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Chip from '@mui/material/Chip';
// import HomeIcon from '@mui/icons-material/Home';
// import NewExecution from '../NewExecution/NewExecution.tsx'
// import ExecutionResult from '../ExecutionResult/ExecutionResult.tsx'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ConfirmationFile from '../Confirmation/ConfirmationFile.tsx';
// import { Link, useLocation } from "react-router-dom";
// import SelectModel from '../ModelExecution/SelectModel.tsx';

// const StyledBreadcrumb = styled(Chip)(({ theme }) => {
//   const backgroundColor =
//     theme.palette.mode === 'light'
//       ? theme.palette.grey[100]
//       : theme.palette.grey[800];
//   return {
//     backgroundColor,
//     height: theme.spacing(3),
//     color: theme.palette.text.primary,
//     fontWeight: theme.typography.fontWeightRegular,
//     '&:hover, &:focus': {
//       backgroundColor: emphasize(backgroundColor, 0.06),
//     },
//     '&:active': {
//       boxShadow: theme.shadows[1],
//       backgroundColor: emphasize(backgroundColor, 0.12),
//     },
//   };
// }) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

// function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// export default function BreadcrumbsTab() {
//   const [view , setView] = React.useState();

//   const handleClickButton=(el:any)=>{
//     if(el == 'NewExecution'){
//       setView(<NewExecution/>)
//     }
//     else if( el ==='confirmation'){
//       setView(<ConfirmationFile/>)
//     }
//     else if(el ==='selectModel'){
//       setView(<SelectModel/>)
//     }
//     else if(el ==='result'){
//       setView(<ExecutionResult/>)
//     }
   
//   }
//   return (
//     <div role="presentation" >
//       <Breadcrumbs aria-label="breadcrumb">
//         <StyledBreadcrumb
//           component="a"
//           href="#"
//           label="New Execution"
//           icon={<HomeIcon fontSize="small" />}
//           onClick={() => handleClickButton('NewExecution')}
//         />
//         <StyledBreadcrumb component="a" href="#" label="Confirmation"  onClick={() => handleClickButton('confirmation')}/>
//         <StyledBreadcrumb component="a" href="#" label="Select Model" onClick={() => handleClickButton('selectModel')}/>

//         <StyledBreadcrumb
//           label="Optimized Result"
//           // deleteIcon={<ExpandMoreIcon />}
//           onClick={() => handleClickButton('result')}
//         />
//       </Breadcrumbs>
//       {view}
//     </div>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from "react";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewExecution from '../NewExecution/NewExecution.tsx'
import ConfirmationFile from '../Confirmation/ConfirmationFile.tsx'
import SelectModel from '../ModelExecution/SelectModel.tsx';
import ExecutionResult from '../ExecutionResult/ExecutionResult.tsx'
const steps = ['Upload CSV File', 'CSV File Confirmation', 'Select Model', 'Download Harmonized Data'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const [view , setView] = React.useState(<NewExecution/>)

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    
    setActiveStep(activeStep+1)
   
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  useEffect(() => {
   
    if(activeStep == '0'){
      setView(<NewExecution/>)
    }
    if(activeStep == '1'){
      setView(<ConfirmationFile/>)
    }
    if(activeStep == '2'){
      setView(<SelectModel/>)
    }
    if(activeStep == '3'){
      setView(<ExecutionResult/>)
    }
  },[activeStep]);
  

  const handleBack = () => {
    // setView('  ')
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    if(activeStep ==0){
      setView(<NewExecution/>)
    }
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
            
             {view}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))} */}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
