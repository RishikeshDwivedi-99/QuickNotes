# 🗒️ QuickNotes

QuickNotes is a lightweight, fast, and simple note-taking web application built with Node.js and Express. Instead of using a traditional database, QuickNotes stores your notes directly in your local filesystem – making it ideal for small projects, personal tools, or learning file operations in Node.

---

## 🚀 Features

- 📝 Create new notes and save them as `.txt` files
- 📂 View a list of all saved notes
- 📖 Read the full content of any note
- 💾 File-based storage (no database required)

---

## 📁 Project Structure

```text
QuickNotes/
├── files/               # Directory where all notes (.txt) are stored
│   └── sample.txt       # Example note file (auto-generated when added)
│
├── views/               # EJS template files for rendering HTML
│   ├── home.ejs         # Displays list of notes and add note form
│   └── readM.ejs        # Displays content of a selected note
│
├── index.js             # Main Express application file
├── package.json         # Project metadata and dependencies
```

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime environment for building the server-side application.
- **Express.js**: Web application framework for Node.js, simplifying routing and middleware handling.
- **EJS**: Embedded JavaScript templates used for rendering dynamic HTML pages.
- **Filesystem (fs module)**: Node.js built-in module for interacting with the file system, used to read/write notes as `.txt` files.

## 🧑‍💻 Installation & Usage

### Prerequisites

- Make sure you have **Node.js** installed on your system. You can check if it's installed by running:

  ```bash
  node -v
## 🧑‍💻 Installation & Usage Commands

### Clone the repo

```bash
git clone https://github.com/your-username/QuickNotes.git
cd QuickNotes
npm install
node index.js
```
Open the app in browser
Visit: http://localhost:5000

Just replace `your-username` with your GitHub username, and you're good to go!
