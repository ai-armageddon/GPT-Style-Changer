let toggleBtn;

setTimeout(() => {
    // sidebar button
    toggleBtn = document.querySelector('.mb-1.flex.flex-row.gap-2').lastElementChild.childNodes[0];
    console.log(toggleBtn);
}, 2000);

// Event listener for CMD+SHIFT+Space key press
document.addEventListener('keydown', function(event) {
    // Check if the event key combination matches CMD+SHIFT+Space on Mac
    if (event.metaKey && event.shiftKey && event.code === 'Space') {
        // console.log('CMD+SHIFT+Space key pressed on Mac');
        toggleBtn.click();
    }
});
