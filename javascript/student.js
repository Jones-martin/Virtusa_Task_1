class Student {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Grade: ${this.grade}`;
    }

    updateGrade(newGrade) {
        this.grade = newGrade;
    }
}

const student1 = new Student(101, "Alice", "A");
console.log(student1.getDetails());
student1.updateGrade("A+");
console.log(student1.getDetails());
