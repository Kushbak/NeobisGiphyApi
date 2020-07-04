let API_KEY = 'Z1z5wz2sLi1ZTP9dAOuh75srH7ABaAzh';
let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('searchInput')

document.addEventListener('DOMContentLoaded', () => {
	searchBtn.addEventListener('click', e => {
		e.preventDefault();
		let str = searchInput.value.trim();
		let url = `https://api.giphy.com/v1/gifs/search?q=${str}&api_key=${API_KEY}&limit=10`

		fetch(url)
			.then(res => res.json())
			.then(content => {
				console.log(content.data);
				console.log('META', content.meta); 

				let output = document.querySelector('.output');
				let childs = output.children;
				for (let child of childs) {
					child.remove();
				}


				content.data.forEach((item, i, arr) => {
					let figure = document.createElement('figure');
					let figCap = document.createElement('figureCaption');
					let img = document.createElement('img');
					img.src = item.images.downsized.url;
					img.alt = item.title;
					figCap.textContent = item.title;
					figure.appendChild(img);
					figure.appendChild(figCap);
					output.insertAdjacentElement('afterBegin', figure);  
				})

				searchInput.value = ''
			}).catch(err => {
				console.error(err);
			})
	})
});


