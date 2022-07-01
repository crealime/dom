const some = {
	language: 'JavaScript',
	framework: 'Vue'
}

const user = {
	name: 'Serhii',
	age: 40,
	work: 'Front-End Developer',
	...some
}

console.log(user)