const cafeList = document.getElementById('cafe-list');
const form = document.getElementById('add-cafe-form');
function renderCafe(docs) {
    //console.log(docs.data().name)
    const cafe = document.createElement('li');
    const names = document.createElement('span');
    const city = document.createElement('span');
     
    //cafe.setAttribute('data-id',docs.id);
    names.innerHTML = docs.data().name;
    city.innerHTML = docs.data().city;

    cafe.appendChild(names);
    cafe.appendChild(city);
    
    cafeList.appendChild(cafe);

}
db.collection('cafes').get().then((snapshot) => {
    snapshot.forEach(docs => {
        renderCafe(docs);
    })
})

form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    })
    form.name.value = '',
    form.city.value = ''
})