/*
    Приклад модульного експорту скриптів
    функції можна передавати в інші модулі по всьому додатку
    приклад як можна в іншому модулі дістати ці функції:
        const otherScript = require("./other-script");

        let text = otherScript.helloWord({extraWord: "user name"});
        someLogAction({text});   ///  Hi There user name 
*/
const helloWord = (props) => { return `Hi There ${props.extraWord}` };
const someLogAction = (props) => { return console.log(props.text)}


module.exports = { helloWord, someLogAction }