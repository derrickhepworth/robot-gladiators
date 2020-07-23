var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

// You can also log multiple values at once like this

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack)

var logStats = function(){
console.log(playerName + '|', 'Attack: ' + playerAttack, 'Health: ' + playerHealth);
console.log(enemyName + '|', 'Attack: ' + enemyAttack, 'Health: ' +enemyHealth);
 };

// logStats();

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //player choice
    var promptFight = window.prompt(' Would you like ot FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    console.log( playerName + ' will ' + promptFight + '.');    
  
    // fight or skip conditional 
    if (promptFight === "FIGHT" || promptFight === "fight" || promptFight === "Fight"){

    // player attack 
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

    // check enemy health
      if (enemyHealth <= 0) {
          window.alert(enemyName + ' has died!');
      }
      else {
          window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
    // logStats();
  
    // enemy attack
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
    
    //check player health
    if (playerHealth <=0) {
        window.alert(playerName + ' has died!')
    }
    else {
        window.alert(playerName + ' still has ' + playerHealth + ' left.');
    }
} else if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip"){
    window.alert(playerName + 'has chosen to skip the fight!');
} else {
    window.alert('You need to pick a valid option. Try again!');
}

    //   logStats();

  };

fight();