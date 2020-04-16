const me = {
    firstName: "Tommy",
    lastName: "Spurlock",
    hobbies: ["sleeping", "eating", "talking"],
    lovesMia: true,
    timeToWork: function(){
        console.log("Sit down and Focus")
    }
}

//console.log(me.timeToWork)

me.timeToWork()

const myDogRufus = {
    age:4,                          //Property
    species: "Dalmatian",           //Property
    bark: function() {              //Property
        window.alert("WOOF")
    },
    contentsofStomach:[],
    eat: function(item){
        // rufusTheDog.contentsofStomach.push(item);
        this.contentsofStomach.push(item);
        // debugger;
    },
    puke: function(){
        this.contentsofStomach.length = 0;
    }
}

myDogRufus.eat("snacks")
myDogRufus.eat("a stick")
myDogRufus.puke();

console.log(myDogRufus.contentsofStomach);

//Practice: Represent your Pet

const myPet = {
    petName: "Snowball",
    species: "Alaskan Husky",
    nicknames: ["Pupper", "Rufus", "Bill"],
    age: 2,
    bark: function() {
        // window.alert("WOOF")
        console.log("WOOF");
    },
    run: function() {
        console.log("Such a happy pupper")
    },
    beg: function() {
        console.log("*wags tail* and *implements puppy eyes")
    },
    favoriteToys: [],
    play: function(toy) {
        if (toy.includes("squeaky") === true){
            this.favoriteToys.push(toy);
            console.log(`${this.petName} loves this toy!!`)
        }
        else{
            console.log(`${this.petName} does not like this toy as much...`)
        }

    }
}

//Practice: Pet Sounds

myPet.bark();
myPet.run();
myPet.beg();


//Practice: My Pet "this"

myPet.play("squeaky cacti");
console.log(myPet.favoriteToys)

//Practice: Fast Food Ordering
const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    // order: "",
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getAllOrders: function() {
        console.log(this.orders)
        for(let i = 0; i < this.orders.length; i++){
            if (this.orders[i].fries === true){
                let side = "with a side of fries"
                console.log(`Your order(s) of ${this.orders[i].sandwichType} ${side} and a ${this.orders[i].drinksize} drink is ready for pick up!`);
            }
            else{
                side = ""
                console.log(`Your order(s) of ${this.orders[i].sandwichType} ${side} and a ${this.orders[i].drinksize} drink is ready for pick up!`);
            }
        }
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken",
    fries: true,
    drinksize: "medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders
restaurant.getAllOrders();

// Output all orders to the console using console.table()
console.table(restaurant.orders);


// Challenge: Political Campaign
const sangerRep = {
    cDistrict: "1st Congressional district of West Virginia",
    platformStatements: {
        taxes: "Necessary Evil",
        jobs: "Love 'em. Need more middle class jobs. Emphasis on career/technical training.",
        infrastructure: "Need to do better with allocating funds and planning. Need to demand more of private industry",
        healthcare: "Y'all, we need to make sure everyone can afford care. It's a messed up system that's needs a WHOLE lotta refactoring. Redraw health insurance for all. Screw Big Pharma",
        crimeEnforcement: "Needs new training with emphasis on deescalation. All offenders of nonviolent marijuana-related crimes should have their sentences revaluated"
    },
    donation: "https://secure.actblue.com/donate/luke-winters-for-wv-house-of-delegates-district-10-1",
    calendar:"",
    volunteers: [
        {
            vName:"Stanley",
            vAddress: "None ya business1",
            vEmail: "noneyabusiness1@gmail.com",
            vPhone: "000-000-001",
            vAvailability: "M-F 9-4",
            vActivities: ["cold calls", "door-to-door campaigning"],
        },
        {
            vName:"Diana",
            vAddress: "None ya business2",
            vEmail: "noneyabusiness2@gmail.com",
            vPhone: "000-000-002",
            vAvailability: "Sat-Sun 12-5",
            vActivities: ["clerical work", "answering/taking calls", "speech writer"],
        },
        {
            vName:"Kelley",
            vAddress: "None ya business3",
            vEmail: "noneyabusiness3@gmail.com",
            vPhone: "000-000-003",
            vAvailability: "M-F 8-12PM, 6-9PM",
            vActivities: ["public relations/outreach", "campaign ideas", "event planner"],
        },
    ],
    biography: "She has done a lot of learning. All the accolades and academic successes. Hard worker, etc. Successful doctor and mother",
    images: [
        "https://www.psypost.org/wp-content/uploads/2019/04/happy-smiling-attractive-businesswoman.jpg",
        "https://plesantlife.com/wp-content/uploads/2014/11/family-services-front.png",
        "https://www.legbranch.org/app/uploads/2018/04/constituentrepresentation.jpg"
    ],
    mission: "She started from the bottom, met some amazing people, learned some amazing things. Experienced adversity and gained a whole deal of perspective and empathy. She understands your needs, and moreover, she's willing to listen to make your life easier because she's willing to make it her job to stand in your corner.",
    registerToVote: "https://ovr.sos.wv.gov/Register/Landing",

    addToImageGallery: function (newImage) {
        this.images.push(newImage);
    },
    changeBiography: function (newBiography){
        this.biography = newBiography;
    },
    changePlatform: function (topic, newPlatformStatement) {
        // this.platformStatements.topic = topic.newPlatformStatement;
        this.platformStatements.topic = newPlatformStatement;
    }
}

console.log(sangerRep.biography);
sangerRep.changeBiography("I have no desire to rewrite this");
console.log(sangerRep.biography);

console.log(sangerRep.platformStatements.healthcare)

sangerRep.changePlatform(sangerRep.platformStatements.healthcare, "Universal Healthcare")

console.log(sangerRep.platformStatements.healthcare)
