
// ===== 파일 상수 =====
var CHAT_FILE = "chatCountList.txt";
var ATTENDANCE_FILE = "attendance_list.txt";
var ATTENDANCE_STAT_FILE = "attendance_stats.txt";
var DATE_FILE = "last_date.txt";
var FORTUNE_FILE = "fortuneList.txt";
// ✅ 신규: 점수/최근채팅 DB
var SCORE_FILE = "member_scores.txt";          // { [name]: number }
var LAST_CHAT_FILE = "last_chat_times.txt";    // { [name]: ISOString }

// ===== 고정 이모지 → 고정 닉네임 맵 =====
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
var fortunes = ["🌻 작은 호기심이 큰 발견으로 이어집니다. 평소 지나치던 사소한 것에 질문을 던져보세요.", "🪁 오늘은 계획보다 ‘즉흥성’이 행운을 부릅니다. 즉석 제안을 한 번쯤 수락해 보세요.", "🔋 휴대전화 배터리처럼, 당신의 에너지도 충전이 필요합니다. 짧은 낮잠이나 산책을 권해요.", "🎬 오래 미뤘던 영화를 보면 뜻밖의 깨달음을 얻습니다. 엔딩 크레딧까지 놓치지 마세요.", "🎨 색다른 취미가 스트레스를 지워줍니다. 크레파스든 수채화든 손을 먼저 움직여 보세요.", "🛎️ 친절에 이자가 붙어 돌아오는 날입니다. 작은 도움이라도 먼저 건네보세요.", "🌤️ 아침의 맑음이 오후의 흐림을 이깁니다. 중요한 일은 오전에 처리하면 순풍이 돕습니다.", "🚴 느린 페달이 더 멀리 갑니다. 속도보다 지속성을 기억하면 문제 해결이 쉬워집니다.", "📦 정리가 곧 정답입니다. 책상이나 가방을 정돈하다 보면 복잡한 생각도 같이 정리돼요.", "🧩 퍼즐 한 조각이 맞춰지듯, 그동안 막혔던 일이 깔끔히 풀리는 순간이 옵니다.", "🌕 달이 차오르듯 자신감도 서서히 상승합니다. 과정을 즐기면 결과는 따라옵니다.", "💬 듣는 만큼 얻는 날입니다. 말하기보다 경청에 집중해 보세요.", "🏃‍♀️ 예기치 못한 ‘모든 것이 귀찮은 타이밍’이 옵니다. 짧게라도 몸을 움직여 기분 전환!", "📖 오래된 노트를 펼치면 과거의 아이디어가 오늘 필요해집니다. 기록은 배신하지 않아요.", "🏝️ 머릿속이 복잡하다면 휴양지 사진이라도 한 장 보세요. 상상만으로도 마음이 느긋해집니다.", "🌱 새싹을 보듯, 작게 시작한 일이 곧 큰 열매를 맺을 조짐입니다. 꾸준함을 멈추지 마세요.", "🕯️ 불안은 어둠이 아닌 그림자일 뿐. 불을 켜보면 생각보다 작습니다. 두려움을 직접 살펴보세요.", "📅 일정에 빈 칸을 남겨두면 좋은 소식이 끼어들 틈이 생깁니다. 하루를 꽉 채우지 마세요.", "🍉 여유가 없을수록 달콤한 간식이 필요합니다. 작은 보상이 당신을 다시 달리게 합니다.", "🔑 오늘은 ‘열쇠’가 당신 손에 있습니다. 문이 열릴 때까지 다른 방법을 찾지 말고 돌려보세요.", "⚡ 번뜩이는 아이디어가 번개처럼 내리꽂힙니다. 기록할 도구를 항상 지니세요.", "🪄 평범한 물건에 마법이 숨어 있습니다. 낡은 물건을 새 시선으로 바라보면 활용법이 떠올라요.", "🤝 협업이 혼자보다 빠를 수 있는 날. 도움을 요청하거나 제안을 받아들이세요.", "🫖 따뜻한 차 한 잔이 얼어붙은 대화를 녹입니다. 마실 것을 먼저 권해보세요.", "🧲 끌림이 있는 사람에게 연락해 보세요. 짧은 대화가 긴 파트너십이 됩니다.", "🚦 빨간불에 잠시 멈추는 시간, 번뜩이는 아이디어가 지나갑니다. 메모 준비!", "📷 순간포착이 중요합니다. 카메라 앱을 자주 켜두면 추억이 배가됩니다.", "🎲 모험적인 선택이 오히려 안전해집니다. 확률보단 의지를 따라가세요.", "🎈 마음을 가볍게 하는 유머가 필요합니다. 스스로를 웃길 만한 영상을 찾아보세요."];
var helloEmojis = ["😊", "😄", "🙌", "👋", "✨", "😎", "🤗"];
var shameEmojis = ["😒", "🙄", "😑", "🤦", "🤷", "👎", "🥱", "😱", "🫥", "😭"];

