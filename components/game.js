var React = require("react");
var Table = require("./table.js");
var initialState = {
      humanMark: 'X',
      compMark: 'O',
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      arr1: [0, 1, 2],
      arr2: [3, 4, 5],
      arr3: [6, 7, 8],
      arr4: [0, 3, 6],
      arr5: [1, 4, 7],
      arr6: [2, 5, 8],
      arr7: [0, 4, 8],
      arr8: [2, 4, 6]
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
  addToArr: function(id, markType){
    this.checkArray(this.state.arr1, id, markType);
    this.checkArray(this.state.arr2, id, markType);
    this.checkArray(this.state.arr3, id, markType);
    this.checkArray(this.state.arr4, id, markType);
    this.checkArray(this.state.arr5, id, markType);
    this.checkArray(this.state.arr6, id, markType);
    this.checkArray(this.state.arr7, id, markType);
    this.checkArray(this.state.arr8, id, markType);
    console.log(this.state.arr1, this.state.arr2, this.state.arr3, this.state.arr4, this.state.arr5, this.state.arr6, this.state.arr7, this.state.arr8)
  },
  compChoice: function(){
    var i = 0;
    while (i < this.state.array.length) {
      if(this.state.array[i] === ''){
        i++;
      }
      else{
        document.getElementById(this.state.array[i].toString()).innerHTML = this.state.compMark;
        this.addToArr(this.state.array[i], this.state.compMark);
        this.state.array[i] = '';
        break;
      }
    }
  },
  onTdClick: function(event){
    if(this.state.array[parseInt(event.target.id)] === ''){
      return;
    }
    for(var i = 0; i < this.state.array.length; i++){
      if(parseInt(event.target.id) == this.state.array[i]){
        this.state.array[i] = '';
      }
    }
    console.log(this.state.array);
    document.getElementById(event.target.id).innerHTML = this.state.humanMark;
    this.addToArr(parseInt(event.target.id), this.state.humanMark);
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
