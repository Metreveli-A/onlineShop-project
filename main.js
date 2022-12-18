
var counter = 1;

/* another button  ღილაკი  ამატებს  რილაკებს (buttin)-ებს
ნომერი---2*/


function byId(id){
    return document.getElementById(id);
}


var table = byId("productsTable");

table.addEventListener("click", function()
{
    console.log("table was clicked!");
});


// document.querySelectorAll("td, th").forEach(elem =>
//     {
//         elem.onmouseover = elem.onmouseout = e =>
//         {
//          var columnValue = e.target.getAttribute("column");
//          document.querySelectorAll(`[column=${columnValue}]`)
//          .forEach(c => e.type == "mouseover"?
//           c.classList.add('column'):
//           c.classList.remove('column'));
//         };
//     });

$("#theButton").on("mouseover", e =>
{
  
})




function printEventPhrase(eventPhase)
{
    if(eventPhase == Event.AT_TARGET) return "Target";
    if(eventPhase == Event.BUBBLING_PHASE) return "Bubbling";
    if(eventPhase == Event.CAPTURING_PHASE) return "Capture";
}


function stressOnElement(elem){
    elem. classList.add("stress");
  
}
function stressOffElement(elem){
 
   elem.classList.remove("stress");
}


       
document.querySelectorAll("td, tr, table, button")
      .forEach(elem => {
       elem.onmouseenter = elem.onmouseleave = e => 
        {
           mouseEventHandler(e);
         }

   });
  // $("td, tr, table, button").on("mouseenter mouseleave", mouseEventHandler);

   function mouseEventHandler(e){
    console.log(e.type, e.target.nodeName);
    if (e.type == "mouseenter")
    {
        stressOnElement(e.target);
    }
    else
      stressOffElement(e.target);
   }


   function myFunction2(){
    var x = document.getElementById("toggle-div");
    if(x.style.display === "none")
    {

        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    } 
}




function addHtmlTableRow()
{

    var productsTable = document.getElementById("productsTable"),
    
    
    newRow = productsTable.insertRow(productsTable.lenght),

      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),
     
      fname = document.getElementById("fname").value,
      numb = document.getElementById("numb").value,
      color = document.getElementById("color").value,
      price = document.getElementById("price").value,
      date = document.getElementById("date").value;

      
      cell1.innerHTML = fname; 
      cell2.innerHTML = numb;
      cell3.innerHTML = color;
      cell4.innerHTML = price;
      cell5.innerHTML = date;
   
      
}
addHtmlTableRow();

productsTable.addEventListener("click", function()
{
    console.log("productsTable was clicked!");
});

// var  riwIndex,
//     productsTable = document.getElementById("productsTable");
// function selectRowToInPut()
// {
// //  var  riwIndex,productsTable = document.getElementById("productsTable");
//  for(var i = 0;i < productsTable.rows.length; i++)
// {
//     productsTable.rows[i].onclick = function()
//     {
//         riwIndex = this.rowIndex;
//        document.getElementById("fname").value = this.cells[0].innerHTML;
//        document.getElementById("numb").value = this.cells[1].innerHTML;
//        document.getElementById("color").value = this.cells[2].innerHTML;
//        document.getElementById("price").value = this.cells[3].innerHTML;
//        document.getElementById("date").value = this.cells[4].innerHTML;
//     };
// }
// }
// selectRowToInPut();
 
// function  edidHtmlSelectedRow()
// {
//            var fname = document.getElementById("fname").value
//            numb =  document.getElementById("numb").value,
//           color =  document.getElementById("color").value,
//           price =  document.getElementById("price").value,
//           date =  document.getElementById("date").value;
          
//           productsTable.rows[riwIndex].cells[0].innerHTML = "fname";
//           productsTable.rows[riwIndex].cells[1].innerHTML = "numb";
//           productsTable.rows[riwIndex].cells[2].innerHTML = "color";
//           productsTable.rows[riwIndex].cells[3].innerHTML = "price";
//           productsTable.rows[riwIndex].cells[4].innerHTML = "date";
   
// }





