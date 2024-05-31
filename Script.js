const myfunction = (id, Pid, Mid) => {
  let stl = document.getElementById(id);
  if (stl.style.display == "" || stl.style.display == "none") {
    document.getElementById(Pid).style.display = "none";
    document.getElementById(Mid).style.display = "block";
    stl.style.display = "block";
    stl.style.transitionDuration = "1s";
  } else {
    document.getElementById(Pid).style.display = "block";
    document.getElementById(Mid).style.display = "none";
    stl.style.display = "none";
  }
};
