const express = require('express')
const collection = require('./mongo')
const cors = require('cors')
const app = express()
const router = require('./docs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const accountSid = 'ACa7a5f46f69695499e034e20fa2ecc410'
const authToken = '381f7a1eedf055ec30b1929de96af7ae'
const client = require('twilio')(accountSid, authToken)
require('dotenv').config()
const cron = require('node-cron')
app.use('/', cors(), router)

app.post('/', async (req, res) => {
  const { email, password } = req.body

  try {
    const check = await collection.findOne({ email: email })
    const check2 = await collection.findOne({ password: password })

    if (check && check2) {
      res.json('exist')
    } else {
      res.json('notexist')
    }
  } catch (e) {
    res.json('fail')
  }
})

app.post('/signup', async (req, res) => {
  const { email, password, name } = req.body
  const inter = []
  const al = []
  const data = {
    name: name,
    email: email,
    password: password,
    interests: inter,
    already: al,
  }

  try {
    const check = await collection.findOne({ email: email })

    if (check) {
      res.json('exist')
    } else {
      res.json('notexist')
      await collection.insertMany([data])
    }
  } catch (e) {
    res.json('fail')
  }
})

app.post('/interests', async (req, res) => {
  const inter = req.body.selectedCheckboxes
  const email = req.body.email
  const le = Object.keys(inter).length
  const arr = []
  for (let i = 0; i < le; i++) {
    arr.push(inter[i])
  }
  try {
    // const check=await collection.findOne({mail:mail})
    await collection.updateOne({ email: email }, { interests: [] })
    await collection.updateOne(
      { email: email },
      { $push: { interests: { $each: arr } } }
    )
  } catch (e) {
    console.log(e)
  }
  console.log('done')
})
app.post('/rdata', async (req, res) => {
  console.log(req.body)

  const body = req.body
  const arr = body.arr.split(' ')
  const mess = arr[0]
  const time = arr[1].split(':')

  const weekday = Array(7)
  weekday['Monday'] = 1
  weekday['Tuesday'] = 2
  weekday['Wednesday'] = 3
  weekday['Thursday'] = 4
  weekday['Friday'] = 5
  weekday['Saturday'] = 6
  weekday['Sunday'] = 0

  // console.log(weekday["Sunday"]);
  // res.json("Done");

  for (let i = 2; i < arr.length; i++) {
    cron.schedule(`${time[1]} ${time[0]} * * ${weekday[arr[i]]}`, () => {
      console.log(mess)
      client.messages
        .create({
          body: mess,
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+917620677425',
        })
        .then((message) => console.log(message.sid))
    })
  }
})

app.listen(8000, () => {
  console.log('port connected')
})
