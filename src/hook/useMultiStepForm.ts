import React, { ReactElement, useState } from 'react'



export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const nextStep = ()=>{
        setCurrentStepIndex(prev => prev >= steps.length -1? prev : prev + 1);
    }

    const backStep = ()=> {
        //return nothing if the there is no more step backward;)
        setCurrentStepIndex(prev => prev<= 0? prev: prev-1)
    }


    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        backStep,
        nextStep,
    }
}
