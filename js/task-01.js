

const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const categoryAndItemDisplay = () => {
( ([...numberOfCategories]).map((item) => {
console.log(`Category: ${item.querySelector("h2").textContent}
          Elements: ${item.querySelectorAll("li").length}  `);
    
}))

}

categoryAndItemDisplay();


