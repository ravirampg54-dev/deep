# Our Little Universe ❤️

A private, cinematic birthday journey. No backend. Open `index.html` and it works.

## Make it yours (4 steps)

1. Put photos in `images/`
   - Name them `photo1.jpg` through `photo15.jpg`
   - JPG, PNG, or WEBP is fine if you also update the path in `CONFIG`
   - Missing photos show a soft “Memory waiting to be added…” card instead of breaking the page
2. Put a song in `music/romantic.mp3`
   - Missing music hides the player. The site still works.
3. Open `js/script.js` and edit the `CONFIG` object at the top:
   - `loverName`
   - `birthdayMessage`
   - `subtitle`
   - `letter`
   - photo titles and captions
   - `music` path
4. Open `index.html` in a browser (Chrome or Edge).

Music never autoplays. After they tap **YES, MY LOVE**, the player tries to start. They can always toggle **Music ON / Music OFF**.

## Folder

```
romantic-birthday/
├── index.html
├── css/style.css
├── js/script.js
├── images/          ← your photos
├── music/           ← romantic.mp3
└── README.md
```

## Tips

- Keep photos reasonably sized (under ~1–2 MB each) so mobile stays smooth.
- Double-tap a photo for a heart. Tap the home heart 5 times for a secret.
- Replay at the end restarts the whole story.
