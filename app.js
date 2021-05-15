// Query selector of the elements.
const elements = {
    sounds: document.querySelectorAll('.sound'),
    speaker: document.querySelectorAll('.boxer div i')
};


// Add event listener

window.addEventListener('load', e => {
    controller();
});




// Functions
// Playing the sound effects.
const controller = () => {
    elements.speaker.forEach((volume, index) => {
        volume.addEventListener('click', () => {
            elements.sounds[index].currentTime = 0;  // Reset the playing time to zero for the repeated click.
            elements.sounds[index].play(); // It plays the selected track.
        });
    });
};







