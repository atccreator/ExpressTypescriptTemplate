import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType = {
    correlationId: string;
}

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>(); //created a instance of AsyncLocalStorage

export const getCorrelationId = () =>{
    const asyncStore = asyncLocalStorage.getStore();
    return asyncStore?.correlationId || "unknown-error-while-creating-correlation-id"; //returns the correlationId from the async store or a default error message
}