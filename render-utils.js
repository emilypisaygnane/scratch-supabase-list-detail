export function renderPetCard(pet) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('pet-card');
    console.log('render-pet', pet);

    p.textContent = pet.name;
    img.src = `./assets/${pet.breed}.PNG`;
    a.href = `./detail/?id=${pet.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderPetDetail(pet) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const ageAndBreedEl = document.createElement('div');

    div.classList.add('pet-detail');

    nameEl.textContent = pet.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = pet.description;
    descriptionEl.classList.add('description');

    ageEl.textContent = `${pet.age} years old`;
    ageEl.classList.add('age');

    breedEl.textContent = pet.breed;
    breedEl.classList.add('breed');

    ageAndBreedEl.classList.add('age-and-breed');

    ageAndBreedEl.append(ageEl, breedEl);

    img.src = `../assets/${pet.breed}.png`;

    div.append(nameEl, img, ageAndBreedEl, descriptionEl);

    return div;
}
