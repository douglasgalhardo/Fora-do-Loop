document.addEventListener("DOMContentLoaded", function () {
  // Carregar componentes
  const loadComponent = (url, elementId) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;

        if (elementId === "header-placeholder") {
          handleActiveNavLinks();
        }
      })
      .catch((error) =>
        console.error(`Falha ao carregar o componente: ${error}`)
      );
  };

  // Link de navegação
  const handleActiveNavLinks = () => {
    const navLinks = document.querySelectorAll(".nav__link");
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");

      if (
        linkPath === currentPath ||
        (currentPath === "" && linkPath === "index.html")
      ) {
        link.classList.add("active");
      }
    });
  };

  //Cabeçalho e Rodapé
  loadComponent("_header.html", "header-placeholder");
  loadComponent("_footer.html", "footer-placeholder");
});
