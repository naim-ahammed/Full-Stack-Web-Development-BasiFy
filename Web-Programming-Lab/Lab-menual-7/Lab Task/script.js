document.getElementById("loadButton").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    const loadingDiv = document.getElementById("loading");
    loadingDiv.style.display = "block"; 

    xhr.open("GET", "https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const tableBody = document.querySelector("#presidentsTable tbody");
            tableBody.innerHTML = ""; 

            data.forEach((president, index) => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${president.president}</td>
                    <td>${president.birth}</td>
                    <td>${president.death || 'N/A'}</td>
                    <td>${president.took_office}</td>
                    <td>${president.left_office || 'N/A'}</td>
                    <td>${president.party}</td>
                `;
            });
            loadingDiv.style.display = "none"; 
        } else {
            console.error("Error loading data.");
            loadingDiv.innerText = "Error loading data.";
        }
    };
    xhr.onerror = function () {
        console.error("Request failed.");
        loadingDiv.innerText = "Error loading data.";
    };
    xhr.send(); 
});
