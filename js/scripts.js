let ShowNavBar = false;

let nav = document.getElementById("NavBar");
let hidNavBarButton = document.getElementById("HiddenNavBarButton");
let showNavBarButton = document.getElementById("ShowNavBarButton");

hidNavBarButton.addEventListener("click", () => {
    nav.classList.add("d-none");
    showNavBarButton.classList.remove("d-none");
})

showNavBarButton.addEventListener("click", () => {
    nav.classList.remove("d-none");
    showNavBarButton.classList.add("d-none");
})

const contentContainer = document.getElementById('contentContainer');
const fontSizeDisplay = document.getElementById("fontSizeDisplay")
const backgroundSelector = document.getElementById('backgroundSelector');



let fontSize = 16;

function updateFontSizeDisplay() {
    fontSizeDisplay.textContent = `Font: ${fontSize}`;
}

// Initialize the display
updateFontSizeDisplay();

// Increase font size
document.getElementById('increaseSize').addEventListener('click', function() {
    fontSize += 1; // Increase by 2px
    contentContainer.style.fontSize = fontSize + 'px';
    updateFontSizeDisplay();
});

// Decrease font size
document.getElementById('decreaseSize').addEventListener('click', function() {
    fontSize -= 1; // Decrease by 2px
    if (fontSize < 12) fontSize = 12; // Minimum font size
    contentContainer.style.fontSize = fontSize + 'px';
    updateFontSizeDisplay();
});

backgroundSelector.addEventListener('change', function() {
    // Remove all background classes
    contentContainer.classList.remove('backgroundLight', 'backgroundPaper', 'backgroundDark');
    // Add the selected background class
    contentContainer.classList.add(this.value);
});