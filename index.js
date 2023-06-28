// BoardMember constructor
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  // Methods
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  
  BoardMember.prototype.approve = function() {
    return "You can do that!";
  };
  
  BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
  };
  
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  BoardMember.prototype.sayHi = function() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ", and I was trained in " + this.training + ".";
  };
// Create a new board member
var boardMember = new BoardMember("John Doe", "California", "Business Management");

// Accessing properties and methods
console.log(boardMember.name); // Output: John Doe
console.log(boardMember.homeState); // Output: California
console.log(boardMember.training); // Output: Business Management

console.log(boardMember.veto()); // Output: No, I must disagree.
console.log(boardMember.approve()); // Output: You can do that!
console.log(boardMember.doCharity()); // Output: I like to help people.
console.log(boardMember.releasePressStatement()); // Output: You will see great things from Scuber.
console.log(boardMember.sayHi()); // Output: Hi, my name is John Doe. I am from California, and I was trained in Business Management.
  