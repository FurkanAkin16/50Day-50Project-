// HTML'de tanımlanan elementleri JS değişkenlerine atama
const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

// Metin kutusuna odaklanma
textarea.focus();

// Metin kutusuna herhangi bir karakter girildiğinde çalışacak olan addEventListener
textarea.addEventListener("keyup", (e) => {
  // Etiketleri oluşturma fonksiyonunu çağırma
  createTags(e.target.value);
  // Check  Enter
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

// Etiketleri oluşturan function
function createTags(input) {
  // Metin kutusundan gelen verileri düzenleme
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  // Etiketlerin gösterileceği div elementinin içeriğini temizleme
  tagsEl.innerHTML = "";
  // Her bir etiket için span elementi oluşturma ve etiket içeriğini belirleme
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
