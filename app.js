'use strict';
// alert("JS Linked");

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    minimumCustomersPerHour: 23,
    maximumCustomersPerHour: 65,
    averageCookiesPerCustomer: 6.3,
    name: seattle,

    totalCookiesForTheDay: 0,

    customersEachHour: [],          //needs to come from a random number between the given min and max
    cookiesSoldEachHour: [],        //this is what we need to calculate

    generateCustomersEachHour: function(){      //generate customers each hour array. get random number between min and max and put in array
        // this.minimumCustomersPerHour = Math.ceil(min);  these lines are not needed, no decimal numbers given
        // max = Math.floor(max);
       for (var i=0; i<hours.length; i++){
           var randomNumber = Math.floor(Math.random() * ( this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
   
           this.customersEachHour.push(randomNumber);
       }
    },

    generateCookiesSoldEachHour: function(){

        seattle.generateCustomersEachHour();

        //loop over my customers each hour array
        //multiply the customers by the average cookies that they buy
        //put that number in the cookiesSoldEachHour array
        for(var i=0; i<hours.length; i++){

            var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);

            this.totalCookiesForTheDay += cookiesSoldThisHour; //running total of cookies sold for the day updated each hour

            this.cookiesSoldEachHour.push(cookiesSoldThisHour);
        }

    },

    render: function (){
        // get section with id of seattle from the DOM
        // create h2
        // fill it with content
        // append it to the parent

        // get the ul with this ide of seattle-sales from the DOM - that is going to be our parent element
        
        // loop over our cookiesSoldEachHour array
        // create and li
        // fill it with teh content from the cookies sold each hour
        // append it to the parent

        var parentSection = document.getElementById('seattle'); //get parent element
        var headingSeattle = document.createElement('h2');      //create h2 element
        headingSeattle.textContent = this.name;
        parentSection.appendChild(headingSeattle);

        var salesList = document.getElementById('seattle-sales');

        for (i=0; i<this.cookiesSoldEachHour.length; i++) {
            var liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
            salesList.appendChild(liElement);
        }

    }


}

seattle.generateCookiesSoldEachHour();

seattle.render();



var malaki = {
    name: 'Malaki',
    fur: 'orange',
    sheds: false,
    isLoud: false,
    speak: function(){
        console.log(`${this.name} is speaking`);
    }
}

var tangerine = {
    name: 'Tangerine',
    fur: 'orange',
    sheds: true,
    isLoud: false,
    speak: function(){
        console.log(`${this.name} is speaking`);
    }
}

var goose = {
    name: 'Goose',
    fur: ['black', 'white'],
    sheds: false,
    isLoud: false,
    speak: function(){
        console.log(`${this.name} is speaking`);
    }
}

//////////// Constructor functions ///////////

var allCats = [];

function Cat(name, hairColor, sheds, isLoud,){
    this.name = name;
    this.fur = hairColor;
    this.sheds = shed;
    this.isLoud = isLoud;
    // this.speak = function(){
    //     console.log(`${this.name} is speaking`);
    //  }

     allCats.push(this);                    //creates an array that contains all objects

}

Cat.prototype.speak = function (){                      //prototype, pulls method out of a constructor function
        console.log(`${this.name} is speaking`);
     }


var malaki = new Cat('Malaki', 'orange', false, false);

var tangerine = new Cat('Tangerine', 'orange', true, false);

var goose = new Cat ('Goose', ['black', 'white'], false, true);



console.log(malaki); // will output malaki object
console.log(allCats); // will output all objects


malaki.speak(); // will output "Malaki is speaking"

/////////////general code order, top to bottom//////////////
//global variables
//constructor functions
//prototypes
//instances
//executables


//////////////create table dynamically/////////////////////


//grab parent element - this case tbody
var parentElement = document.getElementById('table');
//create tr

function generateHeaderRow(){
    var trElement = document.createElement('tr');
    
    var headerArray = ['Name', 'Type', 'Color', 'Age'];
    
    for(i=0; i<headerArray.length; i++){
        var thElement = document.createElement('th');
        //fill with content - this case "name"
        thElement.textContent = headerArray[i];
        //append to the tr element
        trElement.appendChild(thElement);
    }

}

function generateFluffyRow(){

    var fluffyArray = ['fluffy', 'cat', 'white', 1];

    for(var i=0; i<fluffyArray.length; i++){
        //create a tr
        var trElement = document.createElement('tr');
        //create a td
        var tdElement = document.createElement('td');
        //fill with content - this case "fluffy"
        tdElement.textContent = fluffyArray[i];
        // append it to the tr
        trElement.appendChild(tdElement);
        //append the to the parent table
        parentElement.appendChild(trElement);
    }
}



generateHeaderRow();
generateFluffyRow();
//create th
var thElement = document.createElement('th');
//fill with content - this case "name"
thElement.textContent = 'Name';
//append to the tr element
trElement.appendChild(thElement);
//append the tr to the tbody
parentElement.appendChild(trElement);

//make more
thElement = document.createElement('th');
//fill
thElement.textContent = 'Type';
//append
trElement.appendChild(thElement);