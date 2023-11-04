//?Pcye 1-20 arasında sayı tutturduk
let randomNum = Math.ceil(Math.random() * 20);
console.log(randomNum);

let message = document.querySelector(".msg");

let score = 10;
//skor u index.html den çekebilirdik. Ama çok kullanacağımız için bu daha tercih edilen yol.

//! local storage da top-score adıyla bir değişken varsa onu getir yoksa 0 olsun
let highScore = localStorage.getItem("top-score") || 0;

//! ------browserda, DOM da top score değerini local storage dan okuyarak güncelle, özellikle 2. ve 3. oyuncular için gerekli
document.querySelector(".top-score").textContent = highScore;

//? Her Check butonuna basıldığında yapılacaklar
document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  //! Tahmin girmeden butona basıldıysa
  if (!guess) {
    message.textContent = "Please enter a number...";

    //! Tahmin Doğruysa
  } else if (guess == randomNum) {
    message.textContent = "Congratulations!!!👏";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNum;

    // Top Score Kontrolü

    if (score > highScore) {
      localStorage.setItem("top-score", score);

      highScore = score;
      document.querySelector(".top-score").textContent = highScore;
    }

    //! Tahmin Yanlışsa
  } else {
    //? Skor 1'den büyük olduğu sürece tahmin hakkım var

    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      
      guess < randomNum
        ? (message.textContent = "Increase👆")
        : (message.textContent = "Decrease👇");
      //arttır azalt
    } else {
      message.textContent = "Game Over 🥺";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      //!Oyunu Kaybettiniz
    }
  }
});

// Again butonuna basınca ayarlar başlangıç değerlerine kurulun. Arka plan #2d3436 olsun

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";

  randomNum = Math.ceil(Math.random() * 20);
  console.log(randomNum);

  score = 10;

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  message.textContent = "The game starts again for the new Player.";
};

//! ENTER
//Klavyeden enter buttonuna basıldığında check butonunu tetikle.
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    //Enter tuşuna basıldığında check butonunı tıkla
    document.querySelector(".check").click();
  }
});

//! Geçersiz sayı girdiniz  1 ile 20 arasında bir sayı girin"
document.querySelector(".check").addEventListener("click", ()=> {
    guess = document.querySelector(".guess").value

    const guessNum = parseInt(guess);

    if (guessNum >=1 && guessNum <=20 && !isNaN(guessNum)) {
        //Doğru sayı girilmişse onu devam ettir
    } else {
        message.textContent = "You entered an invalid number (enter a number between 1 and 20). "
        score ++
    }
})
