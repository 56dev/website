function isPhone() {
    return window.matchMedia("(max-width: 767px").matches || /Mobi|Android|iPhone|iPod/.test(navigator.userAgent);
}
