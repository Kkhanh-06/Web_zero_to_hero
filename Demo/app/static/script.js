document.querySelector('.search-button').addEventListener('click', function () {
    const q = document.querySelector('.search-input').value;

    fetch(`/api/students?q=${encodeURIComponent(q)}`)
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector('tbody');
            tbody.innerHTML = "";

            data.forEach(s => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <th>${s.MaSV}</th>
                    <th>${s.name}</th>
                    <th>${new Date(s.bod).toLocaleDateString()}</th>
                    <th>${s.address}</th>
                    <th>${s.score}</th>
                `;
                tbody.appendChild(row);
            });
        });
});
