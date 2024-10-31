document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill");

    function showSkills() {
        skills.forEach(skill => {
            const skillPosition = skill.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillPosition < windowHeight - 100) {
                skill.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", showSkills);
    showSkills(); // Initial check to show elements already in view
});
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = sidebar.style.right === "0px" ? "-250px" : "0px";
}

