import { Toast } from "@base-ui/react/toast";
import { useEffect } from "react";

import {
    toastDescriptionVariants,
    toastCloseIconVariants,
    toastViewportVariants,
    toastContentVariants,
    toastActionVariants,
    toastTitleVariants,
    toastCloseVariants,
    toastRootVariants,
    toastIconVariants,
    toastBodyVariants,
} from "../variants";

export function ToastList({ source }: UI.Toast.Host.Props) {
    const { toasts, add, close } = Toast.useToastManager();

    useEffect(
        () =>
            source.connect({
                transport: {
                    add: ({ action, ...options }) =>
                        add({
                            ...options,
                            actionProps: action ? { children: action.label, onClick: action.onClick } : undefined,
                        }),
                    close,
                },
            }),
        [source, add, close],
    );

    return (
        <Toast.Portal>
            <Toast.Viewport aria-label="Notifications" className={toastViewportVariants()}>
                {[...toasts].reverse().map((toast) => (
                    <Toast.Root key={toast.id} toast={toast} swipeDirection="right" className={toastRootVariants()}>
                        <Toast.Content className={toastContentVariants()}>
                            <span aria-hidden="true" className={toastIconVariants()}>
                                {toast.type}
                            </span>
                            <div className={toastBodyVariants()}>
                                <Toast.Title className={toastTitleVariants()} />
                                <Toast.Description className={toastDescriptionVariants()} />
                                {toast.actionProps && <Toast.Action className={toastActionVariants()} />}
                            </div>
                            <Toast.Close aria-label="Dismiss notification" className={toastCloseVariants()}>
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 16 16"
                                    className={toastCloseIconVariants()}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5">
                                    <path d="m4 4 8 8M12 4l-8 8" />
                                </svg>
                            </Toast.Close>
                        </Toast.Content>
                    </Toast.Root>
                ))}
            </Toast.Viewport>
        </Toast.Portal>
    );
}
