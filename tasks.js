{
  const rain = Math.round(Math.random());

  if (rain === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
  } else {
    console.log("Дождя нет!");
  }
}

{
  const mathScores = prompt(
    "Введите кол-во баллов по математике:",
    "Баллы по математике"
  );
  const mathScoresNumber = Number(mathScores);

  const russianLanguageScores = prompt(
    "Введите кол-во баллов по русскому языку:",
    "Баллы по русскому языку"
  );
  const russianLanguageScoresNumber = Number(russianLanguageScores);

  const computerScienceScores = prompt(
    "Введите кол-во баллов по информатике:",
    "Баллы по информатике"
  );
  const computerScienceScoresNumber = Number(computerScienceScores);

  const minScores = Math.min(
    mathScoresNumber + russianLanguageScoresNumber + computerScienceScoresNumber
  );
  const minScoresNumber = Number(minScores);

  const totalPoints =
    mathScoresNumber +
    russianLanguageScoresNumber +
    computerScienceScoresNumber;
  const totalPointsNumber = Number(totalPoints);

  if (totalPointsNumber >= 265) {
    alert("Поздравляю, вы поступили на бюджет!");
  } else {
    alert("К сожалению, вы не поступили на бюджет.");
  }
}

{
  const howMuchMoney = parseInt(
    prompt(
      "Сколько денег хотите снять:",
      "Введите сумму (должна быть кратна 100!)"
    )
  );

  if (howMuchMoney % 100 === 0) {
    console.log(
      `Банкомат может выдать запрашиваемую сумму: ${howMuchMoney} рублей.`
    );
  } else {
    console.log("Сумма должна быть кратна 100 рублям.");
  }
}
