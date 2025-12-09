// Solutions pour le TP JavaScript Avancé (commentées)
// Les fonctions affichent le résultat dans des blocs #out-xxx et loggent dans la console.

const $ = id => document.getElementById(id);

// --- Exercice 1 ---
function exo1() {
  const out = [];
  // var
  if (true) {
    var v = "var scope: fonction (ou global)";
    let l = "let scope: bloc";
    const c = "const scope: bloc";
    out.push(`À l'intérieur du bloc: v="${v}", l="${l}", c="${c}"`);
  }
  // var reste visible hors du bloc
  try { out.push(`En dehors du bloc: v="${v}"`); } catch (e) { out.push("v n'est pas défini ici"); }
  // let & const sont bloqués
  try { out.push(`En dehors du bloc: l="${l}"`); } catch (e) { out.push("l n'est pas défini ici (Scope bloc)") }
  try { out.push(`En dehors du bloc: c="${c}"`); } catch (e) { out.push("c n'est pas défini ici (Scope bloc)") }

  // Réaffectation d'une const => TypeError si on tente d'affecter (runtime)
  const PI = 3.14;
  let reaff = "";
  try {
    // PI = 3.1415; // décommenter provoque une erreur TypeError
    reaff = "Réassigner une const provoque une erreur (TypeError)";
  } catch (e) {
    reaff = "Erreur : " + e.message;
  }
  out.push(reaff);
  display("out-e1", out.join("\n"));
  console.log("Exo1:", out);
}

// --- Exercice 2 ---
const somme = (a, b) => a + b; // return implicite
function exo2() {
  const a = 4, b = 7;
  display("out-e2", `somme(${a}, ${b}) = ${somme(a,b)}`);
  console.log("Exo2:", somme(2,3));
}

// --- Exercice 3 ---f
function exo3() {
  const user = { name: "Noor", age: 10, city: "Tunis" };
  const { name, age } = user;
  display("out-e3", `name = ${name}\nage = ${age}`);
  console.log("Exo3:", name, age);
}

// --- Exercice 4 ---
function exo4() {
  const a = [1,2,3], b = [4,5,6];
  const merged = [...a, ...b];
  const original = { title: "Ancien", author: "Auteur", year: 2000 };
  const copy = { ...original, year: 2025 }; // copie puis modification
  display("out-e4", `merged = [${merged}]\noriginal = ${JSON.stringify(original)}\ncopy = ${JSON.stringify(copy)}`);
  console.log("Exo4:", merged, original, copy);
}

// --- Exercice 5 ---
function exo5() {
  const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    getInfo() {
      return `${this.titre} — ${this.auteur} (${this.annee})`;
    }
  };
  display("out-e5", livre.getInfo());
  console.log("Exo5:", livre);
}

// --- Exercice 6 ---
class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }
  getMention() {
    if (this.note >= 16) return "Très bien";
    if (this.note >= 14) return "Bien";
    if (this.note >= 10) return "Passable";
    return "Échec";
  }
}
function exo6() {
  const s1 = new Etudiant("Lina", 17);
  const s2 = new Etudiant("Omar", 13.5);
  const s3 = new Etudiant("Sara", 9);
  const out = [
    `${s1.nom} (${s1.note}) → ${s1.getMention()}`,
    `${s2.nom} (${s2.note}) → ${s2.getMention()}`,
    `${s3.nom} (${s3.note}) → ${s3.getMention()}`
  ].join("\n");
  display("out-e6", out);
  console.log("Exo6:", out);
}

// --- Exercice 7 ---
function exo7() {
  const notes = [12, 5, 17, 9, 20];
  const moyenne = notes.reduce((s, n) => s + n, 0) / notes.length;
  const triDesc = [...notes].sort((a,b) => b - a);
  const filtres = notes.filter(n => n >= 10);
  display("out-e7", `notes = [${notes}]\nmoyenne = ${moyenne.toFixed(2)}\ntriDesc = [${triDesc}]\n>=10 = [${filtres}]`);
  console.log("Exo7:", {moyenne, triDesc, filtres});
}

// --- Exercice 8 ---
const wait = ms => new Promise(res => setTimeout(res, ms));
async function exo8() {
  display("out-e8", "Début");
  console.log("Exo8: Début");
  await wait(2000);
  display("out-e8", "Début\n(attente 2s terminée)\nFin");
  console.log("Exo8: Fin après 2s");
}

// --- Exercice 9 (Fetch + async/await) ---
async function exo9() {
  const outEl = $("out-e9");
  outEl.textContent = "Chargement...";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const posts = await resp.json();
    const first5 = posts.slice(0,5);
    outEl.textContent = first5.map(p => `#${p.id} — ${p.title}`).join("\n\n");
    console.log("Exo9: posts", first5);
  } catch (err) {
    outEl.textContent = `Erreur: ${err.message}`;
    console.error(err);
  }
}

// helper
function display(id, text) { document.getElementById(id).textContent = text; }

// Event listeners
document.getElementById("run-e1").addEventListener("click", exo1);
document.getElementById("run-e2").addEventListener("click", exo2);
document.getElementById("run-e3").addEventListener("click", exo3);
document.getElementById("run-e4").addEventListener("click", exo4);
document.getElementById("run-e5").addEventListener("click", exo5);
document.getElementById("run-e6").addEventListener("click", exo6);
document.getElementById("run-e7").addEventListener("click", exo7);
document.getElementById("run-e8").addEventListener("click", exo8);
document.getElementById("run-e9").addEventListener("click", exo9);
document.getElementById("run-e9-refresh").addEventListener("click", exo9);

// Auto-run a few examples for demo
exo3();
exo4();
