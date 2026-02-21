// to check if u r logged in b4 playing 

document.addEventListener("DOMContentLoaded", () => {

    const user = localStorage.getItem("currentUser");

    if (!user) {
        alert("You must log in to play.");
        window.location.href = "log-in.html";
    }
// to end round 

    document.getElementById("endTurnBtn").addEventListener("click", () => {
        game.nextRound();
        renderAll();
    });
});