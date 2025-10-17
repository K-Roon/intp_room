/***** 파일 상수 *****/
var CHAT_FILE = "chatCountList.txt";            // { [name]: { count: number, lastChatAt: "YYYY-MM-DD HH:mm:ss KST" } } (구버전: number)
var ATTENDANCE_FILE = "attendance_list.txt";    // { [yyyy.m.d]: [{ sender, time }] }
var ATTENDANCE_STAT_FILE = "attendance_stats.txt"; // { [name]: { total: number, ranks: number[] } }
var DATE_FILE = "last_date.txt";                // "yyyy.m.d"
var FORTUNE_FILE = "fortuneList.txt";           // { [date]: { [name]: fortune } }
var POINT_FILE = "memberPoints.txt";            // { [name]: number }  ✅ 신설: 멤버 점수 DB

/***** 고정 이모지 → 고정 닉 *****/
var identifierEmojiMap = {
  "🪷": "토리",
  "🐨": "코알",
  "🐹": "소리",
  "🐱": "쪼옥쪼옥",
  "💗": "아잉",
  "🤍": "환생",
  "🌌": "민균"
};

var foodList = ["비빔밥", "불고기", "김치찌개", "된장찌개", "순두부찌개", "갈비탕", "설렁탕", "육개장", "삼계탕", "닭볶음탕", "보쌈", "족발", "제육볶음", "고등어조림", "갈치조림", "김치볶음밥", "볶음밥", "참치김밥", "치즈김밥", "돈까스", "치즈돈까스", "우동", "냉면", "물냉면", "비빔냉면", "잔치국수", "칼국수", "쫄면", "떡볶이", "순대", "오뎅", "라면", "참깨라면", "김치라면", "짜장면", "짬뽕", "마라탕", "샤브샤브", "스시", "연어덮밥", "규동", "텐동", "가츠동", "라멘", "우나기동", "차슈라멘", "피자", "치킨", "양념치킨", "후라이드치킨", "간장치킨", "마늘치킨", "핫윙", "버팔로윙", "파스타", "토마토파스타", "크림파스타", "알리오올리오", "라자냐", "리조또", "스테이크", "함박스테이크", "샐러드", "샌드위치", "햄버거", "불고기버거", "치즈버거", "더블치즈버거", "감자튀김", "핫도그", "토스트", "오므라이스", "김말이튀김", "군만두", "고로케", "베이컨덮밥", "닭갈비", "철판볶음밥", "삼겹살", "목살구이", "돼지불백", "차돌박이", "양꼬치", "곱창전골", "막창구이", "해물파전", "부추전", "계란말이", "소세지볶음", "참치마요덮밥", "우엉조림", "버섯전골", "새우튀김", "해물찜", "회덮밥", "알밥", "쭈꾸미볶음", "낙지덮밥", "돌솥비빔밥", "도시락", "도루묵구이", "청국장", "코다리조림", "에그마요 샌드위치", "소세지 도시락", "미트볼 스파게티", "피자토스트", "치킨너겟", "옥수수버터구이", "계란볶음밥", "스팸구이", "치즈스틱", "베이컨말이", "모짜렐라치즈핫도그", "콘치즈", "감자범벅", "크림리조또", "스위트콘전", "스마일감자", "에그스크램블", "스크램블 토스트", "햄치즈토스트", "치즈오믈렛", "카레라이스", "떡갈비", "유부초밥", "치킨마요덮밥", "베이컨김치볶음밥", "누룽지탕", "베이비파스타", "플레인우동", "미니핫도그", "수제피자", "후라이드만두", "치킨까스", "어린이돈까스", "냉모밀", "치즈볶음밥", "멜론바볶음밥", "감자치즈볼", "푸딩젤리도시락"];
var dessertList = ["초코 케이크", "치즈 케이크", "딸기 생크림 케이크", "레드벨벳 케이크", "녹차 케이크", "당근 케이크", "밀크레이프", "크렘브륄레", "티라미수", "마카롱", "휘낭시에", "마들렌", "에클레어", "슈크림", "푸딩", "젤리", "타르트", "레몬 타르트", "애플파이", "브라우니", "머핀", "초코칩 쿠키", "오레오 쿠키", "수제쿠키", "찹쌀떡", "인절미", "약과", "호떡", "붕어빵", "계란빵", "꽈배기", "와플", "아이스크림", "바닐라 아이스크림", "초코 아이스크림", "녹차 아이스크림", "젤라또", "빙수", "팥빙수", "망고빙수", "딸기빙수", "연유토스트", "허니브레드", "크로플", "팬케이크", "롤케이크", "푸딩", "콩떡", "도넛", "카라멜 푸딩", "타피오카 버블", "탕후루", "탕후루", "탕후루"];
let quotes = ["성공은 작은 노력을 반복한 결과이다. - 로버트 콜리어", "기회는 일어나는 것이 아니라 만들어내는 것이다. - 크리스 그로서", "성공으로 가는 길과 실패로 가는 길은 거의 똑같다. - 콜린 R. 데이비스", "남들보다 더 잘하려고 고민하지 마라. 지금의 나보다 잘하려고 애써라. - 윌리엄 포크너", "실패는 성공으로 가는 배움이다. - 필립 나이트", "작은 일에 최선을 다하면 큰 일을 할 수 있는 준비가 된다. - 데일 카네기", "인내는 쓰지만 그 열매는 달다. - 장 자크 루소", "도전하지 않으면 아무것도 얻지 못한다. - 윌리엄 셰익스피어", "위대한 일을 이루기 위해 우리는 꿈꾸는 능력이 필요하다. - 나폴레옹 힐", "절대 포기하지 말라. 당신이 되고 싶은 그 무엇이든 될 수 있다. - 애나일린 맥코드", "명언 찾을 시간에 과제나 더 해라 - 누군가", "명언 찾을 시간에 과학 과제를 더 하겠다 - 누군가", "실패는 곧 배움이다. 넘어졌다면 일어나라. - 넬슨 만델라", "노력 없이 성과는 없다. 노력은 배신하지 않는다. - 이나모리 가즈오", "기회는 준비된 자에게만 미소 짓는다. - 루이 파스퇴르", "가장 어두운 밤도 끝나고, 해는 떠오른다. - 빅토르 위고", "오늘 할 일을 내일로 미루지 마라. - 벤자민 프랭클린", "명언보다 중요한 건 네 할 일이다. - 현실", "명언을 모은다고 인생이 바뀌진 않아. - 자명한 진실", "명언 수집은 취미일 뿐, 인생을 바꾸진 않는다. - 냉정한 조언", "명언 읽을 시간에 물 한잔 마셔라. 건강이 더 중요하다. - 헬스봇", "명언 찾기 전에 일기나 써라. 자아 성찰이 더 낫다. - 어떤 철학자", "또 명언이냐… 진짜 생산적인 일 하나라도 해봐라. - 당신의 뇌", "명언 찾다가 하루 다 간다. 그냥 공부나 해라. - 선배의 조언", "명언 찾을 시간에 수학이나 더 해라 - 누군가", "명언 찾을 시간에 시험 공부를 더 하겠다 - 누군가"];
var fortunes = [
  "🌻 작은 호기심이 큰 발견으로 이어집니다. 평소 지나치던 사소한 것에 질문을 던져보세요.",
  "🪁 오늘은 계획보다 ‘즉흥성’이 행운을 부릅니다. 즉석 제안을 한 번쯤 수락해 보세요.",
  "🔋 휴대전화 배터리처럼, 당신의 에너지도 충전이 필요합니다. 짧은 낮잠이나 산책을 권해요.",
  "🎬 오래 미뤘던 영화를 보면 뜻밖의 깨달음을 얻습니다. 엔딩 크레딧까지 놓치지 마세요.",
  "🎨 색다른 취미가 스트레스를 지워줍니다. 크레파스든 수채화든 손을 먼저 움직여 보세요.",
  "🛎️ 친절에 이자가 붙어 돌아오는 날입니다. 작은 도움이라도 먼저 건네보세요.",
  "🌤️ 아침의 맑음이 오후의 흐림을 이깁니다. 중요한 일은 오전에 처리하면 순풍이 돕습니다.",
  "🚴 느린 페달이 더 멀리 갑니다. 속도보다 지속성을 기억하면 문제 해결이 쉬워집니다.",
  "📦 정리가 곧 정답입니다. 책상이나 가방을 정돈하다 보면 복잡한 생각도 같이 정리돼요.",
  "🧩 퍼즐 한 조각이 맞춰지듯, 그동안 막혔던 일이 깔끔히 풀리는 순간이 옵니다.",
  "🌕 달이 차오르듯 자신감도 서서히 상승합니다. 과정을 즐기면 결과는 따라옵니다.",
  "💬 듣는 만큼 얻는 날입니다. 말하기보다 경청에 집중해 보세요.",
  "🏃‍♀️ 예기치 못한 ‘모든 것이 귀찮은 타이밍’이 옵니다. 짧게라도 몸을 움직여 기분 전환!",
  "📖 오래된 노트를 펼치면 과거의 아이디어가 오늘 필요해집니다. 기록은 배신하지 않아요.",
  "🏝️ 머릿속이 복잡하다면 휴양지 사진이라도 한 장 보세요. 상상만으로도 마음이 느긋해집니다.",
  "🌱 새싹을 보듯, 작게 시작한 일이 곧 큰 열매를 맺을 조짐입니다. 꾸준함을 멈추지 마세요.",
  "🕯️ 불안은 어둠이 아닌 그림자일 뿐. 불을 켜보면 생각보다 작습니다. 두려움을 직접 살펴보세요.",
  "📅 일정에 빈 칸을 남겨두면 좋은 소식이 끼어들 틈이 생깁니다. 하루를 꽉 채우지 마세요.",
  "🍉 여유가 없을수록 달콤한 간식이 필요합니다. 작은 보상이 당신을 다시 달리게 합니다.",
  "🔑 오늘은 ‘열쇠’가 당신 손에 있습니다. 문이 열릴 때까지 다른 방법을 찾지 말고 돌려보세요.",
  "⚡ 번뜩이는 아이디어가 번개처럼 내리꽂힙니다. 기록할 도구를 항상 지니세요.",
  "🪄 평범한 물건에 마법이 숨어 있습니다. 낡은 물건을 새 시선으로 바라보면 활용법이 떠올라요.",
  "🤝 협업이 혼자보다 빠를 수 있는 날. 도움을 요청하거나 제안을 받아들이세요.",
  "🫖 따뜻한 차 한 잔이 얼어붙은 대화를 녹입니다. 마실 것을 먼저 권해보세요.",
  "🧲 끌림이 있는 사람에게 연락해 보세요. 짧은 대화가 긴 파트너십이 됩니다.",
  "🚦 빨간불에 잠시 멈추는 시간, 번뜩이는 아이디어가 지나갑니다. 메모 준비!",
  "📷 순간포착이 중요합니다. 카메라 앱을 자주 켜두면 추억이 배가됩니다.",
  "🎲 모험적인 선택이 오히려 안전해집니다. 확률보단 의지를 따라가세요.",
  "🎈 마음을 가볍게 하는 유머가 필요합니다. 스스로를 웃길 만한 영상을 찾아보세요."
];
var helloEmojis = ["😊","😄","🙌","👋","✨","😎","🤗"];
var shameEmojis = ["😒","🙄","😑","🤦","🤷","👎","🥱","😱","🫥","😭"];

