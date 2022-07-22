// Bài 5 
function BT5() {
    var txtNum = document.getElementById("txtNum").value * 1;
    var contentHTML = " "

    if (txtNum === 2) {
        contentHTML = 2 + " ";
    } else if (txtNum > 2) {
        for (i = 3; i <= Math.sqrt(txtNum); i++) {
            if (i % 2 !== 0) {
                contentHTML += i + " "
            } else {
                return (console.log("false"));
            }

        }
    } else {
        return 1;
    }

    document.getElementById("resultBT5").innerHTML = contentHTML
}