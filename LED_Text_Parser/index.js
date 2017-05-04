'use strict'
// grab all necessary DOM elements for manipulation
const container = document.getElementById('container')
  ,     display = document.getElementById('display')
  ,   textInput = document.getElementById('input')
  ,  textOutput = document.getElementById('output')
  ,      button = document.getElementById('button')
  ,      matrix = []
  ,    testWord = 'h'

/******************** HELPER FUNCTIONS **************************/

// switch "LED" div's className on or off
const switchOnOrOff = (led) => {
  if(led.className === 'led off') {
    led.className = 'led'
  }
  else {
    led.className = 'led off'
  }
}

const createLetterBox = (id, classAssignment = 'letterBox') => {
  let box = document.createElement('div')
  box.className = classAssignment
  box.setAttribute('id', id)

  return box
}

const populateLetterBoxWithLEDs = (index) => {
  let lines = []
  for (let i = 0; i < 7; i++) {
    let ledDivs = []
    for (let j = 0; j < 5; j++) {
      let led = document.createElement('div')
      // pre es6 function used for contextual `this`
      led.onclick = function () { switchOnOrOff(this) }
      led.className = 'led off'
      document.getElementById(`letterBox${index}`).appendChild(led)
      ledDivs.push(led)
    }
    lines.push(ledDivs)
  }
  matrix.push(lines)
}
/*****************************************************************/

const newLetterBoxes = (word) => {
  [...word].forEach((letter, index) => {
     display.appendChild(createLetterBox(`letterBox${index}`))
     populateLetterBoxWithLEDs(index)
  })
}
newLetterBoxes(testWord)

console.log(`
Matrix[x][y][z] is a 3D array
where:
x = letterBox, y = row, z = LED in row
`, matrix)




// const write = (arr) => {
//   var i = 0;
//   while (i < arr.length){
//     matrix[arr[i++]][arr[i++]][arr[i++]].className = "led";
//   }
// }
// write(H)

/*
  the following was used to build the alphanumeric JSON file
  containg all the coordinates necessary for this test. It is
  not needed for the program anymore but is left in to show
  how it was done

const getCoords = () =>  {
  // using destructuring to clone the array for
  // safe manipulation and more declarative syntax
  const [...letterBoxes] = matrix
    ,   coords = []

    letterBoxes.forEach((row, i) => {
      row.forEach((divs, j) => {
        divs.forEach((led, n) => {
          // push a `coordinates` object into our coords array
          // containg the 3 index values for each LED needed to
          // write the alphanumeric characters
          if(led.className === 'led') {
            coords.push({i,j,n})
          }
        })
      })
    })
  console.log(JSON.stringify(coords))
}
button.addEventListener('click', getCoords)
*/
