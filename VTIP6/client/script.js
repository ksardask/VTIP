document.addEventListener('DOMContentLoaded', () => {
  const loadJsonBtn = document.getElementById('loadJson');
  const loadMediaBtn = document.getElementById('loadMedia');
  const clearFormBtn = document.getElementById('clearForm');
  const mediaContainer = document.getElementById('mediaContainer');

 
  loadJsonBtn.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/user-data');
      const users = await response.json();
      
     
      const randomUser = users[Math.floor(Math.random() * users.length)];
      
      
      document.getElementById('name').value = randomUser.name;
      document.getElementById('address').value = randomUser.address;
      document.getElementById('age').value = randomUser.age;
      document.getElementById('position').value = randomUser.position;
      
     
      document.querySelector(`input[value="${randomUser.fontSize}"]`).checked = true;
      
    } catch (error) {
      console.error('Ошибка:', error);
    }
  });

  loadMediaBtn.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/media');
      if (!response.ok) throw new Error('Ошибка загрузки медиа');
      
      const blob = await response.blob();
      const mediaUrl = URL.createObjectURL(blob);
      
      mediaContainer.innerHTML = `
        <img src="${mediaUrl}" alt="Загруженное медиа" style="max-width: 100%;">
        <p>Файл успешно загружен!</p>
      `;
      
    } catch (error) {
      console.error('Ошибка:', error);
      mediaContainer.innerHTML = '<p style="color: red;">Ошибка загрузки медиа</p>';
    }
  });

 
  clearFormBtn.addEventListener('click', () => {
    document.getElementById('userForm').reset();
    mediaContainer.innerHTML = '';
    document.body.className = '';
  });
});