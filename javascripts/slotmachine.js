class Slotmachine{
    constructor(){
        this.bet = 0;
        this.money = 10;
        this.icons = ['cherry', 'barBlue', 'barGreen', 'barRed', 'sevenBlue', 'sevenGreen', 'sevenRed', 'bonus'];
    }

    roll(icons){
        return Math.floor(Math.random() * this.icons.length)
    }
    game(){
        let gamematch = [];
        for(let i = 0; i < 3; i++){
            gamematch.push(this.icons[this.roll(this.icons)]);
        }
        return gamematch
    }
    match(gamematch){
        if (gamematch[0] == gamematch[1] && gamematch[1] == gamematch[2]){
            return this.icons.indexOf(gamematch[0]) += 3
        }
        let bar = ['barBlue', 'barGreen', 'barRed'];
        for(let i = 0; i < 3; i++){
            if(bar.indexOf(gamematch[i]) >= 0){
              bar.splice(bar.indexOf(gamematch[i]),1);
            }
          }
          if (bar.length == 0){
            return 1
          }
        let seven =['sevenBlue', 'sevenGreen', 'sevenRed'];
        for(let i = 0; i < 3; i++){
            if(seven.indexOf(gamematch[i]) >= 0){
              seven.splice(seven.indexOf(gamematch[i]),1);
            }
          }
          if (seven.length == 0){
            return 2
        }

        return 0
    }
    myMoney(cash){
        this.money = cash;
    }

    wallet(){
        return this.money
    }

    betCash(bet){
        this.bet = bet;
        this.money = this.money - this.bet;
        return this.money;
    }

    resetGame(){
        const beginGame = ['?', '?', '?'];
        return beginGame
    }
}