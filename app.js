// document.getElementsByClassName("others").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementsByClassName("others").innerHTML = "YOU CLICKED ME!";
//     console.log('clicked')
// }


(function() {
    //selecting my node element
    var myNode = document.getElementsByClassName('.others');
    myNode.addEventListener('click', function(e) {
        console.log('clicked')
    }, false)
}) ();  //self executing function