/***** 런타임 메모리 *****/
var attendanceList = {};
var attendanceStats = {};
var chatCount = {};     // 확장: { [name]: { count, lastChatAt } } (구버전 number와 호환)
var memberPoints = {};  // ✅ 신설: { [name]: points }
var lastDate = "";
var fortuneList = {};

/***** 공통 유틸 *****/
function toKSTString(d) {
  try {
    // KST(UTC+9) 기준 포맷: YYYY-MM-DD HH:mm:ss KST
    var tzDate = new Date(d.getTime() + (9 * 60 - d.getTimezoneOffset()) * 60000);
    var yyyy = tzDate.getUTCFullYear();
    var mm = String(tzDate.getUTCMonth() + 1).padStart(2, '0');
    var dd = String(tzDate.getUTCDate()).padStart(2, '0');
    var HH = String(tzDate.getUTCHours()).padStart(2, '0');
    var MM = String(tzDate.getUTCMinutes()).padStart(2, '0');
    var SS = String(tzDate.getUTCSeconds()).padStart(2, '0');
    return yyyy + "-" + mm + "-" + dd + " " + HH + ":" + MM + ":" + SS + " KST";
  } catch (e) {
    return new Date().toLocaleString() + " KST";
  }
}

function getTodayKey() {
  return new Date().toLocaleDateString(); // 플랫폼 기본 지역 로케일 날짜(기존 코드 유지)
}

