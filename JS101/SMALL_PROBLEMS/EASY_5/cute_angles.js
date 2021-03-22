dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);           // 359°00'00"
dms(400);          // 40°00'00"
dms(-40);          // 320°00'00"
dms(-420);         // 300°00'00"

function dms(degree) {
  if (degree < 0) {
    degree = 360 + degree % 360;
  }
  const MINUTE_PER_HOUR = 60;
  const SECONDS_PER_MINUTE = 60;
  let resultDegree = parseInt(degree, 10);
  let minutes = (degree - resultDegree) * MINUTE_PER_HOUR;
  let minutes_round = parseInt(minutes, 10);
  let minutes_format = minutes_round.toString().length < 2 ? '0' + minutes_round : minutes_round;
  let seconds = (minutes - minutes_round) * SECONDS_PER_MINUTE;
  let seconds_round = parseInt(seconds, 10);
  let seconds_format = seconds_round.toString().length < 2 ? '0' + seconds_round : seconds_round;
  console.log(`${resultDegree}°${minutes_format}'${seconds_format}`);
}