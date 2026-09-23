const gift = document.getElementById("gift");

const startScreen = document.getElementById("start-screen");
const nightScreen = document.getElementById("night-screen");
const wishesScreen = document.getElementById("wishes-screen");
const wishScreen = document.getElementById("wish-screen");
const finalScreen = document.getElementById("final-screen");

const birthdaySong = document.getElementById("birthday-song");
const closedLetter = document.getElementById("closed-letter");
const openedLetter = document.getElementById("opened-letter");

const openLetter = document.getElementById("open-letter");
const skipLetter = document.getElementById("skip-letter");
const continueLetter = document.getElementById("continue-letter");

const nextWish = document.getElementById("next-wish");

const wishButton = document.getElementById("wish-button");

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

const yesMessage = document.getElementById("yes-message");

const flame = document.querySelector(".flame");


/* =========================
   OPEN THE GIFT
========================= */

gift.addEventListener("click", function () {

    gift.classList.add("opened");


    /* Start music */

birthdaySong.play().catch(function () {
        console.log("Music could not start.");
    });


    /*
       Hide the first page after the gift opens.
    */

    setTimeout(function () {

        startScreen.classList.add("hidden");

        nightScreen.classList.remove("hidden");


        /*
           Fireworks begin!
        */

        let fireworksCount = 0;


        const fireworksInterval =
            setInterval(function () {

                createFirework();

                fireworksCount++;


                if (fireworksCount >= 18) {

                    clearInterval(fireworksInterval);

                }

            }, 280);


    }, 800);

});


/* =========================
   OPEN LETTER
========================= */

openLetter.addEventListener("click", function () {

    closedLetter.classList.add("hidden");

    openedLetter.classList.remove("hidden");

});


/* =========================
   SKIP LETTER
========================= */

skipLetter.addEventListener("click", function () {

    nightScreen.classList.add("hidden");

    wishesScreen.classList.remove("hidden");

});


/* =========================
   CONTINUE AFTER LETTER
========================= */

continueLetter.addEventListener("click", function () {

    nightScreen.classList.add("hidden");

    wishesScreen.classList.remove("hidden");

});


/* =========================
   WISHES
========================= */

let currentWish = 1;

nextWish.addEventListener("click", function () {

    if (currentWish === 1) {

        document.getElementById("wish-one").classList.add("hidden");
        document.getElementById("wish-two").classList.remove("hidden");

        currentWish = 2;

    }

    else if (currentWish === 2) {

        document.getElementById("wish-two").classList.add("hidden");
        document.getElementById("wish-three").classList.remove("hidden");

        currentWish = 3;

    }

    else if (currentWish === 3) {

        document.getElementById("wish-three").classList.add("hidden");
        document.getElementById("wish-four").classList.remove("hidden");

        currentWish = 4;

    }

    else if (currentWish === 4) {

        document.getElementById("wish-four").classList.add("hidden");
        document.getElementById("wish-five").classList.remove("hidden");

        currentWish = 5;

    }

    else if (currentWish === 5) {

        document.getElementById("wish-five").classList.add("hidden");
        document.getElementById("wish-six").classList.remove("hidden");

        currentWish = 6;

    }

    else if (currentWish === 6) {

        document.getElementById("wish-six").classList.add("hidden");
        document.getElementById("wish-seven").classList.remove("hidden");

        currentWish = 7;

    }

    else if (currentWish === 7) {

        document.getElementById("wish-seven").classList.add("hidden");
        document.getElementById("wish-eight").classList.remove("hidden");

        currentWish = 8;

    }

    else if (currentWish === 8) {

        document.getElementById("wish-eight").classList.add("hidden");
        document.getElementById("wish-nine").classList.remove("hidden");

        currentWish = 9;

    }

    else if (currentWish === 9) {

        document.getElementById("wish-nine").classList.add("hidden");
        document.getElementById("wish-ten").classList.remove("hidden");

        nextWish.textContent = "LET'S MAKE A WISH ✨";

        currentWish = 10;

    }

    else {

        wishesScreen.classList.add("hidden");
        wishScreen.classList.remove("hidden");

    }

});

