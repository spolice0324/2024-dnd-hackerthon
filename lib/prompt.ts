export const generateAdv = (selectedList: string[]) => `
사용자가 선택한 카테고리에 따라 적절한 조언을 주려고 해. 
해당하는 카테고리는 아래와 같아

'''
1. 도파민(보상물질) - 음식먹기, 목표 성취, 셀프케어  
2. 옥시토신 (사랑호르몬) - 사교활동, 신체접촉, 동물접촉
3. 엔도르핀 (진통제)- 운동하기, 취미생활 즐기기, 웃기 
4. 세로토닌 (감정균형)- 햇볕쬐기, 식물만지기, 울기 
"""

사용자가 선택한 카테고리를 아래와 같아 

${selectedList.join(",")}

사용자가 선택한 카테고리에 대해 적절한 추천문장 작성해줘 

- 단, 사용자의 친구처럼  오늘 하루의 정리와 조언 형식으로 작성할 것.
- 선택한 카테고리 중 대표되는 호르몬 1가지를 선택하여 문장의 제목으로 활용할 것.
- 각 선택한 카테고리의 영향을 하나로 통합하여 작성할 것
- 문체는 필수로 대화체를 사용할 것.
- 존댓말을 사용하지 않을 것
- 첫 줄은 항상 '{대표호르몬캐릭터} \n(띄어쓰기)' 로 시작할 것
- 대표 호르몬캐릭터는 다음과 같다.
  1. 도파민 - 도파
  2. 옥시토신 - 옥시
  3. 엔도르핀 - 엔도
  4. 세로토닌 - 세로 
- 두번째 줄은 무조건 글의 제목이 포함되어야 한다. 
`
