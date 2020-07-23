//Global Variables
    //Player (user)
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName + ' |', 'AP = ' + playerAttack + ',', 'HP =' + playerHealth + ' |');

    // Enemy (program)
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName + ' |', 'AP = ' + enemyAttack + ',', 'HP =' + enemyHealth + ' |');

// Fight Function (game)
var fight = function() {

    // Round start alert
    window.alert("Welcome to Robot Gladiators!");

    //player choice to fight or skip conditional 
    var promptFight = window.prompt(' Would you like ot FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    console.log( playerName + ' chooses to ' + promptFight + '.');    
    if (promptFight === "FIGHT" || promptFight === "fight" || promptFight === "Fight"){

      //Fight  
        // player attack 
        enemyHealth = enemyHealth - playerAttack;
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
  
        // enemy attack
        playerHealth = playerHealth - enemyAttack;
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

  //SKIP      
} else if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip"){
    window.alert(playerName + 'has chosen to skip the fight!');

    //confirm skip
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");

    if (confirmSkip) {
        window.alert( playerName + ' has decided to skip this fight. Goodbye!');
        //penalty
        playerMoney = playerMoney -2;
    } else {
        // Cancel Confirm
        fight();
    }
} 
// Invalid Response
else {
    window.alert('You need to pick a valid option. Try again!');
}


  };
  
//Call fight function to launch game
fight();