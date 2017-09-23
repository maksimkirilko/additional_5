module.exports = (str, bracketsConfig) => {
    if (str.length % 2 !== 0) return false;
    const box = [];
    str.split('').forEach(char => {
        bracketsConfig.forEach((bracket, index) => {
            if (bracket[0] === bracket[1]) {
                if (bracket[0] === char) addOrRemove(box, index);
            } else {
                if (bracket[0] === char) box.push(index);
                if (bracket[1] === char) addOrRemove(box, index);
            }
        });
    });
    return box.length === 0;
};

const addOrRemove = (box, index) => {
    box[box.length - 1] === index ?
        box.splice(box.length - 1, 1) : box.push(index);
};
