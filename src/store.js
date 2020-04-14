import { writable } from 'svelte/store';
import { urls } from './data/images';
function createIndex() {
	const { subscribe, set, update } = writable(0);

	return {
        subscribe,
        set,
        update: () => update(n => {
            let next;

            while (!next || next === n) {
                next = Math.floor(Math.random() * urls.length);
            }

            return next;
        })
	};
}

export const index = createIndex();
