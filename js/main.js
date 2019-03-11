window.twttr = (function (d,s,id) {

    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
    js.src="https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });

}(document, "script", "twitter-widget-0"));

twttr.ready(function (twttr) {

    twttr.widgets.load();
    setInterval(function() {
        twttr.widgets.load();
        console.log("update twitter timeline every minute.");
    }, 60 * 1000);

});