// Vybereme všechny obrázky v galerii
const images = document.querySelectorAll('.gallery .image');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeButton = document.querySelector('.lightbox .close');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentImageIndex = 0;

// Skrytí lightboxu na začátku
lightbox.style.display = 'none';

// Funkce pro otevření lightboxu s vybraným obrázkem
function openLightbox(index) {
    currentImageIndex = index;
    const imageSrc = images[index].src;
    lightboxContent.src = imageSrc;
    lightbox.style.display = 'flex'; // Otevře lightbox
}

// Funkce pro zavření lightboxu
function closeLightbox() {
    lightbox.style.display = 'none'; // Zavře lightbox
}

// Funkce pro zobrazení předchozího obrázku
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    openLightbox(currentImageIndex);
}



// Funkce pro zobrazení dalšího obrázku
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    openLightbox(currentImageIndex);
}

// Přidání event listeneru pro každý obrázek
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        openLightbox(index); // Otevře lightbox s obrázkem
    });
});

// Přidání event listeneru pro zavření lightboxu
closeButton.addEventListener('click', closeLightbox);

// Zavření lightboxu při kliknutí mimo obrázek
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Přidání event listenerů pro šipky
leftArrow.addEventListener('click', showPreviousImage);
rightArrow.addEventListener('click', showNextImage);[]

function sendEmail(event) {
    event.preventDefault(); // Zabrání defaultnímu odeslání formuláře

    // Získání hodnot z formuláře
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // E-mailová adresa, na kterou bude zpráva odeslána TODO: ZMĚNIT EMAIL NA INFO@sovihnizdo.cz
    const recipientEmail = "filipgilar07@gmail.com"; 


    // Příprava URL s Gmail
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=Dotaz, Soví Hnízdo&body=${encodeURIComponent(message)}&from=${encodeURIComponent(email)}`;

    // Otevření Gmailu v novém okně nebo záložce
    window.open(gmailLink, '_blank');
}

// Šipky pro čtverce
const squareLeftArrow = document.querySelector('.square-left-arrow');
const squareRightArrow = document.querySelector('.square-right-arrow');
const squares = document.querySelectorAll('.container2 .square');
let currentSquareIndex = 0;

// Funkce pro zobrazení čtverce na základě indexu
function showSquare(index) {
    squares.forEach((square, i) => {
        if (i === index) {
            square.style.display = 'block';
        } else {
            square.style.display = 'none';
        }
    });
}

// Funkce pro zobrazení předchozího čtverce
function showPreviousSquare() {
    currentSquareIndex = (currentSquareIndex - 1 + squares.length) % squares.length;
    showSquare(currentSquareIndex);
}

// Funkce pro zobrazení dalšího čtverce
function showNextSquare() {
    currentSquareIndex = (currentSquareIndex + 1) % squares.length;
    showSquare(currentSquareIndex);
}
function isMobileDevice() {
    return window.innerWidth < 768; // Můžete upravit šířku podle potřeby
}
// Kontrola, zda je zařízení mobilní

window.addEventListener("resize", () =>{
    if (isMobileDevice()) {
 
        squareLeftArrow.addEventListener('click', showPreviousSquare);
        squareRightArrow.addEventListener('click', showNextSquare);
    
        // Zobrazit první čtverec na začátku
        let currentSquareIndex = 0; // Inicializace indexu
        showSquare(currentSquareIndex);
    }
    else{
        squares.forEach((square, i) => {
           
                square.style.display = 'block';
           
        });
    }
    
});
// Inicializace pouze na mobilních zařízeních



