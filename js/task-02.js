const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ref = {
ingredient: document.querySelector( "#ingredients")
}

const elements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList = "item";
  return li;
})

ref.ingredient.append(...elements)
