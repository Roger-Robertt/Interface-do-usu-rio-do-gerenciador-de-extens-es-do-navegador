function filterExtesions(filterType) {
    const cards = document.querySelectorAll(".extension-card");

    cards.forEach(card => {
        const isActive = card.getAttribute("data-is-active") === "true";

        switch (filterType) {
            case "all":
                card.style.display = "block";
                break;

            case "active":
                card.style.display = isActive ? "block" : "none";
                break;

            case "inactive":
                card.style.display = isActive ? "none" : "block";
                break;
        }
    });

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(`filter-${filterType}`).classList.add("active");
}

document.getElementById("filter-all").addEventListener("click", () => filterExtesions("all"));
document.getElementById("filter-active").addEventListener("click", () => filterExtesions("active"));
document.getElementById("filter-inactive").addEventListener("click", () => filterExtesions("inactive"));

document.querySelectorAll(".toggle-switch").forEach(toggle => {
    toggle.addEventListener("change", (event) => {

        const extensionId = event.target.getAttribute("data-id");
        const cardDevLens = event.target.closest(".dev-lens");
        const cardStyleSpy = event.target.closest(".style-spy");
        const cardSpeedBoost = event.target.closest(".speed-boost");
        const cardJsonWizard = event.target.closest(".jsonwizard");
        const cardTaMasterPro = event.target.closest(".taMaster-pro");
        const cardViewportBuddy = event.target.closest(".viewport-buddy");
        const cardMarkupNotes = event.target.closest(".markup-notes");
        const cardGridGuides = event.target.closest(".grid-guides");
        const cardPalettePicker = event.target.closest(".palette-picker");
        const cardLinkChecker = event.target.closest(".link-checker");
        const cardDomSnapshot = event.target.closest(".dom-snapshot");
        const cardConsolePlus = event.target.closest(".console-plus");

        if (cardDevLens) {
            const newStatus = event.target.checked;
            cardDevLens.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardStyleSpy) {
            const newStatus = event.target.checked;
            cardStyleSpy.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardSpeedBoost) {
            const newStatus = event.target.checked;
            cardSpeedBoost.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardJsonWizard) {
            const newStatus = event.target.checked;
            cardJsonWizard.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardTaMasterPro) {
            const newStatus = event.target.checked;
            cardTaMasterPro.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardViewportBuddy) {
            const newStatus = event.target.checked;
            cardViewportBuddy.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardMarkupNotes) {
            const newStatus = event.target.checked;
            cardMarkupNotes.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardGridGuides) {
            const newStatus = event.target.checked;
            cardGridGuides.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardPalettePicker) {
            const newStatus = event.target.checked;
            cardPalettePicker.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardLinkChecker) {
            const newStatus = event.target.checked;
            cardLinkChecker.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardDomSnapshot) {
            const newStatus = event.target.checked;
            cardDomSnapshot.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else if (cardConsolePlus) {
            const newStatus = event.target.checked;
            cardConsolePlus.setAttribute("data-is-active", newStatus);
            const currentFilterElement = document.querySelector('.all');
            const currentFilter = currentFilterElement ? currentFilterElement.textContent.toLowerCase() : 'all';
            filterExtesions(currentFilter);

        } else {
            console.error(`Card not found for ID: ${extensionId}`);
        }
    })
});

function handLeRemove(event) {
    const cardToRemove = event.target.closest(".extension-card");

    if (cardToRemove) {
        const extensionId = cardToRemove.getAttribute("data-id");

        cardToRemove.remove();
        showCustomAlert(`Extensão "${extensionId}" removida com sucesso!`);
    }
}

document.querySelectorAll(".remove").forEach(button => {
    button.addEventListener("click", handLeRemove);
});

const tema = document.getElementById("tema");
const body = document.body;

function mudarCor() {
    const saveTema = localStorage.getItem("theme");

    if (saveTema === "white") {
        body.classList.add("white-mode");
    }
}

function toggleTheme() {
    const white = body.classList.toggle("white-mode");

    if (white) {
        localStorage.setItem('theme', 'white');

    } else {
        localStorage.setItem('theme', 'dark');
    }
}

mudarCor();

if (tema) {
    tema.addEventListener("click", toggleTheme);

} else {
    console.log("error");
}

function showCustomAlert(message) {
    document.getElementById('alert-message').innerText = message;
    document.getElementById('custom-alert').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}