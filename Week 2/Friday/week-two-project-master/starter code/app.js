var items ={

  cereal: {
    // this = document.getElementById('cereal')
    cheerios: {
      name: 'Cheerios',
      image: 'images/cereal/cheerios.jpg'
    },

    crunch: {
      name: 'Crunch',
      image: 'images/cereal/crunch.jpg'
    },

    fruitLoops: {
      name: 'Fruit Loops',
      image: 'images/cereal/fruit-loops.jpg'
    },

    puffs: {
      name: 'Puffs',
      image: 'images/cereal/puffs.jpg'
    },

    raisinBran: {
      name: 'Raisin Bran',
      image: 'images/cereal/raisin-bran.jpg'
    },

  display: $('#cereal').click(function (){
    document.getElementById('pic1').setAttribute('src', 'images/cereal/cheerios.jpg');
    document.getElementById('pic2').setAttribute('src', 'images/cereal/crunch.jpg');
    document.getElementById('pic3').setAttribute('src', 'images/cereal/fruit-loops.jpg');
    document.getElementById('pic4').setAttribute('src', 'images/cereal/puffs.jpg');
    document.getElementById('pic5').setAttribute('src', 'images/cereal/raisin-bran.jpg');
  }),

  addCheerios: $('pic1').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.cheerios.name;
  }),
  addCrunch: $('pic2').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.crunch.name;
  }),
  addFruitLoops: $('pic3').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.fruitLoops.name;
  }),
  addPuffs: $('pic4').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.puffs.name;
  }),
  addRaisinBran: $('pic5').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.raisinBran.name;
  })

},

  juices: {
    // this = document.getElementById('juices')
    appleJuice: {
      name: 'Apple Juice',
      image: 'images/juices/apple-juice.jpg'
    },

    carrotJuice: {
      name: 'Carrot Juice',
      image: 'images/juices/carrot-juice.jpg'
    },

    grapeJuice: {
      name: 'Grape Juice',
      image: 'images/juices/grape-juice.jpg'
    },

    orangeJuice: {
      name: 'Orange Juice',
      image: 'images/juices/orange-juice.jpg'
    },

    tomatoJuice: {
      name: 'Tomato Juice',
      image: 'images/juices/tomato-juice.jpg'
    },

  display: $('#juices').click(function (){
    document.getElementById('pic1').setAttribute('src', 'images/juice/apple-juice.jpg');
    document.getElementById('pic2').setAttribute('src', 'images/juice/carrot-juice.jpg');
    document.getElementById('pic3').setAttribute('src', 'images/juice/grape-juice.jpeg');
    document.getElementById('pic4').setAttribute('src', 'images/juice/orange-juice.jpg');
    document.getElementById('pic5').setAttribute('src', 'images/juice/tomato-juice.jpg');
  }),

  addAppleJuice: $('pic1').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.appleJuice.name;
  }),
  addCarrotJuice: $('pic2').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.carrotJuice.name;
  }),
  addGrapeJuice: $('pic3').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.grapeJucie.name;
  }),
  addOrangeJuice: $('pic4').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.orangeJuice.name;
  }),
  addTomatoJuice: $('pic5').click(function (){
    var li = document.createElement('li');
    li.innerHTML = this.tomatoJuice.name;
  })

},

  candy: {
    // this = document.getElementById('candy')
    kitKat: {
      name: 'Kit Kat',
      image: 'images/candy/kit-kat.jpg'
    },

    mnms: {
      name: 'M&Ms',
      image: 'images/candy/m&ms.jpg'
    },

    skittles: {
      name: 'Skittles',
      image: 'images/candy/skittles.jpg'
    },

    snickers: {
      name: 'Snickers',
      image: 'images/candy/snickers.jpg'
    },

    twix: {
      name: 'Twix',
      image: 'images/candy/twix.jpg'
    },

    display: $('#candy').click(function (){
      document.getElementById('pic1').setAttribute('src', 'images/candy/kit-kat.jpg');
      document.getElementById('pic2').setAttribute('src', 'images/candy/m&ms.jpg');
      document.getElementById('pic3').setAttribute('src', 'images/candy/skittles.jpg');
      document.getElementById('pic4').setAttribute('src', 'images/candy/snickers.jpg');
      document.getElementById('pic5').setAttribute('src', 'images/candy/twix.jpg');
  }),

    addKitKat: $('pic1').click(function (){
      var li = document.createElement('li');
      li.innerHTML = this.kitKat.name;
    }),
    addMnMs: $('pic2').click(function (){
      var li = document.createElement('li');
      li.innerHTML = this.mnms.name;
    }),
    addSkittles: $('pic3').click(function (){
      var li = document.createElement('li');
      li.innerHTML = this.skittles.name;
    }),
    addSnickers: $('pic4').click(function (){
      var li = document.createElement('li');
      li.innerHTML = this.snickers.name;
    }),
    addTwix: $('pic5').click(function (){
      var li = document.createElement('li');
      li.innerHTML = this.twix.name;
    })
}
};

// function display(selection){
//   var ul = document.getElementById('shopping cart');
//   var li = document.createElement('li');
//   li.innerHTML = selection
//
// }
