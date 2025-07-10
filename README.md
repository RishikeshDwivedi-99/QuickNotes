# 🗒️ QuickNotes

QuickNotes is a lightweight, fast, and simple note-taking web application built with Node.js and Express. Instead of using a traditional database, QuickNotes stores your notes directly in your local filesystem – making it ideal for small projects, personal tools, or learning file operations in Node.

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




---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript Templates)
- **Filesystem (fs module)**

---

## 🧑‍💻 Installation & Usage

### Prerequisites

- Node.js installed on your system

### Installation

```bash
git clone https://github.com/your-username/QuickNotes.git
cd QuickNotes
npm install

Running the App
node app.js
