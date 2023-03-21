let lecturesContainer = document.getElementById('lectures');
let trainingsContainer = document.getElementById('trainings');


let res = fetch("./data/events.json")
    .then((response) => response.json())
    .then((json) => {
        const lectures = json.lectures;
        for (let i = 0; i < lectures.length; i++) {
            let element = document.createElement("div");
            element.innerHTML = `<p><a href="${lectures[i]["url"]}">${lectures[i]["place"]}</a>: ${lectures[i]["time"]}</p>`;
            lecturesContainer.appendChild(element);
        };
        const trainings = json.trainings;
        for (let i = 0; i < trainings.length; i++) {
            let element = document.createElement("div");
            element.innerHTML = `<p>${trainings[i]["place"]}: ${trainings[i]["time"]}</p>`;
            trainingsContainer.appendChild(element);
        };
    });
