

const petListContainer = document.getElementById('pet-list-container');

// on load
// fetch all dogs

window.addEventListener('load', async() => {
    const pets = await getPets();

    for (let pet of pets) {
        const petEl = renderPetCard(pet);

        petListContainer.append(petEl);
    } 
});