export const cookieName = 'js-snake-score';

export function checkCookie(cookieName) {
    var nameEQ = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export function setCookie(highScore) {
    // document.cookie = 'js-snake-score=' + "1" + '; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'

    var date = new Date(), expires = 'expires=';
    date.setDate(date.getDate() + 1); // 1day expired
    // date.setTime(date.getTime() + (30 * 60 * 60 * 1000));
    // expires += date.toGMTString();
    expires += date;
    document.cookie = cookieName + '=' + highScore.toString() + '; ' + expires + '; path=/';
};