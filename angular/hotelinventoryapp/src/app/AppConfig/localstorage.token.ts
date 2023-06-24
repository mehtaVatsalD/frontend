import { InjectionToken } from "@angular/core";

export const LOCAL_STORAGE_TOKEN = new InjectionToken<any>('localstorage', {
    providedIn: "root",
    factory() {
        return localStorage;
    }
})