const commentInput = document.getElementById("commentInput");
const postCommentBtn = document.getElementById("postComment");
const commentsContainer = document.getElementById("commentsContainer");

let comments = JSON.parse(localStorage.getItem("comments")) || [];

function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function renderComments() {
  commentsContainer.innerHTML = "";

  comments.forEach((comment, index) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    commentDiv.innerHTML = `
      <div class="comment-content">
        <p>${comment.text}</p>
        <span class="toggle-replies" data-index="${index}">
          open replies (${comment.replies.length})
        </span>
      </div>
      <div class="replies" id="replies-${index}" style="display:none;"></div>
      <input type="text" class="reply-input" id="replyInput-${index}" placeholder="Write a reply..." />
      <button class="reply-btn" data-index="${index}">Reply</button>
    `;

    commentsContainer.appendChild(commentDiv);

    const repliesContainer = document.getElementById(`replies-${index}`);
    comment.replies.forEach(reply => {
      const replyDiv = document.createElement("div");
      replyDiv.classList.add("reply");
      replyDiv.textContent = reply;
      repliesContainer.appendChild(replyDiv);
    });
  });
}

postCommentBtn.addEventListener("click", () => {
  const text = commentInput.value.trim();
  if (text === "") return;

  comments.push({ text: text, replies: [] });
  commentInput.value = "";
  saveComments();
  renderComments();
});

commentsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-replies")) {
    const index = e.target.dataset.index;
    const repliesDiv = document.getElementById(`replies-${index}`);

    repliesDiv.style.display =
      repliesDiv.style.display === "none" ? "block" : "none";
  }

  if (e.target.classList.contains("reply-btn")) {
    const index = e.target.dataset.index;
    const replyInput = document.getElementById(`replyInput-${index}`);
    const replyText = replyInput.value.trim();

    if (replyText === "") return;

    comments[index].replies.push(replyText);
    replyInput.value = "";
    saveComments();
    renderComments();
  }
});

renderComments();
