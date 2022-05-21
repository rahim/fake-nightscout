const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// They're not obvious, but the tab characters inside these strings must be
// preserved else the responses won't be parsed successfully.
function example() {
  twoMinutesAgo = new Date(Date.now() - 2*60*1000)
  sevenMinutesAgo = new Date(Date.now() - 7*60*1000)
  response =
`
"${twoMinutesAgo.toISOString()}"	${twoMinutesAgo.getTime()}	137	"Flat"	"share2"
"${sevenMinutesAgo.toISOString()}"	${sevenMinutesAgo.getTime()}	139	"Flat"	"share2"
`.trim()
  return response
}

STATUS_JSON = `{"status":"ok","name":"nightscout","version":"14.2.5","serverTime":"2022-05-21T11:33:10.989Z","serverTimeEpoch":1653132790989,"apiEnabled":true,"careportalEnabled":true,"boluscalcEnabled":false,"settings":{"units":"mmol","timeFormat":24,"dayStart":7,"dayEnd":21,"nightMode":false,"editMode":true,"showRawbg":"always","customTitle":"Hugo","theme":"colors","alarmUrgentHigh":true,"alarmUrgentHighMins":[30,60,90,120],"alarmHigh":true,"alarmHighMins":[30,60,90,120],"alarmLow":true,"alarmLowMins":[15,30,45,60],"alarmUrgentLow":true,"alarmUrgentLowMins":[15,30,45],"alarmUrgentMins":[30,60,90,120],"alarmWarnMins":[30,60,90,120],"alarmTimeagoWarn":true,"alarmTimeagoWarnMins":"15","alarmTimeagoUrgent":true,"alarmTimeagoUrgentMins":"30","alarmPumpBatteryLow":false,"language":"en","scaleY":"log","showPlugins":"dbsize delta direction upbat rawbg","showForecast":"ar2","focusHours":3,"heartbeat":60,"baseURL":"","authDefaultRoles":"readable","thresholds":{"bgHigh":260,"bgTargetTop":180,"bgTargetBottom":80,"bgLow":55},"insecureUseHttp":false,"secureHstsHeader":true,"secureHstsHeaderIncludeSubdomains":false,"secureHstsHeaderPreload":false,"secureCsp":false,"deNormalizeDates":false,"showClockDelta":false,"showClockLastTime":false,"frameUrl1":"","frameUrl2":"","frameUrl3":"","frameUrl4":"","frameUrl5":"","frameUrl6":"","frameUrl7":"","frameUrl8":"","frameName1":"","frameName2":"","frameName3":"","frameName4":"","frameName5":"","frameName6":"","frameName7":"","frameName8":"","authFailDelay":5000,"adminNotifiesEnabled":true,"DEFAULT_FEATURES":["bgnow","delta","direction","timeago","devicestatus","upbat","errorcodes","profile","bolus","dbsize","runtimestate","basal","careportal"],"alarmTypes":["simple","predict"],"enable":["bridge","alexa","treatmentnotify","bgnow","delta","direction","timeago","devicestatus","upbat","errorcodes","profile","bolus","dbsize","runtimestate","basal","careportal","simplealarms","ar2"]},"extendedSettings":{"devicestatus":{"advanced":true,"days":1}},"authorized":null,"runtimeState":"loaded"}`

app.get('/', (req, res) => {
  res.send('Fake NightScout')
})

app.get('/api/v1/status.json', (req, res) => {
  res.type('json');
  res.send(STATUS_JSON)
})

app.get('/api/v1/entries/sgv', (req, res) => {
  res.type('txt');
  res.send(example())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
