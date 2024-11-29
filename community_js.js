// Function to post a new update to the community feed
function postUpdate() {
    const postText = document.getElementById("post-text").value;
    if (postText.trim() === "") {
        alert("Please write something before posting.");
        return;
    }

    const newPost = document.createElement("div");
    newPost.classList.add("post");

    // Add user information and content
    newPost.innerHTML = `
        <div class="user-info">
            <img src="user-avatar.jpg" alt="User Avatar">
            <h3>Pet Lover</h3>
        </div>
        <div class="content">
            <p>${postText}</p>
        </div>
        <div class="comment-form">
            <input type="text" placeholder="Add a comment...">
            <button onclick="addComment(this)">Comment</button>
        </div>
        <div class="comments"></div>
    `;

    // Append the new post to the posts section
    document.querySelector(".posts").prepend(newPost);

    // Clear the textarea after posting
    document.getElementById("post-text").value = "";
}

// Function to add a comment to a post
function addComment(button) {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value.trim();

    if (commentText === "") {
        alert("Please write a comment.");
        return;
    }

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = commentText;

    // Append the new comment under the post
    const post = button.closest(".post");
    post.querySelector(".comments").appendChild(commentDiv);

    // Clear the comment input after posting
    commentInput.value = "";
}
