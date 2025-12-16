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

const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const title = document.getElementById("trackTitle");

const tracks = [
  { title: "Aishite Aishite feat. Ado", file: "music/Aishite Aishite feat. Ado.mp3" },
  { title: "Bug", file: "music/Bug.mp3" },
  { title: "Tetoris", file: "music/Tetoris.mp3" },
  { title: "♪ MarbleBlue", file: "music/♪ MarbleBlue.mp3" },
  { title: "Ado_-_Usseewa_", file: "music/Ado_-_Usseewa_.mp3" },
  { title: "Awake Now", file: "music/Awake Now.mp3" },
  { title: "BAKENOHANA", file: "music/BAKENOHANA.mp3" },
  { title: "Becoming_Potatoes", file: "music/Becoming_Potatoes.mp3" },
  { title: "Blessing", file: "music/Blessing.mp3" },
  { title: "Bocca della Verità", file: "music/Bocca della Verità.mp3" },
  { title: "BRING_IT_ON_SEKAI", file: "music/BRING_IT_ON_SEKAI.mp3" },
  { title: "Cat Food", file: "music/Cat Food.mp3" },
  { title: "Cat Loving", file: "music/Cat Loving.mp3" },
  { title: "Cyberpunk dead boy", file: "music/Cyberpunk dead boy.mp3" },
  { title: "DREAM PLACE", file: "music/DREAM PLACE.mp3" },
  { title: "Electric Angel", file: "music/Electric Angel.mp3" },
  { title: "Envy_Baby", file: "music/Envy_Baby.mp3" },
  { title: "Evil_Food_Eater_Conchita", file: "music/Evil_Food_Eater_Conchita.mp3" },
  { title: "Fake_heart", file: "music/Fake_heart.mp3" },
  { title: "Hatsune_Creation_Myth", file: "music/Hatsune_Creation_Myth.mp3" },
  { title: "Hello, SEKAI", file: "music/Hello, SEKAI.mp3" },
  { title: "Help_me_ERINNNNNN", file: "music/Help_me_ERINNNNNN.mp3" },
  { title: "Highlight", file: "music/Highlight.mp3" },
  { title: "Jackpot Sad Girl", file: "music/Jackpot Sad Girl.mp3" },
  { title: "Jouou", file: "music/Jouou.mp3" },
  { title: "Kirapipi ☆ Kirapika", file: "music/Kirapipi ☆ Kirapika.mp3" },
  { title: "M@GICAL☆CURE! LOVE ♥ SHOT!", file: "music/M@GICAL☆CURE! LOVE ♥ SHOT!.mp3" },
  { title: "Mind Brand", file: "music/Mind Brand.mp3" },
  { title: "Natsuya no Uta", file: "music/Natsuya no Uta.mp3" },
  { title: "needle", file: "music/needle.mp3" },
  { title: "NEO", file: "music/NEO.mp3" },
  { title: "Opera! Space Opera!", file: "music/Opera! Space Opera!.mp3" },
  { title: "Parasol Cider", file: "music/Parasol Cider.mp3" },
  { title: "Passion at 25_00", file: "music/Passion at 25_00.mp3" },
  { title: "RAD DOGS", file: "music/RAD DOGS.mp3" },
  { title: "SEIBAI ITAAAAAASU!", file: "music/SEIBAI ITAAAAAASU!.mp3" },
  { title: "Sweet Magic", file: "music/Sweet Magic.mp3" },
  { title: "Tell_Your_World", file: "music/Tell_Your_World.mp3" },
  { title: "The_World_Hasnt_Even_Started_Yet", file: "music/The_World_Hasnt_Even_Started_Yet.mp3" },
  { title: "Tondemo Wonderz", file: "music/Tondemo Wonderz.mp3" },
  { title: "Worlders", file: "music/Worlders.mp3" }
];

let index = 0;
let playing = false;

function loadTrack(i) {
  audio.src = tracks[i].file;
  title.textContent = tracks[i].title;
}

loadTrack(index);

/* play / pause */
playBtn.onclick = () => {
  if (!playing) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
  playing = !playing;
};

/* next */
nextBtn.onclick = () => {
  index = (index + 1) % tracks.length;
  loadTrack(index);
  audio.play();
  playBtn.textContent = "⏸";
  playing = true;
};

/* prev */
prevBtn.onclick = () => {
  index = (index - 1 + tracks.length) % tracks.length;
  loadTrack(index);
  audio.play();
  playBtn.textContent = "⏸";
  playing = true;
};

/* progress */
audio.ontimeupdate = () => {
  if (!audio.duration) return;
  progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
  audio.currentTime =
    (progress.value / 100) * audio.duration;
};

/* volume */
audio.volume = volume.value;
volume.oninput = () => {
  audio.volume = volume.value;
};



