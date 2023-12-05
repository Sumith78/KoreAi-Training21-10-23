const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    lis.forEach(function(li) {
        const text = li.textContent.toLowerCase();
        const match = text.includes(searchTerm);

        if (match) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
});
