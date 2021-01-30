import { writable } from 'svelte/store';

export const title = writable('Titel');
export const subtitle = writable('CHF 1000.—');
export const text = writable('');
export const link = writable('https://example.com');