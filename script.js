// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the result div where results will be displayed
    const resultDiv = document.getElementById('result');
  
    // Function to clear previous results from the result div
    const clearResults = () => {
      resultDiv.innerHTML = '';
    };

      // Function to render JSON response into the result div
  const renderResponse = (response) => {
    resultDiv.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
  };

  // Add an event listener to the 'Get All Posts' button
  document.getElementById('getAllPosts').addEventListener('click', () => {
    clearResults(); // Clear previous results
    fetch('http://jsonplaceholder.typicode.com/posts') // Fetch all posts
      .then(response => response.json()) // Convert the response to JSON
      .then(data => renderResponse(data)); // Render the JSON data
  });

// Add an event listener to the 'Get Post with ID 10' button
document.getElementById('getPost10').addEventListener('click', () => {
    clearResults(); // Clear previous results
    fetch('http://jsonplaceholder.typicode.com/posts/10') // Fetch post with ID 10
      .then(response => response.json()) // Convert the response to JSON
      .then(data => renderResponse(data)); // Render the JSON data
  });

  // Add an event listener to the 'Create New Post' button
  document.getElementById('createPost').addEventListener('click', () => {
    clearResults(); // Clear previous results
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST', // Use POST method to create a new post
      headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
      },
      body: JSON.stringify({ // Convert the new post data to JSON
        title: 'foo', // Title of the new post
        body: 'bar', // Body of the new post
        userId: 1 // User ID of the new post
      })
    })
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
        console.log('Created Post ID:', data.id); // Log the ID of the new post
        renderResponse(data); // Render the JSON data
      });
  });

  // Add an event listener to the 'Replace Post with ID 12' button
  document.getElementById('replacePost12').addEventListener('click', () => {
    clearResults(); // Clear previous results
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
      method: 'PUT', // Use PUT method to replace the post
      headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
      },
      body: JSON.stringify({ // Convert the replacement data to JSON
        id: 12, // ID of the post to replace
        title: 'updated title', // New title
        body: 'updated body', // New body
        userId: 1 // User ID
      })
    })
      .then(response => response.json()) // Convert the response to JSON
      .then(data => renderResponse(data)); // Render the JSON data
  });

  // Add an event listener to the 'Update Title of Post with ID 12' button
  document.getElementById('updatePost12Title').addEventListener('click', () => {
    clearResults(); // Clear previous results
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
      method: 'PATCH', // Use PATCH method to update part of the post
      headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
      },
      body: JSON.stringify({ // Convert the updated data to JSON
        title: 'new title' // New title
      })
    })
      .then(response => response.json()) // Convert the response to JSON
      .then(data => renderResponse(data)); // Render the JSON data
  });

  // Add an event listener to the 'Delete Post with ID 12' button
  document.getElementById('deletePost12').addEventListener('click', () => {
    clearResults(); // Clear previous results
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
      method: 'DELETE' // Use DELETE method to delete the post
    })
      .then(() => {
        // Display a success message after deletion
        resultDiv.innerHTML = 'Post with ID 12 deleted successfully.';
      });
  });
});