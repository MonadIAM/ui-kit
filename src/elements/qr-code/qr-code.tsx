import { QRCodeSVG } from "qrcode.react";
import { cn } from "cn";

import { qrCodeStyles } from "./styles";

export function QRCode({ value, label, className }: UI.QRCode.Props) {
    return (
        <QRCodeSVG
            value={value}
            title={label}
            role="img"
            aria-label={label}
            level="M"
            marginSize={4}
            className={cn(qrCodeStyles, className)}
        />
    );
}
