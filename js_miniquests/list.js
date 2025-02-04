import readlineSyncModule from "readline-sync"

// 1번 퀘스트
// {
//     // 제공 코드
//     const numbers = [1, 2, 3, 4, 5];

//     // 퀘스트 답안 작성
//     let sum = 0;
//     for(let x of numbers){
//         sum += x;
//         console.log(`현재 합계 : ${sum} (${x}를 더함)`)
//     }
//     console.log(`최종 합계: ${sum}`)
// }

// 2번 퀘스트
// {
//     // 제공 코드
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     let sum = 0;
//     // 퀘스트 답안 작성
//     numbers.filter((v) => v%2 === 0).forEach((e) => {
//         sum += e;
//         console.log(`짝수 발견: ${e}`)
//     })
//     console.log(`짝수 합계: ${sum}`)
// }

// 과제
{
    // 반복문을 종료하기 위한 플래그
    let isTerminate = false
    
    // 메모 제목과 내용을 한번에 관리하기 위함
    const memo = [
        {title : "메모 제목1", content : "메모 내용1"},
        {title : "메모 제목2", content : "메모 내용2"},
        {title : "메모 제목3", content : "메모 내용3"},
    ]

    // 종료 전까지 무한 반복문    
    while(!isTerminate){
        // 선택할 메뉴 출력
        let menu = "1. 작성 2. 조회 3. 수정 4. 삭제 5. 추가기능 6. 종료"
        console.log(menu)

        // 메뉴 선택을 위한 입력을 정수로 받음
        let userSelect = parseInt(readlineSyncModule.question("메뉴 선택(정수로 입력): "), 10)

        // 선택한 메뉴에 맞는 기능 출력
        // 종료 시 반복문 탈출
        switch(userSelect){
            // 메모 작성 후 배열에 추가
            case 1:
                console.log("작성!!")
                let createTitle = readlineSyncModule.question("메모의 제목을 입력하세요: ")
                let createContent = readlineSyncModule.question("메모의 내용을 입력하세요: ");
                
                memo.push({title : createTitle, content : createContent})

                break;
            // 메모 제목조회 후 제목 입력후 내용까지 상세 조회
            case 2:
                console.log("조회!!")
                console.log("메모 제목들")
                console.log("=========================")
                for(let element of memo){
                    console.log(element.title)
                }
                console.log("=========================")
                let selectedTitle = readlineSyncModule.question("자세히 보고 싶은 제목을 입력하세요: ");
                memo.filter((v) => v.title == selectedTitle).forEach((e) => {
                    console.log(`선택한 제목 : ${e.title}`)
                    console.log(`선택한 내용 : ${e.content}`)
                })
                break
            // 수정할 메모의 인덱스 입력 후 메모 제목, 내용 입력 후 수정
            case 3:
                console.log("수정!!")
                let updateIndex = parseInt(readlineSyncModule.question("수정할 메모의 인덱스를 입력하세요: "), 10);
                let new_memoTitle = readlineSyncModule.question("수정할 메모의 제목을 입력하세요: ");
                let new_memoContent = readlineSyncModule.question("수정할 메모의 제목을 입력하세요: ");
                // 메모 새로 입력받아
                const new_memo = {title : new_memoTitle, content : new_memoContent}
                
                // 기존 메모 덮어쓰기로 수정 구현
                memo.splice(updateIndex, 1, new_memo)

                console.log("수정이 완료되었습니다!")
                console.log(memo)
                break
            // 수정할 메모의 번호 입력후 삭제
            case 4:
                console.log("삭제!!")
                let deletedIndex = parseInt(readlineSyncModule.question("삭제할 메모의 인덱스를 입력하세요: "), 10);
                memo.splice(deletedIndex, 1)
                console.log("삭제가 완료되었습니다!")
                console.log(memo)
                break
            case 5:
                console.log("추가기능!! 은 없습니다 ㅎㅎ");
                break
            case 6:
                console.log("종료!!")
                isTerminate = true
                break
            default:
                console.log("1~6까지의 숫자를 입력하세요!")
        }
    }
}