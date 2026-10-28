// Replace this placeholder with your deployed backend URL.
// Example: const API_URL = "http://your-load-balancer-dns/backend/api/hello";
const API_URL = "http://localhost:8080/backend/api/hello";

document.getElementById("testButton").addEventListener("click", async () => {
  const result = document.getElementById("result");
  result.textContent = "Connecting to backend...";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    result.textContent = "Backend request failed: " + error.message;
  }
});
