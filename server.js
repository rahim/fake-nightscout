const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

NOT_COMPUTABLE =
`
"2020-10-26T22:08:21.000Z"  1603750101000 73  "NOT COMPUTABLE"  "share2"
"2020-10-26T22:03:21.000Z"  1603749801000 67  "NOT COMPUTABLE"  "share2"
"2020-10-26T21:48:22.000Z"  1603748902000 53  "Flat"  "share2"
"2020-10-26T21:43:21.000Z"  1603748601000 69  "Flat"  "share2"
"2020-10-26T21:38:21.000Z"  1603748301000 85  "Flat"  "share2"
"2020-10-26T21:33:22.000Z"  1603748002000 84  "FortyFiveDown" "share2"
"2020-10-26T21:28:21.000Z"  1603747701000 85  "Flat"  "share2"
"2020-10-26T21:23:21.000Z"  1603747401000 87  "Flat"  "share2"
"2020-10-26T21:18:21.000Z"  1603747101000 89  "Flat"  "share2"
"2020-10-26T21:13:21.000Z"  1603746801000 91  "Flat"  "share2"
`

app.get('/', (req, res) => {
  res.send('Fake NightScout')
})

app.get('/api/v1/entries/sgv', (req, res) => {
  res.type('txt');
  res.send(NOT_COMPUTABLE)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
