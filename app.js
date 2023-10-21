$(function () {
  // Global settings
  let countDown = 3;
  // let raceNumber = 0;
  const raceBtn = $(".race-btn");
  const startOver = $(".start-over-btn");
  const firstCar = $(".firstCar img");
  const secondCar = $(".secondCar img");
  let track = $(".track").width() - firstCar.width();
  const finishFlag = $(".finishFlag");
  const raceDiv = $("#race");
  const tableBodyFirst = $("#car-one-body");
  const tableBodySecond = $("#car-two-body");
  const thirdTable = $(".third-table");
  // Counting function
  function startCounting() {
    let countDownInterval = setInterval(() => {
      let countDownDiv = $(".countDown");
      countDownDiv.css({ display: "block" }).text(countDown);
      raceDiv.css({ backgroundColor: "#242021", opacity: "0.7" });
      countDown--;
      if (countDown < 0) {
        clearInterval(countDownInterval);
        countDownDiv.hide();
        raceDiv.css({ backgroundColor: "", opacity: "" });
        startRace();
      }
    }, 1000);
  }
  // Function checkPlace has been changed,checking which car is frst and which second.
  function checkPlace(carOneTime, carTwoTime) {
    const firstSpan = $("<span>").addClass("firstSpan").text("First")[0];
    const secondSpan = $("<span>").addClass("secondSpan").text("Second")[0];

    return carOneTime < carTwoTime ? firstSpan : secondSpan;
  }  

  // Starting race function
  function startRace() {
    let moveCar1 = Math.floor(Math.random() * track);
    let moveCar2 = Math.floor(Math.random() * track);
    $(firstCar).animate({ left: track }, moveCar1, function () {
      finishFlag.css({ display: "block" });
      addResult(moveCar1, moveCar2, tableBodyFirst);
    });

    $(secondCar).animate({ left: track }, moveCar2, function () {
      finishFlag.css({ display: "block" });
      addResult(moveCar2, moveCar1, tableBodySecond);
    });

    raceBtn.prop("disabled", true);
    startOver.prop("disabled", false);

    const result = {
      results: [{ time: moveCar1 }, { time: moveCar2 }],
    };
    localStorage.setItem("raceResults", JSON.stringify(result));
  }

  // Adding the results on the dom.
  function addResult(time, secondCarTime, tableBody) {
    const row = $("<tr>");
    row.append($("<td>").append(`Finished in `).append(checkPlace(time, secondCarTime)).append(` place, with a time of ${time} milliseconds`));
    tableBody.append(row);
  }
  // Reseting the race,backing up the cars from the start of the race.
  function resetRace() {
    firstCar.css("left", "0px");
    secondCar.css("left", "0px");
    finishFlag.css({ display: "none" });
    raceBtn.prop("disabled", false);
    startOver.prop("disabled", true);
    countDown = 3;
  }
  // getting the previous results from the local storage!,every time you reload the page
  // Load previous results
  function loadPreviousResults() {
    const previousResults = localStorage.getItem("raceResults");
    const result = JSON.parse(previousResults);
    if (result) {
      result.results.forEach((res, index) => {
        const secondCarTime = result.results[index === 0 ? 1 : 0].time;
        addResult(res.time, secondCarTime, thirdTable);
      });
    }
  }

  // Calling the functions,the counter,reset-race,and the previous results
  raceBtn.click(startCounting);
  startOver.click(resetRace);
  startOver.prop("disabled", true);

  loadPreviousResults();
});
