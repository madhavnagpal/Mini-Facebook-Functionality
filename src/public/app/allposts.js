function getAllPosts() {
  $.get("/posts", {}, (posts) => {
    let list = $("#allPosts");
    list.empty();
    for (let post of posts) {
      let item = $(`
      <div class="col-md-4 col-sm-6" >
      <div class="card m-2 " style="background-color:lavender;">
        <div class="card-body">
          <h5 class="card-title">${post.post_title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${post.user.user_name}</h6>
          <p class="card-text">
            ${post.post_body.substr(0, 200)}
            <a href="#">...read more</a>
          </p>
          <input type="text" placeholder="add suggestions">
          <button class="card-link btnComment">Comment</button>
          <ul class="comment" id=${post.post_id}> </ul> 
        </div>
      </div>
       </div>`);

      // let commentBox = $("<ul></ul>");
      // for (let comment of post.comments) {
      //   commentBox.append($("<li>").text(comment.comment_body));
      // }
      // item.append(commentBox);
      // list.append(item);
      let commentBox = $(`#${post.post_id}`);

      // console.log(commentBox, post.post_id);
      for (let comment of post.comments) {
        commentBox.append(
          $("<li>").text(comment.comment_body).css({
            color: "black",
          })
        );
        console.log(commentBox);
      }
      // item.append(commentBox);
      list.append(item);

      $(".btnComment").on("click", (e) => {
        console.log(post);
      });
    }
  });
}
