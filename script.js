document.addEventListener('DOMContentLoaded', function() {
    const barras = document.querySelectorAll('.preenchimento');
    
    function animarBarras() {
        barras.forEach(barra => {
            const larguraAlvo = barra.getAttribute('data-width');
            barra.style.width = larguraAlvo;
        });
    }

    // Animar as barras após um pequeno atraso
    setTimeout(animarBarras, 500);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste este valor conforme necessário
                behavior: 'smooth'
            });
        }
    });
});