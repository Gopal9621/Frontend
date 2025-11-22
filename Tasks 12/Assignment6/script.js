const tbody = document.getElementById("tbody");
const refresh = document.getElementById("refresh");
const loader = document.getElementById("loader");

async function fetchUsers() {
  loader.classList.remove("hidden");
  tbody.innerHTML = "";

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  loader.classList.add("hidden");

  data.forEach(u => {
    tbody.innerHTML += `
      <tr>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.address.city}</td>
      </tr>
    `;
  });
}

refresh.addEventListener("click", fetchUsers);

fetchUsers();
