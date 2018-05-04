import React from 'react';
import ReactQuill from 'react-quill';

// Quill의 내용 (html이나 delta 형식)을 보여주는 Component

// 조만간은 안 쓸 듯 합니다.

const QuillReader = (props) => {
    return (
        <div>
            <ReactQuill
                readOnly={false}
                value={props.contents}
                modules={{toolbar: false}}
            />
        </div>
    );
}

export default QuillReader;