// app.js - Core logic for store and mock agents
document.addEventListener('DOMContentLoaded', () => {
  // Render products
  const productGrid = document.getElementById('product-grid');
  CONFIG.PRODUCTS.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="alert('Added to cart! (Simulated by Sales Agent)')">Buy Now</button>
    `;
    productGrid.appendChild(card);
  });

  // Render agent status
  const agentStatus = document.getElementById('agent-status');
  CONFIG.AGENTS.forEach(agent => {
    const card = document.createElement('div');
    card.className = 'agent-card';
    card.innerHTML = `
      <h3>${agent.name}</h3>
      <p>Status: <strong>${agent.status}</strong></p>
      <p>${agent.role}</p>
    `;
    agentStatus.appendChild(card);
  });

  // CTA button
  document.getElementById('cta-btn').addEventListener('click', () => {
    document.getElementById('store').scrollIntoView({ behavior: 'smooth' });
  });

  // Upgrade button - simple paywall simulation
  document.getElementById('upgrade-btn').addEventListener('click', () => {
    alert(`Redirecting to payment for Autonomous Pro ($${CONFIG.PREMIUM_PRICE}/mo). In production, this integrates with Stripe. Agents will then run fully autonomous.`);
    // In real version: window.location = stripeCheckoutUrl;
  });

  // Simulate agent activity
  setInterval(() => {
    console.log('Agent swarm heartbeat: All systems nominal. Profitability optimized.');
  }, 10000);
});