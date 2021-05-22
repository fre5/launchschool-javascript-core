/*
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description


let book1 = {
  title: "Mythos",
  author: "Stephen Fry",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}.`);
  }
}

let book2 = {
  title: "Me Talk Pretty One Day",
  author: "David Sedaris",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}.`);
  }
}

let book3 = {
  title: "Aunts aren't Gentlemen",
  author: "PG Wodehouse",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}.`);
  }
}

*/

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}. ` + `I ${this.read === true ? "have" : "haven't"} read it.`);
    },

    readBook() {
      this.read = true;
    }
  }
}

let book1 = createBook('Mythos', 'Stephen Fry', false);
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', true);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

book1.getDescription();  // "Mythos was written by Stephen Fry."
book1.readBook();
book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

console.log(book1.read);
console.log(book2.read);
console.log(book3.read);