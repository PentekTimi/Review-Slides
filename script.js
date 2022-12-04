var author = document.getElementById("author");
var job = document.getElementById("job");
var info = document.getElementById("info");
var image = document.getElementById("person-img");
var prevbtn = document.querySelector(".prev-btn");
var nextbtn = document.querySelector(".next-btn");
var surprisebtn = document.querySelector(".random-btn");




var reviews = [
{
	"img": "person-1.jpeg",
	"name": "susan smith",
	"occupation": "web developer",
	"text": "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
},

{
    "img": "https://i.insider.com/5cb8b133b8342c1b45130629?width=700",
	"name": "anna johnson",
	"occupation": "web designer",
	"text": "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
},

{
     "img": "https://media.istockphoto.com/photos/confident-smiling-young-african-businessman-looking-at-camera-in-picture-id1182967311?k=20&m=1182967311&s=612x612&w=0&h=Yl8dPZJG0-PFXRz3EATlCB4kIrI-gagCVW7z77wU_Nw=",
	"name": "peter jones",
	"occupation": "intern",
	"text": "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
},

{
	"img": "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=",
	"name": "bill anderson",
	"occupation": "the boss",
	"text": "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
}];

let currentItem = 0;

function showPerson(num){
	const item = reviews[num];
	image.src = item.img;
	author.textContent = item.name;
 	job.textContent = item.occupation;
 	info.textContent = item.text;
}

window.addEventListener("DOMContentLoaded", function() {
	showPerson(currentItem);
});

nextbtn.addEventListener("click", function() {
	currentItem++;
	if(currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

prevbtn.addEventListener("click", function() {
	currentItem--;
	if(currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

let arr = [];
surprisebtn.addEventListener("click", function surprise () {
	var randomNumber = Math.floor(Math.random() * reviews.length);
	showPerson(randomNumber);
});
