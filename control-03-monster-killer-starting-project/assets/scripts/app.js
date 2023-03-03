const ATTACK_VALUE = 10;
const STRONK_ATTACK_VALUE = 17;
const MOSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONK_ATTACK = "PLAYER_STRONK_ATTACK";
const LOG_EVENT_MOSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "END_OF_THE_GAME";

const userValue = prompt("Max life", "100");
let chosenMaxLife = +userValue;
if (isNaN(userValue) || chosenMaxLife > 0) chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);

function resetGame() {
  adjustHealthBars(chosenMaxLife);
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  hasBonusLife = true;
  addBonusLife();
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  monsterAttack();

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = 0;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    increasePlayerHealth(initialPlayerHealth);
    alert("Bonus life saved you!");
  }

  if (currentPlayerHealth <= 0) {
    alert("You died");
    writeToLog(LOG_EVENT_GAME_OVER, 'YOU DIED', currentMonsterHealth, currentPlayerHealth);
    resetGame();
  }
  if (currentMonsterHealth <= 0) {
    alert("You won!");
    writeToLog(LOG_EVENT_GAME_OVER, 'You won', currentMonsterHealth, currentPlayerHealth);
    resetGame();
  }
}

function monsterAttack() {
  const playerDamage = dealPlayerDamage(MOSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(LOG_EVENT_MOSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);
}

function healPlayer() {
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  if (currentPlayerHealth > chosenMaxLife) currentPlayerHealth = chosenMaxLife;
  writeToLog(LOG_EVENT_PLAYER_HEAL, HEAL_VALUE, currentMonsterHealth, currentPlayerHealth);
}

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  endRound();
  writeToLog(LOG_EVENT_PLAYER_ATTACK, damage, currentMonsterHealth, currentPlayerHealth);
}

attackBtn.addEventListener("click", attackHandler);

function stronkAttackHandler() {
  const damage = dealMonsterDamage(STRONK_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  endRound();
  writeToLog(LOG_EVENT_PLAYER_STRONK_ATTACK, damage, currentMonsterHealth, currentPlayerHealth);
}

strongAttackBtn.addEventListener("click", stronkAttackHandler);

function healPlayerHandler() {
  healPlayer();
  endRound();
}

healBtn.addEventListener("click", healPlayerHandler);

function printLogHandler() {
  console.log(battleLog);
}

logBtn.addEventListener("click", printLogHandler);

function writeToLog(event, value, monsterHP, playerHP) {
  let logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHP,
    finalPlayerHealth: playerHP,
  };
  if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = "MONSTER";
  } else if (event === LOG_EVENT_PLAYER_STRONK_ATTACK) {
    logEntry.target = "MONSTER";
  } else if (event === LOG_EVENT_MOSTER_ATTACK) {
    logEntry.target = "PLAYER";
  } else if (event === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = "PLAYER";
  } else if (event === LOG_EVENT_GAME_OVER) {
  }
  battleLog.push(logEntry);
}
