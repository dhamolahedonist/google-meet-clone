const elements = {
	1 : document.getElementById(`image-1`),
	2 : document.getElementById(`image-2`),
	3 : document.getElementById(`image-3`),
	4 : document.getElementById(`image-4`),
}
let i = 1
elements[i].style.display = 'block'

setInterval(() => {
	if(i > 4) {
		i = 1
	}
	hideAll()
	elements[i].style.display = 'block'
	i++
}, 1000 * 2)

function hideAll() {
	[1, 2, 3, 4].forEach(i => {
		elements[i].style.display = 'none'
	});
}

