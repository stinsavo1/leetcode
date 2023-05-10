const strs = ["flower", "flow", "flight1"];
const strs1 = ["dog", "racecar", "car"];
const strs2 = ["c","acc","ccc"];

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }

    let rez = strs[0];
    for (let i = 1; i < strs.length; i++) {
        const curr = strs[i];
        let reader = 0;
        let lastCommon = 0;
        while (reader < rez.length && reader < curr.length) {
            if (rez.charAt(reader) === curr.charAt(reader)) {
                lastCommon++;
            } else {
                break;
            }
            reader++
        }
        rez = rez.substring(0, lastCommon);
    }
    return rez
};

console.log(longestCommonPrefix(strs));