import { IconCheck, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StepsProps{
    labels:string[]
    children:any
    permitedStepsNext?:boolean[]
    labelAction?:string
    onAction?: () => void
}
export default function Steps(props: StepsProps){
    const [currentStep, setCurrentstep] = useState(0);
    function nothingStepPrevious(){
        return currentStep === 0;
    }
    function nothingStepNext(){
        return currentStep === props.labels.length - 1;
    }
    function stepPrevious(){
        if(nothingStepPrevious()) return;
        setCurrentstep(currentStep - 1);
    }
    function stepNext(){
        if(nothingStepNext()) return;
        setCurrentstep(currentStep + 1);
    }
    function renderLabels(){
         return (
            <div className="flex  gap-4">
             {props.labels.map((label, index) => {
               const isActive = index === currentStep;
               return (
                    <div key={index} className={`flex items-center gap-2 ${index === currentStep ? 'text-blue-500' : 'text-gray-500'}`}>
                        <span className={`w-6 h-6 flex items-center justify-center rounded-full 
                            ${isActive ? 'bg-white text-black font-bold' : 'bg-zinc-700 text-zinc-400'}
                            `}>
                            {index + 1}
                        </span>
                        <span className={ isActive ? 'text-white':'text-zinc-600'}>{label}</span>
                    </div>
                )
             }
               
             )}
            </div>
            )
    }
    const hasPermitedStepsNext = props.permitedStepsNext?.[currentStep] ?? true;
    
    return(
        <div className="flex-1 flex flex-col gap-10">
            <div>
                {renderLabels()}
            </div>
            <div className="mt-4">
                {props.children[currentStep] ?? props.children}
            </div>
            <div className="flex gap-3">
                <button 
                    onClick={stepPrevious} 
                    className={`flex gap-1 items-center button
                        ${nothingStepPrevious() ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={nothingStepPrevious()}>
                        <IconChevronLeft size={20} />
                        <span>Anterior</span>
                </button>
                {props.onAction && nothingStepNext()  ? (
                    <button 
                        onClick={props.onAction}
                        disabled={!hasPermitedStepsNext} 
                        className={`flex gap-1 items-center button bg-yellow-500 text-black
                        ${!hasPermitedStepsNext ? 'cursor-not-allowed opacity-50' : ''}
                        `}>
                            <span>{props.labelAction ?? 'Finalizar'}</span>
                            <IconCheck size={20} />
                    </button>
                ) : (
                        <button 
                            onClick={stepNext} 
                            className={`flex gap-1 items-center button
                                ${nothingStepNext() || !hasPermitedStepsNext ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={nothingStepNext() || !hasPermitedStepsNext}>
                                <span>Próximo</span>
                                <IconChevronRight size={20} />
                        </button>
                )
                    }
            </div>
        </div>
    )
}