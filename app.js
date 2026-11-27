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
  clearInputs();
  render();
}

function editProduct(id) {
  const product = products.find(p => p.id === id);

  const newName = prompt("Enter new product name:", product.name);
  if (newName === null || !newName.trim()) return;

  const newPrice = prompt("Enter new price:", product.price);
  if (newPrice === null || Number(newPrice) <= 0) return;

  product.name = newName.trim();
  product.price = Number(newPrice);

  save();
  render();
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  cart = cart.filter(cartId => cartId !== id);
  save();
  render();
}

function addToCart(id) {
  cart.push(id);
  save();
  render();
}

function clearInputs() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

function render() {
  document.getElementById("products").innerHTML =
    products.map(p => `
      <div class="product">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <button onclick="editProduct(${p.id})">Edit</button>
        <button onclick="deleteProduct(${p.id})">Delete</button>
      </div>
    `).join("");

  document.getElementById("count").textContent = cart.length;
}

showUser();
render();
