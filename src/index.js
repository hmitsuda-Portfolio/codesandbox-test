import "./styles.css";
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromInconpleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");
  li.setAttribute("id", "incomplete-text");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = text;
  document.getElementById("incomplete-list").appendChild(li);
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromInconpleteList(li);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const lii = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      document.getElementById("complete-list").removeChild(lii);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    document.getElementById("complete-list").appendChild(lii);
    lii.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromInconpleteList(li);
  });
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
