let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this); //second argument with parameter this for map, give the function the object as its execution context
  },
};

console.log(franchise.allMovies());