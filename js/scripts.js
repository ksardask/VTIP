// js/script.js
document.getElementById('process-btn').addEventListener('click', async () => {
    const namesBefore = ['anna', 'viktor', 'john', 'maria'];
    document.getElementById('names-before').innerHTML = namesBefore.map(name => `<li>${name}</li>`).join('');

    const response = await fetch('http://localhost:3000/process-names', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ names: namesBefore })
    });
    const { processedNames } = await response.json();

    const namesAfterList = document.getElementById('names-after');
    namesAfterList.style.display = 'block';
    namesAfterList.innerHTML = processedNames.map(name => `<li>${name}</li>`).join('');
});
