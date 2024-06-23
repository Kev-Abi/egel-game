const messages = [
    "ay di pala",
    "Hi crush🥰🥰😝😍😍",
    "inaamin ko na",
    "crush kita",
    "and I made this for you"
];

const images = [
    "",  
    "blush.jpg",  
    "",  
    "",  
    "",  
    ""  
];

let currentMessageIndex = 0;

function showConfession() {
    const message = document.getElementById('message');
    const image = document.getElementById('image'); 
    const letterContainer = document.getElementById('letterContainer');

    if (currentMessageIndex < messages.length) {
        message.textContent = messages[currentMessageIndex];
        if (images[currentMessageIndex]) {
            image.src = images[currentMessageIndex];
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
        currentMessageIndex++;
    } else {
        document.getElementById('confessionContainer').style.display = "none";
        image.style.display = "none";
        letterContainer.style.display = "block";
        displayHearts();
    }
}

function displayHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heartsContainer.appendChild(heart);
    }
}
