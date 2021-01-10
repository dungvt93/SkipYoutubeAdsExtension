var observer = new MutationObserver(function (mutations) {
    if ($(".ytp-ad-skip-button") != null) {
        $(".ytp-ad-skip-button").click()
    }

    if ($(".ytp-ad-overlay-close-button") != null) {
        $(".ytp-ad-overlay-close-button").click()
    }
});
observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
