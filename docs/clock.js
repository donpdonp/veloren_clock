var epoch = new Date("2022-04-02T15:58:05")

function veloren_minutes(now) {
  var diff_sec = (now - epoch)/1000
  var one_ingame_day_in_minutes = 30
  var one_ingame_day_in_seconds = one_ingame_day_in_minutes * 60
  var one_ingame_hour_in_seconds = one_ingame_day_in_seconds / 24
  var one_ingame_minute_in_seconds = one_ingame_hour_in_seconds / 60
  return Math.floor(diff_sec / one_ingame_minute_in_seconds)
}
