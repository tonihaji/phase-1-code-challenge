function studentGradeGenerator(student, grade) {
    student = prompt("Enter your name: ");
    grade = prompt("Enter your grade: ");
    if (grade >= 79 && grade <= 100) {
        console.log(`${student} graded A`)
    }
    else if (grade >= 60 && grade < 79) {
        console.log(`${student} graded B`)
    }
    else if (grade >= 49 && grade <= 59) {
        console.log(`${student} graded C`)
    }
    else if (grade >= 40 && grade < 49) {
        console.log(`${student} graded  D`)
    }
    else if (grade >= 0 && grade < 40) {
        console.log(`${student} graded E`)
    }
}