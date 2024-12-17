// 1.
function getFormValues() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
}

// 2.
function countDropdownItems() {
    const dropdown = document.getElementById("myDropdown");
    const itemsCount = dropdown.options.length;
    alert(`Total items in dropdown: ${itemsCount}`);
}

// 3. 
class DataFetcher {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async fetchData() {
        try {
            const response = await fetch(this.apiUrl);
            const data = await response.json();
            this.updateDOM(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    updateDOM(data) {
        const output = document.getElementById("output");
        output.innerHTML = JSON.stringify(data, null, 2);
    }
}

// 
const api = new DataFetcher('https://jsonplaceholder.typicode.com/posts');
api.fetchData();