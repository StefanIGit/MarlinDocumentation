$( document ).ready(function() {
    $('#toc').toc({
        'selectors':        (typeof  toc_selectors != 'undefined') ? toc_selectors : 'h1,h2,h3',
        'activeClass':      'active',
        'prefix':           'toc-',

        'scrollToOffset':   70,
        'highlightOffset':  70,

        'itemClass': function(i, heading, $heading, prefix) {
            return 'clearfix ' + prefix + $heading[0].tagName.toLowerCase();;
        }
    });
});
