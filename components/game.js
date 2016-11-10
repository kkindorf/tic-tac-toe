var React = require("react");
var Table = require("./table.js");
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [6, 7, 8];
var arr4 = [0, 3, 6];
var arr5 = [1, 4, 7];
var arr6 = [2, 5, 8];
var arr7 = [0, 4, 8];
var arr8 = [2, 4, 6];
var win = false;
var initialState = {
      humanMark: 'X',
      compMark: 'O',
    };
var Game = React.createClass({
  getInitialState: function(){
    return initialState;
  },
  checkArray: function(arr, id, markType){
    var id = parseInt(id);
    if(arr.indexOf(id) !== -1){
      for (var i = 0; i < arr.length; i++){
        if(arr[i] == id){
          arr[i] = markType;
        }
      }
    }
  },
  winner: function(arr, markType){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if(arr[i] === markType){
        count++;
      }
    }
    if(count === arr.length){
      win = true;
      for(var i = 0; i < 9; i++){
        document.getElementById(i.toString()).innerHTML = '';
      }
      array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      arr1 = [0, 1, 2];
      arr2 = [3, 4, 5];
      arr3 = [6, 7, 8];
      arr4 =[0, 3, 6];
      arr5 = [1, 4, 7];
      arr6 = [2, 5, 8];
      arr7 = [0, 4, 8];
      arr8 = [2, 4, 6];
    }
  },
  addToArr: function(id, markType){
    this.checkArray(arr1, id, markType);
    this.checkArray(arr2, id, markType);
    this.checkArray(arr3, id, markType);
    this.checkArray(arr4, id, markType);
    this.checkArray(arr5, id, markType);
    this.checkArray(arr6, id, markType);
    this.checkArray(arr7, id, markType);
    this.checkArray(arr8, id, markType);
    console.log(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8)
  },
  compChoice: function(){
    if(win == true){
      win = false;
      return;
    }
    var i = 0;
    while (i < array.length) {
      if(array[i] === ''){
        i++;
      }
      else{
        document.getElementById(array[i].toString()).innerHTML = this.state.compMark;
        this.addToArr(array[i], this.state.compMark);
        array[i] = '';
        this.winner(arr1, this.state.compMark);
        this.winner(arr2, this.state.compMark);
        this.winner(arr3, this.state.compMark);
        this.winner(arr4, this.state.compMark);
        this.winner(arr5, this.state.compMark);
        this.winner(arr6, this.state.compMark);
        this.winner(arr7, this.state.compMark);
        this.winner(arr8, this.state.compMark);
        break;
      }

    }
  },
  onTdClick: function(event){
    if(array[parseInt(event.target.id)] === ''){
      return;
    }
    for(var i = 0; i < array.length; i++){
      if(parseInt(event.target.id) == array[i]){
        array[i] = '';
      }
    }
    console.log(array);
    document.getElementById(event.target.id).innerHTML = this.state.humanMark;
    this.addToArr(parseInt(event.target.id), this.state.humanMark);
    this.winner(arr1, this.state.humanMark);
    this.winner(arr2, this.state.humanMark);
    this.winner(arr3, this.state.humanMark);
    this.winner(arr4, this.state.humanMark);
    this.winner(arr5, this.state.humanMark);
    this.winner(arr6, this.state.humanMark);
    this.winner(arr7, this.state.humanMark);
    this.winner(arr8, this.state.humanMark);
    this.compChoice();
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
