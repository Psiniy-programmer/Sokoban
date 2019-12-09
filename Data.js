import {level0, redactor, editorLevel, setMap } from "./JS/main.js"

let Data = {
    map: {
        default: [
            [1, 1, 1, 1, 1, 1, 4, 4],
            [1, 0, 0, 0, 5, 1, 4, 4],
            [1, 0, 0, 2, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 2, 1],
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
            1: editorLevel
        }
    },
    boxCount: {
        default: 2,
        fromEditor: 16,
    },
    boxesChords: {
        default: {
            1: {x: 120, y: 120},
            2: {x: 180, y: 240}
        },
        fromEditor: {
            1: {x: undefined, y: undefined},
            2: {x: undefined, y: undefined},
            3: {x: undefined, y: undefined},
            4: {x: undefined, y: undefined},
            5: {x: undefined, y: undefined},
            6: {x: undefined, y: undefined},
            7: {x: undefined, y: undefined},
            8: {x: undefined, y: undefined},
            9: {x: undefined, y: undefined},
            10: {x: undefined, y: undefined},
            11: {x: undefined, y: undefined},
            12: {x: undefined, y: undefined},
            13: {x: undefined, y: undefined},
            14: {x: undefined, y: undefined},
            15: {x: undefined, y: undefined},
            16: {x: undefined, y: undefined}
            },
        },
    finishChords: {
        default: {
            1: {x: 120, y: 180},
            2: {x: 180, y: 360}
        },
        fromEditor: {
            1: {x: 180, y: 60},
            2: {x: 180, y: 360},
            3: {x: undefined, y: undefined},
            4: {x: undefined, y: undefined},
            5: {x: undefined, y: undefined},
            6: {x: undefined, y: undefined},
            7: {x: undefined, y: undefined},
            8: {x: undefined, y: undefined},
            9: {x: undefined, y: undefined},
            10: {x: undefined, y: undefined},
            11: {x: undefined, y: undefined},
            12: {x: undefined, y: undefined},
            13: {x: undefined, y: undefined},
            14: {x: undefined, y: undefined},
            15: {x: undefined, y: undefined},
            16: {x: undefined, y: undefined}
        },
    },
    PlayerChords: {
        x: 120,
        y: 120
    },
    WallsChords: {
        default: {
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
            21: {x:240, y:60}
        },
        fromEditor : {
            1: {x:-100, y:0},
            2: {x:-100, y:0},
            3: {x:-100, y:0},
            4: {x:-100, y:0},
            5: {x:-100, y:0},
            6: {x:-100, y:0},
            7: {x:-100, y:0},
            8: {x:-100, y:0},
            9: {x:-100, y:0},
            10: {x:-100, y:0},
            11: {x:-100, y:0},
            12: {x:-100, y:0},
            13: {x:-100, y:0},
            14: {x:-100, y:0},
            15: {x:-100, y:0},
            16: {x:-100, y:0}
        },
    }
}

export default Data