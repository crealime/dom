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

let x = [1,2,3,4,5]
for (let i = 0; i < x.length; i++) {
	console.log(x[i])
}
