<div align="center">

# 🧠 BrainBox Quiz

**A fast, timed quiz app to test your knowledge, built with pure HTML, CSS and JavaScript.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

[Live Demo](https://YOUR-USERNAME.github.io/brainbox-quiz/) · [Report a Bug](https://github.com/YOUR-USERNAME/brainbox-quiz/issues)

</div>

---

## 📖 About the Project

BrainBox Quiz lets you pick a topic, answer multiple-choice questions against a 15-second timer, and see your final score. It needs no framework, no build step and no installation, so it is a great project for learning how the DOM, events, timers and `localStorage` work together.

## 📸 Screenshots

> Add your screenshots here after running the project.
>
> `![Home Screen](screenshots/home.png)`
> `![Quiz Screen](screenshots/quiz.png)`
> `![Result Screen](screenshots/result.png)`

## ✨ Features

| Feature | Description |
|---|---|
| 3 topics | Web Development, Pakistan, General Knowledge |
| Countdown timer | 15 seconds per question, auto-locks when time is up |
| Instant feedback | Correct answer turns green, wrong answer turns red |
| Progress bar | Shows how far you are in the quiz |
| Score and message | Final score with a motivating message |
| Best score | Saved in the browser using `localStorage` |
| Responsive | Works on phones, tablets and desktops |
| Dark mode | Follows your device theme automatically |
| Accessible | Keyboard focus styles and reduced-motion support |

## 🛠️ Built With

- **HTML5** for structure
- **CSS3** with Flexbox, Grid and CSS variables
- **JavaScript (ES6)** for quiz logic, timer and storage

## 📂 Project Structure

```
brainbox-quiz/
├── index.html    # Page layout
├── style.css     # Styling and themes
├── script.js     # Questions, timer and quiz logic
└── README.md     # Project documentation
```

## 🚀 Getting Started

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/brainbox-quiz.git

# 2. Go into the folder
cd brainbox-quiz

# 3. Open index.html in your browser
```

No dependencies to install.

### Deploy on GitHub Pages (free)

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://YOUR-USERNAME.github.io/brainbox-quiz/`.

## ➕ Add Your Own Questions

Open `script.js` and add a new object to any topic inside `topics`:

```js
{ q: "Your question?", o: ["Option A", "Option B", "Option C", "Option D"], a: 1 }
```

- `q` is the question text
- `o` is the list of four options
- `a` is the index of the correct option (starts from 0, so `1` means Option B)

To add a new topic, create a new key in `topics` with an array of questions. It will appear on the home screen automatically.

## 🎓 What I Learned

- Manipulating the DOM and handling events
- Using `setInterval` and `clearInterval` for a timer
- Saving data with `localStorage`
- Building responsive layouts and dark mode with CSS variables

## 🔮 Future Improvements

- [ ] More topics and difficulty levels
- [ ] Shuffle answer options
- [ ] Sound effects
- [ ] Global leaderboard with Firebase

## 🤝 Contributing

Contributions are welcome. Fork the repository, create a branch, commit your changes and open a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Developed by HANIA BATOOL**

</div>
