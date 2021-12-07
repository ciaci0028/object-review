//Object

let snow = {
    key: 'value',
    color: 'white',
    wet: true,
    inches: 4,
    accidents: [ '100', '694', '23', '35' ]
}

// Template Literal Notation
// Object will print this number value in the string - type conversion
let stringText = `Today it has already snowed ${snow.inches} inches.`

// We can add properties to existing objects using dot notation, do not use let again
snow.isCold = true;

// Splatting the object onto the console
console.log('Snow is ', snow);
// Trying to turn it into a string, doesn't necessarily work
console.log(`Snow is ${snow}`);

// Object literal
let buildings = [
    {
        color: 'brown',
        isTall: true,
    },
    {
        color: 'gray',
        isTall: true,
    },
    {
        color: 'beige',
        isTall: false,
    },
    {
        color: 'brown',
        isTall: false,
    }
]

console.log('the buildings are', buildings );
console.log(`the buildings are ${buildings[0].color}`);

let penguins = [
    {
      name: 'Emperor',
      colors: ['Black', 'White', 'Yellow'],
      size: 1.0,
      isCute: true
    },
    {
      name: 'Little',
      colors: ['Slate-blue', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Rockhopper',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.75,
      isCute: true
    },
    {
      name: 'African',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Gentoo',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Sea Gull',
      colors: ['Gray'],
      size: 0.25,
      isCute: false
    },
    {
      name: 'Chinstrap',
      colors: ['Black', 'White'],
      size: 0.25,
      isCute: true
    },
    {
      name: 'Macaroni',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.5,
      isCute: true
    },
  ];

function checkPenguins( penguinsArray ) {
    let cutePenguins = [];
    for ( let i=0; i<penguinsArray.length; i++ ){
        if ( penguinsArray[i].isCute ){
            cutePenguins.push( penguinsArray[i].name );
        }
    }   
    return cutePenguins;
}

console.log( checkPenguins( penguins ));

// Object Constructors
// Function that creates objects
// Uppercase naming convention is reserved for constructors
// The word this is the object I am making right now

function Hat( type, color, size, ) {
    this.type = type;
    this.color = color;
    this.size = size;
}

const averageTopHat = new Hat( 'Top', 'Black', 14 );
const funnyHat = new Hat( 'Beanie', 'Multicolored', 10 );
const largeTopHat = new Hat ( 'Top', 'Purple', 24 );

console.log( averageTopHat, funnyHat, largeTopHat );
console.log(`I love my new size ${ funnyHat.size } funny Hat, it's a ${funnyHat.color} ${ funnyHat.type }` );

function printHat(hatInput){
    console.log(`Hat type is ${hatInput.type}`);
    console.log(`Hat color is ${hatInput.color}`);
    return true;
}

printHat( {type: 'Baseball', color: 'blue', size: 12 } );


