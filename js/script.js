// js/script.js
document.getElementById('process-btn').addEventListener('click', async () => {
    console.log('Кнопка нажата');
    const input = document.getElementById('names-input').value;
    const names = input.split(',').map(name => name.trim());

    const response = await fetch('/process-names', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ names })
    });

    if (response.ok) {
        const result = await fetch('/get-names');
        const { original, processed } = await result.json();

        document.getElementById('names-before').innerHTML = original.map(name => `<li>${name}</li>`).join('');
        document.getElementById('names-after').innerHTML = processed.map(name => `<li>${name}</li>`).join('');
        document.getElementById('next-page-link').style.display = 'block';
    } else {
        alert('Произошла ошибка!');
    }
});
