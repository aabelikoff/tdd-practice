// Makes first letter capital
const capitalize = function (string) {
    let reg = /^[^a-zA-Z]*(\w)/;
    let char = reg.exec(string)[1].toUpperCase();
    return string.replace(reg, char);
};

export default capitalize;