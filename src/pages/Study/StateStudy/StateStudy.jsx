import React, { useState } from 'react';

function StateStudy() {
    // const []// 대괄호 쓰는이유는 비구조할당때문에
    const inputState = useState("");
    const inputState2 = useState("");

    console.log(inputState);// 콘솔창에 [" ", f]나옴 ""은 처음 초기값 f은 세터
    // setValue 가 호출되고 비동기로 갔다오면 상태가 변하니까 렌더링 이 된다 그럼 위에서부터 다시실행이니까 
    // set하고 값을 확인할떄는 세터 밑에하면안됨 밖에서 해야한다

    const handleTextInputOnChange = (event) => { //e는 이벤트 - 두개를 구분할때 e를 쓴다
        // console.log(event.target.name);// 대상이있다 .value를 쓰면 여기에 있는 값을 꺼내오겠다 타겟안에 onChange들어있다
        const [ value, setValue] = inputState; // 0번은 벨류 1번은 세터
        setValue(event.target.value);// 비동기라서 
        // console.log(inputState); // 이렇게 아래로 내리면 콘솔창에서 인풋에 1넣어도 안찍힌다
    }

    return (
        <div>
            <input type='text' name='inputA' onChange={handleTextInputOnChange}></input> 
            {/* 첫번쨰박스에 입력하면 콘솔창에 inputA 가 뜨고 두번째박스에 입력하면 inputB에 객체 들어간다 */}
            <input type='text' name='inputB' onChange={handleTextInputOnChange}></input> 
            {/* a와b같은 함수 쓰겠다  */}
        </div>
    );
}

export default StateStudy;