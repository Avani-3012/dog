//Create variables here
var foodstock, milk;
var lastfed;
var dog,dogi
var happyDog,dogi2
var database;
var feedTime,lastFed;
var feedButton,addfoodButton

function preload()
{
  dogi = loadImage("images/dogImg.png");
  dogi2 = loadImage("images/dogImg1.png");

	
}

function setup() {
  database = firebase.database();
  feedtime = database.ref('FeedTime')
  feedtime.on("value",function(data){
    lastFed = data.val();
  });
  console.log(database);
  createCanvas(500, 500);
  //dog = createSprite(250,250,30,40);
  happydog = createSprite(250,250,30,40);
   happydog.addImage("images",dogi)
   happydog.scale= 0.25;
   //happydog.addImage("img",dogi2)
  //foodS = createSprite(200,250,20,30);
   foodObj= new food();
   feedButton = createButton("Feed the dog")
   feedButton.position(700,95);
   feedButton.mousePressed()

   addfoodButton = createButton("Add Food");
   addfoodButton.position(800,95);
   addFood.mousePressed(addFoods)
}


function draw() {  
 background(46, 139, 87)
   foodObj.display();
  drawSprites();
  //add styles here
  textSize(15);
  fill("white");
  stroke("white");
   if(lastFed>=12){
    text("Last Fed :" +lastFed%12+"P.M",350,30);
     }else if(lastFed===0){
     text("Last Fed :12AM",350,30)
     }
    else{
      text("Last Fed :"+ LastFed + "AM",350,30)
    }
}

 database.ref('/').update({
  
 })
//function to update food stock and last fed time
function feedDog(){
  dog. addImage (happyDog);
  foodobj. updateFoodStock(foodobj. getFoodStock()-1);
  database. ref('/').update({
  Food: foodobj.getFoodStock(),
  FeedTime: hour()
  })
  //function to add food in stock
  function addFoods() {
  foodS++;
  database. ref(' / ') . update({
  Food: foods


  });
  }
}