function getUnifiedSenderName(sender) {
  for (var emoji in identifierEmojiMap) {
    if (sender.indexOf(emoji) !== -1) return identifierEmojiMap[emoji];
  }
  return sender;
}

function ensureChatRecord(name) {
  if (!chatCount[name]) {
    chatCount[name] = { count: 0, lastChatAt: null };
    return;
  }
  // 구버전 호환: 숫자만 저장되어 있던 케이스
  if (typeof chatCount[name] === "number") {
    chatCount[name] = { count: chatCount[name], lastChatAt: null };
  } else {
    // 필드 안전 보강
    if (typeof chatCount[name].count !== "number") chatCount[name].count = 0;
    if (typeof chatCount[name].lastChatAt !== "string" && chatCount[name].lastChatAt !== null) chatCount[name].lastChatAt = null;
  }
}

function addChatCountAndStamp(name) {
  ensureChatRecord(name);
  chatCount[name].count += 1;
  chatCount[name].lastChatAt = toKSTString(new Date());
}

function addPoints(name, base) {
  if (name === "권재현") return; // 제외 정책 유지
  if (!memberPoints[name]) memberPoints[name] = 0;
  var delta = base;
  if (isDoubleUpTime()) delta *= 2; // ✅ 점수 더블업 (출석/채팅 공통)
  memberPoints[name] += delta;
}

