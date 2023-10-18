


    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('form-agenda');
        const table = document.querySelector('table');
        
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            
            const nome = document.getElementById('Nome').value;
            const telefone = document.getElementById('Telefone').value;

            
            const newRow = table.insertRow(table.rows.length);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);

            
            cell1.innerHTML = nome;
            cell2.innerHTML = telefone;

            const form = document.querySelector("form");
            form.addEventListener("submit", function() {
            console.log("contato salvo")
            })
            
            form.reset();
        });
    });

