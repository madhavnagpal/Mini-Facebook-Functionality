$(
  $(".navbar .nav-link").click((ev) => {
    let comp = $(ev.target).attr("data-component");
    $("#content").load(`/components/${comp}.html`);
  })
);
function loginIfNeeded() {
  let currentUser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;

  if (currentUser) {
    $("#userName").text(currentUser.user_name);
  } else {
    //time to create new user
    $.post("/users", {}, (user) => {
      window.localStorage.user = JSON.stringify(user[0]);
      $("#userName").text(`${user[0].user_name}`);
    });
  }
}
