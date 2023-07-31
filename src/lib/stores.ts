import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

export const personalToken: Writable<string> = localStorageStore('personalToken', '');