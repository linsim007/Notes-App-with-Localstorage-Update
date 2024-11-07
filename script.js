const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Load notes from localStorage and set HTML content of notesContainer
const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
};

// Update localStorage whenever notes are changed
const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

// Load notes on initial page load
showNotes();

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let inputIcon = document.createElement("img");
  inputIcon.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
  );
  inputBox.classList.add("input-box");
  inputBox.setAttribute("contenteditable", "true");

  // Append inputBox with icon to the notes container
  notesContainer.appendChild(inputBox).appendChild(inputIcon);

  // Update localStorage
  updateStorage();
});

// Handle click and keyup events within notesContainer
notesContainer.addEventListener("click", (e) => {
  // Delete note if icon is clicked
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

// Update storage on keyup within .input-box elements
notesContainer.addEventListener("keyup", (e) => {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});
