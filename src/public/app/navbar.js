$(
  $(".navbar .nav-link").click((ev) => {
    let comp = $(ev.target).attr("data-component");
    $("#content").load(`/components/${comp}.html`);
  })
);
