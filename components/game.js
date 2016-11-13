var React = require("react");
var Table = require("./table.js");
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
/*possible winning combinations*/
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [6, 7, 8];
var arr4 = [0, 3, 6];
var arr5 = [1, 4, 7];
var arr6 = [2, 5, 8];
var arr7 = [0, 4, 8];
var arr8 = [2, 4, 6];
var win = false;
var winner = "";
var mark = 0;
var blocked = false;
var newNum = 0;
var num = 0;
var initialState = {
      humanMark: 'X',
      compMark: 'O',
    };
var Game = React.createClass({
  getInitialState: function(){
    return initialState;
  },
  //checkArray looks through each array combination for
  //the id which could be 0 - 8
  checkCombo: function(arr, id, markType){
    var id = parseInt(id);
    //if the id passed into checkArray exists in combination array
    if(arr.indexOf(id) !== -1){
      for (var i = 0; i < arr.length; i++){
        //update the element of the array to be the markType
        if(arr[i] == id){
          arr[i] = markType;
        }
      }
    }
  },
  winner: function(arr, markType){
    var count = 0;
    var tie = 0;

    for (var i = 0; i < arr.length; i++){
      //if each element in the array is an X or O
      if(arr[i] === markType){
        //add to count
        count++;
      }
    }
    //if count is the length of the array then we have a winner
    if(count === arr.length){
      mark = 0;
      win = true;
      count = 0;
      blocked = false;
      newNum = 0;
      num = 0;
      winner = markType;
      console.log(winner, 'wins');
      console.log(array);
      array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      arr1 = [0, 1, 2];
      arr2 = [3, 4, 5];
      arr3 = [6, 7, 8];
      arr4 = [0, 3, 6];
      arr5 = [1, 4, 7];
      arr6 = [2, 5, 8];
      arr7 = [0, 4, 8];
      arr8 = [2, 4, 6];
      win = false;
      for(var i = 0; i < 9; i++){
        document.getElementById(i.toString()).innerHTML = '';
      }
    }
    if(mark === array.length){
      winner = 'tie';
      console.log(winner);
      mark = 0;
      count = 0;
      blocked = false;
      newNum = 0;
      num = 0;
      array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      arr1 = [0, 1, 2];
      arr2 = [3, 4, 5];
      arr3 = [6, 7, 8];
      arr4 = [0, 3, 6];
      arr5 = [1, 4, 7];
      arr6 = [2, 5, 8];
      arr7 = [0, 4, 8];
      arr8 = [2, 4, 6];
      for(var i = 0; i < 9; i++){
        document.getElementById(i.toString()).innerHTML = '';
      }
    }

  },
  /*use checkAllCombos to add mark types to combination arrays if necessary*/
  checkAllCombos: function(id, markType){
    this.checkCombo(arr1, id, markType);
    this.checkCombo(arr2, id, markType);
    this.checkCombo(arr3, id, markType);
    this.checkCombo(arr4, id, markType);
    this.checkCombo(arr5, id, markType);
    this.checkCombo(arr6, id, markType);
    this.checkCombo(arr7, id, markType);
    this.checkCombo(arr8, id, markType);
  },
  getRandomArbitrary: function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
  },

  /*choose a corner or center spot first for most chances*/
  compFirstChoice: function(){
     var altFirstChoice = [2,4,6,8];
     if(array[4] !== ""){
       num = 4;
       document.getElementById(array[num].toString()).innerHTML = this.state.compMark;
       mark++;
       this.checkAllCombos(array[num], this.state.compMark);
       array[num] = '';
       num = 0;
     }
     else{
      num = altFirstChoice[Math.floor(Math.random() * altFirstChoice.length)];
      if(!array[num]){
        this.compFirstChoice();
      }
      else{
        document.getElementById(array[num].toString()).innerHTML = this.state.compMark;
        mark++;
        this.checkAllCombos(array[num], this.state.compMark);
        array[num] = '';
        num = 0;
      }
    }
  },

  /*block checks if any combo array has more than one humanMark*/
  block: function(arr, num){
    var count = 0;
    if(arr.indexOf(this.state.compMark) !== -1){
      return;
    }
      for(var i = 0; i < arr.length; i++){
       if(arr[i] === this.state.humanMark){
         count++;
      }
     }
     if(count === 2){
       for(var i = 0; i < arr.length; i++){
         if(arr[i] !== this.state.humanMark){
           blocked = true;
           newNum = arr[i];
         }
       }
    }

  },

  /*all subsequent choices start here*/
   compChoice: function(){
     var num = 0;
    if(winner === this.state.humanMark || winner === 'tie'){
      winner = "";
      return;
    }
    num = this.getRandomArbitrary(0, array.length);
      if(!array[num]){
        this.compChoice();
      }
      else{
        /*see if we need to block*/
        this.block(arr1, num);
        this.block(arr2, num);
        this.block(arr3, num);
        this.block(arr4, num);
        this.block(arr5, num);
        this.block(arr6, num);
        this.block(arr7, num);
        this.block(arr8, num);
        if(blocked === true){
          num = newNum;
        }
        document.getElementById(array.indexOf(num)).innerHTML = this.state.compMark;
        mark++;
        this.checkAllCombos(array.indexOf(num), this.state.compMark);
        array[array.indexOf(num)] = '';

        this.winner(arr1, this.state.compMark);
        this.winner(arr2, this.state.compMark);
        this.winner(arr3, this.state.compMark);
        this.winner(arr4, this.state.compMark);
        this.winner(arr5, this.state.compMark);
        this.winner(arr6, this.state.compMark);
        this.winner(arr7, this.state.compMark);
        this.winner(arr8, this.state.compMark);

      }

    },
/*on human click*/
  onTdClick: function(event){
    if(array[parseInt(event.target.id)] === ''){
      return;
    }
    for(var i = 0; i < array.length; i++){
      if(parseInt(event.target.id) === array[i]){
        array[i] = '';
      }
    }
    document.getElementById(event.target.id).innerHTML = this.state.humanMark;
    mark++;
    this.checkAllCombos(parseInt(event.target.id), this.state.humanMark);
    this.winner(arr1, this.state.humanMark);
    this.winner(arr2, this.state.humanMark);
    this.winner(arr3, this.state.humanMark);
    this.winner(arr4, this.state.humanMark);
    this.winner(arr5, this.state.humanMark);
    this.winner(arr6, this.state.humanMark);
    this.winner(arr7, this.state.humanMark);
    this.winner(arr8, this.state.humanMark);
    if(mark === 1){
      this.compFirstChoice();
    }
    else{
      this.compChoice();
    }


  },
  render: function(){
    return (
        <div>
          <Table onClick={this.onTdClick}/>
        </div>
    )
  }
})
module.exports = Game;
