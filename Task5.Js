// script.js
document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    // Fetch posts from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // Check if the response is okay (status 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON data
        })
        .then(data => {
            // Loop through the posts and create elements for each
            data.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postDiv); // Append to the container
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            postsContainer.innerHTML = '<p>Failed to load posts.</p>';
        });
});
