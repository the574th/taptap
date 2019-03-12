var familyOfBoxes = {
    red: {
        array: [],
        classBorder: 'redBoxBorder',
        classFill: 'redBox',
        classAniHide: 'redBoxHide',
        classWrong: 'redBoxWrong',
        boxid: 'r',
        containerId: 'redBoxesMatters',
        numOfClicks: 0,
        keycode: 65,
        letter: 'A'
    },
    yellow: {
        array: [],
        classBorder: 'yellowBoxBorder',
        classFill: 'yellowBox',
        classAniHide: 'yellowBoxHide',
        classWrong: 'yellowBoxWrong',
        boxid: 'y',
        containerId: 'yellowBoxesMatters',
        numOfClicks: 0,
        keycode: 83,
        letter: 'S'
    },
    green: {
        array: [],
        classBorder: 'greenBoxBorder',
        classFill: 'greenBox',
        classAniHide: 'greenBoxHide',
        classWrong: 'greenBoxWrong',
        boxid: 'g',
        containerId: 'greenBoxesMatters',
        numOfClicks: 0,
        keycode: 68,
        letter: 'D'
    },
    blue: {
        array: [],
        classBorder: 'blueBoxBorder',
        classFill: 'blueBox',
        classAniHide: 'blueBoxHide',
        classWrong: 'blueBoxWrong',
        boxid: 'b',
        containerId: 'blueBoxesMatters',
        numOfClicks: 0,
        keycode: 70,
        letter: 'F'
    },
    maroon: {
        array: [],
        classBorder: 'maroonBoxBorder',
        classFill: 'maroonBox',
        classAniHide: 'maroonBoxHide',
        classWrong: 'maroonBoxWrong',
        boxid: 'm',
        containerId: 'maroonBoxesMatters',
        numOfClicks: 0,
        keycode: 71,
        letter: 'G'
    },
};

var fourInstructions = {
    first: {
        color: 'green',
        instructions: 'Observe the pattern',
    },
    second: {
        color: 'green',
        instructions: 'Press the correct key',
    },
    third: {
        color: 'green',
        instructions: "Overclicking will restart the pattern",
    },
    fourth: {
        color: 'green',
        instructions: 'As you progress, the number of boxes will increase.',
    },
}

var gamePlay = {
    score: 0,
    name: null,
    time: 45,
    level: 1,
    createNewPattern: 'yes',
    colorsInvolvedInPattern: [],
    totalDiv: 0,
}

// Variables for colors, for easier reference
var red = familyOfBoxes.red;
var yellow = familyOfBoxes.yellow;
var green = familyOfBoxes.green;
var blue = familyOfBoxes.blue;
var maroon = familyOfBoxes.maroon;