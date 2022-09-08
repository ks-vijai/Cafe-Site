const cafeList = document.getElementById('cafe-list');

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