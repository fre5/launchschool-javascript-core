let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map((number) => this.name + ' ' + number
    ); //the use of arrow function give this function the object as its execution context
  },
};

console.log(franchise.allMovies());

franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this)); //second argument with parameter this for map, give the function the object as its execution context
  },
};

console.log(franchise.allMovies());