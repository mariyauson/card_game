let GameManager = {
    setGameStart: function(pokemonName) {
       this.resetPlayer(pokemonName);
       this.setPreFight();
    },
 
    resetPlayer: function(pokemonName) {
        switch (pokemonName) {
            case "Pikachu":
                player = new Player(pokemonName, 'electric', 30, 'quick attack', 'thunder shock', 22, 100, ['grass', 'electric'], 'water');
                break;
            case "Bulbasaur":
                player = new Player(pokemonName, 'grass', 26, 'tackle', 'vine whip', 23, 108, ['fire', 'grass'], 'water');
                break;   
            case "Charmander":
                player = new Player(pokemonName, 'fire', 28, 'scratch', 'ember', 25, 97, ['water', 'fire'], 'grass');
                break;
            case "Squirtle":
                player = new Player(pokemonName, 'water', 25, 'tail whip', 'bubble beam', 22, 102, ['grass', 'electric', 'water'], 'fire');
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<div id="stage_one"><img src="images/' 
        + pokemonName.toLowerCase() 
        + '.jpg" class="image-avatar"><div><h3>' 
        + pokemonName 
        + '</h3><p class="health-player">HP: ' 
        + player.health_points 
        + '<p>Speed: ' 
        + player.speed 
        + '</p><p>Base Attack: ' 
        + player.attack 
        + '</p><p class="moves">Moves:<p>' 
        + player.moveOne
        + ',<p>'
        + player.moveTwo
        + '</p></div></div>';
    },
 
    setPreFight: function() {
        let getHeader = document.querySelector("header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Search for a battle!</p>';
        getActions.innerHTML = '<a href="#" class="button-prefight" id="action_search" onclick="GameManager.setFight()">Search for a foe!</a>';
        getArena.style.visibility = 'visible';
    },
 
    setFight: function() {
        let getHeader = document.querySelector("header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        let getInterface = document.querySelector(".interface");
        getInterface.style.width = '40%';
        getEnemy.style.width = '40%';
 
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
        //console.log(chooseRandomEnemy);
        // Should foe not be same pokemon as player?
        switch (chooseRandomEnemy) {
            case 0:
                foe = new Foe("Pikachu", 'electric', 30, 'quick attack', 'thunder shock', 22, 100, ['grass', 'electric'], 'water');; 
                break;
            case 1:
                foe = new Foe("Bulbasaur", 'grass', 26, 'tackle', 'vine whip', 23, 108, ['fire', 'grass'], 'water');;
                break;
            case 2:
                foe = new Foe("Charmander", 'fire', 28, 'scratch', 'ember', 25, 97, ['water', 'fire'], 'grass');; 
                break;
            case 3:
                foe = new Foe("Squirtle", 'water', 25, 'tail whip', 'bubblebeam', 22, 102,    ['grass', 'electric', 'water'], 'fire');;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!<p>';
        
        getActions.innerHTML = '<a href="#"><p class="battle_move_one" onclick="playerMoveOne.calcAttack()">' 
        + player.moveOne 
        + '<p class="battle_move_two" onclick="playerMoveTwo.calcAttackTwo()">'
        + player.moveTwo
        + '</p></a>';
        
        getEnemy.innerHTML ='<img src="images/' 
        + foe.enemyName.toLowerCase() 
        + '.jpg" class="image-avatar"><div><h3>' 
        + foe.enemyName 
        + '</h3><p class="health-foe">HP: ' 
        + foe.health_points 
        + '<p>Speed: ' 
        + foe.speed 
        + '</p><p>Base Attack: ' 
        + foe.attack 
        + '</p><p class="moves">Moves:<p>' 
        + foe.moveOne
        + ',<p>'
        + foe.moveTwo 
        + '</p></div>';
    }
 }
 
 