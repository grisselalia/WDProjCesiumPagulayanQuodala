// code for the actl game

class Character {
    constructor(name, element) {
        this.name = name;
        this.element = element;
        this.maxHp = 10;
        this.hp = 10;
        this.energy = 0;
        this.aura = null; // current element on them
    }

     takeDamage(amount, element) {
        let damage = amount;

        // reactions , will add more.... maybe... 

        if (this.aura === "Hydro" && element === "Pyro") {
            damage *= 2; // vaporize
        }

        if (this.aura === "Pyro" && element === "Cryo"){
            damage *= 2; //melt
        }

        this.hp -= damage;
        if (this.hp < 0) this.hp = 0;

        this.aura = element; // new element applied
        return damage;
    }
}

class Game {

    rollDice() {
        const elements = ["Pyro","Hydro","Electro","Cryo","Geo","Anemo","Dendro"];
        this.dice = [];
        for (let i=0; i<8; i++) {
            this.dice.push(elements[Math.floor(Math.random()*elements.length)]);
        }
    }

    switchTurn() {
        this.currentTurn = this.currentTurn === "player" ? "enemy" : "player";
    }

    nextRound() {
        this.round++;
        this.rollDice();
        this.currentTurn = "player";
    }
}

const game = new Game();