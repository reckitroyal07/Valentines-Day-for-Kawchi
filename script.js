
const messages = [
    "Aap sure ho Kawchi?",
    "Pakka??",
    "100% Pakka?",
    "Kawchi please...",
    "Janeman soch lo ek aur baar@!",
    "Aap No bologe toh mai rone lag jaaunga",
    "bohot jyaada rone lag jaaunga...",
    "Mai bohot bohot jyaada udas ho jaaunga...",
    "Aise mat karo kawchi jaan",
    "Aapko mera valentine nahi banna hai?",
    "Ok fine, Meri umeed khatam ho rahi hai...",
    "Please haan boldo na yaar! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
