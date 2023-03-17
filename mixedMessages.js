// list of BA in philosophy courses
const courses = ['Ancient Philosophy', 'Medieval Philosophy', 'Early Modern Philosophy', 'Late Modern Philosophy', 'Intro to Philosophy', 'Intro to Logic', 'Intro to Ethics', 'Epistemology', 'Philosophy of Mind', 'Philosophy of Science', 'Metaphysics', 'Philosophy of Religion', 'Aesthetics', 'Philosophy of Language', 'Research Paper', 'Philosophy Seminar', 'Analytic Philosophy', 'Philosophy of Law', 'Political Philosophy'];
/**
 * 
 * @returns random course from the philosophy course list
 */
const randomCourse = () => {
    let numCourses = courses.length;
    let randomCourseIndex = Math.floor(Math.random() * numCourses);
    if (randomCourseIndex === numCourses) {
        randomCourseIndex--;
    }
    return courses[randomCourseIndex];
}
/**
 * 
 * @returns message that lists 3 courses the student will take next semester
 */
const message = () => {
    let courseOne = '';
    let courseTwo = '';
    let courseThree = '';
    do {
        courseOne = randomCourse();
        courseTwo = randomCourse();
        courseThree = randomCourse();
    } while (courseOne === courseTwo || courseTwo === courseThree || courseThree === courseOne);

    return `You will take ${courseOne}, ${courseTwo}, and ${courseThree} next semester`;
}

console.log(message());
