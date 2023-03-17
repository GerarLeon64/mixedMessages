const courses = ['Ancient Philosophy', 'Medieval Philosophy', 'Early Modern Philosophy', 'Late Modern Philosophy', 'Intro to Philosophy', 'Intro to Logic', 'Intro to Ethics', 'Epistemology', 'Philosophy of Mind', 'Philosophy of Science', 'Metaphysics', 'Philosophy of Religion', 'Aesthetics', 'Philosophy of Language', 'Research Paper', 'Philosophy Seminar', 'Analytic Philosophy', 'Philosophy of Law', 'Political Philosophy'];
const randomCourse = () => {
    let numCourses = courses.length;
    let randomCourseIndex = Math.floor(Math.random() * numCourses);
    if (randomCourseIndex === numCourses) {
        randomCourseIndex--;
    }
    return courses[randomCourseIndex];
}

console.log('You will be taking ' + randomCourse() + ' next semester');

