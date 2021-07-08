
let ancestor = {
  ancestors() {
    let arr = [];
    let current = this;
    let parent;

    while (true) {    
      parent = Object.getPrototypeOf(current);
      if (parent === null) break;
      current = parent;
      if (current.name === undefined) {
        current.name = 'Object.prototype';
      }
      arr.push(current.name);      
    }
    console.log(arr);
  }
}

/* LS solution

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);

  if (Object.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }
}

// name property added to make objects easier to identify
let foo = {name: 'foo'};


*/

// name property added to make objects easier to identify
let foo = {name: 'foo'};

Object.assign(foo, ancestor);

let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';



qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']

