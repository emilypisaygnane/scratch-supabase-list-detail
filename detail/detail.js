import { getPet } from '../fetch-utils.js';
import { renderPetDetail } from '../render-utils.js';

const petDetailContainer = document.getElementById('pet-detail-container');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const pet = await getPet(id);

    const petDetailEl = renderPetDetail(pet);
    petDetailContainer.append(petDetailEl);
}

loadData();

