# 🗒️ QuickNotes

QuickNotes is a lightweight, fast, and simple note-taking web application built with Node.js and Express. Instead of using a traditional database, QuickNotes stores your notes directly in your local filesystem – making it ideal for small projects, personal tools, or learning file operations in Node.

## 🚀 Features

- 📝 Create new notes and save them as `.txt` files
- 📂 View a list of all saved notes
- 📖 Read the full content of any note
- 💾 File-based storage (no database required)

---

## 📁 Project Structure

QuickNotes/
├── files/ # Stores all created notes as .txt files
├── views/ # EJS templates for rendering pages
│ ├── home.ejs
│ └── readM.ejs
├── app.js # Main Express server
├── package.json
└── README.md


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
