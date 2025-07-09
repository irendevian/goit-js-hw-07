const categories = document.querySelectorAll('.item');
const countCateg = categories.length;
console.log(`Number of categories: ${countCateg}`);


// -----------------------Роздуми--------------------------------

// const nameCategories = document.querySelectorAll('h2');
// console.log(`Category: ${nameCategories.textContent}`);

// const sublistItem = document.querySelectorAll('ul .list-item');
// const sublistCount = sublistItem.children;
// console.log(sublistCount);

// ------------------------Результат---------------------------------

for (const category of categories) {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('ul .list-item').length}`);
}

