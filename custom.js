const list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-item")) {
    console.log(e.target.textContent);
  }
});
