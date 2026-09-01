const favApps = [
  {
    title: "Instagram",
    url: "https://www.instagram.com"
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com"
  },
  {
    title: "WhatsApp",
    url: "https://web.whatsapp.com"
  },
  {
    title: "Spotify",
    url: "https://www.spotify.com"
  },
  {
    title: "GitHub",
    url: "https://github.com"
  }
];

// Remove the third app and insert a new app
favApps.splice(2, 1, {
  title: "ChatGPT",
  url: "https://chatgpt.com"
});

console.log(favApps);