// ===== 이모지 모음 =====
var helloEmojis = ["😊", "😄", "🙌", "👋", "✨", "😎", "🤗"];
var shameEmojis = ["😒", "🙄", "😑", "🤦", "🤷", "👎", "🥱", "😱", "🫥", "😭"];

// ===== 런타임 메모리 =====
var attendanceList = {};
var attendanceStats = {};
var chatCount = {};
var lastDate = "";
var fortuneList = {};
// 신규
var memberScores = {};      // 점수
var lastChatTimes = {};     // 최근 채팅 시각

/******** 공용 유틸 & 저장소 I/O ********/
function safeParse(json, fallback) {
  try { return JSON.parse(json || ""); } catch (e) { return fallback; }
}

function loadData() {
  try {
    attendanceList = safeParse(DataBase.getDataBase(ATTENDANCE_FILE), {});
    attendanceStats = safeParse(DataBase.getDataBase(ATTENDANCE_STAT_FILE), {});
    chatCount = safeParse(DataBase.getDataBase(CHAT_FILE), {});
    fortuneList = safeParse(DataBase.getDataBase(FORTUNE_FILE), {});
    memberScores = safeParse(DataBase.getDataBase(SCORE_FILE), {});
    lastChatTimes = safeParse(DataBase.getDataBase(LAST_CHAT_FILE), {});
    lastDate = DataBase.getDataBase(DATE_FILE) || new Date().toLocaleDateString();
  } catch (e) {
    attendanceList = {};
    attendanceStats = {};
    chatCount = {};
    fortuneList = {};
    memberScores = {};
    lastChatTimes = {};
    lastDate = new Date().toLocaleDateString();
  }
}

function saveData() {
  try {
    DataBase.setDataBase(ATTENDANCE_FILE, JSON.stringify(attendanceList));
    DataBase.setDataBase(ATTENDANCE_STAT_FILE, JSON.stringify(attendanceStats));
    DataBase.setDataBase(CHAT_FILE, JSON.stringify(chatCount));
    DataBase.setDataBase(FORTUNE_FILE, JSON.stringify(fortuneList));
    DataBase.setDataBase(SCORE_FILE, JSON.stringify(memberScores));
    DataBase.setDataBase(LAST_CHAT_FILE, JSON.stringify(lastChatTimes));
    DataBase.setDataBase(DATE_FILE, lastDate);
  } catch (e) {
    Log.error("❌ 저장 오류: " + e);
  }
}

function resetAttendanceIfNewDay() {
  var today = new Date().toLocaleDateString();
  if (today != lastDate) {
    attendanceList = {};
    fortuneList = {}; // 하루 단위 초기화
    lastDate = today;
    saveData();
  }
}

// ✅ 출석 시간 규칙: 평일 07:00~12:00, 주말 06:00~13:00
function isAttendanceTime() {
  var now = new Date();
  var day = now.getDay();  // 0=일, 6=토
  var isWeekend = (day === 0 || day === 6);
  var minutes = now.getHours() * 60 + now.getMinutes();
  var start = isWeekend ? 360 : 420;  // 주말 06:00, 평일 07:00
  var end = isWeekend ? 780 : 720;    // 주말 13:00, 평일 12:00
  return minutes >= start && minutes <= end;
}

