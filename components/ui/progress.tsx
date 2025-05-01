"use client";

import * as React from "react";

interface ProgressProps {
    value?: number; // entre 0 et 100
}

export const Progress = ({ value = 0 }: ProgressProps) => {
    const clamped = Math.min(100, Math.max(0, Number(value) || 0));

    console.log("Progress value:", value, "→ clamped:", clamped);

    return (
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${clamped}%` }}
            />
        </div>
    );
};

