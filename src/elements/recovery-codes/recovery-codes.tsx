import { recoveryCodesStyles } from "./styles";

export function RecoveryCodes({ codes }: UI.RecoveryCodes.Props) {
    return (
        <ul className={recoveryCodesStyles}>
            {codes.map((code) => (
                <li key={code}>{code}</li>
            ))}
        </ul>
    );
}
