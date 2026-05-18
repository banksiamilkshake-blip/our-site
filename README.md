# MySpace Retro Website 🎨✨

A nostalgic, fully-functional MySpace-style website built with HTML, CSS, and JavaScript. Complete with all the 2000s vibes you remember!

## Features

### 🎨 Design Elements
- **Animated gradient background** - Continuously shifting neon colors
- **Skewed/rotated boxes** - That classic tilted MySpace look
- **Vibrant color scheme** - Hot pink, cyan, magenta, yellow, lime green
- **Text shadows and glows** - Extra bling everywhere
- **Responsive design** - Works on mobile and desktop

### 💬 Interactive Features
- **Visit Counter** - Tracks visits using localStorage
- **Clickable Interest Tags** - Change colors when clicked
- **Blog Posts** - Complete with comment sections
- **Profile Sidebar** - With picture and personal info
- **Easter Egg** - Type "myspace" anywhere to trigger confetti! 🎉

### 📱 Sections
- Profile header with marquee banner
- Sidebar with profile info and about section
- Multiple blog post sections with comments
- Interests display
- Favorites section (movie, band, book, game)
- Visit counter and footer

## Customization Guide

### Update Your Profile
Edit the following in `index.html`:

```html
<h1 class="site-title">✨ WELCOME TO MY PROFILE ✨</h1>
<p class="tagline">Your name here</p>
```

And in the profile box:
```html
<p><strong>Name:</strong> Your Name</p>
<p><strong>Age:</strong> XX</p>
<p><strong>Location:</strong> Your City</p>
```

### Add Your Profile Picture
Replace the placeholder URL:
```html
<img src="https://via.placeholder.com/150" alt="Profile Picture" class="profile-pic">
```

With your own image URL.

### Customize Colors
Edit the gradient colors in `styles.css`. For example:
```css
background: linear-gradient(135deg, #ffb6c1, #87ceeb);
```

Change the hex color codes to your preferred colors.

### Add More Blog Posts
Copy this block in the `<main class="content">` section:

```html
<section class="post">
    <h2 class="post-title">🎶 YOUR POST TITLE</h2>
    <p class="post-date">Posted on MM/DD/YYYY</p>
    <p>Your post content goes here!</p>
    <div class="comments">
        <h3>💬 Comments</h3>
        <div class="comment">
            <p><strong>Friend Name:</strong> Great post!</p>
        </div>
    </div>
</section>
```

### Update Interests
Edit the interest tags in the "CHECK OUT MY INTERESTS" section:

```html
<span class="interest-tag">your-interest</span>
```

### Update Favorites
Customize the favorites section with your actual favorites.

## How to Deploy

### Option 1: GitHub Pages
1. Go to your repository Settings
2. Scroll to "GitHub Pages" section
3. Select "main" branch as source
4. Wait for it to deploy
5. Your site will be live at: `https://your-username.github.io/our-site/`

### Option 2: Local Testing
Simply open `index.html` in your web browser to test locally.

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive features and counter
- `README.md` - This file!

## Easter Eggs

🎉 **Type "myspace" on your keyboard** to trigger confetti animation!

## Browser Support

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Tips for Maximum Retro Effect

1. Use Comic Sans font in your own additions
2. Add more gradients and bright colors
3. Include emoji liberally
4. Add more blink animations (use the `.blink` class)
5. Make everything BOLD and ALL CAPS sometimes!

## Made with ❤️ and 90s nostalgia

Enjoy your retro website! Rock on! 🤘✨