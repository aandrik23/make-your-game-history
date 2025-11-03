import { gameLoop } from "./gameLoop.js";
import { buildMap } from "./bomber.js";
import { gamePaused, gameRunning, Restart, SetGameRunning, showMainMenu } from "./menu.js";
import { initAudioControls } from "./audio.js";
import { showIntro } from "./storyMode.js";

import { player } from './bomber.js';

window.addEventListener("keydown", (e) => {
    if (["b", "B", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(e.key)) {
        e.preventDefault();
    }

    if (!player) return; // No player yet

    if (gamePaused === false) {
        switch (e.key) {
            case "ArrowUp": case "w": case "W": player.nextDir = { dx: 0, dy: -1 }; player.el.style.backgroundImage = 'url("./images/BombermanUp.png")'; break;
            case "ArrowDown": case "s": case "S": player.nextDir = { dx: 0, dy: 1 }; player.el.style.backgroundImage = 'url("./images/BombermanDown.png")'; break;
            case "ArrowLeft": case "a": case "A": player.nextDir = { dx: -1, dy: 0 }; player.el.style.backgroundImage = 'url("./images/BombermanLeft.png")'; break;
            case "ArrowRight": case "d": case "D": player.nextDir = { dx: 1, dy: 0 }; player.el.style.backgroundImage = 'url("./images/BombermanRight.png")'; break;
            case "B": case "b": player.dropBomb(); break;
        }
    }
});


//Initialize audio controls
initAudioControls();

// Show main menu on load
showMainMenu();

// Link story start to menu’s Start button
export function startStoryGame() {
    // Hide menus, then actually start the game
    const menu = document.getElementById("menu");
    if (menu) menu.style.display = "none";
    Restart()
};
