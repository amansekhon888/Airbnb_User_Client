import { DoneRounded } from '@mui/icons-material';
import React from 'react';

interface StepLeftProps {
    status: 'done' | 'progress';
    step: number;
}
const StepLeft: React.FC<StepLeftProps> = ({ status, step }) => {
    const statusClasses = {
        done: "bg-[#34C759]",
        progress: "bg-[#FCAF3D]",
    };

    const bgColor = statusClasses[status] || "bg-[#FCAF3D]"; // Default to gray if status is invalid

    return (
        <div className="relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0.5 after:h-[calc(100%_-_80px)] after:bg-border1">
            <div className={`w-14 min-w-14 h-14 rounded-full ${bgColor} flex items-center justify-center`}>
                {status === "done" ?
                    <DoneRounded className="text-white !text-4xl" />
                    : <span className='text-3xl text-white'>{step}</span>
                }
            </div>
        </div>
    );
};

export default StepLeft;
