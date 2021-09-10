import namor from 'namor';
import {Form} from "react-bootstrap";
import React from "react";

const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        num: Math.floor(Math.random() * 30),
        num2: Math.floor(Math.random() * 30),
        num3: Math.floor(Math.random() * 30),
        mon: "$" + Math.floor(Math.random() * 1000),
        mon2: "$" + Math.floor(Math.random() * 1000),
        mon3: "$" + Math.floor(Math.random() * 1000),
        date: namor.generate({ words: 0, numbers: 1 }) + "/" + namor.generate({ words: 0, numbers: 1 }) + "/202" + namor.generate({ words: 0, numbers: 1 }),
        date2: namor.generate({ words: 0, numbers: 1 }) + "/" + namor.generate({ words: 0, numbers: 1 }) + "/202" + namor.generate({ words: 0, numbers: 1 }),
        date3: namor.generate({ words: 0, numbers: 1 }) + "/" + namor.generate({ words: 0, numbers: 1 }) + "/202" + namor.generate({ words: 0, numbers: 1 }),
        word: namor.generate({ words: 1, numbers: 0 }),
        word1: namor.generate({ words: 1, numbers: 0 }),
        visits: "$" + Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status: statusChance > 0.66 ? 'Cash' : statusChance > 0.33 ? 'Crypto' : 'Credit',
        type: statusChance > 0.66 ? 'Code Violation' : statusChance > 0.33 ? 'Investor Payment'  :  statusChance > 0.13 ? 'Vendor Back Bill' : 'County Tax Bill #1',
        type2: statusChance > 0.66 ? 'Investor' : statusChance > 0.33 ? 'E&H'  :  statusChance > 0.13 ? '3rd Party' : 'Family',
        cont: <i className="fa fa-fw text-c-red fa-trash-alt" />,
    };
};

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map((d) => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
            };
        });
    };

    return makeDataLevel();
}
