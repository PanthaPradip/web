function downloadFile() {
    var link = document.createElement("a");
    link.download = "myCv.pdf";
    link.href = "myCv.pdf";
    link.click();
}
