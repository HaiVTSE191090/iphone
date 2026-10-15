// Critical resources shown on the lock screen + home screen at first paint.
// Album photos (public/photos/) load lazily when Photos opens, so they are
// intentionally excluded here â€” booting waits only on what the user sees first.
export const CRITICAL_ASSETS: readonly string[] = [
  // Wallpapers
  "${import.meta.env.BASE_URL}wallpaper-lock.jpeg", // lock screen
  "${import.meta.env.BASE_URL}wallpaper-home.jpeg", // home screen

  // Lock-screen controls
  "${import.meta.env.BASE_URL}icons/lock-flashlight.svg",
  "${import.meta.env.BASE_URL}icons/lock-camera.svg",

  // Home folder icons
  "${import.meta.env.BASE_URL}icons/calendar.png",
  "${import.meta.env.BASE_URL}icons/map.svg",
  "${import.meta.env.BASE_URL}icons/notes.svg",
  "${import.meta.env.BASE_URL}icons/photos.svg",
  "${import.meta.env.BASE_URL}icons/youtube.png",
  "${import.meta.env.BASE_URL}icons/wallet.svg",
  "${import.meta.env.BASE_URL}icons/calculator.png",
  "${import.meta.env.BASE_URL}icons/settings.png",

  // Dock icons
  "${import.meta.env.BASE_URL}icons/phone.png",
  "${import.meta.env.BASE_URL}icons/mess.png",
  "${import.meta.env.BASE_URL}icons/safari.png",

  // Widgets
  "${import.meta.env.BASE_URL}profile.jpeg",
  "${import.meta.env.BASE_URL}map-tile.svg",
];
