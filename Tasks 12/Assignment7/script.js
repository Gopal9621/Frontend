const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const btn = document.getElementById("jokeBtn");

function getJoke() {
    btn.disabled = true;
    btn.innerText = "Loading...";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            setupEl.innerText = data.setup;
            punchlineEl.innerText = data.punchline;

            btn.disabled = false;
            btn.innerText = "Next Joke";
        })
        .catch(error => {
            setupEl.innerText = "Failed to load joke 😢";
            punchlineEl.innerText = "";

            btn.disabled = false;
            btn.innerText = "Next Joke";
            console.error("Error:", error);
        });
}

btn.addEventListener("click", getJoke);
