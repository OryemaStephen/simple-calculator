
function inputValue(val){
    document.getElementById('display').value = val;
}

function input(v){
    document.getElementById('display').value+=v;
}

function calculate(){
    let input = document.getElementById('display').value;
    let y =eval(input);
    document.getElementById('display').value = y;
}