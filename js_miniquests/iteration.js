import readlineSyncModule from "readline-sync"

// 1번 퀘스트
// {
//     // 숫자 입력
//     let number = parseInt(readlineSyncModule.question("숫자입력 : "), 10)
//     if(number < 2){
//         console.log("2 이상의 숫자를 입력하세요!")
//         process.exit(0)
//     }

    
//     // 구구단 출력
//     for(let i = 1; i<=9; i++){
//         console.log(`${number} * ${i} = ${number*i}`)
//     }
// }

// 2번 퀘스트
// {
//     for(let i = 1; i<=9; i+=2){
//         let star = ""
//         let blank = ""
//         // 별의 개수를 1,3,5,7,9로 만드는 코드
//         for(let j = 1; j <=i; j++){
//             star += "*"
//         }
//         // 공백의 개수를 4,3,2,1로 만드는 코드
//         for(let k = 9; k>i; k-=2){
//             blank += " "
//         }
//         // 공백과 별을 같이 출력을 하기 위한 코드
//         console.log(blank,star)
//     }
// }

// 과제
{
    // 반복문 탈출을 위한 플래그 생성
    let isTerminate = false
    while(!isTerminate){
        // 메뉴 선택을 위한 입력을 정수로 받음
        let userSelect = parseInt(readlineSyncModule.question("메뉴 선택: "), 10)

        // 선택한 메뉴에 맞는 기능 출력
        // 종료 시 반복문 탈출
        switch(userSelect){
            case 1:
                console.log("작성")
                break;
            case 2:
                console.log("조회")
                break
            case 3:
                console.log("수정")
                break
            case 4:
                console.log("삭제")
                break
            case 5:
                console.log("추가기능");
                break
            case 6:
                console.log("종료")
                isTerminate = true
                break
            default:
                console.log("1~6까지의 숫자를 입력하세요!")
        }
    }
}