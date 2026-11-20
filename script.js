// Atualiza o ano do rodapé sem depender de serviços externos.
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
