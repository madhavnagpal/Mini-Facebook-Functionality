const createUserBtn = $("#createUserBtn");
const allUserBtn = $("#allUserBtn");
const signInBtn = $("#signInBtn");
const user_name = $("#user_name");
const user_id = $("#user_id");

createUserBtn.click(() => {
  $.post(
    "/users",
    {
      name: user_name.val(),
    },
    (data) => {
      console.log(data);
      console.log("hello");
    }
  );
});

allUserBtn.click(() => {
  $.get("/users", function (data) {
    console.log(data);
  });
});
