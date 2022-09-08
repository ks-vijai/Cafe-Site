const cafeList = document.getElementById('cafe-list');
const form = document.getElementById('add-cafe-form');
function renderCafe(docs) {
    //console.log(docs.data().name)
    let cafe = document.createElement('li');
    let names = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div')

    cafe.setAttribute('data-id',docs.id);
    names.innerHTML = docs.data().name;
    city.innerHTML = docs.data().city;
    cross.innerHTML = 'X';

    cafe.appendChild(names);
    cafe.appendChild(city);
    cafe.appendChild(cross);
     
    cafeList.appendChild(cafe);
    
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    })
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