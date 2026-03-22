/**
  Ispisati na stranici sve podatke iz datog arraya
  <div id="products"></div>
 */

let ads = [
	{
		title: 'Skoda octavia 2014',
		price: 9950,
		image:
			'https://cdn.skoda-storyboard.com/2024/02/03_Skoda_Octavia_Combi_51d65db5.jpg',
	},
	{
		title: 'Audi A4',
		price: 8000,
		image:
			'https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/audi-a4-rt-2015-0024_0.jpg',
	},
];
let productsEl = document.getElementById('products');
let html = '';

for (let i = 0; i < ads.length; i++) {
	html += `<div class="product">
				<h2>${ads[i].title}</h2>
				<p>${ads[i].price} &euro;</p>
				<img src="${ads[i].image}" width="200px" />
			</div>`;
}
productsEl.innerHTML = html;
