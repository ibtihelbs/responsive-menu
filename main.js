const menu = [
  {
    id: "pizza",
    label: "Pizza",
    intro: "Pâte napolitaine, cuite au four à bois.",
    dishes: [
      {
        name: "Margherita",
        desc: "Sauce tomate, mozzarella, basilic, huile d'olive.",
        price: "14 dt",
      },
      {
        name: "Pepperoni",
        desc: "Sauce tomate, mozzarella, basilic, huile d'olive, pepperoni.",
        price: "17 dt",
      },
      {
        name: "Funghi",
        desc: "Sauce tomate, mozzarella, basilic, champignon, huile d'olive.",
        price: "17 dt",
      },
      {
        name: "Al Tonno",
        desc: "Sauce tomate, mozzarella, basilic, huile d'olive, thon, olives noires.",
        price: "18 dt",
      },
      {
        name: "Vegetariano",
        desc: "Sauce tomate, mozzarella, basilic, champignon, légumes sautés.",
        price: "17 dt",
      },
      {
        name: "Regina",
        desc: "Sauce tomate, mozzarella, basilic, jambon, champignon.",
        price: "20 dt",
      },
      {
        name: "Messicano",
        desc: "Sauce tomate, mozzarella, basilic, bœuf haché.",
        price: "20 dt",
      },
      {
        name: "Bianca",
        desc: "Crème fraîche, mozzarella, basilic, escalope de poulet, épinard, ricotta.",
        price: "22 dt",
      },
      {
        name: "4 Stagioni",
        desc: "Sauce tomate, mozzarella, basilic, thon, jambon, champignon, légumes sautés.",
        price: "22 dt",
      },
      {
        name: "Roma",
        desc: "Sauce tomate, mozzarella, viande hachée, pepperoni, basilic, huile d'olive.",
        price: "23 dt",
      },
      {
        name: "Napoli (Anchois)",
        desc: "Sauce tomate, mozzarella, tomates cerises, anchois, olives noires, câpres, piments rouges.",
        price: "24 dt",
      },
      {
        name: "Quattro Formaggi",
        desc: "Sauce tomate, mozzarella, basilic, gouda, edam, cheddar, fromage bleu, grana.",
        price: "24 dt",
      },
      {
        name: "Frutti di Mare",
        desc: "Sauce tomate, mozzarella, fruits de mer, basilic, bisque.",
        price: "26 dt",
      },
      {
        name: "Bresaola",
        desc: "Sauce tomate, mozzarella, viande séchée, roquette, tomates séchées, parmesan.",
        price: "26,5 dt",
      },
      {
        name: "Eatalia Double Pâtes",
        desc: "Sauce tomate, mozzarella, basilic, huile d'olive, escalope, jambon, viande hachée.",
        price: "26,5 dt",
        tag: "Signature",
      },
      {
        name: "Saumon",
        desc: "Sauce blanche, mozzarella, tomates cerises, saumon fumé, ricotta, noix, parmesan, roquette.",
        price: "31 dt",
      },
    ],
  },
  {
    id: "pasta",
    label: "Pâtes",
    intro: "Pâtes fraîches préparées à la demande.",
    dishes: [
      {
        name: "Bolognese",
        desc: "Sauce tomate, viande hachée.",
        price: "16,5 dt",
      },
      {
        name: "Putanesca",
        desc: "Sauce tomate, olives noires, thon, câpres, piment fort, cornichons.",
        price: "16,5 dt",
      },
      {
        name: "Lasagna",
        desc: "Sauce bolognese, tomate, viande hachée, sauce béchamel.",
        price: "17,5 dt",
      },
      {
        name: "Carbonara",
        desc: "Tagliatelle, jambon fumé, escalope, crème liquide, jaune d'œuf, basilic, tomates cerises.",
        price: "17 dt",
      },
      {
        name: "4 Fromaggi",
        desc: "Sauce blanche, edam, gouda, cheddar, parmesan.",
        price: "19,5 dt",
      },
      {
        name: "Fondant au Poulet",
        desc: "Sauce blanche, poulet, 3 fromages.",
        price: "20 dt",
      },
      { name: "Ravioli 4 Fromage", desc: "Sauce blanche.", price: "25 dt" },
      { name: "Ravioli Viande Hachée", desc: "Sauce tomate.", price: "26 dt" },
      { name: "Ravioli Saumon", desc: "Sauce pesto.", price: "32 dt" },
      {
        name: "Ravioli Frutti di Mare",
        desc: "Sauce tomate, crevettes, moules, seiches, bisque.",
        price: "25 dt",
      },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    intro: "Servis avec une entrée, une sauce et du pain.",
    dishes: [
      {
        name: "Escalope Grillé",
        desc: "Pâtes sauce tomate, légumes sautés, patate au four.",
        price: "18 dt",
      },
      {
        name: "Escalope Pané",
        desc: "Pâtes sauce tomate, légumes sautés, patate au four.",
        price: "19 dt",
      },
      {
        name: "Crispy",
        desc: "Pâtes sauce rouge, légumes sautés, patates au four.",
        price: "19,5 dt",
      },
      {
        name: "Escalope au Champignon",
        desc: "Pâtes sauce blanche, légumes sautés, patates au four.",
        price: "21 dt",
      },
    ],
  },
  {
    id: "salades",
    label: "Salades",
    intro: "",
    dishes: [
      {
        name: "Cesar",
        desc: "Laitue, tomates cerises, escalope, sauce césar, parmesan, 3 fromages.",
        price: "14,9 dt",
      },
      {
        name: "Cesar (Crispy)",
        desc: "Laitue, tomates cerises, crispy, sauce césar, parmesan, 3 fromages.",
        price: "16,5 dt",
      },
      {
        name: "Eatalia",
        desc: "Tomate, laitue, edam, gouda, cheddar, olive, cornichon, concombre, parmesan.",
        price: "15,9 dt",
      },
      {
        name: "Frutti di Mare",
        desc: "Laitue, tomate, olive, gnocchetti, chevrettes, crevettes, moules, seiches.",
        price: "19 dt",
      },
    ],
  },
  {
    id: "hamburger",
    label: "Hamburger",
    intro: "",
    dishes: [
      {
        name: "Crispy",
        desc: "Crispy, oignon caramélisé, tomates, laitue, fromage, cornichons, frites.",
        price: "13,5 dt",
      },
      {
        name: "Steack Haché",
        desc: "Steak haché, oignon caramélisé, tomates, laitue, fromage, cornichons, frites.",
        price: "16 dt",
      },
      {
        name: "Double Steack",
        desc: "2 steaks hachés, oignon caramélisé, tomates, laitue, fromage, cornichons, frites.",
        price: "19,5 dt",
      },
    ],
  },
  {
    id: "croccante",
    label: "Croccante",
    intro: "",
    dishes: [
      {
        name: "4 Crispy di Pollo",
        desc: "4 crispy di pollo, sauces, 1 frite.",
        price: "14 dt",
      },
      {
        name: "4 Crispy di Pollo — Menu",
        desc: "4 crispy di pollo, sauces, 1 frite, 1 salade, pain, 1 soda.",
        price: "17,5 dt",
      },
      {
        name: "6 Crispy di Pollo",
        desc: "6 crispy di pollo, sauces, 2 frites.",
        price: "21 dt",
      },
      {
        name: "6 Crispy di Pollo — Menu",
        desc: "6 crispy di pollo, sauces, 2 frites, 2 salades, pain, 2 sodas.",
        price: "26 dt",
      },
      {
        name: "10 Crispy di Pollo",
        desc: "10 crispy di pollo, sauces.",
        price: "25 dt",
      },
    ],
  },
  {
    id: "panuozzo",
    label: "Panuozzo",
    intro: "",
    dishes: [
      {
        name: "Al Tonno",
        desc: "Thon, laitue, tomates, fromage, sauce au choix, oignon caramélisé.",
        price: "10,5 dt",
      },
      {
        name: "Escalope Grillé",
        desc: "Escalope grillée, laitue, tomates, fromage, sauce au choix, oignon caramélisé.",
        price: "12 dt",
      },
      {
        name: "Escalope Pané",
        desc: "Escalope panée, laitue, tomates, fromage, sauce au choix, oignon caramélisé.",
        price: "12 dt",
      },
      {
        name: "Cordon Bleu",
        desc: "Cordon bleu, laitue, tomates, fromage, sauce au choix, oignon caramélisé.",
        price: "13 dt",
      },
      {
        name: "Crispy",
        desc: "Crispy, laitue, tomates, fromage, sauce au choix, oignon caramélisé.",
        price: "13 dt",
      },
      {
        name: "Viandes Hachées",
        desc: "Viande hachée, laitue, tomates, fromage, sauce au choix, oignon caramélisé.",
        price: "14,5 dt",
      },
      {
        name: "Poulet Champignon à la Crème",
        desc: "Poulet, champignon, crème fraîche, laitue, fromage.",
        price: "14,5 dt",
      },
    ],
  },
  {
    id: "cornets",
    label: "Cornets",
    intro: "Suppléments : Gruyère +4 dt, Cheddar +3 dt.",
    dishes: [
      {
        name: "Cornet Grillé",
        desc: "Escalope grillée, laitue, tomate, oignon caramélisé, sauce au choix.",
        price: "13 dt",
      },
      {
        name: "Cornet Pané",
        desc: "Escalope panée, laitue, oignon caramélisé, sauce au choix.",
        price: "14 dt",
      },
      {
        name: "Cornet Viande Hachée",
        desc: "Viande hachée, laitue, tomate, oignon caramélisé, sauce au choix.",
        price: "15,5 dt",
      },
    ],
  },
  {
    id: "kids",
    label: "Kids",
    intro: "",
    dishes: [
      {
        name: "Nuggets",
        desc: "Nuggets de poulet, boulettes de fromage, pâtes sauce rouge, crock kids, frites.",
        price: "12 dt",
      },
      {
        name: "Crispy Kids",
        desc: "3 crispy di pollo, pâtes sauce rouge, frites.",
        price: "13 dt",
      },
    ],
  },
  {
    id: "baguette",
    label: "Baguette Farcie",
    intro: "",
    dishes: [
      { name: "Escalope Grillé / Jambon", desc: "", price: "15 dt" },
      { name: "Kebab", desc: "", price: "17 dt" },
    ],
  },
  {
    id: "makloub",
    label: "Makloub",
    intro: "",
    dishes: [
      { name: "Escalope Pané", desc: "", price: "12,5 dt" },
      { name: "Escalope Grillé", desc: "", price: "12 dt" },
      { name: "Cordon Bleu", desc: "", price: "13,5 dt" },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    intro: "",
    dishes: [
      { name: "Eau 0,5 L", desc: "", price: "1,400 dt" },
      { name: "Eau 1 L", desc: "", price: "2,600 dt" },
      { name: "Canette boisson gazeuse", desc: "", price: "2,800 dt" },
    ],
  },
];

const tabsEl = document.getElementById("tabs");
const menuEl = document.getElementById("menu");

menu.forEach((course, i) => {
  const btn = document.createElement("button");
  btn.textContent = course.label;
  btn.setAttribute("role", "tab");
  btn.setAttribute("data-target", course.id);
  if (i === 0) btn.classList.add("active");
  btn.addEventListener("click", () => showCourse(course.id));
  tabsEl.appendChild(btn);

  const section = document.createElement("section");
  section.className = "course" + (i === 0 ? " active" : "");
  section.id = course.id;

  const intro = document.createElement("p");
  intro.className = "intro";
  intro.textContent = course.intro;
  section.appendChild(intro);

  course.dishes.forEach((dish) => {
    const d = document.createElement("div");
    d.className = "dish";
    d.tabIndex = 0;
    d.innerHTML = `
      <div class="dish-top">
        <span class="dish-name">${dish.name}</span>
        <span class="leader"></span>
        <span class="price">${dish.price}</span>
      </div>
      <p class="desc">${dish.desc}${dish.tag ? `<span class="tag">${dish.tag}</span>` : ""}</p>
    `;
    section.appendChild(d);
  });

  menuEl.appendChild(section);
});

function showCourse(id) {
  document
    .querySelectorAll("section.course")
    .forEach((s) => s.classList.toggle("active", s.id === id));
  document
    .querySelectorAll("nav button")
    .forEach((b) => b.classList.toggle("active", b.dataset.target === id));
}
