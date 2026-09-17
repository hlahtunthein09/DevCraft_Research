const progress = document.querySelector(".progress span");
const sections = [...document.querySelectorAll("main .slide")];
const links = [...document.querySelectorAll(".menu a")];
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.height = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  const current = sections.reduce(
    (active, section) =>
      window.scrollY + window.innerHeight * 0.35 >= section.offsetTop
        ? section
        : active,
    sections[0],
  );
  links.forEach((link) =>
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current.id}`,
    ),
  );
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
