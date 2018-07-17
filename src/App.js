import React, { Component }  from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Fighters from "./components/FighterCard";
import Wrapper from "./components/Wrapper";
import fighters from "./fighters.json";

// a 'shuffle function' found@stackoverflow.com
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

 //why dont i need this
// fix this asap
// let clickMessage = "..Nice! Keep on Clicking different Fighters to earn points, but dont click 1 TWICE!";
// let clickMessage = "Click a Fighter to earn points, don't click 1 TWICE!";
//class = special function
class App extends Component {
// Setting this.state.fighters to the fighters json array 
// -- state is place where data comes from
  state = {
    fighters,
    score: 0,
    bestScore: 0,
    // msg: "",
     /* // 7-15-added: */
    // rightWrong: "",
    //why dont i need this
    // clickMessage,
    clickedFighters: []
  };

  clickedFighter = id => {
    // assigns state of empty array2 a let thats2 be updated
    let clickedFighters = this.state.clickedFighters;
    let score = this.state.score;
    
    // fix this asap (moved up to work)
     /* // 7-15-added: */
    // after first click!
     let clickMessage = "..Nice! Keep on Clicking different Fighters to earn points, but dont click 1 TWICE!";
    //  let clickMessage = "Click on a fighter to earn points, but don't click on any of them more than once!";
    

     let bestScore = this.state.bestScore;
    

    // if clickd fighter has id of indexed fighters
    if (clickedFighters.indexOf(id) === -1) {
      // push that particular id into the array 2b stored
      clickedFighters.push(id);
      console.log(clickedFighters);
      // run score function
      this.handleIncrement();
      // run reshuffle function after ea individual click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      alert("You Win Player!!, you clicked each fighter without clicking it twice! You are the Official 'Injustice 2 Click Game' CHAMPION!! Congrats...")
      
      // fix this asap
       /* // 7-15-added: */
      //  winning msg:
      clickMessage = "You Won Player! Your the Injustice2 Click Champion! Play Again?";
       /* // 7-15-added: */
      // rightWrong: "You win!"
     
     
      this.setState({
        score: 0,
         /* // 7-15-added: */
         //why dont i need this
         // clickMessage,

         /* // 7-15-added: */
         // rightWrong: "You win!",
        clickedFighters: []
      });

       // fix this asap
       /* // 7-15-added: */
       //why dont i need this     
       // this.setState({clickMessage});

    } else {
      this.setState({
         /* // 7-15-added: */
         // rightWrong: "wow glood jobn!",

         /* // 7-15-added: */
         //why dont i need this    
         // clickMessage,

        score: 0,
        clickedFighters: []
      });
      console.log("TWICE");
      
      // fix this asap
      // loosing message
      clickMessage = "Ok so you lost that last game, LETS GO!! ?! ((Start Over))";
      // clickMessage = "GAME OVER!, Sorry Player You clicked that fighter already ?! ((Start Over))";
      
      //start over! you clickd same fighter twice!  :(    Try to beating your topscore or getting 12 points & winningif you can get up to 12 points then... you will Win the game & become Champion! Dang! dangy! You already clickd on that! Now start over!
     
      alert(`score: ${this.state.score}  \nGAME OVER!  (((Try Again))) \nSorry Player you clicked the same fighter twice!  :(      \nNext time, try to beat your score of '${this.state.score}' \n& if you can get up to 12 points then... \nyou will Win the game & become Champion!`);
      
     } 

      // fix this asap
      // no 'on screen msgs' work without this!!
    this.setState({clickMessage});

    if (score > bestScore) {
      this.setState({
        bestScore: score,
        
      })
    } 
  }

  // function increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // function that shuffle's up fighters
  makeShuffle = () => {
    this.setState({ fighters: shuffle(fighters) })
  }

  // reset = () => {
  //   this.setState({ score: 0 })
  // }

// failed attempt to make cards shake when loose:
      //   //set ea cards' count, the score goes back to 0 and remove shake class
      //   this.state.fighters.forEach(fighters => {fighters.count = 0;})
      //   this.setState({score: 0});
      //   this.removeShake();
      // }
  
      // //removes shake class from cards and guess msg from header
      // removeShake = () => {
      //   setTimeout(function(){this.state.cxlassArr.pop("shake")}.bind(this), 1000);
      //   setTimeout(function(){this.setState({msg: ""})}.bind(this), 1000);
      // }
 
    
// Mapsover this.state.fighters & renders FighterCard component 4each fighter object
  render() {
    return (
      <div>
        <Navbar
          bestScore={this.state.bestScore}
          score={this.state.score}

           /* // 7-15-added:    STILL NOT WORKING */
          // rightWrong={this.state.rightWrong}
          
        />
        <Header />
        {/* // fix this asap */}
        {/* <Header msg = {this.state.msg}/> */}

        {/* // fixed */}
        {/* neccessary to see msg on screen with h3tag   */}
        <h3 className="scoreSummary">
         {this.state.clickMessage}
        </h3> 
       
       
        <Wrapper>

        
        {/* // fix this asap */}{/* // 7-15-added: */}    
            {/* <h3 className="scoreSummary">
                    {this.state.clickMessage}
                 </h3> */}

 {/* Maps over this.state.fighters and render a FighterCard component for each fighter object */}
          {this.state.fighters.map(fighter => (
            <Fighters 
              key={fighter.id}
              id={fighter.id}
              image={fighter.image}
              name={fighter.name}
              clickedFighter={this.clickedFighter}
               /* // 7-15-added:  NOT WORKING*/
              // rightWrong={this.state.rightWrong}
              // 7-15-added:
              //why dont i need this
              // clickMessage={this.state.clickMessage}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;


