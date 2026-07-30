async function getPrices() {
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd";

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("prices").innerHTML = `
      <p>🟠 Bitcoin: $${data.bitcoin.usd}</p>
      <p>🔵 Ethereum: $${data.ethereum.usd}</p>
      <p>🟣 Solana: $${data.solana.usd}</p>
    `;
  } catch (error) {
    document.getElementById("prices").innerHTML =
      "<p>Failed to load prices.</p>";
  }
}

getPrices();
