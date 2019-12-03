import {level0, redactor, syka, setMap } from "./JS/main.js"

let Data = {
    map: {
        default: [
            [1, 1, 1, 1, 1, 1, 4, 4],
            [1, 0, 0, 0, 0, 1, 4, 4],
            [1, 0, 0, 0, 0, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ],
        fromEditor: [1]
    },
    menu: {
        text: {
            0: "CLICK ME FOR START GAME",
            1: "CLICKE ME FOR CREATE LEVEL"
        },
        func: {
            0: level0,
            1: redactor
        },
        btnCount: 2,
    },
    editor: {
        text: {
            0: "Get Map",
            1: "Start Level"
        },
        func: {
            0: setMap,
            1: syka
        }
    },
    boxCount: 2,
    boxesChords: {
        1: {x: 180, y: 120},
        2: {x: 180, y: 240},
        3: {x: 10, y: 210},
        4: {x: 200, y: 210}
    },
    finishChords: {
        1: {finishX: 180, finishY: 60},
        2: {finishX: 180, finishY: 360},
        3: {finishX: 70, finishY: 100},
        4: {finishX: 150, finishY: 150}
    },
    PlayerChords: {
        x: 120,
        y: 120
    },
    WallsChords: {
        1: {x:240, y:0},
        2: {x:180, y:0},
        3: {x:120, y:0},
        4: {x:60, y:0},
        5: {x:0, y:60},
        6: {x:0, y:120},
        7: {x:0, y:180},
        8: {x:0, y:240},
        9: {x:0, y:300},
        10: {x:60, y:300},
        11: {x:120, y:300},
        12: {x:120, y:360},
        13: {x:120, y:420},
        14: {x:180, y:420},
        15: {x:240, y:420},
        16: {x:240, y:360},
        17: {x:240, y:300},
        18: {x:240, y:240},
        19: {x:240, y:180},
        20: {x:240, y:120},
        21: {x:240, y:60},
    }
}

export default Data;