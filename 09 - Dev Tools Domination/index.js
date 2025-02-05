const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello')

// Interpolated
console.log(' Hello I am %s string', '@@@')

// Styled
console.log('%c i am some great text', 'font-size:50px; background: red')

// warning!
console.warn('OH NOOOOO')

// Error :|
console.error('Oh crap')
// Info
console.info('Fun facts are great')

// Testing
console.assert( 1 === 2, 'that is worng')

// clearing
console.clear()

// Viewing DOM Elements
const p = document.querySelector('p')
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`this is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')


// timing
console.time('fetching date')
fetch('https://api.github.com/users/wesbos')
    .then(res => res.json())
    .then(data => {
        console.timeEnd('fetching date')
        console.log(data)
    })