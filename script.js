const container = document.querySelector(".banner-container");
const banners = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateDots(i) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");
}

function scrollToBanner(i) {
    container.scrollTo({
        left: i * container.offsetWidth,
        behavior: "smooth"
    });
    updateDots(i);
}

setInterval(() => {
    index = (index + 1) % banners.length;
    scrollToBanner(index);
}, 10000);

/* Detect manual scroll */
container.addEventListener("scroll", () => {
    const newIndex = Math.round(
        container.scrollLeft / container.offsetWidth
    );
    index = newIndex;
    updateDots(index);
});
function openBMI() {
    document.getElementById("bmi-modal").style.display = "flex";
}

function closeBMI() {
    document.getElementById("bmi-modal").style.display = "none";
}
function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const result = document.getElementById("bmi-result");

    if (weight === "" || height === "") {
        result.innerText = "Please enter both height and weight.";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerText = `Your BMI is ${bmi} (${category})`;
    const needle = document.getElementById("needle");

/*
BMI range mapping:
16 → -90deg
40 → +90deg
*/
let minBMI = 16;
let maxBMI = 40;

let clampedBMI = Math.min(Math.max(bmi, minBMI), maxBMI);

let angle =
    ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 180 - 90;

needle.style.transform = `rotate(${angle}deg)`;
// Reset all labels
// Reset all labels
document
  .querySelectorAll(".bmi-labels span")
  .forEach(label => {
      label.classList.remove("active", "under", "normal", "over", "obese");
  });

// Highlight correct label with color
if (bmi < 18.5) {
    document.getElementById("label-under").classList.add("active", "under");
} else if (bmi < 25) {
    document.getElementById("label-normal").classList.add("active", "normal");
} else if (bmi < 30) {
    document.getElementById("label-over").classList.add("active", "over");
} else {
    document.getElementById("label-obese").classList.add("active", "obese");
}


}
function openProgram(program) {
    const title = document.getElementById("program-title");
    const content = document.getElementById("program-content");

    const programs = {
        weightLoss: {
            title: "Weight Loss Programme",
            content: "A structured plan focused on sustainable fat loss, lifestyle changes and long-term health."
        },
        muscleGain: {
            title: "Muscle Gain Programme",
            content: "Designed for healthy muscle development with balanced nutrition and guidance."
        },
        diabetes: {
            title: "Diabetes Management Programme",
            content: "Personalized dietary support to manage blood sugar levels effectively."
        },
        pcod: {
            title: "PCOD / PCOS Programme",
            content: "Hormone-friendly nutrition designed to support women’s health."
        }
        // we’ll add more later
    };

    title.innerText = programs[program].title;
    content.innerText = programs[program].content;

    document.getElementById("program-modal").style.display = "flex";
}

function closeProgram() {
    document.getElementById("program-modal").style.display = "none";
}
let testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

setInterval(() => {
    testimonials[currentTestimonial].classList.remove("active");

    currentTestimonial =
        (currentTestimonial + 1) % testimonials.length;

    testimonials[currentTestimonial].classList.add("active");
}, 10000); // 10 seconds
function toggleAbout() {
    const more = document.querySelector(".about-more");
    const btn = document.querySelector(".read-more-btn");

    more.classList.toggle("expanded");

    btn.textContent = more.classList.contains("expanded")
        ? "Read Less"
        : "Read More";
}
function toggleNutrigenomics() {
    const more = document.querySelector(".nutrigenomics-more");
    const btn = event.target;

    more.classList.toggle("expanded");

    btn.textContent = more.classList.contains("expanded")
        ? "Read Less"
        : "Read More";
}

