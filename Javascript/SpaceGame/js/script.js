/*
    Game main object
*/
class Game {
    constructor(){
        this.selectors = {
            menuWrapper: document.querySelector("#menu-wrapper"),
            canvas: document.querySelector("#game-area"),
            gameSettings: document.querySelector("#game-settings"),
            soundLevelInput: document.querySelector("#sound-level-input"),
            soundLevelDisplay: document.querySelector("#sound-level-display")
        }
        this.ctx = null;
        this.environmenMap = [];
        this.allEnemy = [];
        this.allBullets = [];
        this.userShip = [];
        this.otherObjects = [];
        this.gameStart = false;
        this.gameWin = false;
        this.gamePaused = false;
        this.engine = null;
        this.score = 0;
        this.shipEscape = 0;
        this.keyMap = {};
        this.soundLevel = 10;
    }
    createEnvironment(GameEnvironment){
        let ctxSize = this.getContextSize();
        let firstEnvironment = new GameEnvironment({
            width: ctxSize.width,
            height: ctxSize.height,
            sx: 0,
            sy: 0,
            sWidth: 315,
            sHeight: ctxSize.height, 
            dx: 0,  // destination 
            dy: 0 - ctxSize.height,  // destination 
            dWidth: ctxSize.width, 
            dHeight: ctxSize.height, 
        })
        let secondEnvironment = new GameEnvironment({
            width: ctxSize.width,
            height: ctxSize.height,
            sx: 0,
            sy: 0,
            sWidth: 315, 
            sHeight: ctxSize.height, 
            dx: 0,  // destination 
            dy: 0,  // destination 
            dWidth: ctxSize.width, 
            dHeight: ctxSize.height, 
        });
        this.environmenMap = [].concat(firstEnvironment, secondEnvironment);
    }
    createShip(ship){
        this.userShip.push(ship)
    }
    moveShip(props){
        let ctxSize = this.getContextSize();
        for(let ship of this.userShip){
            switch(props.dirrect){
                case 'up':
                    ship.moveShip({y: props.speed * -1, ctxSize})
                    break
                case 'right':
                    ship.moveShip({x: props.speed, ctxSize})
                    break
                case 'down':
                    ship.moveShip({y: props.speed, ctxSize})
                    break
                case 'left':
                    ship.moveShip({x: props.speed * -1, ctxSize})
                    break
                default:
                    return
            }
        }
    }
    userShoot(){
        for(let ship of this.userShip) {
            ship.shoot(this)
        }
    }
    createEnemy(){
        let randomCreator = Math.floor(Math.random() * 1000 )
        if(randomCreator < 20){
            let randomEnemyType = Math.floor(Math.random() * 100 )
            let newShip = null;
            if(randomEnemyType < 70) {
                newShip = new ShipCreator({
                    image: './assets/enemy_ship.png',
                    sWidth: 125, 
                    sHeight: 144, 
                    dx: Math.floor(Math.random() * ctxSize.width - 40),  // destination 
                    dy: -100,  // destination 
                    dWidth: 57 - 10, 
                    dHeight: 57 - 10,
                    type: 'enemy',
                    hp: 50,
                    point: 5,
                });
            } else {
                newShip = new ShipCreator({
                    image: './assets/enemy_ship_2.png',
                    sWidth: 460, 
                    sHeight: 528, 
                    dx: Math.floor(Math.random() * ctxSize.width - 57 + 30),  // destination 
                    dy: -100,  // destination 
                    dWidth: 57 - 10, 
                    dHeight: 57 - 10,
                    type: 'enemy',
                    hp: 100,
                    point: 5,
                });
            }
            this.allEnemy = this.allEnemy.concat(newShip);
        }
    }
    envairomentMove(){
        let ctxSize = this.getContextSize();
        for(let environment of this.environmenMap){
            environment.moveBackground(ctxSize)
            this.drawImge(environment)
        }
    }
    placeObjects(){
        let allGameObjects = [].concat(this.allEnemy, this.allBullets, this.userShip, this.otherObjects);
        for(let object of allGameObjects){
            if(object.move) object.move();
            if(object.cleared && object.type != 'player') object.cleared(this);
            if(object.moveShip && object.type != 'player') object.moveShip(this);
            if(object.collision) object.collision(this);
            if(object.flameAnimation) object.flameAnimation(this);
            this.drawImge(object)
        }
    }
    drawText(props){
        this.ctx.font = props.fontSize;
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(props.text, props.x, props.y);
    }
    drawImge(props){
        let img = new Image();
        img.src = props.image;
            this.ctx.drawImage(
                img, 
                props.sx, 
                props.sy, 
                props.sWidth, 
                props.sHeight, 
                props.dx, 
                props.dy, 
                props.dWidth, 
                props.dHeight
            )
    }
    setCtx(){
        this.selectors.canvas.width = 400;
        this.selectors.canvas.height = 600;
        this.ctx = this.selectors.canvas.getContext("2d");
    }
    getContextSize(){
        if(!this.ctx) return
        let width = this.ctx.canvas.offsetWidth;
        let height = this.ctx.canvas.offsetHeight;
        return { width, height }
    }
    clearContext(){
        let ctxSize = this.getContextSize();
        this.ctx.clearRect(0, 0, ctxSize.width, ctxSize.height);
    }
    showMenu(){
        if(!this.gameStart) return
        this.gamePaused = !this.gamePaused;
        if(this.gamePaused){
            this.gamePause()
        } else {
            this.initEngine()
        }
        this.selectors.menuWrapper.classList.toggle('none');
    }
    hideMenu(){
        this.selectors.menuWrapper.classList.toggle('none');
    }
    initEngine(){
        this.setCtx()
        this.engin = setInterval(() => { 
            this.clearContext();
            this.envairomentMove();
            if(this.gameStart){
                this.placeObjects();
                this.createEnemy();
                this.drawText({
                    fontSize: '14px Arial',
                    text: `Score: ${this.score}`,
                    x: 100,
                    y: 20
                })
            }
        }, 20);
    }
    clearGameData(){
        this.allEnemy = [];
        this.allBullets = [];
        this.otherObjects = [];
        this.gameStart = false;
        this.gameWin = false;
        this.gamePaused = false;
        this.score = 0;
        this.shipEscape = 0;
        this.keyMap = {};
    }
    startGame(){
        this.clearGameData() 
        this.gameStart = true;
        this.gamePause()
        this.initEngine()
    }
    gamePause(){
        clearInterval(this.engin)
    }
    resumeButton(){
        const gameSettings = this.selectors.gameSettings;
        gameSettings.innerHTML = '';
        if(!this.gameStart) return
        const button = document.createElement("button");
        button.innerText = "continue";
        button.className = "btn main-btn";
        button.addEventListener("click", (e) => {
            this.showMenu()
        }, false);
        gameSettings.appendChild(button)
    }
}



