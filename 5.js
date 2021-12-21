function setup() {
    var lis = document.querySelectorAll('ul li');
    console.log(lis);
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function(e) {
        // Write your code here
       lis.remove(e.target);
      });
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>`;
  
  setup();
  
  document.getElementsByTagName("li")[1].click();
  console.log(document.body.innerHTML);