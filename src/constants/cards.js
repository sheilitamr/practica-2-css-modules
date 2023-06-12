import { v4 } from 'uuid';

export const CARDS = [
	{
		id: v4(),
		title: 'Supervisor',
		text: 'Monitors activity to identify project roadblocks',
		src: '/icon-supervisor.svg',
		alt: 'icon supervisor'
	},
	{
		id: v4(),
		title: 'Team Builder',
		text: 'Scans our talent network to create the optimal team for your project',
		src: '/icon-team-builder.svg',
		alt: 'icon team builder'
	},
	{
		id: v4(),
		title: 'Karma',
		text: 'Regularly evaluates our talent to ensure quality',
		src: '/icon-karma.svg',
		alt: 'icon karma'
	},
	{
		id: v4(),
		title: 'Calculator',
		text: 'Uses data from past projects to provide better delivery estimates',
		src: '/icon-calculator.svg',
		alt: 'icon calculator'
	}
];
