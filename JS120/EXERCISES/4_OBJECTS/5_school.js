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

let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}
let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}



let school = {
    students: [],
    addStudent(student) {
      if (!['1st', '2nd', '3rd', '4th', '5th'].includes(student.year)) {
        student.year = "Invalid Year";
      }
      this.students.push(student);
    },
    enrollStudent(studentName, subject, code) {
      this.students.find(student => student.name === studentName)
        .courses.push({"name":name, "code": code});
    },
    addGrade(studentName, subject, grade) {
      this.students.find(student => student.name === studentName)
        .courses.find(course => course.name === subject).grade = grade;
    },
    getReportCard(student) {
      let studentObj = this.students.find(st => st.name === student.name);      
      for (let course in studentObj.courses) {
        let courseName = studentObj.courses[course];
        console.log(`${courseName.name}: ${courseName.grade === undefined ? 'In progress' : courseName.grade}`);
      }
    },
    courseReport(subject) {
      let clause = this.students.filter(obj => obj.courses.filter(obj => obj.name === subject));
      if (clause[0].courses.filter(obj => obj.name === subject)[0].grade === undefined) {
        console.log(undefined);
        return;
      }
      console.log(`=${subject} Grades=`);
      let total = 0;
      let count = 0;
      this.students.forEach(student => {
        let subjectGrade = student.courses.find(course => course.name === subject);
        if (subjectGrade !== undefined) {
          console.log(`${student.name}: ${subjectGrade.grade}`);
          total += subjectGrade.grade;
          count += 1;
        }
      });
      console.log("---");
      console.log(`Course Average: ${total/count}`);
      
    }
}

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);


school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');