function safeReply(replier, text) {
  try { replier.reply(text); } catch (e) {}
}

/***** 데이터 로드/저장 *****/
function loadData() {
  try {
    attendanceList = JSON.parse(DataBase.getDataBase(ATTENDANCE_FILE) || "{}");
  } catch (e) { attendanceList = {}; }

  try {
    attendanceStats = JSON.parse(DataBase.getDataBase(ATTENDANCE_STAT_FILE) || "{}");
  } catch (e) { attendanceStats = {}; }

  try {
    var raw = DataBase.getDataBase(CHAT_FILE) || "{}";
    chatCount = JSON.parse(raw);
    // 구버전 호환 보정
    for (var k in chatCount) ensureChatRecord(k);
  } catch (e) { chatCount = {}; }

  try {
    fortuneList = JSON.parse(DataBase.getDataBase(FORTUNE_FILE) || "{}");
  } catch (e) { fortuneList = {}; }

  try {
    memberPoints = JSON.parse(DataBase.getDataBase(POINT_FILE) || "{}");
  } catch (e) { memberPoints = {}; }

  try {
    lastDate = DataBase.getDataBase(DATE_FILE) || getTodayKey();
  } catch (e) { lastDate = getTodayKey(); }
}

function saveData() {
  try {
    DataBase.setDataBase(ATTENDANCE_FILE, JSON.stringify(attendanceList));
    DataBase.setDataBase(ATTENDANCE_STAT_FILE, JSON.stringify(attendanceStats));
    DataBase.setDataBase(CHAT_FILE, JSON.stringify(chatCount));
    DataBase.setDataBase(FORTUNE_FILE, JSON.stringify(fortuneList));
    DataBase.setDataBase(POINT_FILE, JSON.stringify(memberPoints));
    DataBase.setDataBase(DATE_FILE, lastDate);
  } catch (e) {
    Log.error("❌ 저장 오류: " + e);
  }
}

function resetAttendanceIfNewDay() {
  var today = getTodayKey();
  if (today != lastDate) {
    attendanceList = {};
    fortuneList = {}; // 운세 하루 단위 초기화
    lastDate = today;
    saveData();
  }
}

/***** 시간 규칙 *****/
// ✅ 아침출석 시간 규칙: 평일 07:00~12:00, 주말 06:00~13:00
function isAttendanceTime() {
  var now = new Date();
  var day = now.getDay(); // 0=일, 6=토
  var isWeekend = (day === 0 || day === 6);
  var minutes = now.getHours() * 60 + now.getMinutes();
  var start = isWeekend ? 360 : 420; // 주말 06:00, 평일 07:00
  var end = isWeekend ? 780 : 720;   // 주말 13:00, 평일 12:00
  return minutes >= start && minutes <= end;
}

// ✅ 점수 더블업 시간: (기존 채팅 더블업 시간 정의 재사용)
function isDoubleUpTime() {
  var now = new Date();
  var day = now.getDay();
  var isWeekend = (day === 0 || day === 6);
  var minutes = now.getHours() * 60 + now.getMinutes();
  var ranges = isWeekend ? [[30, 360], [780, 900]] : [[30, 419], [720, 900]];
  for (var i = 0; i < ranges.length; i++) {
    var start = ranges[i][0], end = ranges[i][1];
    if (minutes >= start && minutes < end) return true;
  }
  return false;
}

