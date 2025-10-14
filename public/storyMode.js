// storyMode.js

import { startStoryGame } from "./main.js";
import { Continue, Pause } from "./menu.js";

// Intro, development, and ending story screens for Bomber Game

export function showIntro() {
    const overlay = document.createElement("div");
    overlay.id = "storyOverlay";
    overlay.innerHTML = `
    <div class="story-panel">
      <h2>🔥 The Siege Begins</h2>
      <p>
        The once peaceful city of Gridlock has been overrun by rogue robots. 
        You, Bomber, are the last engineer left with the power to fight back.
      </p>
      <p>
        Your mission: infiltrate the robot-infested maze, recover the lost power key, 
        and restore energy to the central core before the city is lost forever.
      </p>
      <button id="beginMissionBtn">Begin Mission</button>
    </div>
  `;
    document.body.appendChild(overlay);

    document.getElementById("beginMissionBtn").onclick = () => {
        overlay.remove();
        // continue to game start
        startStoryGame();
    };
}

// Optional: mid-story when a score milestone is hit
export function showMidStory() {
    
    Pause()
    const overlay = document.createElement("div");
    overlay.id = "storyOverlay";
    overlay.innerHTML = `
    <div class="story-panel">
      <h2>⚙️ Powering Up</h2>
      <p>
        The power core begins to hum again... but danger is rising.
        The robots have detected your presence. Stay sharp, Bomber.
      </p>
      <button id="continueMissionBtn">Continue</button>
    </div>
  `;
    document.body.appendChild(overlay);
    document.getElementById("continueMissionBtn").onclick = () => { overlay.remove(); Continue() }
}

export function showEnding(victory = true) {
    const overlay = document.createElement("div");
    overlay.id = "storyOverlay";
    overlay.innerHTML = `
    <div class="story-panel">
      <h2>${victory ? "🏆 Mission Complete" : "💀 Mission Failed"}</h2>
      <p>
        ${victory
            ? "The city of Gridlock is saved. Your courage reignites hope!"
            : "The robots have won this time. But every engineer leaves a legacy..."}
      </p>
      <button id="returnToMenuBtn">Return to Menu</button>
    </div>
  `;
    document.body.appendChild(overlay);

    document.getElementById("returnToMenuBtn").onclick = () => {
        overlay.remove();
        // Return to menu
        import("./menu.js").then(m => m.showMainMenu());
    };
}
