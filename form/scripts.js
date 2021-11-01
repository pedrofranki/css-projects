(function register() {
  var list = [{ name: "Pedro", email: "pedrofranki2@gmail.com" }];
  var btn = document.querySelector(".btn");
  const listElem = document.querySelector(".list");

  function init() {
    btn.addEventListener("click", handlesubmit);
    listElem.appendChild(teste);
  }

  function addElement(item) {
    const element = document.createElement("div");
    element.className = "card";
    element.innerHTML = `
    <span class="avatar">I</span>
    <div class="card-grid">
      <div class="column-container">
        <span class="bold">Name:</span>
        <span class="regular">${item.name}</span>
      </div>
      <div class="column-container">
        <span class="bold">E-mail</span>
        <span class="regular">${item.email}</span>
      </div>
    </div>`;
    listElem.appendChild(element);
  }

  function handlesubmit() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    const newRegister = { name, email };
    // list.push(newRegister);
    // myNode.innerHTML = "";

    addElement(newRegister);
  }

  init();
  // return { handlesubmit };
})();
