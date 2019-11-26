
window.onload = function () {
    let me = {};
    let name = document.querySelectorAll("#js-settings-content > div.b-settings-profile-general > div > div.b-form-form.b-form-edittoggleform.is-readonly > dl:nth-child(1) > dd > div > div > span")[0].innerHTML;

    me.name = name;
    chrome.storage.local.set({ user: me }, function () {
        chrome.storage.local.get(["user"], function (result) {
            let myName = result.user.name;
            console.log("my name is ---" + myName);
        });
    });
    console.log(name)
}

