// for player interaction 

const allCharacters = [
    { name: "Diluc", element: "Pyro" },
    { name: "Keqing", element: "Electro" },
    { name: "Barbara", element: "Hydro" },
    { name: "Childe", element: "Hydro" },
    { name: "Raiden", element: "Electro" },
    { name: "Ayaka", element: "Cryo" },
    { name: "Xiangling", element: "Pyro" },
    { name: "Venti", element: "Anemo" },
    { name: "Zhongli", element: "Geo" },
    { name: "Fischl", element: "Electro" },

    // will add more later HUHUU
];

const playerTeam = [];

function renderCharacterSelection() {
    const container = document.getElementById("availableCharacters");
    container.innerHTML = "";

    allCharacters.forEach((char, index) => {
        const card = document.createElement("div");
        card.className = "card selectable";
        card.innerHTML = `
            <h4>${char.name}</h4>
            <p>Element: ${char.element}</p>
        `;

        card.onclick = () => selectCharacterForTeam(index);
        container.appendChild(card);
    });
}

function selectCharacterForTeam(index) {
    const char = allCharacters[index];

    // toggle selection
    if (playerTeam.includes(char)) {
        // remove character from selection
        playerTeam.splice(playerTeam.indexOf(char), 1);
    } else {
        if (playerTeam.length >= 3) {
            return alert("You can only select 3 characters!");
        }
        playerTeam.push(char);
    }

    highlightSelectedTeam();
}

function highlightSelectedTeam() {
    const cards = document.querySelectorAll("#availableCharacters .card");
    cards.forEach((card, i) => {
        if (playerTeam.includes(allCharacters[i])) {
            card.style.border = "3px solid gold";
        } else {
            card.style.border = "1px solid black";
        }
    });
}

// calls this once on page loads
renderCharacterSelection();

document.getElementById("startGameBtn").addEventListener("click", () => {
    if (playerTeam.length !== 3) return alert("Select exactly 3 characters!");
    
    // converts selected characters into charac objects for the engine
    game.playerTeam = playerTeam.map(c => new Character(c.name, c.element));

    // hide selection, show battlefield
    document.getElementById("teamSelection").style.display = "none";
    document.querySelector(".tcg-container").style.display = "block";

    game.rollDice();
    renderAll();
});