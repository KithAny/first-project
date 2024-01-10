export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
		"/": [5],
		"/aboutme": [11],
		"/docs/[...slug]": [12],
		"/(auth)/login": [6,[2]],
		"/marketing/[[lang]]": [13],
		"/(auth)/password/forgot": [7,[2,3]],
		"/(auth)/password/info": [8,[2,3]],
		"/(auth)/password/reset": [9],
		"/products": [14],
		"/products/[productId=integer]": [15,[4]],
		"/products/[productId=integer]/reviews/[reviewId]": [16,[4]],
		"/profile": [17],
		"/(auth)/register": [10,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';