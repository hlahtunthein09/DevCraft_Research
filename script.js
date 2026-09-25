const revenue = [
  ["Developer Pro", 89550],
  ["Company Starter", 37250],
  ["Creator Pro", 35880],
  ["Company Pro", 19950],
  ["Marketplace", 19950],
  ["Sponsorship", 15000],
  ["Affiliate", 12000],
  ["Promoted jobs", 4900],
];
const total = 234480;
document.querySelector("[data-bars]").innerHTML = revenue
  .map(
    ([n, v]) =>
      `<div class="bar"><span class="bar-name">${n}</span><span class="bar-track"><i style="width:${(v / total) * 100}%"></i></span><strong>฿${v.toLocaleString()}</strong></div>`,
  )
  .join("");
const scenes = [...document.querySelectorAll(".scene")],
  links = [...document.querySelectorAll("nav a")],
  counter = document.querySelector("#counter");
const set = () => {
  const y =
    (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100;
  document.querySelector("#progress").style.width = `${y}%`;
};
addEventListener("scroll", set, { passive: true });
set();
new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      let i = scenes.indexOf(e.target);
      counter.textContent = `${String(i + 1).padStart(2, "0")} / 25`;
      links.forEach((a) =>
        a.classList.toggle(
          "active",
          a.getAttribute("href") === `#${e.target.id}`,
        ),
      );
    }),
  { threshold: 0.55 },
).observe(scenes[0]);
scenes.forEach((s) =>
  new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          let i = scenes.indexOf(e.target);
          counter.textContent = `${String(i + 1).padStart(2, "0")} / 25`;
          links.forEach((a) =>
            a.classList.toggle(
              "active",
              a.getAttribute("href") === `#${e.target.id}`,
            ),
          );
        }
      }),
    { threshold: 0.55 },
  ).observe(s),
);
