let ShowNavBar = false;

let nav = document.getElementById("NavBar");
let hidNavBarButton = document.getElementById("HiddenNavBarButton");
let showNavBarButton = document.getElementById("ShowNavBarButton");
const ENGLISH = "EN";
const RUSSIAN = "RU";
const RuHref = "BookRu.html";
const EnHref = "BookEn.html";


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
    fontSizeDisplay.textContent = `${fontSize}`;
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
    contentContainer.classList.remove('backgroundLight', 'backgroundPaper', 'backgroundDark', 'backgroundOldPaper');
    // Add the selected background class
    contentContainer.classList.add(this.value);
});

function setSelectedLanguage() {
    const languageSelect = document.getElementById('languageSelect');
    const currentPage = window.location.pathname.split('/').pop(); 

    if (currentPage === EnHref) {
        languageSelect.value = ENGLISH;
    } else if (currentPage === RuHref) {
        languageSelect.value = RUSSIAN;
    }
}

// Function to handle language change
function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    if (selectedLanguage === ENGLISH) {
        window.location.href = EnHref; 
    } else if (selectedLanguage === RUSSIAN) {
        window.location.href = RuHref; 
    }
}

window.onload = setSelectedLanguage;

document.getElementById('languageSelect').addEventListener('change', changeLanguage);

document.getElementById('fontSelector').addEventListener('change', function() {
    const selectedFont = this.value;
    document.documentElement.style.setProperty('--font-family', selectedFont);
});


let lastScrollTop = 0; // Keep track of the last scroll position
const button = document.getElementById('ShowNavBarButton');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        button.classList.add("hidden") // Hide the button
    } else {
        // Scrolling up
        button.classList.remove("hidden")
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

function loadBackground(imageUrl) {
    // Hide body until background is loaded
    document.body.style.visibility = 'hidden';

    const img = new Image();
    img.onload = () => {
        // Apply background and show body when image is loaded
        document.body.style.visibility = 'visible';
    };

    img.src = imageUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    loadBackground('css/paper.jpg');
});
