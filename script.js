const fs = require('fs')
// 1 - What floor does Santa end up on
// ( -> should go UP 1 floor
// ) -> should go DOWN 1 floor

function question1() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa-time')
    const directions = data.toString()
    const directionsArray = directions.split('')
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === '(') {
        return (acc += 1)
      } else if (currentValue === ')') {
        return (acc -= 1)
      }
    }, 0)
    console.timeEnd('santa-time')
    console.log('floor', answer)
  })
}

question1()

// 2 - When does Santa first enter the basement
function question2() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa-time')
    const directions = data.toString()
    const directionsArray = directions.split('')
    let accumulator = 0
    let counter = 0
    const answer = directionsArray.some((currentValue) => {
      if (currentValue === '(') {
        accumulator += 1
      } else if (currentValue === ')') {
        accumulator -= 1
      }
      counter++
      return accumulator < 0
    })
    console.timeEnd('santa-time')
    console.log('basement entered at: ', counter)
  })
}

question2()

// const file = fs.readFileSync('./hello.txt')
// console.log('Sync', file.toString())

// Append
// fs.appendFile('./hello.txt', ' This is so cool!', (err) => {
//   if (err) {
//     console.log(err)
//   }
// })

// Write
// fs.writeFile('bye.txt', 'sad to see you go', (err) => {
//   if (err) {
//     console.log(err)
//   }
// })

// // Delete
// fs.unlink('./bye.txt', (err) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('Inception')
// })
