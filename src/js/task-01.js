const itemRef = document.querySelectorAll('.item');
const quantityItem = [...itemRef].length;
console.log(`Number of categories: ${quantityItem}`);


itemRef.forEach(element => {
    const title = element.firstElementChild.textContent
    console.log(`Category: ${title}`)

const elements = element.lastElementChild.children
const quantityElements = [...elements].length;
console.log(`Elements: ${quantityElements}`);

})