function getMyPosts() {
  let user = JSON.parse(window.localStorage.user).user_id;
  $.get(`/posts/${user}`, {}, (posts) => {
    let list = $("#myPosts");
    list.empty();
    for (let post of posts) {
      let item = $(`
      <div class="col-md-4 col-sm-6" >
      <div class="card m-2 " style="background-color:lavender;">
        <div class="card-body">
          <h5 class="card-title">${post.post_title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Author Name</h6>
          <p class="card-text">
            ${post.post_body.substr(0, 200)}
            <a href="#">...read more</a>
          </p>
          <a href="#" class="card-link">Like</a>
          <a href="#" class="card-link">Comment</a>
        </div>
      </div>
    </div>`);
      list.append(item);
    }
  });
}
