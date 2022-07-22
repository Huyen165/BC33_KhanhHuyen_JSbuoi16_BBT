// Bài 5 
function checkIsPrime(n) {
    var isCheck = true;
    if (n < 2) {
        isCheck = false;
    } else if (n == 2) {
        isCheck = true;
    } else if (n % 2 == 0) {
        isCheck = false;
    } else {
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                isCheck = false;
                break;
            }
        }
    }

    return isCheck;
}

function BT5() {
    var number = document.getElementById("number").value * 1;
    var result = " ";
    for (var i = 1; i <= number; i++) {
        if (checkIsPrime(i)) {
            result += i + " ";
        }
    }
    document.getElementById("resultBT5").innerHTML = result;
}