(function(){
/*
===================================
    Game main object
===================================        
*/
    class Game {
        constructor(){
            this.buttonsPress = {}
            this.selectors = {
                mainCanvas: document.querySelector("#main-canvas"),
                gameMenu: document.querySelector("#game-menu"),
                gameOverText: document.querySelector("#game-over-text")
            }
            this.ctx = null;
            this.engine = null;
            this.gameStart = false;
            this.gamePaused = false;
            this.score = 0;
            this.scoreToWin = 1000;
            this.allObjects = [];
            this.canvasSize = {
                width: 800,
                height: 500
            }
        }
        displayGameText(props){
            this.ctx.font = props.fontSize;
            this.ctx.fillStyle = "#333333";
            this.ctx.textAlign = "center";
            this.ctx.fillText(props.text, props.x, props.y);
        }
        displayCircle(props){
            const ctx = this.ctx;
            ctx.fillStyle = props.color;
            ctx.beginPath();
            ctx.arc(props.posX, props.posY, props.width, 0, 2 * Math.PI);
            ctx.stroke(); 
            ctx.closePath();
            ctx.fill();
        }
        moveBubble(props){
            const bubble = this.allObjects.find(obj => obj.type === "player");
            if(!bubble) return
            switch(props.dirrect){
                case 'up':
                    bubble.move({y: bubble.speed * -1, ctxSize: this.canvasSize})
                    break
                case 'right':
                    bubble.move({x: bubble.speed, ctxSize: this.canvasSize})
                    break
                case 'down':
                    bubble.move({y: bubble.speed, ctxSize: this.canvasSize})
                    break
                case 'left':
                    bubble.move({x: bubble.speed * -1, ctxSize: this.canvasSize})
                    break
            }
        }
        init(){
            this.createCtx();
        }
        start(){
            this.createEnemy()
            this.createPlayer()
            this.createTarget()
            this.engine = setInterval(() => {
                if(this.gamePaused || !this.gameStart) return
                this.clearCtx()
                this.engineProcess()
                this.moreEnemy()
                this.displayGameText({
                    fontSize: '14px Arial',
                    text: `Score: ${this.score}`,
                    x: 100,
                    y: 20
                });
                if(this.scoreToWin <= this.score) this.gameWin()
            }, 20);
        }
        stopEngine(){
            clearInterval(this.engine)
        }
        eressGameData() {
            this.selectors.gameOverText.innerHTML = "<h1>Game menu</h1>";
            this.gameStart = false;
            this.gamePaused = false;
            this.score = 0;
            this.allObjects = [];
        }
        gameOver(){
            this.selectors.gameOverText.innerHTML = `<h1>Game Over</h1><p>Score: ${this.score}</p>`; 
            this.gameStart = false;
            game.hideMenu();
        }
        gameWin(){
            this.selectors.gameOverText.innerHTML = `<h1>Congratulation! You Win the Game</h1><p>Score: ${this.score}</p>`; 
            this.gameStart = false;
            game.hideMenu();
        }
        createEnemy(){
            let enemy = new ObjectCreator({
                type: "enemy",
                width: 50,
                height: 50,
                color: "#ff000030",
                speed: 0.5,
                posX: 0,
                posY: 0  
            });
            this.allObjects.push(enemy);
        }
        createPlayer() {
            let player = new ObjectCreator({
                type: "player",
                width: 30,
                height: 30,
                color: "#00ff0030",
                speed: 10,
                posX: this.canvasSize.width / 2,
                posY: this.canvasSize.height / 2  
            });
            this.allObjects.push(player);
        }
        createTarget(){
            let target = new ObjectCreator({
                type: "target",
                width: 20,
                height: 20,
                color: "#0000ff30",
                speed: 10,
                posX: Math.floor(Math.random() * this.canvasSize.width),
                posY: Math.floor(Math.random() * this.canvasSize.height),
                cost: 50
            });
            this.allObjects.push(target);
        }
        engineProcess(){
            for(let object of this.allObjects) {
                if(object.moveDecision) object.moveDecision(this);
                if(object.move) object.moveDecision(this);
                if(object.collision) object.collision(this);
                if(object.deleteObject) object.deleteObject(this);
                this.displayCircle(object)
            }
        }
        moreEnemy(){
            let numberOfEnemy = this.allObjects.filter(item => item.type === "enemy");
            let enemyCalculation = parseInt(this.score / 100);

            if(enemyCalculation > numberOfEnemy.length) {
                this.createEnemy()
            }
        }
        clearCtx(){
            this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        }
        createCtx(){
            this.selectors.mainCanvas.width = this.canvasSize.width;
            this.selectors.mainCanvas.height = this.canvasSize.height;
            this.ctx = this.selectors.mainCanvas.getContext("2d");
        }
        hideMenu(){
            this.selectors.gameMenu.classList.toggle('none');
        }
    }

/*
===================================
    Creator of objects
===================================
*/
    class ObjectCreator {
        constructor(props){
            this.timer = props.type === "target" ? 10 : null;
            this.type = props.type;  // player  enemy  target
            this.width = props.width;
            this.height = props.height;
            this.color = props.color;
            this.horizontalDirection = "to-right";
            this.verticalDirection = "to-bottom";
            this.speed = props.speed;
            this.posX = props.posX;
            this.posY = props.posY;
            this.present = true;
            this.cost = props.cost ? props.cost : null;
        }
        moveDecision(props) {   
            if(this.type != "enemy") return
            if(this.posX < props.canvasSize.width && this.horizontalDirection === "to-right") {
                this.posX += this.speed;
                if(this.posX >= props.canvasSize.width) {
                    this.horizontalDirection = "to-left";
                }
            } else if(this.posX > 0 && this.horizontalDirection === "to-left"){
                this.posX -= this.speed;
                if(this.posX <= 0){
                    this.horizontalDirection = "to-right";
                }
            }

            if(this.posY < props.canvasSize.height && this.verticalDirection === "to-bottom") {
                this.posY += this.speed;
                if(this.posY >= props.canvasSize.height) {
                    this.verticalDirection = "to-top";
                }
            } else if(this.posY > 0 && this.verticalDirection === "to-top"){
                this.posY -= this.speed;
                if(this.posY <= 0){
                    this.verticalDirection = "to-bottom";
                }
            }
        }
        move(props) {
            const canvasSize = props.ctxSize;
            if((canvasSize.width - this.width) < this.posX + props.x ||
            this.posX + props.x < 0 || this.posY + props.y < 0 ||
            canvasSize.height - this.height < this.posY + props.y) return 

            this.posX += props.x ? props.x : 0;
            this.posY += props.y ? props.y : 0;
            
        }
        collision(props){
            for(let object of props.allObjects){
                if(this.type === object.type) continue
                let x = this.posX - object.posX;
                let y = this.posY - object.posY;
                let distance = Math.sqrt(x*x + y*y) - (this.width + object.width);
                
                if(distance < 0){
                    if(object.type === "target") {
                        object.present = false;
                        if(this.type === "player") {
                            props.score += object.cost;
                        }
                    } else if(object.type === "enemy" && this.type === "player") {
                        props.gameOver()
                    }
                }
            }   
        }
        deleteObject(props){
            if(this.present) return
            let objectIndex = props.allObjects.indexOf(this);
            props.allObjects.splice(objectIndex, 1);
            props.createTarget()
        }
    }

/* 
===================================
    Game init
===================================
*/   
    const game = new Game();
    game.init();


/* 
===================================
    Events 
===================================
*/
    document.addEventListener("click", event => {
        let dataset = event.target.dataset["gameBtn"];
        switch(dataset){
            case "start":
                game.eressGameData();
                game.stopEngine();
                game.hideMenu();
                game.gameStart = true;
                game.start()
                break
        }
    });
    document.addEventListener("keydown", event => {
        if(event.keyCode === 18) return
        event = event || event;
        game.buttonsPress[event.keyCode] = event.type == 'keydown';
    });
    document.addEventListener("keyup", event => {
        delete game.buttonsPress[event.keyCode]
    });
    document.addEventListener("keypress", event => {
        for(let [key, value] of Object.entries(game.buttonsPress)){
            
            switch(parseInt(key)) {
                case 87:
                    game.moveBubble({dirrect: 'up'})
                    break
                case 68:
                    game.moveBubble({dirrect: 'right'})
                    break
                case 83:
                    game.moveBubble({dirrect: 'down'})
                    break
                case 65: 
                    game.moveBubble({dirrect: 'left'})
                    break
            }
        }
    });
    document.addEventListener("keydown", event => {
        switch(event.keyCode) {
            case 27:
                if(!game.gameStart) return
                game.gamePaused = !game.gamePaused;
                game.hideMenu()
                break
        }
    })
})()