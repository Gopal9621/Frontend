const statusEl = document.getElementById("status");
const postList = document.getElementById("postList");
const retryBtn = document.getElementById("retryBtn");

// Promise that resolves after 2 seconds
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% success chance
            if (success) {
                resolve([
                    "How to Learn JavaScript",
                    "Understanding Async Programming",
                    "Tips to Master DOM Manipulation",
                    "Why Promises Are Powerful"
                ]);
            } else {
                reject("Failed to load posts.");
            }
        }, 2000);
    });
}

async function fetchPosts() {
    statusEl.innerText = "Loading posts…";
    postList.innerHTML = "";
    retryBtn.style.display = "none";

    try {
        const posts = await loadPosts();
        statusEl.innerText = "";

        posts.forEach(post => {
            const li = document.createElement("li");
            li.innerText = post;
            postList.appendChild(li);
        });
    } catch (error) {
        statusEl.innerText = error;
        retryBtn.style.display = "inline-block";
    }
}

retryBtn.addEventListener("click", fetchPosts);

// Load posts on page start
fetchPosts();
