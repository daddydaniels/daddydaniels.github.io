/*function expand()
{
    var x = document.getElementById("slider");
    var y = document.getElementById("stuff");

    if(x.style.visibility == "visible")
    {
        x.style.visibility = "hidden";
        x.style.left = "-200px";
        y.style.left = "10px";

    } else {
        x.style.visibility = "visible";     
        x.style.left = "0px";
        y.style.left ="210px";
    }

}*/

function getStyle(el, name)
{
  // the way of the DOM
  if ( document.defaultView && document.defaultView.getComputedStyle )
  {
    var style = document.defaultView.getComputedStyle(el, null);
    if ( style )
      return style[name];
  }
  // IE-specific
  else if ( el.currentStyle )
    return el.currentStyle[name];

  return null;
}

function expand(a, b){
  var x = document.getElementById(a);
  var y = document.getElementById(b);
  if(!x || !y)return true;
  if(getStyle(x, "visibility") == "visible"){
    x.style.visibility = "hidden";
    x.style.left = "-200px";
    y.style.left = "10px";
  } else {
    x.style.visibility = "visible";
    x.style.left = "0px";
    y.style.left = "210px";
  }
  return true;
}