var observer = new MutationObserver(function (mutations) {
    if ($("#skip-button:26") != null) {
        $("#skip-button:26").click()
    }

    if ($(".ytp-ad-overlay-close-button") != null) {
        $(".ytp-ad-overlay-close-button").click()
    }
});
observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
