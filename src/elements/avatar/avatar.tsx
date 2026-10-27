import { cn } from "cn";

import { UserIcon } from "~ui/assets/icons";
import { Text } from "~ui/elements/text";

import { avatarStyles, avatarIconStyles } from "./styles";

export function Avatar({ name, label, className, ...props }: UI.Avatar.Props) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const initials = name
        ?.trim()
        .split(/\s+/u)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => segmenter.segment(word)[Symbol.iterator]().next().value?.segment ?? "")
        .join("")
        .toLocaleUpperCase();

    return (
        <Text.Span
            {...props}
            role="img"
            aria-label={label}
            title={name?.trim() ? name : label}
            className={cn(avatarStyles, className)}>
            {initials?.length ? initials : <UserIcon aria-hidden="true" className={avatarIconStyles} />}
        </Text.Span>
    );
}
