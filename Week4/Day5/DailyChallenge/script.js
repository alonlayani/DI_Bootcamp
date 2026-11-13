// ==========================================================
// Week 4 - Day 5 - Daily Challenge : Creating Objects
// ==========================================================

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; // in seconds
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// First instance
const video1 = new Video("JavaScript Closures Explained", "Alon", 600);
video1.watch();

// Second instance
const video2 = new Video("CSS Grid in 10 minutes", "Dana", 620);
video2.watch();

// Bonus: an array of objects is the best structure (each object = one video's data)
const videosData = [
  { title: "Intro to Python", uploader: "Noa", time: 900 },
  { title: "Array Methods", uploader: "Yossi", time: 480 },
  { title: "DOM Events", uploader: "Maya", time: 720 },
  { title: "Async JavaScript", uploader: "Eli", time: 1100 },
  { title: "Git for Beginners", uploader: "Tamar", time: 540 },
];

// Bonus: loop through the array to instantiate the videos
const videos = videosData.map(({ title, uploader, time }) => new Video(title, uploader, time));
videos.forEach((video) => video.watch());