// ✅ 더블업 시간: 기존 로직 유지(단, 이제 “점수”에 적용)
function isDoubleUpTime() {
  var now = new Date();
  var day = now.getDay(); // 0=일, 6=토
  var isWeekend = (day === 0 || day === 6);
  var minutes = now.getHours() * 60 + now.getMinutes();
  // [start, end) 분 단위 범위
  var ranges = isWeekend ? [[30, 360], [780, 900]] : [[30, 419], [720, 900]];
  for (var i = 0; i < ranges.length; i++) {
    var start = ranges[i][0], end = ranges[i][1];
    if (minutes >= start && minutes < end) return true;
  }
  return false;
}

// 고정 이모지 → 고정 닉네임
function getUnifiedSenderName(sender) {
  for (var emoji in identifierEmojiMap) {
    if (sender.indexOf(emoji) !== -1) return identifierEmojiMap[emoji];
  }
  return sender;
}

// ====== 점수 적립 헬퍼 ======
function addScore(name, basePoint) {
  if (!memberScores[name]) memberScores[name] = 0;
  var point = basePoint;
  if (isDoubleUpTime()) point *= 2;           // ✅ 더블업은 점수에만 적용
  memberScores[name] += point;
}

// ====== 자동 출석 처리(출석시간 내 첫 채팅 시) ======
// 반환값: 이번 메시지 처리 중 '출석 완료 알림'을 보냈다면 true, 아니면 false
function ensureAutoAttendance(name, sender, replier) {
  var today = new Date().toLocaleDateString();
  if (!isAttendanceTime()) return false; // 출석 시간 외에는 자동 출석 X
  if (!attendanceList[today]) attendanceList[today] = [];

  // 이미 출석했는지(통일 닉네임 기준) 검사
  var already = attendanceList[today].some(function (e) {
    return getUnifiedSenderName(e.sender) === name;
  });
  if (already) return false; // 이미 출석 완료(자동 알림 중복 방지)

  // 기록자 제외 규칙(예: 운영자 제외)
  if (name === "권재현") return false;

  // 출석 기록
  attendanceList[today].push({ sender: sender, time: new Date() });

  // 출석 통계 업데이트
  var rank = attendanceList[today].length;
  if (!attendanceStats[name]) {
    attendanceStats[name] = { total: 1, ranks: [rank] };
  } else {
    attendanceStats[name].total++;
    attendanceStats[name].ranks.push(rank);
  }

  // ✅ 출석 점수 +10 (더블업 적용)
  addScore(name, 10);

  saveData();

  // 자동 출석 완료 알림(1회)
  var medal = rank == 1 ? "🥇" : rank == 2 ? "🥈" : rank == 3 ? "🥉" : "";
  replier.reply(name + " 님, " + rank + "등으로 출석 완료했어요! " + medal + " 🎉");

  return true; // 이번 메시지에서 알림을 이미 보냈다!
}