/*
    User Ship
*/
class ShipCreator {
    constructor(props){
        this.id = new Date().getTime();
        this.image = props.image;
        this.sx = props.sx ? props.sx : 0; 
        this.sy = props.sy ? props.sy : 0; 
        this.sWidth = props.sWidth ? props.sWidth : 57; 
        this.sHeight = props.sHeight ? props.sHeight : 83; 
        this.dx = props.dx ? props.dx : 100;  // destination 
        this.dy = props.dy ? props.dy : 100;  // destination 
        this.dWidth = props.dWidth ? props.dWidth : 57 - 10; 
        this.dHeight = props.dHeight ? props.dHeight : 83 - 10;
        this.shipShoot = false;
        this.type = props.type;
        this.hp = props.hp;
        this.point = props.point ? props.point : 0 ;
    }
    moveShip(props){
        if(this.type === 'player'){
           if((props.ctxSize.width - this.dWidth) < this.dx + props.x ||
            this.dx + props.x < 0 || this.dy + props.y < 0 ||
            props.ctxSize.height - this.dHeight < this.dy + props.y) return 
        } else {
            this.dy += 2;
        }
        
        if(props.x) this.dx += props.x;
        if(props.y) this.dy += props.y;
    }
    shoot(props){
        if(this.shipShoot) return 

        this.shipShoot = true;
        setTimeout(() => {
            this.shipShoot = false;
        }, 200)
        let bullet = null;
        if(this.type === 'player') {
            bullet = new BulletsCreator({
                owner: 'player',
                image: './assets/Green_laser.png',
                sWidth: 85,
                sHeight: 552,
                dx: this.dx + this.dWidth/2 - 5,
                dy: this.dy,
                dWidth: 10,
                dHeight: 40,
                damage: 50
            }); 
        }
        this.playSound(props)
        props.allBullets = props.allBullets.concat(bullet)
    }
    cleared(props){
        let ctxSize = props.getContextSize();
        if(this.hp <= 0){
            this.explosion(props)
        }
        if(this.dy > ctxSize.height || this.hp <= 0) {
            let indexOfShipInArray = props.allEnemy.indexOf(this);
            props.allEnemy.splice(indexOfShipInArray, 1);
        }
    }
    explosion(props){
        let explosion = new CreatExplosion({
            image: './assets/explosion.png',
            sx: 0,
            sy: 0,
            sWidth: 12891 / 44,
            sHeight: 294,
            dx: this.dx - this.dWidth / 2,
            dy: this.dy - this.dHeight / 2,
            dWidth: this.dHeight * 2,
            dHeight: this.dHeight * 2,
            imageWidth: 12891
        });
        props.otherObjects = props.otherObjects.concat(explosion);
    }
    playSound(props){
        let audio = new Audio('./assets/sound/laser_sms.mp3');
        audio.volume = props.soundLevel / 100;
        audio.play();
    }
}



