import React, { Component } from 'react';

import { getAllStudents } from '../../api/StudentColl';

// DB를 초기화하는 방법?

class StudentList extends Component {
    render() {
        //console.log(getAllStudents());
        return (
            <div>
                <header>
                    <h1>Student List</h1>
                </header>
                
                <div>
                    <p>Not made yet!</p>
                </div>
            </div>
        );
    }
}

export default StudentList;