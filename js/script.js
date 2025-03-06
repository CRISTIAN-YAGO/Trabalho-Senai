const menu = document.getElementById("menu")
        const div_inf = document.getElementById("Informações")

        menu.addEventListener("click", () => {
            const dispmenu = document.getElementById("inf")
            dispmenu.classList.toggle("mostrar")
        })