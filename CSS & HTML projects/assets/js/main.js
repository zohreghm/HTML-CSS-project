function navFunc(){
    var x = document.getElementById("navigation");
    if(x.className === "navbar"){
        x.className += " responsive";
    } else{
        x.className = "navbar";
    }
}
function qa_Func() {
    var y = document.getElementById("leftQA");
    if(y.className === "faq-left"){
        y.className += " click-arrow";
    } else{
        y.className = "faq-left";
    }
  }
//   function faq2_Func() {
//     var b = document.getElementById("faq-2");
//     if(b.className === "faq2"){
//         b.className += "click-arrow";
//     } else{
//         b.className = "faq2"
//     }
//   }
//   function faq3_Func() {
//     var c = document.getElementById("faq-3");
//     if(c.className === "faq3"){
//         c.className += "click-arrow";
//     } else{
//         c.className = "faq3"
//     }
//   }
