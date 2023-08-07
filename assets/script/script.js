const selectOffer = (e) => {
  let value = e.target.value;
  if (value === "195") {
    const restElm = document.getElementsByClassName("restelm")[0];
    const selectedElm = document.getElementsByClassName("secondelm")[0];
    document.getElementById("show").removeAttribute("id");
    document.getElementById("selected").removeAttribute("id");
    restElm.id = "show";
    selectedElm.id = "selected";
  } else if (value === "345") {
    const restElm = document.getElementsByClassName("restelm")[1];
    const selectedElm = document.getElementsByClassName("thirdelm")[0];
    document.getElementById("show").removeAttribute("id");
    document.getElementById("selected").removeAttribute("id");
    restElm.id = "show";
    selectedElm.id = "selected";
  } else {
    const restElm = document.getElementsByClassName("restelm")[2];
    const selectedElm = document.getElementsByClassName("forthelm")[0];
    document.getElementById("show").removeAttribute("id");
    document.getElementById("selected").removeAttribute("id");
    restElm.id = "show";
    selectedElm.id = "selected";
  }
};
