# CyberSec Portfolio

A cyberpunk-themed personal portfolio website for cybersecurity professionals, featuring a futuristic neon aesthetic with purple and pink accents.

## Features

- **Cyberpunk Anime Aesthetic**: Neon purple and pink color scheme with futuristic styling
- **Dark/Light Mode Toggle**: Seamless theme switching with localStorage persistence
- **Fixed Sidebar Navigation**: Easy navigation between About, Write-ups, Projects, Skills, and Interests sections
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth transitions, glitch effects, and hover animations
- **Technical Write-ups**: Individual blog post pages with syntax highlighting and copy-to-clipboard functionality
- **GitHub Pages Compatible**: Static site ready for deployment

## Project Structure

```
.
├── index.html                 # Main portfolio page
├── assets/
│   ├── css/
│   │   ├── style.css          # Main stylesheet with cyberpunk theme
│   │   └── writeup.css        # Write-up page specific styles
│   ├── js/
│   │   ├── script.js          # Main JavaScript (navigation, theme toggle)
│   │   └── writeup.js         # Write-up page scripts (copy code, TOC)
│── images/                # Image assets (add your own)
├
└── README.md
```

## Sections

### 1. About
- Professional introduction
- Cybersecurity focus areas
- Quick stats (CTF challenges, tools, vulnerabilities)

### 2. Write-ups
- Technical blog posts and CTF write-ups
- Categories: Web Security, CTF, Malware Analysis, Active Directory, Network Security
- Full individual pages with syntax highlighting

### 3. Projects
- Security tools and automation frameworks
- Vulnerability scanners
- Active Directory labs
- CTF platforms

### 4. Skills & Tools
- Penetration Testing (Burp Suite, Metasploit, Nmap, Nuclei)
- Programming & Scripting (Python, Bash, JavaScript, PowerShell)
- Malware Analysis (IDA Pro, Ghidra, x64dbg, Cuckoo)
- Infrastructure & Cloud (Linux, Windows, Docker, AWS)

### 5. Interests
- Cybersecurity
- Anime & Manga
- CTF Competitions
- Tech & Hacking Culture
- Continuous Learning
- Community Engagement

## Customization Guide

### Colors
Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --neon-purple: #c850ff;
    --neon-pink: #ff2d95;
    --neon-cyan: #00f5ff;
}
```

### Personal Information
1. Update profile information in `index.html` (lines 24-26)
2. Modify social links (lines 38-50)
3. Update email address (line 48)
4. Customize stats (lines 78-98)

### Adding Write-ups
1. Create a new HTML file in the `writeups/` folder
2. Copy the structure from existing write-ups
3. Add a new card in `index.html` (section #writeups)
4. Update metadata (category, date, tags)

### Theme Toggle
- Default theme: Dark Mode
- Toggle button: Top right corner
- Keyboard shortcut: `Ctrl + K`
- Preference saved in localStorage

## Key Features Explained

### Navigation
- Fixed sidebar on desktop
- Collapsible mobile menu
- Smooth section transitions
- URL hash-based routing

### Animations
- Glitch text effect on hover
- Neon glow effects
- Smooth fade-in animations
- Intersection Observer for scroll reveals

### Write-up Pages
- Syntax highlighting for code blocks
- Copy-to-clipboard functionality
- Reading progress bar
- Auto-generated table of contents
- Responsive code blocks

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select branch (main) and root directory
4. Your site will be available at `https://username.github.io/repo-name`

### Local Development
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Access at http://localhost:8000
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Navigation, theme toggle, interactions
- **Font Awesome**: Icons
- **Google Fonts** (optional): Custom typography

## Customization Tips

1. **Replace Avatar**: Add your profile image in `assets/images/` and update line 20-22 in `index.html`
2. **Update Projects**: Modify project cards with your own GitHub repositories
3. **Customize Skills**: Add/remove tools and technologies in the Skills section
4. **Write-up Content**: Replace placeholder write-ups with your actual research
5. **Social Links**: Update all social media URLs to your profiles

## Features Not Included

- Backend/Database (static site only)
- Contact form with email sending (requires backend)
- Blog CMS (manual HTML editing required)
- Search functionality

## Credits

- Inspired by modern cybersecurity portfolio designs
- Font Awesome icons
- Cyberpunk aesthetic references from anime and tech culture

## License

Free to use and modify for personal portfolio projects.

---

**Note**: Remember to update all placeholder content, links, and personal information before deploying your portfolio!
