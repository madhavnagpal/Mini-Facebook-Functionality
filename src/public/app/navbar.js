$(
  $(".navbar .nav-link").click((ev) => {
    console.log("hello");
    let comp = ev.target.attr("data-component");
    console.log(comp);
    $("#content").load(`/components/${comp}.html`);
  })
);
