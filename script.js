const inputBox = document.querySelector("#input-box");

const listContainer = document.querySelector("#list-container");

const addtask = () => {
      if (inputBox.value === "") {
            alert("You must write something !!")
      }
      else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "&#x00D7;";
            li.appendChild(span);

      }
      inputBox.value = "";
      savedata();
}

listContainer.addEventListener("click", switching = (e) => {
      if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            savedata();
      }
      else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            savedata();
      }
});

const savedata = () => {
      localStorage.setItem("data", listContainer.innerHTML)
}

const showdata = () => {
      listContainer.innerHTML = localStorage.getItem("data");
}

showdata();