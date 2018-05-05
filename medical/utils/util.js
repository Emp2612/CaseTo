const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const week = date.getDay()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  let weekday = 0
  if(week == 0) {
    weekday = '一'
  } else if (week == 1) {
    weekday = '二'
  } else if (week == 2) {
    weekday = '三'
  } else if (week == 3) {
    weekday = '四'
  } else if (week == 4) {
    weekday = '五'
  } else if (week == 5) {
    weekday = '六'
  } else if (week == 6) {
    weekday = '日'
  }
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    week: weekday,
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    date: [year, month, day,].map(formatNumber).join('-')
  }
  return [year, month, day,].map(formatNumber).join('-')
}
// + ' ' + [hour, minute, second].map(formatNumber).join(':')
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
