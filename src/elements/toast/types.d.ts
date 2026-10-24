export {};

declare global {
    namespace UI.Toast {
        type Options = {
            id?: string;
            title: string;
            description?: string;
            type?: "success" | "info" | "warning" | "error";
            timeout?: number;
            action?: { label: string; onClick(): void };
        };

        interface Transport {
            add(options: Options & { id: string; onClose(): void; onRemove(): void }): string;
            close(id?: string): void;
        }

        interface Source {
            readonly limit: number;
            connect(props: { transport: Transport }): () => void;
        }

        namespace Host {
            type Props = { source: Source };
        }
    }
}
