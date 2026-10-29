import { Dialog as Primitive } from "@base-ui/react/dialog";
import { cn } from "cn";

import { ButtonSize, ButtonVariant, TextSize, TextTone } from "~ui/enums";
import { CloseIcon } from "~ui/assets/icons";
import { Button } from "~ui/elements/button";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { dialogStyles } from "./styles";

export function DialogContent({
    showClose = true,
    description,
    closeLabel,
    className,
    children,
    title,
    ...props
}: UI.Dialog.Content.Props) {
    return (
        <Primitive.Portal>
            <Primitive.Backdrop className={dialogStyles.backdrop} />
            <Primitive.Viewport className={dialogStyles.viewport}>
                <Primitive.Popup {...props} className={cn(dialogStyles.popup, className)}>
                    <Flex.Col render={<header />} gap="0.5rem" className={dialogStyles.header}>
                        <Primitive.Title render={<Text.H2 size={TextSize.LG} />} className={dialogStyles.title}>
                            {title}
                        </Primitive.Title>
                        {description && (
                            <Primitive.Description
                                render={<Text.P tone={TextTone.MUTED} />}
                                className={dialogStyles.description}>
                                {description}
                            </Primitive.Description>
                        )}
                    </Flex.Col>
                    {showClose && (
                        <Primitive.Close
                            render={<Button variant={ButtonVariant.GHOST} size={ButtonSize.ICON} />}
                            aria-label={closeLabel}
                            className={dialogStyles.close}>
                            <CloseIcon aria-hidden="true" />
                        </Primitive.Close>
                    )}
                    {children}
                </Primitive.Popup>
            </Primitive.Viewport>
        </Primitive.Portal>
    );
}
