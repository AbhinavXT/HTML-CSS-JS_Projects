module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				xs: '350px',
				md: '735px',
			},
			colors: {
				veryDarkBlue: 'hsl(233, 47%, 7%)',
				desaturatedBlue: 'hsl(244, 38%, 16%)',
				softVoilet: 'hsl(277, 64%, 61%)',
				description: 'hsla(0, 0%, 100%, 0.75)',
				stats: 'hsla(0, 0%, 100%, 0.6)',
			},
			fontFamily: {
				headline: 'Lexend Deca, sans-serif',
				description: 'Inter, sans-serif',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
