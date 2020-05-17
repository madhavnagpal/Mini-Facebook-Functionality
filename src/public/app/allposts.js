function getAllPosts() {
  // ajax request POST
  $.get("/posts", {}, (posts) => {
    let list = $("#allPosts");
    list.empty();
    //iterating on all posts
    for (let post of posts) {
      let count = 1;
      let item = $(
        `
                  <div class="col-md-4 col-sm-6" >
                    <div class="card m-2 " style="background-color:lavender;">
                      <div class="card-body">
                        <h5 class="card-title">${post.post_title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${
                          post.user.user_name
                        }</h6>
                        <p class="card-text">
                          ${post.post_body.substr(0, 200)}
                          <a href="#">...read more</a>
                        </p>
                        <input type="text" placeholder="add suggestions" class="newComment">
                        <button class="card-link btnComment">Comment</button>  
                      </div>
                      <ul class="comment ${post.post_id}">
                      </ul> 
                    </div>
                  </div>`
      );
      let commentBox = item.find(".comment");
      for (let comment of post.comments) {
        commentBox.append($("<li></li>").text(comment.comment_body));
      }

      list.append(item);
      item.find(".btnComment").on("click", () => {
        $.post(
          "/comments",
          {
            post_id: post.post_id,
            comment_body: item.find(".newComment").val(),
            user_id: JSON.parse(window.localStorage.user).user_id,
          },
          (comment) => {
            $("#content").load(`/components/allpost.html`);
          }
        );
      });
    }
    //loop ends
  });
  //get request ends
}
