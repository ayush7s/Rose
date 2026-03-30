const messages = [
    "Hey... I don’t know if I should say this or not.",
    "But today is special... because it's your birthday 🎂",
    "We may not be together anymore...",
    "But that doesn’t erase the memories we created.",
    "I genuinely wish you happiness.",
    "Happy Birthday... 💛",
    "P.S. I hope you like the surprise! 🎁",
    "And no, you’re not imagining things... there’s a little something extra in the background. 😉",
    "You deserve all the love and joy in the world, not just today but every day.",
    "You will be my forever, no matter where life takes us.",
    "I hope this little surprise brings a smile to your face and warmth to your heart.",
    "May you get each and every wish you made ,and may this year be filled with love, laughter, and unforgettable moments.",
    "Thank you for being a part of my life, even if it’s just in memories now. I cherish every moment we shared.",
    "You are an incredible person, and I hope you know how much you are loved and appreciated.",
    "Happy Birthday again, MJ. May this day be as wonderful as you are. 💖",
    "Some memories don’t fade, no matter how things change.",
"You were, and in some ways still are, a special part of my life.",
"I don’t know where things will go from here…",
"But I genuinely wish it turns out good for you.",
"I hope you find peace in the things you’re searching for.",
"And happiness in the things that truly matter to you.",
"Grow as a nice person because nowdays it’s really hard to find one.",
"You have the ability to make a positive impact on those who are flaunting around you",
"And I hope you use that ability to make the world a better place.",
"You lean towards negativity sometimes, but I hope you find the strength to overcome it and embrace the beauty of life.",
"I am a bad part of your life, but I hope you find the good parts and hold onto them.",
"Have a wonderful birthday, Sristi. May this year bring you growth, happiness, and all the things you deserve.",
"Have a good day and a magnificent year ahead.",
"You will not find me annoying you with messages after this, I promise. Just wanted to make your day a little brighter. 😊"
];

const images = [
       "her1.jpeg",
    "her2.jpeg",
    "her3.jpeg",
    "her4.jpeg",
    "her5.jpeg",
    "her6.jpeg",
    "her7.jpeg",
    "her8.jpeg",
    "her9.jpeg",
    "her10.jpeg",
    "her11.jpeg",
    "her12.jpeg",
    "her13.jpeg",   
    "her14.jpeg",
    "her15.jpeg",
    "her17.jpeg",
    "her18.jpeg",
    "her20.jpeg",
    "her21.jpeg",
    "her23.jpeg",
    "her24.jpeg",
    "her25.jpeg",
    "her26.jpeg",
    "her27.jpeg",
    "her28.jpeg",
    "her29.jpeg",   
    "her30.jpeg",
    "her31.jpeg",
    "absence.jpeg"
];

let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");
const button = document.getElementById("nextBtn");
const music = document.getElementById("music");

const bgBlur = document.getElementById("bgBlur");
const mainImage = document.getElementById("mainImage");

// 💌 Open envelope
function openEnvelope() {
    document.getElementById("envelope").style.display = "none";
    document.querySelector(".main").classList.remove("hidden");

    // 🎵 Smooth fade-in music (mobile safe)
    music.volume = 0;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            let vol = 0;

            const fade = setInterval(() => {
                if (vol < 0.5) {
                    vol += 0.05;
                    music.volume = vol;
                } else {
                    clearInterval(fade);
                }
            }, 200);

        }).catch(() => {
            console.log("Playback blocked");
        });
    }

    changeBackground();
    typeText();
}

// Change background + image
function changeBackground() {
    mainImage.style.opacity = 0;

    setTimeout(() => {
        bgBlur.style.backgroundImage = `url('${images[index]}')`;
        mainImage.src = images[index];
        mainImage.style.opacity = 1;
    }, 200);
}

// Typing effect
function typeText() {
    if (charIndex < messages[index].length) {
        typingElement.innerHTML += messages[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 35);
    }
}

// Next button
button.addEventListener("click", () => {
    index++;
    if (index < messages.length) {
        typingElement.innerHTML = "";
        charIndex = 0;
        changeBackground();
        typeText();
    } else {
        typingElement.innerHTML = "Take care... always 💛";
        button.style.display = "none";
    }
});

// ❤️ Hearts (optimized)
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 10 + "px";
    heart.style.color = ["#ff4d6d","#ff85a2","#ffc2d1"][Math.floor(Math.random()*3)];
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 500);

// ✨ Sparkles
const sparklesContainer = document.querySelector(".sparkles");

setInterval(() => {
    const s = document.createElement("div");
    s.className = "sparkle";

    const size = Math.random() * 3 + 2;
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";

    sparklesContainer.appendChild(s);

    setTimeout(() => s.remove(), 1500);
}, 300);