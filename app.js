import { getPets } from './fetch-utils.js';
import { renderPetCard } from './render-utils.js';

const petListContainer = document.getElementById('pet-list-container');

window.addEventListener('load', async () => {
    const pets = await getPets();

    for (let pet of pets) {
        const petEl = renderPetCard(pet);

        petListContainer.append(petEl);
    } 
});