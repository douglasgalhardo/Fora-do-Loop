document.addEventListener("DOMContentLoaded", function () {
  // --- FUNÇÃO PARA CARREGAR COMPONENTES ---
  const loadComponent = (url, elementId) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;

        if (elementId === "header-placeholder") {
          handleActiveNavLinks();
          handleMobileMenu();
        }
      })
      .catch((error) =>
        console.error(`Falha ao carregar o componente: ${error}`)
      );
  };

  // --- LÓGICA PARA ATIVAR O LINK DE NAVEGAÇÃO CORRETO ---
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

  // --- LÓGICA DO MENU MOBILE ---
  const handleMobileMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
      });
    }

    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((n) =>
      n.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      })
    );
  };

  // --- CARREGA O CABEÇALHO E O RODAPÉ ---
  loadComponent("_header.html", "header-placeholder");
  loadComponent("_footer.html", "footer-placeholder");
});
