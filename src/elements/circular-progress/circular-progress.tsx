import { cn } from "cn";

import { circularProgressStyles } from "./styles";

export function CircularProgress({ value, label, children, className, ...props }: UI.CircularProgress.Props) {
    const progress = Math.min(100, Math.max(0, value));

    return (
        <div
            {...props}
            role="progressbar"
            aria-label={label}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            className={cn(circularProgressStyles.root, className)}>
            <svg viewBox="0 0 48 48" aria-hidden="true" className={circularProgressStyles.ring}>
                <circle
                    cx="24"
                    cy="24"
                    r="21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={circularProgressStyles.track}
                />
                <circle
                    cx="24"
                    cy="24"
                    r="21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset={100 - progress}
                    strokeLinecap="round"
                />
            </svg>
            <span className={circularProgressStyles.content}>{children}</span>
        </div>
    );
}
