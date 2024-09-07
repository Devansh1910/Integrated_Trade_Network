<h1>Intergalactic Trade Network</h1>

<h2>Overview</h2>
<p>
  The Intergalactic Trade Network is a Node.js application designed to
  facilitate the creation, management, and tracking of interstellar trade and
  cargo operations. It allows users to register, create trades, manage
  inventories, and track cargo shipments between various intergalactic
  stations.
</p>

<h2>Features</h2>
<ul>
  <li><strong>User Authentication</strong>: Register, login, and manage user sessions.</li>
  <li><strong>Trade Management</strong>: Create and manage trades between different stations.</li>
  <li><strong>Inventory Management</strong>: Keep track of items available at various stations.</li>
  <li><strong>Cargo Tracking</strong>: Manage and track the shipment of goods between stations.</li>
</ul>

<h2>API Documentation</h2>
<p>
  The full API documentation, including all available endpoints and example
  requests, can be accessed through this
  <a href="https://gold-water-175554.postman.co/workspace/Team-Workspace~9820ce3d-475c-4995-8203-5bcc2c0635ee/collection/25673694-d41ca6ae-2c5b-42e6-821e-8b336c8210dc?action=share&creator=25673694">
    Postman Collection
  </a>.
</p>

<h2>Installation</h2>
<ol>
  <li>
    <strong>Clone the repository:</strong>
    <pre><code>git clone https://github.com/your-username/intergalactic-trade-network.git
cd intergalactic-trade-network</code></pre>
  </li>
  <li>
    <strong>Install dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li>
    <strong>Set up environment variables:</strong>
    <p>Create a <code>.env</code> file in the root of your project and add the following:</p>
    <pre><code>PORT=3000
MONGODB_URI=mongodb://localhost:27017/intergalactic-trade-network
JWT_SECRET=your_jwt_secret_key</code></pre>
  </li>
  <li>
    <strong>Start the server:</strong>
    <pre><code>npm start</code></pre>
    <p>The server should be running on <code>http://localhost:3000</code>.</p>
  </li>
</ol>

<h2>Usage</h2>

<h3>1. User Management</h3>
<ul>
  <li><strong>Register</strong>: <code>POST /api/register</code></li>
  <li><strong>Login</strong>: <code>POST /api/login</code></li>
  <li><strong>Logout</strong>: <code>GET /api/logout</code></li>
  <li><strong>Get User Details</strong>: <code>GET /api/getUser</code></li>
  <li><strong>Delete Account</strong>: <code>DELETE /api/deleteUser</code></li>
</ul>

<h3>2. Trade Management</h3>
<ul>
  <li><strong>Create Trade</strong>: <code>POST /api/trades</code></li>
  <li><strong>Update Trade Status</strong>: <code>PUT /api/updateTradeStatus/:transactionId</code></li>
  <li><strong>Get Trade by Transaction ID</strong>: <code>GET /api/getTrade</code></li>
</ul>

<h3>3. Inventory Management</h3>
<ul>
  <li><strong>Create Inventory</strong>: <code>POST /api/inventory</code></li>
  <li><strong>Get Inventory by Station ID</strong>: <code>GET /api/inventory/:userId/:stationId</code></li>
  <li><strong>Add Items to Inventory</strong>: <code>POST /api/inventory/:stationId/additems</code></li>
  <li><strong>Update Items in Inventory</strong>: <code>PUT /api/inventory/:stationId/updateitems/:itemId</code></li>
  <li><strong>Delete Inventory</strong>: <code>DELETE /api/inventory/:userId/:stationId</code></li>
  <li><strong>Delete Item from Inventory</strong>: <code>DELETE /api/inventory/:stationId/deleteitem/:itemId</code></li>
  <li><strong>Get User Inventories</strong>: <code>GET /api/user-inventories/:userId</code></li>
</ul>

<h3>4. Cargo Management</h3>
<ul>
  <li><strong>Create Cargo</strong>: <code>POST /api/cargo</code></li>
  <li><strong>Update Cargo Quantity</strong>: <code>PUT /api/updateCargoQuantity/:shipmentId</code></li>
  <li><strong>Get Cargo by Shipment ID</strong>: <code>GET /api/getCargo/:shipmentId</code></li>
</ul>

<h2>Project Structure</h2>
<pre><code>.
├── controllers
│   ├── cargoController.js
│   ├── inventoryController.js
│   └── tradeController.js
│   └── userController.js
├── models
│   ├── cargo.model.js
│   ├── inventory.model.js
│   ├── trade.model.js
│   └── user.model.js
├── routes
│   ├── cargoRoute.js
│   ├── inventoryRoute.js
│   ├── tradeRoute.js
│   └── userRoute.js
├── middlewares
│   ├── auth.js
│   ├── error.js
│   └── asyncHandler.js
├── .env
├── server.js
└── package.json
</code></pre>

<h2>Contributing</h2>
<p>
  Contributions are welcome! Please fork this repository and submit a pull
  request for any improvements.
</p>

<h2>License</h2>
<p>
  This project is licensed under the MIT License - see the
  <a href="LICENSE">LICENSE</a> file for details.
</p>

<h3>To Update the README in Your Postman Collection:</h3>
<ol>
  <li>Go to your Postman workspace where your collection is located.</li>
  <li>Select the collection (<strong>IntergalacticTradeNetwork</strong>).</li>
  <li>Click on the "..." (three dots) next to the collection name.</li>
  <li>Choose <strong>Edit</strong> from the dropdown menu.</li>
  <li>In the "Documentation" section, paste the content from this README.</li>
  <li>Save the changes.</li>
</ol>
