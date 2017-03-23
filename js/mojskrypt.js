if ( typeof String.prototype.repeat !== "function" ) {

   String.prototype.repeat = function(times) {
      var result = "";

      for (var i = 0; i < times; i++) {
         result += this;
      }

      return result;
   };

}


var paragraph = "kot";

console.log( paragraph.repeat(2) );
