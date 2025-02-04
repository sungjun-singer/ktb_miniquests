import readlineSyncModule from "readline-sync";

// 1번 퀘스트
// {
//     // 유저로부터 단어을 입력받아 출력합니다.
//     const word = readlineSyncModule.question();
//     console.log(`나: ${word}`)
//     console.log(`앵무새 : ${word}`)
// }

// 2번 퀘스트
// {
//     let isCorrect = false;

//     const word = "열심히 배워서 최고의 개발자가 되어보자!"
//     const input_word = readlineSyncModule.question("문장 입력: ")

//     if (word === input_word) isCorrect = true

//     if(isCorrect){
//         console.log("정답입니다.")
//     }else{
//         console.log("실패입니다.")
//     }
// }


// 과제
{
    let menu = "1. 작성 2. 조회 3. 수정 4. 삭제 5. 추가 6. 종료"

    console.log(menu)

    let userSelect = readlineSyncModule.question("메뉴 번호를 선택하세요: ")
    let memoTitle = readlineSyncModule.question("메모의 제목을 작성해주세요: ")
    let memoContent = readlineSyncModule.question("메모의 내용을 작성하세요:")

    console.log(`선택한 메뉴 번호 : ${userSelect}`)
    console.log(`작성한 메모 제목 : ${memoTitle}`)
    console.log(`작성한 메모 내용 :  ${memoContent}`)
}