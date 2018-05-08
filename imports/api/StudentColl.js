import { Mongo } from 'meteor/mongo';

// { stuId, located: { grade, class, number }, name }

const studentColl = new Mongo.Collection('students');

function getGi(stuId) {
    // 인자 검증 필요
    const inYear = stuId / 1000;
    const gi = inYear + 12;
    return gi;
}

function getNumber(stu) {
    // 인자 검증 필요
    // const stu = studentColl.findOne({ stuId });
    return stu.grade * 1000 + stu.class * 100 + stu.number;
}

function getAllStudents() {
    const students = studentColl.find().fetch().map( stu => {
        const name = stu.name;
        const number = getNumber(stu);
        return { name, number };
    });
    return students;
}

export default studentColl;
export { getGi, getNumber, getAllStudents };
