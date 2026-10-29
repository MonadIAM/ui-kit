import { Avatar as Primitive } from "@base-ui/react/avatar";
import { cn } from "cn";

import { UserIcon } from "~ui/assets/icons";

import { avatarStyles, avatarIconStyles, avatarImageStyles } from "./styles";

export function Avatar({ name, label, src, className, ...props }: UI.Avatar.Props) {
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
        <Primitive.Root
            {...props}
            role="img"
            aria-label={label}
            title={name?.trim() ? name : label}
            className={cn(avatarStyles, className)}>
            <Primitive.Image src={src} alt="" className={avatarImageStyles} />
            <Primitive.Fallback>
                {initials?.length ? initials : <UserIcon aria-hidden="true" className={avatarIconStyles} />}
            </Primitive.Fallback>
        </Primitive.Root>
    );
}
