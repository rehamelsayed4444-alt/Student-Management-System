// Student Class
class Student {
    constructor(name, id, grades) {
        this.name = name;
        this.id = id;
        this.grades = grades;
    }

    getAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    getStatus() {
        return this.getAverage() >= 50 ? "Passed" : "Failed";
    }
}

// Create Students
const students = [
    new Student("Ahmed", 1, [80, 90, 70]),
    new Student("Mona", 2, [60, 75, 85]),
    new Student("Ali", 3, [30, 40, 45]),
    new Student("Sara", 4, [90, 95, 100])
];

// Display Students
console.log("Student Management System");

students.forEach(student => {
    console.log("Name:", student.name);
    console.log("ID:", student.id);
    console.log("Average:", student.getAverage());
    console.log("Status:", student.getStatus());
    console.log("----------------");
});

// Filter Passed Students
const passedStudents = students.filter(student => student.getAverage() >= 50);

console.log("Passed Students:", passedStudents);

// Map Student Names
const studentNames = students.map(student => student.name);

console.log("Student Names:", studentNames);

// Calculate General Average
const generalAverage = students.reduce(
    (sum, student) => sum + student.getAverage(), 0
) / students.length;

console.log("General Average:", generalAverage);
const studentsDiv = document.getElementById("students");

studentsDiv.innerHTML = students.map(student => `
    <div style="background:white; padding:15px; margin:10px; border-radius:10px;">
        <h3>${student.name}</h3>
        <p>ID: ${student.id}</p>
        <p>Average: ${student.getAverage().toFixed(2)}</p>
        <p>Status: ${student.getStatus()}</p>
    </div>
`).join("");

document.getElementById("average").innerText =
    "General Average: " + generalAverage.toFixed(2);
