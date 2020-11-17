window.onload = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/movies/";
    let movieCltn = document.querySelector("#movieCltn");

    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/movies/", {
            "headers": {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUyNzE2MjIsImV4cCI6MTYwNjQ4MTIyMn0.mNuhnpw03feWefdCJaiiUXCi4LnRr8BtN_B5mV-Bf8s"
            }
        });
        let movieInfo = await response.json();
        console.log(movieInfo)
        if (movieCategory.length > 0) {
            movieCategory.forEach((m) => {
                let column = document.createElement("div");
                column.classList.add("col-xs-12", "col-md-2", "card-group");
                column.innerHTML = `
                <div class="card">
                    <img src="${m.imageUrl}" class="card-img-top" alt="...">
                          <div class="card-body">
                         <h5 class="card-title">${m.name}</h5>
                        <p class="card-text">${m.description}</p>
                        <p class="card-text"><small class="text-muted">${m.category}</small></p>
                         </div>
                </div>
                `
                movieCltn.appendChild(column);
            });
        } else {
            movieCltn.innerHTML = "<h1> There currently is no movies in this collection </h1>"
        }
    } catch (error) {
        alert(error);
    }
};


/*let categories = {};

const fetchCategories = () => {
    fetch('https://striveschool-api.herokuapp.com/api/movies/', {
        "headers": {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUyNzE2MjIsImV4cCI6MTYwNjQ4MTIyMn0.mNuhnpw03feWefdCJaiiUXCi4LnRr8BtN_B5mV-Bf8s"
        }
    })
        .then(res => res.json())
        .then(data => {
            categories = data;
            for (let i = 0; i < categories.length; i++) {
                const category = categories[i];
                
            }
            
    })
}

window.onload = () => {
    fetchCategories()
};*/