/* =========================
   MAKE A WISH
========================= */

wishButton.addEventListener("click", function () {

    flame.style.display = "none";

    document.getElementById("wish-text").textContent =
        "Wish made! ✨💗";

    wishButton.textContent = "✨";

    setTimeout(function () {

        wishScreen.classList.add("hidden");

        finalScreen.classList.remove("hidden");

    }, 1500);

});


/* =========================
   YES BUTTON
========================= */

yesButton.addEventListener("click", function () {

    yesMessage.textContent =
        "YAYYY 😭💗 I'm so happy you liked it!!";

});


/* =========================
   NO BUTTON RUNS AWAY
========================= */

function moveNoButton() {

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.max(
        10,
        Math.random() * maxX
    );

    const randomY = Math.max(
        10,
        Math.random() * maxY
    );

    noButton.style.position = "fixed";

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}


/* Desktop */
noButton.addEventListener("mouseenter", moveNoButton);


/* Mobile */
noButton.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton();

});
 /* =====================================================
   CREATE BEAUTIFUL STARS
===================================================== */

function createStars() {

    const starContainers = document.querySelectorAll(".stars");

    starContainers.forEach(function (container) {

        /* Don't create them twice */

        if (container.children.length > 0) {
            return;
        }

        for (let i = 0; i < 70; i++) {

            const star = document.createElement("span");

            star.classList.add("sky-star");

            /* Random position */

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";


            /* Some stars are bigger */

            if (Math.random() > 0.85) {
                star.classList.add("big-star");
            }


            /* Different twinkle speeds */

            star.style.setProperty(
                "--duration",
                (1.5 + Math.random() * 3) + "s"
            );


            /* Different starting times */

            star.style.setProperty(
                "--delay",
                (Math.random() * 3) + "s"
            );


            container.appendChild(star);

        }

    });

}

createStars();


/* =====================================================
   FIREWORKS
===================================================== */

const fireworksContainer =
    document.getElementById("fireworks");


function createFirework() {

    if (!fireworksContainer) {
        return;
    }


    /* Random position */

    const x =
        10 + Math.random() * 80;

    const y =
        10 + Math.random() * 50;


    /* Beautiful firework colors */

    const colors = [
        "#ff4f81",
        "#ffd166",
        "#8be9fd",
        "#ffffff",
        "#c77dff",
        "#ff9f1c",
        "#ffb3c6"
    ];


    const color =
        colors[Math.floor(Math.random() * colors.length)];


    /* Main explosion point */

    const burst =
        document.createElement("span");

    burst.classList.add("firework-burst");

    burst.style.left = x + "%";
    burst.style.top = y + "%";

    burst.style.color = color;

    fireworksContainer.appendChild(burst);


    /* Create many particles */

    const particleCount = 35;


    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("firework-particle");

        particle.style.left = x + "%";
        particle.style.top = y + "%";

        particle.style.color = color;


        /* Circle explosion */

        const angle =
            (Math.PI * 2 / particleCount) * i;

        const distance =
            45 + Math.random() * 75;


        const moveX =
            Math.cos(angle) * distance;

        const moveY =
            Math.sin(angle) * distance;


        particle.style.setProperty(
            "--x",
            moveX + "px"
        );

        particle.style.setProperty(
            "--y",
            moveY + "px"
        );


        /* Slightly different timing */

        particle.style.animationDelay =
            Math.random() * 0.12 + "s";


        fireworksContainer.appendChild(particle);

    }


    /* Clean them afterwards */

    setTimeout(function () {

        burst.remove();

        const particles =
            fireworksContainer.querySelectorAll(
                ".firework-particle"
            );

        particles.forEach(function (particle) {

            particle.remove();

        });

    }, 1800);

}