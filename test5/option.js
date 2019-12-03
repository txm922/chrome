let saveBtn = this.document.getElementById("mybutton");
let getBtn = this.document.getElementById("getbutton");
let inputField = this.document.getElementById("myinput");
let outputField = this.document.getElementById("getinput");

saveBtn.addEventListener("click", function () {
    let importValue = inputField.value;
    chrome.storage.local.set({ "myInput": importValue }, function () {
        console.log("value is " + importValue);
    });
});

getBtn.addEventListener("click", function () {
    chrome.storage.local.get(["myInput"], function (result) {
        //console.log("value is " + importValue);
        outputField.value = result.myInput;
    });
});
