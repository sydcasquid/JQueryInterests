
console.log(cats);

const basicInfo = (index) => {
    console.log(cats[index].name);
    $(".info").eq(index).text(cats[index].name);
};


const information = () => {
    setUpBoxes(); 
    jQuery.each($(".box"), basicInfo);
    $(".box").on("click", function () {
        let indexOfCat = $(".box").index(this);
        $(this).find("p.info").text(cats[indexOfCat].pronoun + " is a " + cats[indexOfCat].breed);
    });

    $(".box").on("mouseover", function () {
        let indexOfCat = $(".box").index(this); 

        $(this)
        .find("p.info")
        .text(
            cats[indexOfCat].pronoun + " is " + cats[indexOfCat].age + " years old"
        );
    });

    $(".box").on("mouseout", function () {
        let indexOfCat = $(".box").index(this); 

        $(this).find("p.info").text(cats[indexOfCat].name);
    });
}



const setUpBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    cats.forEach((cat)=>{
        let boxMarkup= ` <div class="box">
        <img class="cat_pic" src="./images/${cat.name.toLowerCase()}.jpg" />
        <p class="info"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    }
    );
}


$(document).ready(information);



let randFactText = [
    "Canelo used to be feisty as a kitten.",
    "Pugsley is the sweetest and most nerdy of the bunch.",
    "Blue is a BIG troublemaker.",
    "Stewart used to be a stray outdoors. He now enjoys the indoor life and doesn't like going outside.",
    "All 4 of the boys get along well and will even cuddle up!",
    "Luna is a bit feisty and picky. Only pet her when she comes up to you!",
    "Luna has learned to tolerate the boys and does well with them now.",
    "Lately, Stewart has been crying a lot at night.",
    "Blue goes into my room at night and early morning and meows in my face. He'll make biscuits too.",
    "Blue makes some intense biscuits. He uses his claws just a little too much in them.",
    "Luna likes to flop on her back and lay that way for a while. Just don't bother her!"
  ];

const randFact = () => {
    let rand = Math.floor(Math.random() * randFactText.length);
    let newFact = randFactText[rand];
    $("#id_catFacts").text(newFact);
};