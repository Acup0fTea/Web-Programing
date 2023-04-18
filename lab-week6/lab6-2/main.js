function toggleDetails() {
  var summaryElement = document.getElementById("summary");
  if (summaryElement.innerText === "Show Details") {
    summaryElement.innerText = "Hide Details";
  } else {
    summaryElement.innerText = "Show Details";
  }
}
