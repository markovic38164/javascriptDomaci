const categorySelector = document.querySelector('#categorySelect');
const mealContainer = document.querySelector('.mealContainer');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.closePopupButton');

const mealDBApi = 'https://www.themealdb.com/api/json/v1/1';

//popunjavanje selektora
async function loadCategories() {
	const data = await fetchApi(`${mealDBApi}/categories.php`);
	if (!data) return;

	data.categories.forEach((category) => {
		const option = document.createElement('option');
		option.value = category.strCategory;
		option.textContent = category.strCategory;
		categorySelector.append(option);
	});
}
categorySelector.addEventListener('change', () => {
	getMeals(categorySelector.value);
});

//opsta fja za API
async function fetchApi(url) {
	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
		return await res.json();
	} catch (err) {
		console.error('Fetch error:', err);
		return null;
	}
}

async function getMeals(category) {
	const data = await fetchApi(
		`${mealDBApi}/filter.php?c=${encodeURIComponent(category)}`,
	);
	if (!data) return;

	mealContainer.innerHTML = '';
	data.meals.forEach(buildMealElement);
}

//mealDiv
function buildMealElement(meal) {
	const divMeal = document.createElement('div');
	divMeal.classList.add('divMeal');
	divMeal.dataset.id = meal.idMeal;

	const imgMeal = document.createElement('img');
	imgMeal.src = meal.strMealThumb;
	imgMeal.alt = meal.strMeal;

	const titleMeal = document.createElement('h2');
	titleMeal.textContent = meal.strMeal;

	divMeal.append(imgMeal, titleMeal);
	mealContainer.append(divMeal);
}

//-----
async function getMealById(id) {
	const data = await fetchApi(`${mealDBApi}/lookup.php?i=${id}`);
	return data?.meals ? data.meals[0] : null;
}

async function getRandomCocktail() {
	const data = await fetchApi(
		'https://www.thecocktaildb.com/api/json/v1/1/random.php',
	);
	return data?.drinks ? data.drinks[0] : null;
}

//popup
async function openMealPopup(mealId) {
	const mealDetails = await getMealById(mealId);
	if (!mealDetails) return;

	popup.innerHTML = '';
	popup.append(closePopupButton);

	const title = document.createElement('h2');
	title.textContent = mealDetails.strMeal;

	const img = document.createElement('img');
	img.src = mealDetails.strMealThumb;
	img.alt = mealDetails.strMeal;
	img.classList.add('popup-img');

	const ingredientsDiv = document.createElement('div');
	const ingredientsList = document.createElement('ol');
	for (let i = 1; i <= 20; i++) {
		const ing = mealDetails[`strIngredient${i}`]?.trim();
		if (!ing) continue;
		const measure = mealDetails[`strMeasure${i}`]?.trim();
		const li = document.createElement('li');
		li.textContent = measure ? `${ing} - ${measure}` : ing;
		ingredientsList.append(li);
	}
	ingredientsDiv.append(ingredientsList);

	const instructionsDiv = document.createElement('div');
	instructionsDiv.classList.add('popup-instructions');
	const instructionsTitle = document.createElement('h3');
	instructionsTitle.textContent = 'Instructions:';
	const instructionsText = document.createElement('p');
	instructionsText.textContent = mealDetails.strInstructions;
	instructionsDiv.append(instructionsTitle, instructionsText);

	let videoDiv = null;
	if (mealDetails.strYoutube) {
		videoDiv = document.createElement('div');
		videoDiv.classList.add('popup-video');
		const videoTitle = document.createElement('h3');
		videoTitle.textContent = 'Video presentation:';

		const url = new URL(mealDetails.strYoutube);
		const videoId = url.searchParams.get('v');
		if (videoId) {
			const videoIframe = document.createElement('iframe');
			videoIframe.width = '100%';
			videoIframe.height = '315';
			videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
			videoIframe.title = 'YouTube video player';
			videoIframe.allow =
				'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
			videoIframe.allowFullscreen = true;

			videoDiv.append(videoTitle, videoIframe);
		}
	}
	let cocktailDiv = null;
	const cocktail = await getRandomCocktail();
	if (cocktail) {
		cocktailDiv = document.createElement('div');
		cocktailDiv.classList.add('popup-cocktail');
		const cocktailTitle = document.createElement('h3');
		cocktailTitle.textContent = '- Suggested Cocktail -';
		cocktailDiv.append(cocktailTitle);
		const cocktailName = document.createElement('p');
		cocktailName.textContent = '🍹 ' + cocktail.strDrink;

		const cocktailImg = document.createElement('img');
		cocktailImg.src = cocktail.strDrinkThumb;
		cocktailImg.alt = cocktail.strDrink;

		cocktailDiv.append(cocktailName, cocktailImg);
	}
	popup.append(title, img, ingredientsDiv, instructionsDiv);
	if (videoDiv) popup.append(videoDiv);
	popup.append(cocktailDiv);

	popupOverlay.classList.add('active');
}

//event delegacija

mealContainer.addEventListener('click', (e) => {
	const item = e.target.closest('.divMeal');
	if (!item) return;
	openMealPopup(item.dataset.id);
});

//zatavranje popapa

closePopupButton.addEventListener('click', () => {
	popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', (e) => {
	if (e.target === popupOverlay) popupOverlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
		popupOverlay.classList.remove('active');
	}
});

//prvo ucitavanje
(async function firstLoad() {
	await loadCategories();
	getMeals('Beef');
})();
