function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    listCourses: function() {
      console.log(this.courses);
    },
    addCourse: function(object) {
      object["note"] = [];
      this.courses.push(object);
      
    },
    addNote: function(courseNumber, note) {
      this.courses.map(obj => {
        if (obj["code"] === courseNumber && !obj["note"].includes(note)) {
          obj["note"].push(note);
        }
      });
    },
    updateNote: function(courseNumber, note) {
      this.courses.map(obj => {
        if (obj["code"] === courseNumber) {
          obj["note"] = [];
          obj["note"].push(note);
        }
      });
    },
    viewNotes: function() {
      this.courses.filter(obj => obj["note"].length !== 0).forEach(obj => {
        console.log(`${obj.name}: ${obj.note.length === 1 ? obj.note.toString() : obj.note.join("; ")}`);
      });
    }

  }
}

let foo = createStudent('Foo', '1st');
foo.info();
//"Foo is a 1st year student"
foo.listCourses();
[];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
//[{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
//"Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
//"Math: Fun course; Remember to study for algebra"
//"Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
//"Math: Fun course"
//"Advanced Math: Difficult subject"
