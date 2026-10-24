import { Toast } from "@base-ui/react/toast";

import { ToastList } from "./components/toast-list";

export function ToastHost({ source }: UI.Toast.Host.Props) {
    return (
        <Toast.Provider limit={source.limit}>
            <ToastList source={source} />
        </Toast.Provider>
    );
}