/*
    Explosion 
*/
class CreatExplosion{
    constructor(props){
        this.id = new Date().getTime();
        this.image = props.image;
        this.sx = props.sx ? props.sx : 0; 
        this.sy = props.sy ? props.sy : 0; 
        this.sWidth = props.sWidth ? props.sWidth : 57; 
        this.sHeight = props.sHeight ? props.sHeight : 83; 
        this.dx = props.dx ? props.dx : 100;  // destination 
        this.dy = props.dy ? props.dy : 100;  // destination 
        this.dWidth = props.dWidth ? props.dWidth : 57 - 10; 
        this.dHeight = props.dHeight ? props.dHeight : 83 - 10;
        this.imageWidth = props.imageWidth;
        this.sound = props.sound ? props.sound: null;
    }
    flameAnimation(){
        this.sx += this.sWidth;
    }
    cleared(props){
        if(this.sx > this.imageWidth) {
            let indexOfBulletInArray = props.otherObjects.indexOf(this)
            props.otherObjects.splice(indexOfBulletInArray, 1);
        }
    }
    playSound(props){
        let audio = new Audio('./assets/sound/Explosion+8.mp3');
        audio.volume = props.soundLevel / 100;
        audio.play();
    }
}



/*
    Environment game
*/
class GameEnvironment {
    constructor(props){
        this.image = './assets/back_7.jpg';
        this.sx = props.sx ? props.sx : 0, 
        this.sy = props.sy ? props.sy : 0, 
        this.sWidth = props.sWidth ? props.sWidth : 0, 
        this.sHeight = props.sHeight ? props.sHeight : 0, 
        this.dx = props.dx ? props.dx : 0,  // destination 
        this.dy = props.dy ? props.dy : 0,  // destination 
        this.dWidth = props.dWidth ? props.dWidth : 0, 
        this.dHeight = props.dHeight ? props.dHeight : 0
    }
    moveBackground(ctxSize){
        this.dy += 0.5;
        if(this.dy > ctxSize.height){
            this.dy = ctxSize.height * -1;
        } 
    }
}