/***** 출석 처리 (수동 + 자동) *****/
function hasAttendedToday(name) {
  var today = getTodayKey();
  if (!attendanceList[today]) return false;
  return attendanceList[today].some(function (e) {
    return getUnifiedSenderName(e.sender) === name;
  });
}

function pushAttendance(name, sender) {
  var today = getTodayKey();
  if (!attendanceList[today]) attendanceList[today] = [];
  attendanceList[today].push({ sender: sender, time: new Date() });
  var rank = attendanceList[today].length;

  // 출석 통계 반영
  if (!attendanceStats[name]) {
    attendanceStats[name] = { total: 1, ranks: [rank] };
  } else {
    attendanceStats[name].total++;
    attendanceStats[name].ranks.push(rank);
  }
  // 점수 +10p (더블업 시간엔 2배)
  addPoints(name, 10);

  return rank;
}

/***** 응답 메인 *****/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  loadData();
  resetAttendanceIfNewDay();

  var unifiedName = getUnifiedSenderName(sender);

  // 1) 채팅 기록/마지막 채팅시각/KST 저장 + 점수 1p (+더블업)
  if (unifiedName !== "권재현") {
    addChatCountAndStamp(unifiedName);  // count+1 & lastChatAt
    addPoints(unifiedName, 1);          // 채팅 1p (더블업 반영)
    saveData();
  }

  // 2) 자동 출석 처리 (출석 시간 내 & 아직 출석 X → 1회만 안내)
  if (isAttendanceTime() && unifiedName !== "권재현") {
    if (!hasAttendedToday(unifiedName)) {
      var rank = pushAttendance(unifiedName, sender);
      saveData();
      var medal = rank == 1 ? "🥇" : rank == 2 ? "🥈" : rank == 3 ? "🥉" : "";
      safeReply(replier, unifiedName + " 님, " + rank + "등으로 출석 완료했어요! " + medal + " 🎉");
      // 자동 출석 알림은 최초 1회만 전송됨
    }
  }

  // ====== 기존 일반 멘트들 ======
  if (msg.startsWith("🎉 환영합니다! 🎉")) {
    var emoji = helloEmojis[Math.floor(Math.random() * helloEmojis.length)];
    safeReply(replier, "안녕하세요! 바로 하트인증부터 해주시고, 부르기 쉬운 한글 닉네임으로 변경해주세요! 그리고 공지 읽어요!" + emoji);
    return;
  }
  if (msg.startsWith("보이스룸이 방금")) {
    safeReply(replier, "보이스룸이 시작되었어요! 어떤 이야기들이 오갈까요?!");
    return;
  }
  if (msg.startsWith("보이스룸 종료")) {
    safeReply(replier, "보이스룸이 종료되었습니다. 모두 수고하셨습니다!");
    return;
  }
  if (msg.startsWith("안녕하세요")) {
    var emoji2 = helloEmojis[Math.floor(Math.random() * helloEmojis.length)];
    safeReply(replier, "반가워요! " + emoji2);
    return;
  }
  if (msg == "ㅎㅇ" || msg == "ㅎㅇ요" || msg == "하이" || msg == "안녕" || msg == "하이루") {
    safeReply(replier, "이 방은 존댓말 필수입니다. 공지 확인해주세요.");
    return;
  }
  if (msg == "!안녕" || msg == "!안녕하세요" || msg == "/억지응답") {
    safeReply(replier, "(왜인지는 모르겠지만 이 메시지에 응답을 해야할 것 같다는 느낌이 든다)");
    return;
  }
  if (msg == "출석") {
    safeReply(replier, "\"!출석\" 을 입력해야 출석 완료!");
    return;
  }
  if (msg == "!생존확인" || msg == "!생존신고" || msg == "JAVA_HOME") {
    safeReply(replier, "이 메시지가 전송된다면 살아있다는 것 입니다.");
    return;
  }

  // ====== 관리자 명령 ======
  if (sender == "권재현") {
    if (msg == "!출석초기화") {
      attendanceList = {};
      attendanceStats = {};
      saveData();
      safeReply(replier, "✅ 출석 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!채팅초기화") {
      chatCount = {};
      saveData();
      safeReply(replier, "✅ 채팅 수 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!운세초기화") {
      fortuneList = {};
      saveData();
      safeReply(replier, "✅ 운세로 정해진 운명. 그 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!전체초기화") {
      attendanceList = {};
      attendanceStats = {};
      chatCount = {};
      memberPoints = {};
      fortuneList = {};
      lastDate = getTodayKey();
      saveData();
      safeReply(replier, "✅ 전체 데이터를 초기화했어요.");
      return;
    }
  }

  // ====== 수동 출석 명령 (!출석) ======
  if (msg == "!출석") {
    if (!isAttendanceTime()) {
      safeReply(replier, "⏰ 출석 가능 시간이 아닙니다.\n\n출석 가능 시간은 아래와 같습니다.\n(월~금) 07:00~12:00\n(토~일) 06:00~13:00");
      return;
    }
    if (!hasAttendedToday(unifiedName)) {
      if (unifiedName !== "권재현") {
        var r = pushAttendance(unifiedName, sender);
        saveData();
        var medal2 = r == 1 ? "🥇" : r == 2 ? "🥈" : r == 3 ? "🥉" : "";
        safeReply(replier, unifiedName + " 님, " + r + "등으로 출석 완료했어요! " + medal2 + " 🎉");
      } else {
        safeReply(replier, "관리자는 출석 집계에서 제외됩니다.");
      }
    } else {
      safeReply(replier, unifiedName + " 님은 이미 출석하셨어요. 😊"); // ✅ 이미 출석: !출석에만 안내
    }
    return;
  }

  // ====== 출석 랭킹/통계 (기존 유지) ======
  if (msg == "!출석랭킹") {
    var todayKey = getTodayKey();
    if (attendanceList[todayKey] && attendanceList[todayKey].length > 0) {
      var list = "";
      for (var i = 0; i < attendanceList[todayKey].length; i++) {
        var medal = i == 0 ? "🥇" : i == 1 ? "🥈" : i == 2 ? "🥉" : "";
        // 고정닉 표기
        var shown = getUnifiedSenderName(attendanceList[todayKey][i].sender);
        list += (i + 1) + "등: " + shown + " " + medal + "\n";
      }
      list += "랭킹에 계신 분들 모두 축하합니다!";
      safeReply(replier, "📋 오늘의 아침출석 랭킹\n" + list);
    } else {
      safeReply(replier, "오늘은 아무도 출석하지 않았어요. 😢\n다들 자고있나...?");
    }
    return;
  }

  if (msg == "!출석통계") {
    var keys = Object.keys(attendanceStats);
    if (keys.length === 0) {
      safeReply(replier, "아직 출석한 사용자가 없습니다. 😢");
    } else {
      var list = "📊 전체 출석 통계\n";
      keys.sort(function(a, b) {
        var t1 = (attendanceStats[a] && attendanceStats[a].total) || 0;
        var t2 = (attendanceStats[b] && attendanceStats[b].total) || 0;
        if (t1 !== t2) return t2 - t1;
        var r1 = (attendanceStats[a] && attendanceStats[a].ranks) || [];
        var r2 = (attendanceStats[b] && attendanceStats[b].ranks) || [];
        var avg1 = r1.length ? r1.reduce(function(x, y){ return x + y; }) / r1.length : Infinity;
        var avg2 = r2.length ? r2.reduce(function(x, y){ return x + y; }) / r2.length : Infinity;
        return avg1 - avg2;
      });
      for (var i = 0; i < keys.length; i++) {
        var uname = keys[i];
        var stats = attendanceStats[uname];
        var avg = stats.ranks.length ? (stats.ranks.reduce(function(a, b){ return a + b; }) / stats.ranks.length).toFixed(2) : "N/A";
        list += "- " + uname + ": " + stats.total + "일 출석 | 평균 등수 " + avg + "\n";
      }
      list += "상위권에 계신 분들 모두 축하합니다!";
      safeReply(replier, list);
    }
    return;
  }

  // ====== 채팅 관련 ======
  if (msg === "!채팅수") {
    ensureChatRecord(unifiedName);
    var count = chatCount[unifiedName].count || 0;
    var res = unifiedName + " 님이 쓴 채팅 수는 " + count + "개에요. 💬";
    if (count < 50) res += "\n조금 더 분발해 주세요! 💪";
    safeReply(replier, res);
    return;
  }

  if (msg.startsWith("!채팅수 ")) {
    var targetInput = msg.substring("!채팅수".length).trim();
    var target = getUnifiedSenderName(targetInput);
    if (chatCount[target] != null) {
      ensureChatRecord(target);
      var cnt = chatCount[target].count || 0;
      var res2 = target + " 님의 누적 채팅 수는 " + cnt + "개에요. 💬";
      if (cnt < 20) res2 += "\n조금 더 분발해 주세요! 💪";
      safeReply(replier, res2);
    } else {
      safeReply(replier, target + " 님의 채팅 기록이 없어요. 💭");
    }
    return;
  }

  // ✅ 채팅랭킹 → 채팅통계 (TOP10 + 마지막 채팅일시(KST) 표시, 누락 안전)
  if (msg == "!채팅통계") {
    var arr = [];
    for (var user in chatCount) {
      ensureChatRecord(user);
      arr.push([user, chatCount[user].count, chatCount[user].lastChatAt]);
    }
    arr.sort(function(a, b){ return b[1] - a[1]; });
    arr = arr.slice(0, 10);

    if (arr.length == 0) {
      safeReply(replier, "아직 아무도 채팅한 기록이 없어요. 😢");
    } else {
      var text = "💬 채팅 통계 TOP 10\n";
      for (var i = 0; i < arr.length; i++) {
        var medal = i == 0 ? "🥇" : i == 1 ? "🥈" : i == 2 ? "🥉" : "";
        var uname = arr[i][0];
        var cnt = arr[i][1];
        var last = arr[i][2] ? arr[i][2] : "기록 없음";
        text += (i + 1) + "위: " + uname + " - " + cnt + "개 " + medal + " | 마지막 채팅: " + last + "\n";
      }
      text += "활발한 대화 감사해요!";
      safeReply(replier, text);
    }
    return;
  }

  // ====== 점수 조회/랭킹 (신규) ======
  if (msg == "!점수") {
    var p = memberPoints[unifiedName] || 0;
    safeReply(replier, unifiedName + " 님의 현재 점수는 " + p + "p 입니다."
      + (isDoubleUpTime() ? "\n(지금은 점수 더블업 시간! 적립 2배 적용중 ✌️)" : ""));
    return;
  }

  if (msg.startsWith("!점수 ")) {
    var tInput = msg.substring("!점수".length).trim();
    var tname = getUnifiedSenderName(tInput);
    var pv = memberPoints[tname] || 0;
    safeReply(replier, tname + " 님의 현재 점수는 " + pv + "p 입니다.");
    return;
  }

  if (msg == "!점수랭킹") {
    var listP = [];
    for (var u in memberPoints) listP.push([u, memberPoints[u]]);
    listP.sort(function(a,b){ return b[1] - a[1]; });
    listP = listP.slice(0, 10);
    if (listP.length === 0) {
      safeReply(replier, "아직 점수 데이터가 없어요. 😢");
    } else {
      var s = "🏅 점수 랭킹 TOP 10\n";
      for (var i=0;i<listP.length;i++) {
        var md = i==0?"🥇":i==1?"🥈":i==2?"🥉":"";
        s += (i+1)+"위: "+listP[i][0]+" - "+listP[i][1]+"p "+md+"\n";
      }
      safeReply(replier, s);
    }
    return;
  }

  // ====== 기타 기능 유지 ======
  if (msg == "!명언") {
    safeReply(replier, quotes[Math.floor(Math.random() * quotes.length)]);
    return;
  }
  if (msg == "!밥" || msg == "밥" || msg == "점메추" || msg == "저메추" || msg == "메뉴추천") {
    var food = foodList[Math.floor(Math.random() * foodList.length)];
    safeReply(replier, unifiedName + " 님,\n오늘은 '" + food + "' 어떠세요? 🍽️");
    return;
  }
  if (msg == "!디저트" || msg == "디저트" || msg == "후식" || msg == "후식추천") {
    var dessert = dessertList[Math.floor(Math.random() * dessertList.length)];
    safeReply(replier, unifiedName + " 님,\n디저트는 '" + dessert + "' 추천드려요! 🍰");
    return;
  }
  if (msg == "!운세") {
    var tday = getTodayKey();
    if (typeof fortuneList != "object") fortuneList = {};
    if (!fortuneList[tday]) fortuneList[tday] = {};
    if (!fortuneList[tday][unifiedName]) {
      var random = Math.floor(Math.random() * fortunes.length);
      fortuneList[tday][unifiedName] = fortunes[random];
      saveData();
    }
    var nums = [];
    while (nums.length < 6) {
      var r = Math.floor(Math.random() * 45) + 1;
      if (nums.indexOf(r) == -1) nums.push(r);
    }
    nums.sort(function(a,b){ return a - b; });
    safeReply(replier, unifiedName + " 님의 오늘의 운세입니다. 🔮\n\n"
      + fortuneList[tday][unifiedName]
      + "\n\n🎲로또 추천 번호: " + nums.join(", ")
      + "\n주의사항: 해당 기능은 당첨여부를 보장하지 않습니다.");
    return;
  }

  if (msg == "사용법" || msg == "봇" || msg == "도움말" || msg == "!") {
    safeReply(replier,
      "📌 채팅봇 기능안내\n"
      + "1. !출석 – 오늘의 아침출석을 기록해요 (자동 출석 지원) 🎉\n"
      + "2. !출석랭킹 – 오늘 출석한 사람 목록 📋\n"
      + "3. !출석통계 – 누적 출석일자 및 평균 등수 통계 📋\n"
      + "4. !채팅수 – 내 채팅 수 확인 💬\n"
      + "5. !채팅통계 – 채팅 TOP10 + 마지막 채팅시각(KST) 📈\n"
      + "6. !점수 / !점수 (닉) – 점수 확인 🧮\n"
      + "7. !점수랭킹 – 점수 상위 TOP10 🏅\n"
      + "8. !밥 – 추천 메뉴 🍽️ / !디저트 – 추천 디저트 🍰\n"
      + "9. !명언 – 랜덤 명언 📝 / !운세 – 오늘의 운세 🔮\n"
      + "※ 점수 더블업 시간엔 출석/채팅 점수가 2배 적립됩니다.\n"
      + "문제 발생 시 토리님에게 문의 부탁드립니다. (Version 1.5)");
    return;
  }

  if (msg == "!주의사항") {
    safeReply(replier, "⚠️주의사항⚠️\n"
      + "1. 채팅봇은 원활한 구동을 보장하지 않습니다. 간혹 1초이내 다량 채팅 시 일부만 응답될 수 있습니다.\n"
      + "2. 고정 이모지/닉네임 기반으로 동작하니, 닉변이 잦다면 고정 설정을 요청해주세요.\n"
      + "3. 채팅/출석 등 기록형 기능은 관련 법률에 따라 주기적으로 초기화되며, 최대 1년 보존 후 삭제될 수 있습니다.\n"
      + "4. 주기적 점검으로 잠시 기능이 중단될 수 있습니다.\n"
      + "5. 로또 번호는 당첨을 보장하지 않습니다.\n"
      + "6. 사진/이모티콘은 인식하지 않을 수 있습니다.\n"
      + "7. 해당 봇은 AI가 아닙니다. 정확한 답변을 요구하지 마십시오.");
    return;
  }

  if (msg == "!브리핑") {
    safeReply(replier, "매일 아침에 제공되는 AI기반 브리핑 서비스 입니다.\n❗️참고사항❗️"
      + "기상상황은 예측에서 벗어날 수 있습니다.\n"
      + "기상관측위치 기준은 각 시•도청 혹은 전지역 기온/날씨의 평균입니다.\n"
      + "(단, 경기도 북부는 의정부에 위치한 경기도청북부청사 기준이며, 경기도 남부는 수원에 위치한 경기도청 기준)\n"
      + "해당 브리핑에는 다음 모델을 사용했습니다: Apple Intelligence(온디바이스/비공개 클라우드), ChatGPT 4o/5\n"
      + "AI 정보는 오류/누락이 있을 수 있으며, 특정 방/사용자의 공식 입장이 아닙니다.");
    return;
  }

  if (msg == "!결석" || msg == "!석출" || msg == "석출" || msg == "!노잼") {
    var emoji3 = shameEmojis[Math.floor(Math.random() * shameEmojis.length)];
    safeReply(replier, "재미없어요 " + emoji3);
    return;
  }

  // 가벼운 확률 응답
  var shouldReply = Math.random() < 0.5;
  if (shouldReply) {
    if (msg === "ㅋ") { safeReply(replier, "ㅋ‍‍"); return; }
    if (msg === "ㅎ") { safeReply(replier, "ㅎ‍‍"); return; }
  }
}

/***** 안드로이드 라이프사이클 (기존 유지) *****/
function onCreate(savedInstanceState, activity) {
  let textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}
function onStart(activity) {}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}