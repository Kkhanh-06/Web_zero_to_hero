document.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("nav ul li a div");

    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 100; // Điều chỉnh theo chiều cao navbar
        var height = sec.offsetHeight;
        var id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            document.querySelector(`nav ul li a[href="#${id}"] div`).classList.add("active");
        }
    });
});