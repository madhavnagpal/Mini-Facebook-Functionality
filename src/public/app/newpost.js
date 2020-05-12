let submitPostBtn = $("#submitPostBtn");
let formInputs = $("#formInputs");
let postBody = $("#postBody");
let postTitle = $("#postTitle");

submitPostBtn.click(async (ev) => {
  let post_body = postBody.val();
  let post_title = postTitle.val();
  let user_id = JSON.parse(window.localStorage.user).user_id;

  try {
    if (!post_body || !post_title) {
      alert("Please Enter post title and post body both");
    } else {
      let p = await $.post("/posts", {
        id: user_id,
        title: post_title,
        body: post_body,
      });
      $("#content").load("/components/allpost.html");
    }
  } catch (e) {
    console.log(e);
  }
});