/*
    create bullets
*/
class BulletsCreator {
    constructor(props){
        this.id = new Date().getTime();
        this.damage = props.damage;
        this.speed = 15;
        this.owner = props.owner ? props.owner : 'enemy';
        this.image = props.image;
        this.sx = props.sx ? props.sx : 0; 
        this.sy = props.sy ? props.sy : 0; 
        this.sWidth = props.sWidth ? props.sWidth : 0; 
        this.sHeight = props.sHeight ? props.sHeight : 0; 
        this.dx = props.dx ? props.dx : 0;  // destination 
        this.dy = props.dy ? props.dy : 0;  // destination 
        this.dWidth = props.dWidth ? props.dWidth : 0; 
        this.dHeight = props.dHeight ? props.dHeight : 0;
        this.bulletHit = false;
        this.damage = props.damage;
        this.sound = props.sound ? props.sound: null;
    }
    move(){
        switch(this.owner){
            case 'player':
                this.dy += this.speed * -1;
        }
    }
    cleared(props){
        if(this.dy + this.dHeight < 0 || this.bulletHit) {
            let indexOfBulletInArray = props.allBullets.indexOf( this)
            props.allBullets.splice(indexOfBulletInArray, 1);
        }
    }
    collision(props){
        let allObjects = this.owner === 'player' ? props.allEnemy : props.userShip;
        for(let object of allObjects) {
            let xMin = Math.max( this.dx, object.dx );
            let yMin = Math.max( this.dy, object.dy );
            let xMax = Math.min( this.dx + this.dWidth, object.dx + object.dWidth );
            let yMax = Math.min( this.dy + this.dHeight, object.dy + object.dHeight );

            let xColide = xMin - xMax;
            let yCollide = yMin - yMax;
            if(xColide < 0 && yCollide < 0) {
                object.hp -= this.damage;
                this.bulletHit = true;
                props.score += object.point;
                this.explosion(props)
                this.cleared(props)
                break
            }
        }
    }
    explosion(props){
        let explosion = new CreatExplosion({
            image: './assets/explosion.png',
            sx: 0,
            sy: 0,
            sWidth: 12891/44,
            sHeight: 294,
            dx: this.dx - this.dHeight/2,
            dy: this.dy,
            dWidth: this.dHeight,
            dHeight: this.dHeight,
            imageWidth: 12891
        });
        explosion.playSound(props);
        props.otherObjects = props.otherObjects.concat(explosion);
    }
}




const game = new Game();    //  1)
game.initEngine();          //  2)
let ctxSize = game.getContextSize();
game.createShip(new ShipCreator({
    image: './assets/space_ship.png',
    sWidth: 57, 
    sHeight: 83, 
    dx: ctxSize.width / 2 - 50,  // destination 
    dy: ctxSize.height - 100,  // destination 
    dWidth: 57 - 20, 
    dHeight: 83 - 20,
    type: 'player',
    hp: 300
}));
game.createEnvironment(GameEnvironment);








/*
    Events
*/
document.addEventListener("click", event => {
    const dataset = event.target.dataset; 
    switch(dataset.gameBtn){
        case "start": 
            game.hideMenu()
            game.startGame()
            break
        default:
            return
    }
});
document.addEventListener("keyup", event => {   
    event = event || event;
    delete game.keyMap[event.keyCode];
})
document.addEventListener("keydown", event => {   
    if(event.keyCode === 18) return
    event = event || event;
    game.keyMap[event.keyCode] = event.type == 'keydown';
})
document.addEventListener("keypress", event => {
    const speed = 10;
    if(game.gamePaused || !game.gameStart) return 

    for(let [key, val] of Object.entries(game.keyMap)){
        switch(parseInt(key)) {
            case 87:
                game.moveShip({dirrect: 'up', speed})
                break
            case 68:
                game.moveShip({dirrect: 'right', speed})
                break
            case 83:
                game.moveShip({dirrect: 'down', speed})
                break
            case 65: 
                game.moveShip({dirrect: 'left', speed})
                break
            case 32: 
                game.userShoot()
                break
            default: 
                return
        }
    }
});

document.addEventListener("keydown", event => {
    switch(event["keyCode"]) {
        case 27: 
            game.resumeButton()
            game.showMenu()
            break
    }
});
game.selectors.soundLevelInput.value = game.soundLevel;
displaySoundLevel()
game.selectors.soundLevelInput.addEventListener("change", (e) => {
    game.soundLevel = e.target.value;
    displaySoundLevel()
});
function displaySoundLevel(){
    game.selectors.soundLevelDisplay.innerHTML = `Sound level: ${game.soundLevel}`;
}



