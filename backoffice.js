const url = "https://striveschool-api.herokuapp.com/api/movies/";

window.onload = async () => {
    let urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get("id");
    if (id) {
        let response = await fetch(url + id, {
            "headers": {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUyNzE2MjIsImV4cCI6MTYwNjQ4MTIyMn0.mNuhnpw03feWefdCJaiiUXCi4LnRr8BtN_B5mV-Bf8s"
            }
        });
        let movie = await response.json();
        document.getElementById("name").value = movie.name;
        document.getElementById("description").value = movie.description;
        document.getElementById("category").value = movie.category;
        document.getElementById("imageUrl").value = movie.imageUrl;
    }
};

function handleSubmit(event) {
    event.preventDefault();
    submitMovie();
};

const submitMovie = async () => {
    let addMovie = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        category: document.querySelector("#category").value,
        imageUrl: document.querySelector("#imageUrl").value,
    };

    try {
        let response;
        if (id) {
            response = await fetch(url + id, {
                method: "PUT",
                body: JSON.stringify(addMovie),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUxMDEzOTYsImV4cCI6MTYwNjMxMDk5Nn0.4L61-jzRzehBUMfWi2WMJ8HBnpYAZyKtTPtM7wrzvyk",
                }),
            });
        } else {
            response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(addMovie),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUxMDEzOTYsImV4cCI6MTYwNjMxMDk5Nn0.4L61-jzRzehBUMfWi2WMJ8HBnpYAZyKtTPtM7wrzvyk",
                }),
            });
        }

        if (response.ok) {
            alert(`Movie ${id ? "updated" : "added"} successfully!`);
            location.assign("index.html");
        } else {
            alert("Please check again");
        }
    } catch (error) {
        console.log(error);
    }
}