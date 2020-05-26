import {PropositionT} from "../types";

export const title : string = "title";
export const propositions : PropositionT[] = [
    {
        "id": "p1",
        "text": "proposition 1",
        "timesPresented": 12,
        "choices" : [
            { "id": "p1c1", "text": "proposition 1 choice 1", "timesChosen": 8 },
            { "id": "p1c2e", "text": "proposition 1 choice 2 with ending", "timesChosen": 2, 
                "endWith": "proposition 1 choice 2 ending" },
            { "id": "p1c3", "text": "proposition 1 choice 3", "timesChosen": 2 }
        ]
    },
    {
        "id": "p2",
        "text": "proposition 2",
        "timesPresented": 0,
        "choices": [
            {"id": "p2c1", "text": "proposition 2 choice 1", "timesChosen": 0}
        ]
    },
    {
        "id": "p3",
        "text": "proposition 3",
        "timesPresented": 0,
        "choices": [
            {"id": "p3c1e", "text": "proposition 3 choice 1", "timesChosen": 0,
                "endWith": "proposition 3 choice 1 ending" },
            {"id": "p3c2e", "text": "proposition 3 choice 2", "timesChosen": 0, 
                "endWith": "proposition 3 choice 2 ending" }
        ]
    }
];
