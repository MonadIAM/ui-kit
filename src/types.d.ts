import "./elements/field/components/select-input/types";
import "./elements/field/components/text-input/types";
import "./elements/field/components/code-input/types";
import "./elements/button/components/button/types";
import "./elements/form/components/actions/types";
import "./elements/field/components/select/types";
import "./elements/radio/components/radio/types";
import "./elements/radio/components/group/types";
import "./elements/button/components/link/types";
import "./elements/field/components/frame/types";
import "./elements/form/components/fields/types";
import "./elements/field/components/text/types";
import "./elements/field/components/code/types";
import "./elements/form/components/links/types";
import "./elements/centered-viewport/types";
import "./elements/language-select/types";
import "./elements/recovery-codes/types";
import "./elements/dropdown-menu/types";
import "./elements/theme-toggle/types";
import "./elements/list/columns/types";
import "./elements/container/types";
import "./elements/qr-code/types";
import "./elements/section/types";
import "./elements/warning/types";
import "./elements/spinner/types";
import "./elements/popover/types";
import "./elements/switch/types";
import "./elements/navbar/types";
import "./elements/avatar/types";
import "./elements/dialog/types";
import "./elements/badge/types";
import "./elements/toast/types";
import "./elements/field/types";
import "./elements/form/types";
import "./elements/flex/types";
import "./elements/text/types";
import "./elements/list/types";

declare global {
    namespace UI {
        type Optional<T> = T | undefined;
    }
}

export import UI = globalThis.UI;
