self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("push", (event) => {
  const title = "Notification";
  const options = {
    body: event.data.text(),
    icon: "icon-192x192.png",
    badge: "icon-192x192.png",
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
