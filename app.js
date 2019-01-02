new Vue({
    el: '#app',
    data: {
        gameStatue: 'Monster Slayer',
        gameStarted: false,
        playerHealth: 100,
        playerDamage: 0,
        playerSpecialDamage: 0,
        showSpecialAttack: false,
        specialAttackUsed: false,
        playerHeal: 0,
        monsterHealth: 100,
        monsterDamage: 0,
        logPlayer: '',
        logMonster: '',
        backGroundColorPlayer: 'green',
        backGroundColorMonster: 'green',
        logColor: 'green',
        showLog: false,

        playerMaxNormalDamage: 20,
        playerMinNormalDamage: 10,
        playerMaxNormalHeal: 5,
        playerMinNormalHeal: -1,
        playerMaxSpecialDamage: 40,
        playerMinSpecialDamage: 20,
        monsterMaxDamage: 25,
        monsterMinDamage: 15,
    },
    methods: {
        StartNewGame: function() {
            this.gameStarted = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.showSpecialAttack = false;
            this.specialAttackUsed = false;
            this.backGroundColorPlayer = 'green';
            this.backGroundColorMonster = 'green';
            this.gameStatue = 'Monster Slayer';
        },
        Verification: function() {
            if (this.playerHealth <= 40 && this.specialAttackUsed === false) {
                this.showSpecialAttack = true;
            }
            if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                this.gameStatue = 'YOU ARE DEAD !';
            }
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                this.gameStatue = 'MONSTER IS DEAD !';
            }
            if (this.playerHealth === 0 || this.monsterHealth === 0) {
                this.gameStarted = false;
            }
            if(this.playerHealth < 75){
                this.backGroundColorPlayer = 'rgb(255,200,0)';
            }
            if(this.playerHealth < 50){
                this.backGroundColorPlayer = 'rgb(255,100,0)';
            }
            if(this.playerHealth < 20){
                this.backGroundColorPlayer = 'rgb(255,0,0)';
            }
            if(this.monsterHealth < 75){
                this.backGroundColorMonster = 'rgb(255,200,0)';
            }
            if(this.monsterHealth < 50){
                this.backGroundColorMonster = 'rgb(255,100,0)';
            }
            if(this.monsterHealth < 20){
                this.backGroundColorMonster = 'rgb(255,0,0)';
            }
        },
        GiveUp: function() {
            this.gameStarted = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.backGroundColorPlayer = 'green';
            this.backGroundColorMonster = 'green';
            this.logPlayer = "";
            this.logMonster = "";
        },
        NormalAttack: function() {
            this.monsterDamage = Math.floor(Math.random() * (this.monsterMaxDamage - this.monsterMinDamage + 1) ) + this.monsterMinDamage;
            this.playerDamage = Math.floor(Math.random() * (this.playerMaxNormalDamage - this.playerMinNormalDamage + 1) ) + this.playerMinNormalDamage;
            this.monsterHealth -= this.playerDamage;
            this.playerHealth -= this.monsterDamage;
            this.logPlayer = "-" + this.monsterDamage;
            this.logColor = 'red';
            this.logMonster = "-" + this.playerDamage;
            this.ShowLog();
            this.Verification();
        },
        SpecialAttack: function() {
            this.monsterDamage = Math.floor(Math.random() * (this.monsterMaxDamage - this.monsterMinDamage + 1) ) + this.monsterMinDamage;
            this.playerSpecialDamage = Math.floor(Math.random() * (this.playerMaxSpecialDamage - this.playerMinSpecialDamage + 1) ) + this.playerMinSpecialDamage;
            this.monsterHealth -= this.playerSpecialDamage;
            this.playerHealth -= this.monsterDamage;
            this.logPlayer = "-" + this.monsterDamage;
            this.logColor = 'red';
            this.logMonster = "-" + this.playerSpecialDamage;
            this.specialAttackUsed = true;
            this.ShowLog();
            this.Verification();
        },
        Heal: function() {
            this.monsterDamage = Math.floor(Math.random() * (this.monsterMaxDamage - this.monsterMinDamage + 1) ) + this.monsterMinDamage;
            this.playerHeal = Math.floor(Math.random() * (this.playerMaxNormalHeal - this.playerMinNormalHeal + 1) ) + this.playerMinNormalHeal;
            this.playerHealth -= this.monsterDamage;
            this.logPlayer = "+" + this.playerHeal;
            this.logColor = 'green';
            this.logMonster = "";
            this.ShowLog();
            let vue = this;
            setTimeout(function() {
                vue.playerHealth += vue.monsterDamage + vue.playerHeal;
                if (vue.playerHealth > 100) {
                    vue.playerHealth = 100;
                }
            }, 400);
        },
        ShowLog: function() {
            this.showLog = true;
            let vue = this;
            setTimeout(function() {
                vue.showLog = false;
            }, 1000)
        }
    },
});
