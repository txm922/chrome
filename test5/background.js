chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                // When a page contains the 'cybozu.com/k/' url...
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { urlContains: 'cybozu.com/k/' },
                })
            ],
            // ... show the page action.
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.pageAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: 'document.getElementsByClassName("input-text-cybozu")[0].style.backgroundColor="red"'
    });
})