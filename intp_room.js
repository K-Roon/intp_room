var CHAT_FILE = "chatCountList.txt";
var ATTENDANCE_FILE = "attendance_list.txt";
var ATTENDANCE_STAT_FILE = "attendance_stats.txt";
var DATE_FILE = "last_date.txt";
var FORTUNE_FILE = "fortuneList.txt";
var QUIZ_FILE = "quizWinners.txt";
var identifierEmojiMap = {
  "🪷": "토리",
};
var foodList = ["비빔밥", "불고기", "김치찌개", "된장찌개", "순두부찌개", "갈비탕", "설렁탕", "육개장", "삼계탕", "닭볶음탕", "보쌈", "족발", "제육볶음", "고등어조림", "갈치조림", "김치볶음밥", "볶음밥", "참치김밥", "치즈김밥", "돈까스", "치즈돈까스", "우동", "냉면", "물냉면", "비빔냉면", "잔치국수", "칼국수", "쫄면", "떡볶이", "순대", "오뎅", "라면", "참깨라면", "김치라면", "짜장면", "짬뽕", "탕수육", "깐풍기", "양장피", "마라탕", "훠궈", "샤브샤브", "스시", "연어덮밥", "규동", "텐동", "가츠동", "라멘", "우나기동", "차슈라멘", "피자", "치킨", "양념치킨", "후라이드치킨", "간장치킨", "마늘치킨", "핫윙", "버팔로윙", "파스타", "토마토파스타", "크림파스타", "알리오올리오", "라자냐", "리조또", "스테이크", "함박스테이크", "샐러드", "샌드위치", "햄버거", "불고기버거", "치즈버거", "더블치즈버거", "감자튀김", "핫도그", "토스트", "오므라이스", "김말이튀김", "군만두", "고로케", "베이컨덮밥", "닭갈비", "철판볶음밥", "삼겹살", "목살구이", "돼지불백", "차돌박이", "양꼬치", "곱창전골", "막창구이", "해물파전", "부추전", "계란말이", "소세지볶음", "참치마요덮밥", "우엉조림", "버섯전골", "새우튀김", "해물찜", "회덮밥", "알밥", "쭈꾸미볶음", "낙지덮밥", "돌솥비빔밥", "도시락", "도루묵구이", "청국장", "코다리조림", "에그마요 샌드위치", "소세지 도시락", "미트볼 스파게티", "피자토스트", "치킨너겟", "옥수수버터구이", "계란볶음밥", "스팸구이", "치즈스틱", "베이컨말이", "모짜렐라치즈핫도그", "콘치즈", "감자범벅", "크림리조또", "스위트콘전", "스마일감자", "에그스크램블", "스크램블 토스트", "햄치즈토스트", "치즈오믈렛", "카레라이스", "떡갈비", "유부초밥", "치킨마요덮밥", "베이컨김치볶음밥", "누룽지탕", "베이비파스타", "플레인우동", "미니핫도그", "수제피자", "후라이드만두", "치킨까스", "어린이돈까스", "냉모밀", "치즈볶음밥", "멜론바볶음밥", "감자치즈볼", "양파링", "푸딩젤리도시락"];
var dessertList = ["초코 케이크", "치즈 케이크", "딸기 생크림 케이크", "레드벨벳 케이크", "녹차 케이크", "당근 케이크", "밀크레이프", "크렘브륄레", "티라미수", "마카롱", "휘낭시에", "마들렌", "에클레어", "슈크림", "푸딩", "젤리", "타르트", "레몬 타르트", "애플파이", "브라우니", "머핀", "초코칩 쿠키", "오레오 쿠키", "수제쿠키", "찹쌀떡", "인절미", "약과", "호떡", "붕어빵", "계란빵", "꽈배기", "와플", "아이스크림", "바닐라 아이스크림", "초코 아이스크림", "녹차 아이스크림", "젤라또", "빙수", "팥빙수", "망고빙수", "딸기빙수", "연유토스트", "허니브레드", "크로플", "팬케이크", "롤케이크", "푸딩", "콩떡", "도넛", "카라멜 푸딩", "타피오카 버블", "탕후루", "탕후루", "탕후루"];
let quotes = ["성공은 작은 노력을 반복한 결과이다. - 로버트 콜리어", "기회는 일어나는 것이 아니라 만들어내는 것이다. - 크리스 그로서", "성공으로 가는 길과 실패로 가는 길은 거의 똑같다. - 콜린 R. 데이비스", "남들보다 더 잘하려고 고민하지 마라. 지금의 나보다 잘하려고 애써라. - 윌리엄 포크너", "실패는 성공으로 가는 배움이다. - 필립 나이트", "작은 일에 최선을 다하면 큰 일을 할 수 있는 준비가 된다. - 데일 카네기", "인내는 쓰지만 그 열매는 달다. - 장 자크 루소", "도전하지 않으면 아무것도 얻지 못한다. - 윌리엄 셰익스피어", "위대한 일을 이루기 위해 우리는 꿈꾸는 능력이 필요하다. - 나폴레옹 힐", "절대 포기하지 말라. 당신이 되고 싶은 그 무엇이든 될 수 있다. - 애나일린 맥코드", "명언 찾을 시간에 과제나 더 해라 - 누군가", "명언 찾을 시간에 과학 과제를 더 하겠다 - 누군가", "실패는 곧 배움이다. 넘어졌다면 일어나라. - 넬슨 만델라", "노력 없이 성과는 없다. 노력은 배신하지 않는다. - 이나모리 가즈오", "기회는 준비된 자에게만 미소 짓는다. - 루이 파스퇴르", "가장 어두운 밤도 끝나고, 해는 떠오른다. - 빅토르 위고", "오늘 할 일을 내일로 미루지 마라. - 벤자민 프랭클린", "명언보다 중요한 건 네 할 일이다. - 현실", "명언을 모은다고 인생이 바뀌진 않아. - 자명한 진실", "명언 수집은 취미일 뿐, 인생을 바꾸진 않는다. - 냉정한 조언", "명언 읽을 시간에 물 한잔 마셔라. 건강이 더 중요하다. - 헬스봇", "명언 찾기 전에 일기나 써라. 자아 성찰이 더 낫다. - 어떤 철학자", "또 명언이냐… 진짜 생산적인 일 하나라도 해봐라. - 당신의 뇌", "명언 찾다가 하루 다 간다. 그냥 공부나 해라. - 선배의 조언", "명언 찾을 시간에 수학이나 더 해라 - 누군가", "명언 찾을 시간에 시험 공부를 더 하겠다 - 누군가"];
var fortunes = ["✨ 오늘은 평소와는 다른 길로 걸어보세요. 익숙한 길에서 벗어나면 의외의 깨달음이나 기회를 만날 수 있습니다. 우연이 필연이 되는 날이에요.", "🌈 당신의 진심이 통하는 하루가 될 것입니다. 망설이지 말고 마음속 이야기를 털어보세요. 누군가에게 큰 위로가 될 수도 있어요.", "☕ 오늘은 주변 소음보다 내면의 소리에 집중해야 할 날입니다. 복잡한 고민은 잠시 내려놓고, 나를 위한 시간을 확보해보세요.", "📚 미뤄왔던 계획을 시작하기에 최적의 타이밍이에요. 결과보다 시작하는 용기에 더 의미를 두세요. 작지만 큰 변화가 시작됩니다.", "💖 감정이 평소보다 예민해질 수 있어요. 서운함을 키우기보단 너그럽게 넘기는 자세가 더 나은 하루를 만들어줄 거예요.", "🌧️ 흐린 날씨처럼 기분도 잔잔하지만, 오후에는 반전의 기회가 찾아옵니다. 약간의 수고가 큰 성과로 이어질 수 있어요.", "🔥 오늘은 추진력이 뛰어난 날이에요. 미루고 있던 일을 시작하면 놀랄 만큼 빠르게 진전이 있을 겁니다. 머뭇거리지 마세요.", "🍀 작은 친절이 큰 행운으로 돌아올 수 있어요. 오늘 당신의 말 한마디가 누군가의 하루를 바꿀지도 모릅니다.", "🎯 오늘은 집중과 몰입에 강한 에너지가 흐릅니다. 책을 펴든, 일에 몰두하든, 성과가 보장되는 날이에요. 방해 요소는 최소화하세요.", "💸 금전운이 살짝 고개를 들고 있습니다. 무언가를 얻거나 잃을 수 있는 상황이 생긴다면, 평정심을 유지하세요.", "🎨 평소엔 눈에 들어오지 않던 아름다움을 발견할 수 있는 날입니다. 자연, 사람, 사물 — 어떤 형태든 감탄할 일이 생길 거예요.", "🧘 깊은 숨 한 번이 마음을 정리해줄 겁니다. 바쁘고 정신없는 와중에도 단 5분, 나를 위한 정적인 시간이 큰 도움이 됩니다.", "🎁 예상치 못한 선물이 도착할 수 있어요. 물질일 수도 있고, 따뜻한 말 한마디일 수도 있어요. 열린 마음으로 받아들이세요.", "👀 오늘은 사람 보는 눈이 필요한 하루입니다. 겉모습보다는 말과 행동을 관찰하세요. 중요한 판단을 하게 될 수도 있어요.", "📞 평소에 소홀했던 사람에게 연락을 해보세요. 그 사람이 오늘 하루 당신에게 꼭 필요한 말을 건넬 수도 있습니다.", "🌀 실수할 수 있습니다. 그러나 그 실수에서 배우는 것이 있다면, 오늘은 실패가 아니라 성장의 하루입니다.", "🚪 새로운 문이 열리는 시점에 서 있습니다. 망설이지 말고 발을 내딛어 보세요. 당신을 위한 문은 열려 있습니다.", "🌅 오늘 하루는 느리게 흘러가야 비로소 보이는 것들이 있습니다. 빠름보다 깊이를 추구해보는 건 어떨까요?", "🪞 타인의 시선을 의식하지 말고, 진짜 ‘나’에게 집중해 보세요. 세상이 당신을 평가하기 전, 스스로를 먼저 믿어야 해요.", "⚖️ 감정과 이성이 팽팽히 맞서는 하루입니다. 어느 한쪽에 치우치기보단 균형을 잡는 노력이 오늘의 핵심이에요."];
var quizList = [{
  question: "세상에서 가장 억울한 도형은?",
  answer: ["원통"],
  hint: "가장 억울할 때 'ㅇㅌ'하다 라고 하지요."
}, {
  question: "화장실이 둥둥 떠있으면?",
  answer: ["공중화장실"],
  hint: "ㄱㅈ화장실 이라고 하죠."
}, {
  question: "전화기가 둥둥 떠있으면?",
  answer: ["공중전화", "공중전화기"],
  hint: "이건 사회기반시설 중 하나로, 이용률이 적어도 철거하지 않습니다."
}, {
  question: "카트에 만두가 있으면 뭘까?",
  answer: ["카트만두"],
  hint: "네팔의 수도입니다."
}, {
  question: "소가 번개에 맞아 죽으면 뭘까? (5음절)",
  answer: ["우사인볼트"],
  hint: "운동선수 이름입니다."
}, {
  question: "'비가 1시간 동안 내린다'를 다른말로 뭐라고 할까? (붙여서 쓸 것)",
  answer: ["추적60분"],
  hint: "방송 프로그램 이름입니다."
}, {
  question: "어부들이 싫어하는 가수는?",
  answer: ["배철수"],
  hint: "유명 가수 이름입니다. MBC FM4U 에서 DJ도 하고 있습니다."
}, {
  question: "제상에서 제일 예쁜 풀은?",
  answer: ["뷰티풀"],
  hint: "남자들이 이걸로 드립치죠. 얼굴에 풀 묻었다고."
}, {
  question: "화상입고 하는 전화는?",
  answer: ["화상전화"],
  hint: "얼굴을 보고 전화를 하는걸 이거라고 하죠."
}, {
  question: "D가 20개씩 있으면 뭘까?",
  answer: ["스무디"],
  hint: "디가 스무개 있으면 이거죠."
}, {
  question: "소가 불에 타면?",
  answer: ["불소"],
  hint: "치아에 이걸 코팅하면 충치를 예방할 수 있다고 알려져 있습니다."
}, {
  question: "서울에서 가장 가난한 동은?",
  answer: ["일원동"],
  hint: "실제 지명 이름입니다."
}, {
  question: "(넌센스) 호주에서 쓰는 돈은?",
  answer: ["호주머니"],
  hint: "호주달러는 아닙니다. 호주가 들어가는건 맞아요."
}, {
  question: "싱가포르의 수도는?",
  answer: ["싱가포르"],
  hint: "아... 이건 정말 쉬운데..."
}, {
  question: "USA 다음은?",
  answer: ["USB"],
  hint: "범용직렬버스라고 불리우는 것입니다. 컴퓨터에 쓰이는 사각형의 이것도, C타입이라고 부르는 것도 다 이 규격입니다."
}, {
  question: "'성씨가 똑같다'를 3글자로 줄이면?",
  answer: ["성동일"],
  hint: "유명인 이름입니다."
}, {
  question: "'물속에 들어가 걷는다'를 4글자로 뭐라고 할까?",
  answer: ["입수보행"],
  hint: "군대용어로, 양 손을 주머니에 넣고 보행하는 행위를 말합니다."
}, {
  question: "바깥에서 탈모인게 들통나면? (4글자)",
  answer: ["실외탈모"],
  hint: "군대용어로, 실외에서 모자를 쓰지 않고 돌아다니는 행위를 말합니다."
}, {
  question: "혀가 거짓말할 때 쓰는 말은? (붙여서 쓸 것, 기호는 쓰지말것)",
  answer: ["전혀아닙니다"],
  hint: "극구 부정할 때 쓰는 말이기도 합니다."
}, {
  question: "화장실에서 막 나온 사람은? (4글자)",
  answer: ["일본사람", "일본인"],
  hint: "화장실에서 막 나왔다면, 볼 일을 본 사람이겠죠?"
}, {
  question: "김소월이 수능을 볼 때 수리 '가'형을 보는 이유는? (붙여서 쓸 것, 김소월 시집 참고, 7글자)",
  answer: ["나보기가역겨워", "나보기가역겨워서"],
  hint: "김소월 시집을 참고해주세요."
}, {
  question: "소가 구걸을 하면?",
  answer: ["우거지"],
  hint: "이거 맛있는데... 국밥땡기네요..."
}, {
  question: "슈퍼주니어 신동 옆에 있으면 뭐라고 할까? (3글자)",
  answer: ["신동엽"],
  hint: "SNL에 자주 나오는 유명인 이름입니다."
}, {
  question: "과자가 자기소개하면? (3글자)",
  answer: ["전과자"],
  hint: "범죄를 저지른 이력이 있는 사람"
}, {
  question: "소가 인스타를 하면?",
  answer: ["소셜네트워크"],
  hint: "인스타그램, 페이스북, X 등을 포괄적으로 이르는 말입니다. 한국어로 작성해주세요. '소'로 시작합니다."
}, {
  question: "'암소의 시대'를 4글자로 뭐라고 할까?",
  answer: ["소녀시대"],
  hint: ""
}, {
  question: "소가 공포에 떨면?",
  answer: ["소름", "소오름"],
  hint: "진짜 __돋네요."
}, {
  question: "'소가 외롭다'를 3글자로 뭐라고 할까?",
  answer: ["소외감", "소외"],
  hint: ""
}, {
  question: "소가 아플땐 무슨 약을 먹을까? (3글자)",
  answer: ["소염제"],
  hint: "진통OOO을 먹기도 하죠. 염증증상을 최소화 시켜주는 약을 이거라고 불러요."
}, {
  question: "'교통사고'를 다른 말로 뭐라고 할까? (3글자)",
  answer: ["붕어빵"],
  hint: "겨울하면 이거죠. 슈붕이던 팥붕이던 다 맛있습니다."
}, {
  question: "차가 다니는 도로에 갑작스럽게 사람이 뛰어들면?",
  answer: ["카놀라유"],
  hint: "Car가 놀라겠어유. 식용유 종류 중 하나여유."
}, {
  question: "입모양이 S자인 사람을 뭐라고 할까? (영어 대문자, 3음절)",
  answer: ["EBS"],
  hint: "한국교육방송공사의 영어 약어입니다."
}, {
  question: "소가 시끄러우면? (2글자)",
  answer: ["소란"],
  hint: "왜 이렇게 __이야!! 시끄러워 죽겠네!! (욕 아님)"
}, {
  question: "달에서 쓰는 언어는?",
  answer: ["문어"],
  hint: "달은 영어로 Moon, 그리고 한자로 語를 붙여보세요."
}, {
  question: "소가 죽으면 다이소, 그러나 죽은 소가 많으면?",
  answer: ["산소부족"],
  hint: "H2O 부족"
}, {
  question: "양이 돈을 벌어서 내는 세금은 뭘까? (5글자)",
  answer: ["양도소득세"],
  hint: "재화를 양도할 때 재화의 가치가 특정 금액을 초과할 경우 내는 세금을 말합니다."
}, {
  question: "할아버지가 등산하면?",
  answer: ["산타할아버지"],
  hint: "호호호"
}, {
  question: "'할아버지! 산에서 불이나요!'를 6글자로 줄이면?",
  answer: ["산타할아버지"],
  hint: "호호호"
}, {
  question: "쟤는 포도다! 를 3글자로 줄이면?",
  answer: ["포도당"],
  hint: "당 중의 하나로, 설탕 외 이 당을 바탕으로 달고나를 만들었다고도 합니다."
}, {
  question: "햄버거의 색깔은?",
  answer: ["버건디"],
  hint: "색깔 이름입니다."
}, {
  question: "소가 그림을 그리면?",
  answer: ["피카소"],
  hint: "소로 끝나는 유명 화가 이름입니다."
}, {
  question: "'박나래가 오이를 씻는다' 를 6글자로 줄이면?",
  answer: ["오이씻구나래"],
  hint: "메이드카페에서 외치는. 맛있어지는 주문은 '오이시쿠나래' 입니다. (오글오글)"
}, {
  question: "소는 어디에서 쉴까?",
  answer: ["휴게소", "우편함"],
  hint: "일반적으로 고속도로에 있어요. 졸음쉼터 말고 다른 휴게시설이 있죠."
}, {
  question: "돈 대신 사과를 지불하면 뭘까? (4글자)",
  answer: ["애플페이"],
  hint: "국제표준 비접촉결제인 EMV Contacless를 이용한, 가장 현대적인 Apple의 안전한 결제방식 입니다. (한국어로 입력하세요)"
}, {
  question: "물이 총을 들고 있으면?",
  answer: ["물건"],
  hint: "물총, 워터건 다 아닙니다. 물은 맞는데 총을 영어로 생각해보셔요."
}, {
  question: "세상에서 가장 쉬운 숫자는? (정말로 쉬워요) (답 입력시 숫자만 입력)",
  answer: ["190000"],
  hint: "아라비아숫자로 입력하세요."
}, {
  question: "로봇이 좋아하는 치킨 부위는?",
  answer: ["윙"],
  hint: "로봇은 윙~ 치킨~ 하고 움직이죠."
}];
var quizCongrats = ["🎉 정답입니다! 대단해요, ", "👏 정확히 맞췄어요! 잘했어요, ", "🥳 똑똑하네요! 정답이에요, ", "💯 완벽한 정답입니다! 멋져요, ", "✨ 천재 아닌가요? 정답이에요, "];
var helloEmojis = ["😊", "😄", "🙌", "👋", "✨", "😎", "🤗"];
var shameEmojis = ["😒", "🙄", "😑", "🤦", "🤷", "👎", "🥱", "👀", "🫥", "🫠"];
var attendanceList = {};
var attendanceStats = {};
var chatCount = {};
var lastDate = "";
var fortuneList = {};
// 퀴즈모드
var quizWinners = {};
var quizMode = false;
var currentQuestion = "";
var currentAnswer = "";
var usedQuizzesToday = [];
function loadData() {
  try {
    attendanceList = JSON.parse(DataBase.getDataBase(ATTENDANCE_FILE) || "{}");
    attendanceStats = JSON.parse(DataBase.getDataBase(ATTENDANCE_STAT_FILE) || "{}");
    chatCount = JSON.parse(DataBase.getDataBase(CHAT_FILE) || "{}");
    fortuneList = JSON.parse(DataBase.getDataBase(FORTUNE_FILE) || "{}");
    quizWinners = JSON.parse(DataBase.getDataBase(QUIZ_FILE) || "{}");
    lastDate = DataBase.getDataBase(DATE_FILE) || new Date().toLocaleDateString();
  } catch (e) {
    attendanceList = {};
    chatCount = {};
    fortuneList = {};
    quizWinners = {};
    lastDate = new Date().toLocaleDateString();
  }
}
function saveData() {
  try {
    DataBase.setDataBase(ATTENDANCE_FILE, JSON.stringify(attendanceList));
    DataBase.setDataBase(ATTENDANCE_STAT_FILE, JSON.stringify(attendanceStats));
    DataBase.setDataBase(CHAT_FILE, JSON.stringify(chatCount));
    DataBase.setDataBase(FORTUNE_FILE, JSON.stringify(fortuneList));
    DataBase.setDataBase(QUIZ_FILE, JSON.stringify(quizWinners));
    DataBase.setDataBase(DATE_FILE, lastDate);
  } catch (e) {
    Log.error("❌ 저장 오류: " + e);
  }
}
function resetAttendanceIfNewDay() {
  var today = new Date().toLocaleDateString();
  if (today != lastDate) {
    attendanceList = {};
    fortuneList = {};    // 운세도 하루 단위 초기화
    lastDate = today;
    saveData();
  }
}
function isQuizTime() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var current = hour * 60 + minute;

  // 00:30~02:00 (30~120분), 13:00~17:59 (780~1079분)
  return (current >= 30 && current <= 120) || (current >= 119 && current <= 9999);
}
function getUnifiedSenderName(sender) {
  for (var emoji in identifierEmojiMap) {
    if (sender.indexOf(emoji) !== -1) {
      return identifierEmojiMap[emoji];
    }
  }
  return sender;
}
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  loadData();
  resetAttendanceIfNewDay();
  if (quizMode && !isQuizTime()) {
    replier.reply("⏰ 퀴즈 가능 시간이 아닙니다. 자동으로 퀴즈를 종료합니다.\n정답은 '" + currentAnswer + "' 였습니다.");
    quizMode = false;
    currentAnswer = "";
    currentQuestion = "";
  }
  var name = getUnifiedSenderName(sender);
  if (name != "권재현") {
    if (!chatCount[name]) {
      chatCount[name] = 1;
    } else {
      chatCount[name]++;
    }
    saveData();
  }
  var today = new Date().toLocaleDateString();
  // 관리자 명령어
  if (sender == "권재현") {
    if (msg == "!출석초기화") {
      attendanceList = {};
      attendanceStats = {};
      saveData();
      replier.reply("✅ 출석 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!채팅초기화") {
      chatCount = {};
      saveData();
      replier.reply("✅ 채팅 수 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!운세초기화") {
      fortuneList = {};
      saveData();
      replier.reply("✅ 운세로 정해진 운명. 그 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!퀴즈초기화") {
      quizWinners = {};
      saveData();
      replier.reply("✅ 퀴즈 랭킹 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!전체초기화") {
      attendanceList = {};
      chatCount = {};
      fortuneList = {};
      quizWinners = {};
      lastDate = new Date().toLocaleDateString();
      saveData();
      replier.reply("✅ 전체 데이터를 초기화했어요.");
      return;
    }
  }
  if (msg == "안녕하세요") {
    var emoji = helloEmojis[Math.floor(Math.random() * helloEmojis.length)];
    replier.reply("반가워요! " + emoji);
    return;
  }
  if (msg == "ㅎㅇ" || msg == "하이" || msg == "안녕" || msg == "하이루") {
    replier.reply("이 방은 존댓말 필수입니다. 공지 확인해주세요.");
    return;
  }
  if (msg == "드럼") {
    replier.reply("두둥두둥");
    return;
  }
  if (msg == "비트박스") {
    replier.reply("북치기박치기북치기박치기박치기북치기박치기...");
    return;
  }
  if (msg == "기타") {
    replier.reply("기타등등...");
    return;
  }
  if (msg == "거문고") {
    replier.reply("똥 또롱 똥똥똥💩");
    return;
  }
  if (msg == "가야금") {
    replier.reply("똥 또롱 또로로로 똥똥똥💩");
    return;
  }
  if (msg == "피아노") {
    replier.reply("빵빵 똥똥똥똥 빵빵 따라라라");
    return;
  }
  if (msg == "출석") {
    replier.reply("\"!출석\" 을 입력해야 출석 완료!");
    return;
  }
  if (msg == ("!퀴즈")) {
    if (!isQuizTime()) {
      replier.reply("⏰ 지금은 퀴즈를 시작할 수 있는 시간이 아니에요.\n퀴즈 가능 시간: 00:30~02:00, 13:00~17:59");
      return;
    }
    if (quizMode) {
      replier.reply("이미 퀴즈가 진행 중입니다! `!정답 (정답)` 으로 맞춰보세요.");
      return;
    }
    if (usedQuizzesToday.length - 10 >= quizList.length) {
      replier.reply("📛 오늘의 퀴즈는 모두 출제되었습니다. 내일 다시 도전해주세요!");
      return;
    }
    var remaining = quizList.filter((_, i) => !usedQuizzesToday.includes(i));
    var index = Math.floor(Math.random() * remaining.length);
    var shuffled = remaining.sort(() => 0.5 - Math.random());
    var quiz = shuffled[0];
    var quizIndex = quizList.findIndex(q => q.question === quiz.question);
    usedQuizzesToday.push(quizIndex);
    currentQuestion = quiz.question;
    currentAnswer = quiz.answer;
    quizMode = true;
    replier.reply("🧠 퀴즈를 시작합니다! \n문제: " + currentQuestion + "\n\n정답은 '!정답 (답)' 형식으로 입력해주세요.\n※ 퀴즈를 그만하려면 '!종료'를 입력하세요.");
    return;
  }
  if (quizMode) {
    // !힌트
    if (msg == "!힌트") {
      var currentQuiz = quizList.find(q => {
        if (Array.isArray(q.answer)) {
          return q.answer.includes(currentAnswer[0]);
        } else {
          return q.answer === currentAnswer;
        }
      });
      if (currentQuiz && currentQuiz.hint) {
        replier.reply("💡 힌트: " + currentQuiz.hint);
      } else {
        replier.reply("❌ 이 문제에는 힌트가 없습니다.");
      }
      return;
    }
    if (msg == "!종료") {
      var answerText = Array.isArray(currentAnswer) ? currentAnswer[0] : currentAnswer;
      replier.reply("🛑 퀴즈를 종료했습니다.\n정답은 '" + answerText + "' 였습니다.");
      quizMode = false;
      currentAnswer = "";
      currentQuestion = "";
      return;
    }
    if (msg.startsWith("!정답 ")) {
      var guess = msg.substring(4).trim();
      var isCorrect = false;
      if (Array.isArray(currentAnswer)) {
        isCorrect = currentAnswer.includes(guess);
      } else {
        isCorrect = (guess === currentAnswer);
      }
      if (isCorrect) {
        var uname = getUnifiedSenderName(sender);
        if (!quizWinners[uname]) {
          quizWinners[uname] = 1;
        } else {
          quizWinners[uname]++;
        }
        saveData();
        var congratsMsg = quizCongrats[Math.floor(Math.random() * quizCongrats.length)];
        replier.reply(congratsMsg + sender + "님!! 🎊");
        quizMode = false;
        currentAnswer = "";
        currentQuestion = "";
      } else {
        replier.reply("❌ 오답입니다! 다시 시도해보세요.");
      }
      return;
    }
    if (msg.startsWith("!") && msg != "!힌트") {
      replier.reply("⚠️ 퀴즈모드가 켜졌습니다.\n퀴즈모드 작동 중에는 명령어 사용이 어렵습니다.");
      return;
    }
    return;
  }
  if (msg == "!출석") {
    var name = getUnifiedSenderName(sender);

    if (!attendanceList[today])
      attendanceList[today] = [];

    var already = attendanceList[today].some(function (e) {
      return getUnifiedSenderName(e.sender) === name;
    });

    if (!already) {
      if (name != "권재현") {
        attendanceList[today].push({ sender: sender, time: new Date() });

        // ✅ 출석 통계에 반영
        var rank = attendanceList[today].length;
        if (!attendanceStats[name]) {
          attendanceStats[name] = {
            total: 1,
            ranks: [rank]
          };
        } else {
          attendanceStats[name].total++;
          attendanceStats[name].ranks.push(rank);
        }

        saveData();
      }

      var rank = attendanceList[today].length;
      var medal = rank == 1 ? "🥇" : rank == 2 ? "🥈" : rank == 3 ? "🥉" : "";
      replier.reply(sender + "님, " + rank + "등으로 출석 완료했어요! " + medal + " 🎉");
    } else {
      replier.reply(sender + "님은 이미 출석하셨어요. 😊");
    }
    return;
  }

  // !출석랭킹 - 오늘자 등수만 출력
  if (msg == "!출석랭킹") {
    if (attendanceList[today] && attendanceList[today].length > 0) {
      var list = "";
      for (var i = 0; i < attendanceList[today].length; i++) {
        var medal = i == 0 ? "🥇" : i == 1 ? "🥈" : i == 2 ? "🥉" : "";
        list += `${i + 1}등: ${attendanceList[today][i].sender}${medal}\n`;
      }
      replier.reply("📋 오늘의 출석 랭킹\n" + list);
    } else {
      replier.reply("오늘은 아직 아무도 출석하지 않았어요. 😢");
    }
    return;
  }
  // !출석통계 - 모든 멤버의 누적 및 평균 등수
  if (msg == "!출석통계") {
    var keys = Object.keys(attendanceStats);
    if (keys.length === 0) {
      replier.reply("아직 출석한 사용자가 없습니다. 😢");
    } else {
      var list = "📊 전체 출석 통계\n";
      keys.sort((a, b) => {
        var t1 = (attendanceStats[a] && attendanceStats[a].total) || 0;
        var t2 = (attendanceStats[b] && attendanceStats[b].total) || 0;
        if (t1 !== t2) return t2 - t1;

        var r1 = (attendanceStats[a] && attendanceStats[a].ranks) || [];
        var r2 = (attendanceStats[b] && attendanceStats[b].ranks) || [];
        var avg1 = r1.length ? r1.reduce(function (x, y) { return x + y; }) / r1.length : Infinity;
        var avg2 = r2.length ? r2.reduce(function (x, y) { return x + y; }) / r2.length : Infinity;
        return avg1 - avg2;
      });
      for (var i = 0; i < keys.length; i++) {
        var uname = keys[i];
        var stats = attendanceStats[uname];
        var avg = stats.ranks.length ? (stats.ranks.reduce(function (a, b) { return a + b; }) / stats.ranks.length).toFixed(2) : "N/A";
        list += "- " + uname + ": " + stats.total + "일 출석 | 평균 등수 " + avg + "\n";
      }
      list += "상위권에 계신 분들 모두 축하합니다!";
      replier.reply(list);
    }
    return;
  }
  if (msg == "!결석" || msg == "!석출") {
    var emoji = shameEmojis[Math.floor(Math.random() * shameEmojis.length)];
    replier.reply("재미없어요 " + emoji);
    return;
  }
  if (msg === "!채팅수") {
    var count = chatCount[name] || 0;
    var res = sender + "님이 쓴 채팅 수는 " + count + "개예요. 💬";
    if (count < 20)
      res += "\n조금 더 분발해 주세요! 💪";
    replier.reply(res);
    return;
  }
  if (msg.startsWith("!채팅수 ")) {
    var targetInput = msg.substring(5).trim();
    var target = getUnifiedSenderName(targetInput);
    var count2 = chatCount[target];
    if (count2) {
      var res2 = target + "님의 누적 채팅 수는 " + count2 + "개예요. 💬";
      if (count2 < 20)
        res2 += "\n조금 더 분발해 주세요! 💪";
      replier.reply(res2);
    } else {
      replier.reply(targetInput + "님의 채팅 기록이 없어요. 💭");
    }
    return;
  }
  if (msg == "!채팅랭킹") {
    var sorted = [];
    for (var user in chatCount) {
      sorted.push([user, chatCount[user]]);
    }
    sorted.sort(function (a, b) {
      return b[1] - a[1];
    });
    sorted = sorted.slice(0, 10);
    if (sorted.length == 0) {
      replier.reply("아직 아무도 채팅한 기록이 없어요. 😢");
    } else {
      var list = "";
      for (var j = 0; j < sorted.length; j++) {
        var medal = j == 0 ? "🥇" : j == 1 ? "🥈" : j == 2 ? "🥉" : "";
        list += (j + 1) + "위: " + sorted[j][0] + " - " + sorted[j][1] + "개 " + medal + "\n";
      }
      replier.reply("💬 채팅 랭킹 TOP 10\n" + list + "랭킹에 계신 분들 축하합니다!");
    }
    return;
  }
  if (msg === "!퀴즈랭킹") {
    if (typeof quizWinners !== "object" || quizWinners === null) {
      replier.reply("⚠️ 퀴즈 정답자 데이터를 불러올 수 없습니다.");
      return;
    }

    var sorted = [];
    for (var user in quizWinners) {
      if (quizWinners.hasOwnProperty(user)) {
        sorted.push([user, quizWinners[user]]);
      }
    }

    sorted.sort(function (a, b) {
      return b[1] - a[1];
    });

    sorted = sorted.slice(0, 10);

    if (sorted.length === 0) {
      replier.reply("아직 퀴즈 정답자가 없습니다. 😢");
    } else {
      var rankMsg = "🏆 퀴즈 정답자 랭킹 TOP 10\n";
      for (var i = 0; i < sorted.length; i++) {
        var medal = "";
        if (i === 0) medal = "🥇";
        else if (i === 1) medal = "🥈";
        else if (i === 2) medal = "🥉";
        rankMsg += (i + 1) + "위: " + sorted[i][0] + " - " + sorted[i][1] + "회 " + medal + "\n";
      }
      rankMsg += "정답자 여러분 축하드립니다!";
      replier.reply(rankMsg);
    }

    return;
  }
  if (msg == "!명언") {
    replier.reply(quotes[Math.floor(Math.random() * quotes.length)]);
    return;
  }
  if (msg == "!밥" || msg == "밥" || msg == "점메추" || msg == "저메추" || msg == "메뉴추천") {
    var food = foodList[Math.floor(Math.random() * foodList.length)];
    replier.reply(sender + "님,\n오늘은 '" + food + "' 어떠세요? 🍽️");
    return;
  }
  if (msg == "!디저트" || msg == "디저트") {
    var dessert = dessertList[Math.floor(Math.random() * dessertList.length)];
    replier.reply(sender + "님,\n디저트는 '" + dessert + "' 추천드려요! 🍰");
    return;
  }
  if (msg == "!로또") {
    var nums = [];
    while (nums.length < 6) {
      var r = Math.floor(Math.random() * 45) + 1;
      if (nums.indexOf(r) == -1)
        nums.push(r);
    }
    nums.sort(function (a, b) {
      return a - b;
    });
    replier.reply("🎲 이번 주 로또 추천 번호: " + nums.join(", ") + "\n주의사항: 해당 기능은 당첨여부를 보장하지 않습니다.");
    return;
  }
  if (msg == "!운세") {
    var today = new Date().toLocaleDateString();
    var name = getUnifiedSenderName(sender);
    if (typeof fortuneList != "object")
      fortuneList = {};
    if (!fortuneList[today])
      fortuneList[today] = {};
    if (!fortuneList[today][name]) {
      var random = Math.floor(Math.random() * fortunes.length);
      fortuneList[today][name] = fortunes[random];
      saveData();
    }
    replier.reply(sender + " 님의 오늘의 운세입니다. 🔮\n\n" + fortuneList[today][name]);
    return;
  }
  if (msg == "사용법" || msg == "봇" || msg == "!") {
    replier.reply("📌 채팅봇 기능안내\n" + "1. !출석 – 오늘의 출석을 기록해요 🎉\n" +
      "2. !출석랭킹 – 오늘 출석한 사람 목록 📋\n" +
      "2-1. !출석통계 – 누적 출석일자 및 평균 등수 통계 📋\n" +
      "3. !채팅수 – 내 채팅 수 확인 💬\n" +
      "4. !채팅수 (닉네임) – 다른 사람 채팅 수 확인 👀\n" +
      "5. !채팅랭킹 – 채팅 많은 순 TOP 10 💯\n" +
      "6. !밥 – 추천 메뉴 🍽️\n" +
      "7. !디저트 – 추천 디저트 🍰\n" +
      "8. !명언 – 랜덤 명언 📝\n" +
      "9. !운세 – 오늘의 운세 보기 🔮\n" +
      "10. !로또 – 랜덤 로또 번호 🎲\n" +
      "11. !퀴즈 – 랜덤으로 나오는 넌센스 퀴즈를 맞춰보세요!\n" +
      "12. !퀴즈랭킹 – 정답을 맞힌 순 TOP 10 💯 (Beta)\n" +
      "문제 발생(무응답 등) 시 토리님에게 문의 부탁드립니다.\n" +
      "채팅봇은 안정적인 구동을 보장하지 않습니다. (Version 0.8.0)\n" +
      "약관 및 자세한 내용은 \"!주의사항\" 커멘드를 입력해 확인해주세요.");
    return;
  }
  if (msg == "!주의사항") {
    replier.reply("⚠️주의사항⚠️\n" +
      "1. 채팅봇은 원활한 구동을 보장하지 않습니다. 간혹 단시간 내에 많은 채팅이 오갈경우 1개만 응답될 수 있습니다.\n" +
      "2. 단순 닉네임 기반으로 작동하는 기능이 있으며, 닉네임을 변경 시 해당 사용자의 기록만 초기화 됩니다.\n" +
      "만약 닉네임을 자주 바꾸시는 분이시라면, 고정 닉네임 및 이모지를 설정하도록 요청해주세요.\n" +
      "3. 채팅수 및 출석 기능 등 기록형 기능들은 관련 법률에 따라 주기적으로 초기화 됩니다. 기록 방식에 따라 최장 1년까지 보존하며, 이전 기록은 삭제되거나 전체 초기화됩니다.\n" +
      "4. 해당 봇은 주기적인 점검을 진행합니다. 안정적인 사용을 위해서 단시간 동안 커멘드가 작동하지 않을 수 있습니다.\n" +
      "5. 로또 번호를 알려주는 기능은 당첨여부를 보장하지 않습니다.\n" +
      "6. 사진 및 이모티콘은 인식하지 않을 수 있습니다.\n" +
      "7. 해당 봇은 AI가 아닙니다. 정확한 답변을 요구하지 마십시오.");
    return;
  }
}
function onCreate(savedInstanceState, activity) {
  let textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}
function onStart(activity) {
}
function onResume(activity) {
}
function onPause(activity) {
}
function onStop(activity) {
}
