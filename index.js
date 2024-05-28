document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';

    setTimeout(function() {
        var text = document.getElementById('text').value;
        var select = document.getElementById('select').value;
        var radio = document.querySelector('input[name="radio"]:checked').value;
        var checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
        var checkboxValues = [];
        checkboxes.forEach(function(checkbox) {
            checkboxValues.push(checkbox.value);
        });

        var tbody = document.getElementById('responses');
        var newRow = tbody.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.textContent = text;
        cell2.textContent = select;
        cell3.textContent = radio;
        cell4.textContent = checkboxValues.join(', ');

        loadingElement.style.display = 'none';
    }, 2000);
});
