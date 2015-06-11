window.Foo = (function() {

  function Foo() {
    this.plusOne = function(shoe){
      return shoe +1;
    };

  this.sortArray = function(resort){
  var rest = resort.slice().sort();
     return rest;

  };


  this.hasValue = function(a, b){
    if(a.indexOf(b) >= 0 ){
        return true;
    }else{
      return false;
    }


  };


  }

  Foo.prototype.plusOne = function(a){
    return a + 1;
  };
  this.greet = function (x){
    return ("Hello, " + a + "!");
  };
  return Foo;

})();
