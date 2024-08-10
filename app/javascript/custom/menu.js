document.addEventListener("turbo:load", () => {
  const account = document.querySelector("#account");
  if (account) {
    account.addEventListener("click", (event) => {
      event.preventDefault();
      const menu = document.querySelector("#dropdown-menu");
      menu.classList.toggle("active");
    })
  }
})
