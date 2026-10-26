import { Toast } from "@base-ui/react/toast";
import { useEffect } from "react";

import { CircleCheckIcon, CircleInfoIcon, CircleAlertIcon, CircleXIcon, CloseIcon } from "~ui/assets/icons";
import { ToastType } from "~ui/enums";

import {
    toastDescriptionStyles,
    toastCloseIconStyles,
    toastViewportStyles,
    toastContentStyles,
    toastActionStyles,
    toastTitleStyles,
    toastCloseStyles,
    toastRootStyles,
    toastIconStyles,
    toastBodyStyles,
} from "../styles";

const icons = new Map<string, typeof CircleInfoIcon>([
    [ToastType.SUCCESS, CircleCheckIcon],
    [ToastType.INFO, CircleInfoIcon],
    [ToastType.WARNING, CircleAlertIcon],
    [ToastType.ERROR, CircleXIcon],
]);

export function ToastList({ source, label = "Notifications", dismissLabel = "Dismiss notification" }: UI.Toast.Host.Props) {
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
            <Toast.Viewport aria-label={label} className={toastViewportStyles}>
                {[...toasts].reverse().map((toast) => {
                    const StatusIcon = icons.get(toast.type ?? ToastType.INFO) ?? CircleInfoIcon;

                    return (
                        <Toast.Root key={toast.id} toast={toast} swipeDirection="right" className={toastRootStyles}>
                            <Toast.Content className={toastContentStyles}>
                                <span aria-hidden="true" className={toastIconStyles}>
                                    <StatusIcon />
                                </span>
                                <div className={toastBodyStyles}>
                                    <Toast.Title className={toastTitleStyles} />
                                    <Toast.Description className={toastDescriptionStyles} />
                                    {toast.actionProps && <Toast.Action className={toastActionStyles} />}
                                </div>
                                <Toast.Close aria-label={dismissLabel} className={toastCloseStyles}>
                                    <CloseIcon aria-hidden="true" className={toastCloseIconStyles} />
                                </Toast.Close>
                            </Toast.Content>
                        </Toast.Root>
                    );
                })}
            </Toast.Viewport>
        </Toast.Portal>
    );
}