/******** 메인 진입점 ********/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  loadData();
  resetAttendanceIfNewDay();

  var unifiedName = getUnifiedSenderName(sender);
  var shouldReply = Math.random() < 0.5;

  // 이번 메시지 처리 중 자동 출석 알림을 보냈는지 추적
  var autoAttendanceNotified = false;

  // ===== 채팅 카운트/최근 채팅/점수(채팅) =====
  if (unifiedName != "권재현") {
    if (!chatCount[unifiedName]) chatCount[unifiedName] = 0;
    chatCount[unifiedName] += 1;                     // 채팅 수는 항상 +1

    // 최근 채팅 시각 저장 (ISOString)
    lastChatTimes[unifiedName] = new Date().toISOString();

    // 채팅 점수: 기본 1p, 더블업 시간에는 2p
    addScore(unifiedName, 1);

    // 출석시간 내 첫 채팅이면 자동 출석 처리(알림 1회)
    autoAttendanceNotified = ensureAutoAttendance(unifiedName, sender, replier) || false;

    saveData();
  }

  // ===== 각종 고정 응답 =====
  if (msg.startsWith("🎉 환영합니다! 🎉")) {
    var emoji1 = helloEmojis[Math.floor(Math.random() * helloEmojis.length)];
    replier.reply("안녕하세요! 바로 하트인증부터 해주시고, 부르기 쉬운 한글 닉네임으로 변경해주세요! 그리고 공지 읽어요!" + emoji1);
    return;
  }
  if (msg.startsWith("보이스룸이 방금")) { replier.reply("보이스룸이 시작되었어요! 어떤 이야기들이 오갈까요?!"); return; }
  if (msg.startsWith("보이스룸 종료")) { replier.reply("보이스룸이 종료되었습니다. 모두 수고하셨습니다!"); return; }

  if (msg.startsWith("안녕하세요")) {
    var emoji2 = helloEmojis[Math.floor(Math.random() * helloEmojis.length)];
    replier.reply("반가워요! " + emoji2);
    return;
  }
  if (msg == "ㅎㅇ" || msg == "ㅎㅇ요" || msg == "하이" || msg == "안녕" || msg == "하이루") {
    replier.reply("이 방은 존댓말 필수입니다. 공지 확인해주세요.");
    return;
  }
  if (msg == "!안녕" || msg == "!안녕하세요" || msg == "/억지응답") {
    replier.reply("(왜인지는 모르겠지만 이 메시지에 응답을 해야할 것 같다는 느낌이 든다)");
    return;
  }
  if (msg == "출석") { replier.reply("\"!출석\" 을 입력해야 출석 완료!"); return; }
  if (msg == "!생존확인" || msg == "!생존신고" || msg == "JAVA_HOME") { replier.reply("이 메시지가 전송된다면 살아있다는 것 입니다."); return; }

  // ===== 운영자 전용 초기화 =====
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
      lastChatTimes = {};
      saveData();
      replier.reply("✅ 채팅 수/최근채팅 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!운세초기화") {
      fortuneList = {};
      saveData();
      replier.reply("✅ 운세로 정해진 운명. 그 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!점수초기화") {
      memberScores = {};
      saveData();
      replier.reply("✅ 점수 데이터를 초기화했어요.");
      return;
    }
    if (msg == "!전체초기화") {
      attendanceList = {};
      attendanceStats = {};
      chatCount = {};
      fortuneList = {};
      memberScores = {};
      lastChatTimes = {};
      lastDate = new Date().toLocaleDateString();
      saveData();
      replier.reply("✅ 전체 데이터를 초기화했어요.");
      return;
    }
  }

  // ===== 출석 커맨드 (수동 확인) =====
  if (msg == "!출석") {
    var today = new Date().toLocaleDateString();

    // 이번 메시지에서 이미 자동 출석 완료 안내를 보냈다면, 추가 응답을 막는다.
    if (autoAttendanceNotified) {
      // 아무 것도 하지 않고 종료 (중복 답장 방지)
      return;
    }

    if (!isAttendanceTime()) {
      replier.reply("⏰ 출석 가능 시간이 아닙니다.\n\n출석 가능 시간은 아래와 같습니다.\n(월~금) 07:00~12:00\n(토~일) 06:00~13:00");
      return;
    }
    if (!attendanceList[today]) attendanceList[today] = [];

    var already = attendanceList[today].some(function (e) {
      return getUnifiedSenderName(e.sender) === unifiedName;
    });

    if (!already) {
      if (unifiedName != "권재현") {
        attendanceList[today].push({ sender: sender, time: new Date() });
        var rank = attendanceList[today].length;
        if (!attendanceStats[unifiedName]) {
          attendanceStats[unifiedName] = { total: 1, ranks: [rank] };
        } else {
          attendanceStats[unifiedName].total++;
          attendanceStats[unifiedName].ranks.push(rank);
        }
        addScore(unifiedName, 10);
        saveData();
      }
      var r = attendanceList[today].length;
      var medal = r == 1 ? "🥇" : r == 2 ? "🥈" : r == 3 ? "🥉" : "";
      replier.reply(unifiedName + " 님, " + r + "등으로 출석 완료했어요! " + medal + " 🎉");
    } else {
      // 이미 출석한 경우엔 !출석 입력 시 안내 1회만
      replier.reply(unifiedName + " 님은 이미 출석하셨어요. 😊");
    }
    return;
  }


  // ===== 출석 랭킹/통계 (그대로 유지, 단 표시명은 고정닉) =====
  if (msg == "!출석랭킹") {
    var today2 = new Date().toLocaleDateString();
    if (attendanceList[today2] && attendanceList[today2].length > 0) {
      var list = "";
      for (var i = 0; i < attendanceList[today2].length; i++) {
        var medal = i == 0 ? "🥇" : i == 1 ? "🥈" : i == 2 ? "🥉" : "";
        var fixedName = getUnifiedSenderName(attendanceList[today2][i].sender);
        list += (i + 1) + "등: " + fixedName + " " + medal + "\n";
      }
      list += "랭킹에 계신 분들 모두 축하합니다!";
      replier.reply("📋 오늘의 아침출석 랭킹\n" + list);
    } else {
      replier.reply("오늘은 아무도 출석하지 않았어요. 😢\n다들 자고있나...?");
    }
    return;
  }

  if (msg == "!출석통계") {
    var keys = Object.keys(attendanceStats);
    if (keys.length === 0) {
      replier.reply("아직 출석한 사용자가 없습니다. 😢");
    } else {
      var list = "📊 전체 출석 통계\n";
      keys.sort(function (a, b) {
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

  // ===== 채팅 관련: 개인 조회 & 통계 =====
  if (msg === "!채팅수") {
    var count = chatCount[unifiedName] || 0;
    // 고정 닉네임으로 표기
    var res = unifiedName + " 님이 쓴 채팅 수는 " + count + "개에요. 💬";
    if (count < 50) res += "\n조금 더 분발해 주세요! 💪";
    replier.reply(res);
    return;
  }

  if (msg.startsWith("!채팅수 ")) {
    var targetInput = msg.substring("!채팅수 ".length).trim();
    var target = getUnifiedSenderName(targetInput);
    var count2 = chatCount[target] || 0;
    var res2 = target + " 님의 누적 채팅 수는 " + count2 + "개에요. 💬";
    if (count2 < 20) res2 += "\n조금 더 분발해 주세요! 💪";
    replier.reply(res2);
    return;
  }

  // ✅ 채팅랭킹 → 채팅통계: 상위 10명 + 각자의 마지막 채팅 일시(없어도 에러 X)
  if (msg == "!채팅통계") {
    var entries = [];
    for (var user in chatCount) {
      entries.push([user, chatCount[user]]);
    }
    // 아무도 없을 때 처리
    if (entries.length === 0) {
      replier.reply("아직 채팅 기록이 없어요. 😢");
      return;
    }

    // 채팅 수 내림차순, 동률이면 이름 오름차순
    entries.sort(function (a, b) {
      if (b[1] !== a[1]) return b[1] - a[1];
      return (a[0] > b[0]) ? 1 : (a[0] < b[0]) ? -1 : 0;
    });

    // 페이지 사이즈(한 번에 출력할 인원 수) — 필요시 조절
    var PAGE_SIZE = 40;

    var total = entries.length;
    var pages = Math.ceil(total / PAGE_SIZE);

    for (var p = 0; p < pages; p++) {
      var start = p * PAGE_SIZE;
      var end = Math.min(start + PAGE_SIZE, total);
      var chunk = entries.slice(start, end);

      var header = "💬 채팅 통계 (" + total + "명)\n" +
        "범례: [순위] 닉네임 - 채팅수 | 마지막 채팅일시\n";
      var body = "";

      for (var i = 0; i < chunk.length; i++) {
        var globalRank = start + i + 1;
        var uname = chunk[i][0];
        var cnt = chunk[i][1];

        // 마지막 채팅일시 (없으면 '기록없음')
        var last = lastChatTimes[uname];
        var lastText = "기록없음";
        if (last) {
          try {
            var d = new Date(last);
            lastText = d.toLocaleString();
          } catch (e) {
            lastText = "기록없음";
          }
        }

        // 상위 3위 메달 아이콘(전체 순위 기준)
        var medal = globalRank == 1 ? "🥇" : globalRank == 2 ? "🥈" : globalRank == 3 ? "🥉" : "";
        body += "[" + globalRank + "위] " + uname + " - " + cnt + "개 " + medal + " | 마지막: " + lastText + "\n";
      }

      var footer = (pages > 1) ? ("(" + (p + 1) + "/" + pages + " 페이지)") : "";
      replier.reply(header + body + footer);
    }
    return;
  }
  // ===== 점수 조회/랭킹 (편의 커맨드 추가) =====
  if (msg == "!점수") {
    var sc = memberScores[unifiedName] || 0;
    replier.reply(unifiedName + " 님의 누적 점수는 " + sc + "p 입니다." + (isDoubleUpTime() ? "\n(지금은 점수 더블업 시간!)" : ""));
    return;
  }
  if (msg.startsWith("!점수 ")) {
    var who = getUnifiedSenderName(msg.substring("!점수 ".length).trim());
    var sc2 = memberScores[who] || 0;
    replier.reply(who + " 님의 누적 점수는 " + sc2 + "p 입니다.");
    return;
  }
  if (msg == "!점수랭킹") {
    var items = [];
    for (var u in memberScores) items.push([u, memberScores[u]]);
    items.sort(function (a, b) { return (b[1] || 0) - (a[1] || 0); });
    items = items.slice(0, 10);
    if (items.length == 0) {
      replier.reply("아직 점수 기록이 없어요. 😢");
    } else {
      var txt = "🏆 점수 랭킹 TOP 10\n";
      for (var i = 0; i < items.length; i++) {
        var m = i == 0 ? "🥇" : i == 1 ? "🥈" : i == 2 ? "🥉" : "";
        txt += (i + 1) + "위: " + items[i][0] + " - " + (items[i][1] || 0) + "p " + m + "\n";
      }
      replier.reply(txt);
    }
    return;
  }

  // ===== 기타 기능들 =====
  if (msg == "!명언") { replier.reply(quotes[Math.floor(Math.random() * quotes.length)]); return; }

  if (msg == "!밥" || msg == "밥" || msg == "점메추" || msg == "저메추" || msg == "메뉴추천") {
    var food = foodList[Math.floor(Math.random() * foodList.length)];
    replier.reply(unifiedName + " 님,\n오늘은 '" + food + "' 어떠세요? 🍽️");
    return;
  }
  if (msg == "!디저트" || msg == "디저트" || msg == "후식" || msg == "후식추천") {
    var dessert = dessertList[Math.floor(Math.random() * dessertList.length)];
    replier.reply(unifiedName + " 님,\n디저트는 '" + dessert + "' 추천드려요! 🍰");
    return;
  }

  if (msg == "!운세") {
    var today = new Date().toLocaleDateString();
    if (typeof fortuneList != "object") fortuneList = {};
    if (!fortuneList[today]) fortuneList[today] = {};
    if (!fortuneList[today][unifiedName]) {
      var random = Math.floor(Math.random() * fortunes.length);
      fortuneList[today][unifiedName] = fortunes[random];
      saveData();
    }
    var nums = [];
    while (nums.length < 6) {
      var r = Math.floor(Math.random() * 45) + 1;
      if (nums.indexOf(r) == -1) nums.push(r);
    }
    nums.sort(function (a, b) { return a - b; });
    replier.reply(unifiedName + " 님의 오늘의 운세입니다. 🔮\n\n" + fortuneList[today][unifiedName] + "\n\n🎲로또 추천 번호: " + nums.join(", ") + "\n주의사항: 해당 기능은 당첨여부를 보장하지 않습니다.");
    return;
  }

  if (msg == "사용법" || msg == "봇" || msg == "도움말" || msg == "!") {
    replier.reply(
      "📌 채팅봇 기능안내\n"
      + "1. !출석 – 오늘의 아침출석을 기록해요(자동 출석 지원) 🎉\n"
      + "2. !출석랭킹 – 오늘 출석한 사람 목록 📋\n"
      + "3. !출석통계 – 누적 출석일자 및 평균 등수 통계 📋\n"
      + "4. !채팅수 – 내 채팅 수 확인 💬\n"
      + "5. !채팅통계 – 채팅 상위 10명 + 마지막 채팅일시 📈\n"
      + "6. !점수 / !점수 (닉네임) – 점수 확인 🪙\n"
      + "7. !점수랭킹 – 점수 상위 10명 🏆\n"
      + "8. !밥 – 추천 메뉴 🍽️\n"
      + "9. !디저트 – 추천 디저트 🍰\n"
      + "10. !명언 – 랜덤 명언 📝\n"
      + "11. !운세 – 오늘의 운세 + 로또 보기 🔮\n"
      + "※ 기록은 고정이모지 보유 시 해당 ‘고정 닉네임’으로 표기됩니다.\n"
      + "문제 발생(무응답 등) 시 토리님에게 문의 부탁드립니다.\n"
      + "채팅봇은 안정적인 구동을 보장하지 않습니다. (Version 2.0)\n"
      + "약관 및 자세한 내용은 \"!주의사항\" 커맨드를 입력해 확인해주세요."
    );
    return;
  }

  if (msg == "!주의사항") {
    replier.reply("⚠️주의사항⚠️\n"
      + "1. 채팅봇은 원활한 구동을 보장하지 않습니다. 간혹 1초 이내에 많은 채팅이 오갈 경우 일부만 응답될 수 있습니다.\n"
      + "2. 기록은 닉네임(또는 고정 이모지 기반 고정 닉네임)으로 집계됩니다. 닉네임 변경 시 기존 기록과 분리될 수 있습니다.\n"
      + "3. 기록형 기능들은 관련 법률에 따라 주기적으로 초기화됩니다. 방식에 따라 최장 1년까지 보존될 수 있습니다.\n"
      + "4. 주기적 점검이 있을 수 있습니다. 이 기간 동안 일부 커맨드가 동작하지 않을 수 있습니다.\n"
      + "5. 로또 번호 기능은 당첨을 보장하지 않습니다.\n"
      + "6. 사진 및 이모티콘은 인식하지 않을 수 있습니다.\n"
      + "7. 해당 봇은 AI가 아닙니다. 정확한 답변을 요구하지 마십시오."
    );
    return;
  }

  if (msg == "!브리핑") {
    replier.reply("매일 아침에 제공되는 AI기반 브리핑 서비스 입니다.\n❗️참고사항❗️"
      + "기상상황은 예측에서 벗어날 수 있습니다.\n"
      + "기상관측위치 기준은 각 시•도청 혹은 전지역 기온/날씨의 평균입니다.\n"
      + "(단, 경기도 북부는 의정부에 위치한 경기도청북부청사 기준이며, 경기도 남부는 수원에 위치한 경기도청 기준)\n"
      + "해당 브리핑에는 아래와 같은 인공지능 모델을 사용하였습니다.\n"
      + "• Apple Intelligence 온디바이스\n"
      + "• Apple Intelligence 비공개 클라우드 컴퓨팅\n"
      + "• ChatGPT 4o 및 5\n"
      + "AI는 실수•잘못된 정보•누락된 정보가 내포되어 있을 수 있으며, 사용자에 따라 불쾌감을 유발할 수도 있습니다.\n"
      + "브리핑의 내용은 특정 방이나 특정 사용자의 공식 입장이 아닙니다."
    );
    return;
  }

  if (msg == "!결석" || msg == "!석출" || msg == "석출" || msg == "!노잼") {
    var emoji = shameEmojis[Math.floor(Math.random() * shameEmojis.length)];
    replier.reply("재미없어요 " + emoji);
    return;
  }

  // 약간의 잡담 대응
  if (shouldReply) {
    if (msg === "ㅋ") { replier.reply("ㅋ‍‍"); return; }
    if (msg === "ㅎ") { replier.reply("ㅎ‍‍"); return; }
  }
}

/******** 안드로이드 생명주기 (필요시) ********/
function onCreate(savedInstanceState, activity) {
  let textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}
function onStart(activity) { }
function onResume(activity) { }
function onPause(activity) { }
function onStop(activity) { }