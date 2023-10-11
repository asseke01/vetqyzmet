function toggleNav() {
  var sidebar = document.getElementById("sidebar"),
    main = document.getElementById("main");
    sidebar.style.width = sidebar.style.width == "250px" ? '0' : '250px';
    main.style.marginLeft = main.style.marginLeft === "250px" ? '0' : '250px';
    footer.style.marginLeft = footer.style.marginLeft === "250px" ? '0' : '250px';
}




