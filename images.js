// 랜덤 이미지

// $(document).ready(function () {
//   var usedNumbers = [];

//   var itemName = {
//     itemBg01: "2094-5",
//     itemBg02: "2097-1",
//     itemBg03: "2107-8",
//     itemBg04: "3009-5",
//     itemBg05: "3009-25",
//     itemBg06: "3035-4",
//     itemBg07: "3037-2",
//     itemBg08: "3049-1",
//     itemBg09: "3051-5",
//     itemBg010: "3051-6",
//     itemBg011: "5402-3",
//     itemBg012: "5402-4",
//     itemBg013: "5409-2",
//     itemBg014: "9022-4",
//     itemBg015: "9023-6",
//     itemBg016: "9026-3",
//   };

//   $(".itemBg").each(function () {
//     var randomNumber;

//     // 중복되지 않는 랜덤 숫자 생성 (1부터 16까지)
//     do {
//       randomNumber = Math.floor(Math.random() * 16) + 1;
//     } while (usedNumbers.includes(randomNumber)); // 이미 사용된 숫자인 경우 다시 생성

//     usedNumbers.push(randomNumber); // 사용된 숫자 배열에 추가

//     // 현재 .itemBg에 클래스 추가
//     var className = Array.prototype.slice
//       .call(this.classList)
//       .find((c) => c.startsWith("itemBg"));
//     $(this).addClass("itemBg0" + randomNumber);

//     console.log("className:", className); // 클래스 이름 확인용 로그 추가

//     // 클래스에 따른 내용 삽입
//     var contentValue = itemName[className]; // 클래스에 따른 값 가져오기
//     $(this).append("<p>" + contentValue + "</p>");

//     console.log(this);
//   });
// });
// 각 .itemBg에 대해 실행
$(".itemBg").each(function () {
  var randomNumber = Math.floor(Math.random() * 16) + 1;
  var className = "itemBg0" + randomNumber;

  var numberMapping = {
    itemBg01: "2094-5",
    itemBg02: "2097-1",
    itemBg03: "2107-8",
    itemBg04: "3009-5",
    itemBg05: "3009-25",
    itemBg06: "3035-4",
    itemBg07: "3037-2",
    itemBg08: "3049-1",
    itemBg09: "3051-5",
    itemBg010: "3051-6",
    itemBg011: "5402-3",
    itemBg012: "5402-4",
    itemBg013: "5409-2",
    itemBg014: "9022-4",
    itemBg015: "9023-6",
    itemBg016: "9026-3",
  };

  $(this).addClass(className);

  if (numberMapping[className]) {
    $(this).append("<p>" + numberMapping[className] + "</p>");
  }
});
