
// HamburgerMenu ☰ MIT License

const hamburgerMenu = {

  version: '{{pkg.version}}',

  selectItem(event) {
     const item = $(event.target).closest('li');
     item.closest('aside').find('li').removeClass('current');
     item.addClass('current');
     const nav = item.closest('.hamburger-menu').addClass('collapse-menu');
     const eventRoutes = {};
     const restoreAllowExand = () => {
        nav.removeClass('collapse-menu');
        console.log('restoreAllowExand');
        $(globalThis.document).off(eventRoutes);
        };
     eventRoutes.click =     restoreAllowExand;
     eventRoutes.mousemove = restoreAllowExand;
     const afterCurrentClick = 100;
     globalThis.setTimeout(() => $(globalThis.document).on(eventRoutes), afterCurrentClick);
     },

  setup() {
     $(globalThis.document).on({ click: $.noop });  //workaround for sticky hover on mobile
     const nav = $('nav.hamburger-menu');
     const autoHighlightMultiPage = () => {
        const current = {
           url:  new globalThis.URL(globalThis.location.href),
           path: globalThis.location.pathname.replace(/\/$/, ''),
           };
        const isCurrent = (i, elem) => {
           const linkUrl = new globalThis.URL($(elem).attr('href'), current.url);
           return linkUrl.pathname.replace(/\/$/, '') === current.path;
           };
        nav.find('li >a').filter(isCurrent).first().closest('li').addClass('current');
        };
     const autoHighlightSinglePageApp = () =>
        nav.find('>aside li').on({ click: hamburgerMenu.selectItem });
     const autoHighlight = () => {
        autoHighlightMultiPage();
        autoHighlightSinglePageApp();
        };
     if (!nav.find('>aside').hasClass('disable-auto-highlight'))
        autoHighlight();
     },

  };

$(hamburgerMenu.setup);