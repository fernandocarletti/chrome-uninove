(function () {
    if (localStorage.getItem('installed')) {
        return;
    }

    localStorage.installed = true;
    chrome.tabs.create({ url: 'options.html' });
})();
