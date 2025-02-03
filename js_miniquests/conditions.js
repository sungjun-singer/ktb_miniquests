"use strict"

// 1번 퀘스트
/*
샌드위치 만드는 방법
1. 식빵 1개를 준비하여 유리그릇에 올려둔다.
2. 잼과 우유를 냉장고에서 꺼낸다.
3. 수저통에서 숟가락을 꺼낸다
4. 잼의 뚜껑을 열고 안의 면이 테이블의 위로가게 둔다.
5. 숟가락을 들고 숟가락으로 잼을 꽉채워서 푼다.
6. 잼을 푼 숟가락을 식빵의 하얀면에 골고루 펴 바른다. 숟가락은 잼의 뚜껑에 올려둔다.
7. 잼이 발라진 식빵면을 위로 가게 접시에 올려두고 반으로 접는다.
8. 우유 뚜껑을 열고 선반에서 컵을 가져와 우유를 컵의 절반량 따른다.
9. 우유 뚜껑을 닫고 잼 뚜껑위에 올려져있는 숟가락을 싱크대에 놓고 잼의 뚜껑을 닫는다
10. 잼과 우유를 냉장고에 넣는다.
*/

// 2번 퀘스트
{
    const hour = 21
    {
        // if 구문
        if(hour >= 7 && hour <= 9){
            console.log("아침 식사 시간")
        }
        else if(hour >= 12 && hour <= 14){
            console.log("점심 시간")
        }
        else if(hour >= 18 && hour <= 20){
            console.log("저녁 식사 시간")
        }
        else{
            console.log("식사 금지")
        }
    }

    // switch구문
    {
        switch(hour){
            case 7:
            case 8:
            case 9:
                console.log("아침 식사 시간")
                break
            case 12:
            case 13:
            case 14:
                console.log("점심 시간")
                break
            case 18:
            case 19:
            case 20:
                console.log("저녁 식사 시간")
                break
            default:
                console.log("식사 금지")
        }
    }

}

// 3번 퀘스트
{
    const op = "("

    switch(op){
        case '+':
            console.log("더하기")
            break;
        case '-':
            console.log("빼기");
            break
        case '*':
            console.log("곱하기")
            break;
        case '/':
            console.log("나누기")
            break;
        default:
            console.log("연산 기호가 아님")
    }   
}


// 과제
{
    const userSelect = 1
    const menu = "1. 작성 2. 조회 3. 수정 4. 삭제 5. 추가 6. 종료"

    console.log(menu)

    switch(userSelect){
        case 1:
            console.log("작성")
            break;
        case 2:
            console.log("조회")
            break;
        case 3:
            console.log("수정")
            break;
        case 4:
            console.log("삭제")
            break;
        case 5:
            console.log("추가기능")
            break;
        case 6:
            console.log("종료")
            break;
        default:
            console.log("1~6까지의 숫자를 입력하세요")
        }
    
}