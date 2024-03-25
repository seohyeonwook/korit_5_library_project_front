/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputBox = css`
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0px 10px;
    height: 100%;
    width: 100%;
`;

function BookRegisterInput({ value, onChange, onKeyUp, bookRef }) {
    
    return (
        <input 
            css={inputBox}
            type="text" 
            value={value} 
            onChange={onChange} 
            onKeyUp={onKeyUp}
            ref={bookRef}
        />
    );
}

export default BookRegisterInput;