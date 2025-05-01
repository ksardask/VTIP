async function getManufacturers() {
    const months = document.getElementById('warrantyInput').value;
    const response = await fetch(`http://localhost:3000/api/flash/warranty/${months}`);
    const manufacturers = await response.json();
    document.getElementById('result').innerText = `Производители: ${manufacturers.join(', ')}`;
  }
  
  async function deleteFlash() {
    const months = document.getElementById('warrantyInput').value;
    const response = await fetch(`http://localhost:3000/api/flash/warranty/${months}`, { method: 'DELETE' });
    const result = await response.json();
    alert(result.message);
  }