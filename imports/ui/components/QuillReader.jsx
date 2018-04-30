import React from 'react';
import ReactQuill from 'react-quill';

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