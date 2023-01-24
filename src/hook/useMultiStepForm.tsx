import React, { ReactElement, useState } from 'react'

export function useMultiStepForm(steps: ReactElement) {

    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = ()=>{
        setCurrentStepIndex(i => {
            //return nothing if the there is no more step forward.
            if(i >= steps.length - 1) return i; 
            return i + 1;
        })
    }

    const back = ()=> {
        setCurrentStepIndex(i =>{
            //return nothing if the there is no more step backward
            if (i <= 0 ) return i; 
            return i - 1;
        })
    }

    const goTo = (index: number) => {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back,
    }
}
