const products = [
  {name:"Laptop", cat:"electronics"},
  {name:"Headphones", cat:"electronics"},
  {name:"Smartphone", cat:"electronics"},
  {name:"Jeans", cat:"clothing"},
  {name:"T-Shirt", cat:"clothing"},
  {name:"Jacket", cat:"clothing"},
  {name:"Keyboard", cat:"electronics"},
  {name:"Sneakers", cat:"clothing"},
  {name:"Monitor", cat:"electronics"},
  {name:"Cap", cat:"clothing"}
];

const list = document.getElementById("list");
const search = document.getElementById("search");
const buttons = document.querySelectorAll("button");

function show(items){
  list.innerHTML = items.map(p => `<li>${p.name}</li>`).join("");
}

function filter(type){
  let txt = search.value.toLowerCase();
  let filtered = products.filter(p =>
    (type==="all" || p.cat===type) &&
    p.name.toLowerCase().includes(txt)
  );
  show(filtered);
}

buttons.forEach(btn=>{
  btn.onclick = ()=> filter(btn.dataset.filter);
});

search.oninput = ()=> filter("all");

show(products);
