import React, { Fragment, Component, useState, useContext } from 'react'
import { Context } from '../state/appMainState'


import './home.style.css'






export default class HomePageComponent extends Component {
    constructor(props) {
        super()
        this.helloWords = props.hello;
        this.state = {
            clickCounter: 0,
            homeInputText: '',
            isRed: false
        }
        
        this.increseClickHandler = this.increaseClicks.bind(this);
        this.decreseClickHandler = this.decreaseClicks.bind(this);
        this.onBoxToggle = this.onBoxToggle.bind(this);
    }

    componentDidMount(){
        console.log("component Did Mount")
    }
    componentWillMount(){
        console.log("component Will Mount")
    }
    componentWillUpdate(){
        console.log("component Will Update")
    }
    componentDidUpdate(){
        console.log("component Did Update")
    }
    componentWillUnmount(){
        console.log("component Will Unmount")
    }
    componentDidCatch(){
        console.log("component Did Catch")
    }

    increaseClicks(value){
        console.log("togle")
        let newClick = this.state.clickCounter + value;
        this.setState({
            clickCounter: newClick
        })
    }
    decreaseClicks(value){
        let newClick = this.state.clickCounter + value * -1;
        this.setState({
            clickCounter: newClick
        })
    }
    onTextCahnge(e){
        console.log(e.target.value)
        this.setState({
            homeInputText: e.target.value
        })
    }

    onBoxToggle() {
        console.log(this.state.isRed)
        this.setState({
            isRed: !this.state.isRed
        })
    }

    render() {

        const clicks = this.state.clickCounter;
        return(
            <Fragment>
                <div className="app-container">
                    <h1>Home Component</h1>
                    <p>{ this.helloWords ? this.helloWords : 'No hello words!' }</p>

                    <h2>Clicks: {clicks} </h2>
                    <button onClick={() => { this.increaseClicks(1) }} >Increase +1</button>
                    <button onClick={() => { this.decreaseClicks(1) }} >Decrease -1</button>
                    <InnerHomeComponent  increseClickHandler={ this.increseClickHandler } decreseClickHandler={ this.decreseClickHandler }/>
               
                    <h3>{ this.state.homeInputText ? this.state.homeInputText : 'No input text'  }</h3>
                    <input type='text' onChange={(e) => { this.onTextCahnge(e) }}  placeholder="enter you`r text"/>             

                    <ToggleElement isRed={this.state.isRed} />
                    <input onChange={ this.onBoxToggle } type='checkbox'/>
                    <SecondButton />
                </div>
            </Fragment>
        )
    }
}


const ToggleElement = props => {
    return(
        <Fragment>
            <div className={ props.isRed ? "box red-box" : "box"}></div>
            <div className={ props.isRed ? "box" : "box red-box"}></div>
            <div className= { props.isRed ? "box blue-box" : "box yellow-box"}></div>
        </Fragment>
    )
}

const SecondButton = props => {
    const context = useContext(Context);
    return(
        <Fragment>
            <hr></hr>
            <h2>REDUX clicker</h2>

            <h4>{context.clickCounter.secondClickCounter}</h4>
            <button onClick={() => { context.clickIncrease(4) }}>Second Increase</button>
            <button onClick={() => { context.clickDecreaser(2) }}>Second Decreaser</button>
        </Fragment>
    )
}

class InnerHomeComponent extends Component {
    constructor(props){
        super(props)
    }
    render(){
       return(
            <React.Fragment>
                <hr></hr>
                <h4>Event in child component</h4>
                <button onClick={() => { this.props.increseClickHandler(5) }} >Increase +5</button>
                <button onClick={() => { this.props.decreseClickHandler(5) }} >Decrease -5</button>
            </React.Fragment>
        )
    }
}