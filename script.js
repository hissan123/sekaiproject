/* ===== ПОДРОБНЕЕ ===== */
const showBtn = document.getElementById("showBtn");
const content = document.getElementById("content");

showBtn.addEventListener("click", () => {
  const opened = !content.classList.contains("hidden");

  if (!opened) {
    content.classList.remove("hidden");
    content.scrollIntoView({ behavior: "smooth" });
    showBtn.textContent = "Скрыть";
  } else {
    content.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    showBtn.textContent = "Подробнее";
  }
});

/* ===== МУЗЫКАЛЬНЫЙ ПЛЕЕР ===== */
const audio = document.getElementById("bgMusic");

const tracks = [
  { title: "Aishite Aishite feat. Ado", file: "music/Aishite Aishite feat. Ado.mp3" },
  { title: "Bug", file: "music/Bug.mp3" },
  { title: "Tetoris", file: "music/Tetoris.mp3" }
];

let index = 0;
let playing = false;

audio.src = tracks[index].file;

const playBtn = document.getElementById("musicBtn");
const titleBox = document.getElementById("trackTitle");

function updateTitle() {
  titleBox.textContent = tracks[index].title;
}

playBtn.addEventListener("click", () => {
  if (!playing) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
  playing = !playing;
});

document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % tracks.length;
  audio.src = tracks[index].file;
  audio.play();
  playing = true;
  playBtn.textContent = "⏸";
  updateTitle();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + tracks.length) % tracks.length;
  audio.src = tracks[index].file;
  audio.play();
  playing = true;
  playBtn.textContent = "⏸";
  updateTitle();
});

audio.addEventListener("ended", () => {
  index = (index + 1) % tracks.length;
  audio.src = tracks[index].file;
  audio.play();
  updateTitle();
});

updateTitle();