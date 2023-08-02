import { browser } from "$app/environment";
import { writable } from "svelte/store";

export function storable<T>(name: string, defaultValue: T) {
    if (browser) {
        let stored = localStorage.getItem(name);
        const store = writable<T>(stored == null ? defaultValue : JSON.parse(stored));
        store.subscribe((value) => {
            localStorage.setItem(name, JSON.stringify(value == null ? defaultValue : value));
        })
        return store;
    } else {
        return writable<T>(defaultValue);
    }
}

