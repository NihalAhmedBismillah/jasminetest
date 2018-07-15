/** */
function MathOp() {
}

MathOp.prototype.add = function (a, b) {
    return a + b;
}

MathOp.prototype.sub = function (a, b) {
    return a - b;
}
MathOp.prototype.mult = function (a, b) {
    return a * b;
}
MathOp.prototype.div = function (a, b) {
    return a / b;
}

module.exports = MathOp;
