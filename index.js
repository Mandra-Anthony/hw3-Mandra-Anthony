function put(op) {
    document.getElementById("show").value += op;
}
function ce() {
    var element = document.getElementById("show").value;
    var length = element.length;
    length--;
    var a = element.substr(0, length);
    document.getElementById("show").value = a;
}
function sine() {
    var temp = document.getElementById("show").value;
    document.getElementById("show").value = eval(Math.sin(temp));
}
function ln() {
    var temp = document.getElementById("show").value;
    document.getElementById("show").value = eval(Math.LN(temp));
}
function cosine() {
    var temp = document.getElementById("show").value;
    document.getElementById("show").value = eval(Math.cos(temp));
}
function log() {
    var temp = document.getElementById("show").value;
    document.getElementById("show").value = eval(Math.log(temp));
}
function tangent() {
    var temp = document.getElementById("show").value;
    document.getElementById("show").value = eval(Math.tan(temp));
}
function sqrRoot() {
    var temp = document.getElementById("show").value;
    document.getElementById("show").value = eval(Math.sqrt(temp));
}
function answer() {
    var expression = document.getElementById("show");
    var temp = expression.value;
    var result = eval(temp);
    expression.value = result;
}
//not working
function exp() {
    //var temp = document.getElementById("show").value;
}
//not working
function exponent() {
    //var temp = document.getElementById("show").value;
    //document.getElementById("show").value = eval(Math.pow(temp));
}
function equal() {
    var expression = document.getElementById("show");
    var temp = expression.value;
    var result = eval(temp);
    expression.value = result;
}
function setOp() {
    alert("gf");
}