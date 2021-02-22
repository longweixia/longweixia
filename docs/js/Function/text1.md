# 手写函数(简单)

## 1.倒计时

### 1-1. 当前时间距离当前周周末的倒计时

```
// 计算当天距离当前24:00:00的时间，即当天结束的倒计时，单位为秒
getDayLat() {
			let now = new Date()
			let hour = now.getHours() // 时
			let min = now.getMinutes() // 分
			let sec = now.getSeconds() // 秒

			let h = 24 - hour // 倒计时 时
			if (min > 0 || sec > 0) {
				h -= 1
			}
			let m = 60 - min // 倒计时 分
			if (sec > 0) {
				m -= 1
			}
			if (m == 60) {
				m = 0
			}
			let s = 60 - sec // 倒计时 秒
			if (s == 60) {
				s = 0
			}

			let result = h * 3600 + m * 60 + s
			return result
		},


//倒计时--周
getDaojishiWeek() {
			let nowData = new Date()
			//获取今天的是周几
			let currentDay = nowData.getDay()
			//把currentDay为0就是周日，需要把重置数字为7
			if (currentDay == 0) {
				currentDay = 7
			}

			let times = (7 - currentDay) * 24 * 3600 + Number(this.getDayLat())
			this.timesecond = times //拿到倒计时的秒数
		},

```

获得倒计时的秒数后，我们可以使用uview的u-count-down倒计时组件
```
<u-count-down
	:show-days="true"
	:timestamp="timesecond"
	separator="zh"
	separator-size="14"
	font-size="24">
</u-count-down>
```
### 1-2. 当前时间距离当前月月末的倒计时
```
// 获取当前月的最后一天时间的毫秒数
		getlastMoutnTime() {
			var date = new Date()
			///获取当前月份
			var currentmonth = date.getMonth()
			//获取下一个月份
			var nextmonth = currentmonth + 1
			//获取下一月份的第一天
			var nextmonthfirstday = new Date(date.getFullYear(), nextmonth, 1)
			//一天的毫秒数
			var oneday = 1 * 24 * 3600 * 1000
			//下一个月的第一天减去一天时间就是当前月份的最后一天时间
			var lasttime = new Date(nextmonthfirstday - oneday).getTime()
			return lasttime
		},
//计算倒计时的秒数
		getDaojishiMouth() {
			let times = this.getlastMoutnTime() - new Date().getTime()
			this.timesecond = times / 1000
		}
```