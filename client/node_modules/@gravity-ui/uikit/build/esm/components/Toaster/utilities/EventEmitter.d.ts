type EventListener<T> = (data: T) => void;
export declare class EventEmitter<T> {
    private listeners;
    constructor();
    destroy(): void;
    subscribe(listener: EventListener<T>): () => void;
    notify(data: T): boolean;
}
export {};
