let products = JSON.parse(localStorage.getItem("products")) || [
  { id: 1, name: "Headphones", price: 999 },
  { id: 2, name: "Smart Watch", price: 1499 },
  { id: 3, name: "Backpack", price: 799 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function save() {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("cart", JSON.stringify(cart));
}

function login() {
  localStorage.setItem("user", "User");
  showUser();
}

function logout() {
  localStorage.removeItem("user");
  showUser();
}

function showUser() {
  document.getElementById("user").textContent =
    localStorage.getItem("user") || "Guest";
}

function addProduct() {
  const name = document.getElementById("productName").value.trim();
  const price = Number(document.getElementById("productPrice").value);

  if (!name || price <= 0) {
    alert("Enter a valid product name and price!");
    return;
  }

  products.push({ id: Date.now(), name, price });
  save();
  render();
}

function addToCart(id) {
  cart.push(id);
  save();
  render();
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  save();
  render();
}

function render() {
  document.getElementById("products").innerHTML = products.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="deleteProduct(${p.id})">Delete</button>
    </div>
  `).join("");

  document.getElementById("count").textContent = cart.length;
}

showUser();
render();
