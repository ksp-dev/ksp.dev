import { writable } from 'svelte/store';
const urls = [
    "/imgs/DSC_4841-Edit-2.jpg",
    "/imgs/DSC_4933.jpg",
    "/imgs/DSC_4953-Edit.jpg",
    "/imgs/DSC_5282.jpg",
    "/imgs/DSC_5288.jpg",
    "/imgs/DSC_5254.jpg"
];

function createImages() {
	const { subscribe, set, update } = writable(urls[0]);

	return {
        subscribe,
        update: () => update(n => {
            let next;

            while (!next || next === n) {
                next = urls[Math.floor(Math.random() * urls.length)];
            }

            return next;
        })
	};
}

export const images = createImages();
