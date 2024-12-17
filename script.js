class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /#_PURE_/(
      React.createElement("div", null, /#_PURE_/
      React.createElement(Menu, null), /#_PURE_/
      React.createElement(MainContent, null)));


  }}


const Menu = () => {
  return /#_PURE_/(
    React.createElement("div", { id: "menu-bar", class: "menu-bar" }, /#_PURE_/
    React.createElement("span", null, /#_PURE_/React.createElement("a", { href: "#" }, /#_PURE_/React.createElement("img", { src: "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg", alt: "Spotify Logo" }))), /#_PURE_/
    React.createElement("nav", { class: "navbar" }, /#_PURE_/
    React.createElement("ul", null, /#_PURE_/
    React.createElement("li", null, /#_PURE_/React.createElement("a", { class: "active", href: "#" }, /#_PURE_/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /#_PURE_/React.createElement("path", { d: "M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z", fill: "currentColor" })), "Home")), /#_PURE_/
    React.createElement("li", null, /#_PURE_/React.createElement("a", { href: "#" }, /#_PURE_/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /#_PURE_/React.createElement("path", { d: "M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z", fill: "currentColor", "fill-rule": "evenodd" })), "Search")), /#_PURE_/
    React.createElement("li", null, /#_PURE_/React.createElement("a", { href: "#" }, /#_PURE_/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /#_PURE_/React.createElement("path", { d: "M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z", fill: "currentColor" })), "Your Library")))), /#_PURE_/



    React.createElement("nav", { class: "user-collection" }, /#_PURE_/
    React.createElement("ul", null, /#_PURE_/
    React.createElement("li", null, /#_PURE_/React.createElement("a", { href: "#" }, /#_PURE_/React.createElement("i", { class: "fa fa-plus-square fa-lg", "aria-hidden": "true" }), "Create Playlist")), /#_PURE_/
    React.createElement("li", null, /#_PURE_/React.createElement("a", { href: "#" }, /#_PURE_/React.createElement("i", { class: "fa fa-heart fa-lg", "aria-hidden": "true" }), "Liked Songs")), /#_PURE_/
    React.createElement("li", null, /#_PURE_/React.createElement("a", { href: "#" }, /#_PURE_/React.createElement("i", { class: "fa fa-podcast fa-lg", "aria-hidden": "true" }), "Your Episodes")))), /#_PURE_/



    React.createElement("span", { class: "install-app" }, /#_PURE_/React.createElement("a", { href: "#" }, /#_PURE_/React.createElement("i", { class: "fa fa-arrow-circle-down fa-lg", "aria-hidden": "true" }), "Install App"))));


};

const MainContent = () => {
  return /#_PURE_/(
    React.createElement("div", { class: "main-content" }, /#_PURE_/
    React.createElement(Header, null), /#_PURE_/
    React.createElement(Body, null)));


};

const Header = () => {
  const [profileVisibility, setProfileVisibility] = React.useState('hidden');
  const handleClick = () => {
    if (profileVisibility == 'hidden') {
      setProfileVisibility('visible');
    } else
    {
      setProfileVisibility('hidden');
    }
  };

  const [menuBarVisibility, setMenuBarVisibility] = React.useState('visible');
  const handleMenuBar = () => {
    if (menuBarVisibility == 'hidden') {
      setMenuBarVisibility('visible');
      document.getElementById('bar1').style.transform = 'none';
      document.getElementById('bar1').style.transition = 'transform .4s ease';
      document.getElementById('bar2').style.opacity = 1;
      document.getElementById('bar2').style.transition = 'opacity .5s ease';
      document.getElementById('bar3').style.transform = 'none';
      document.getElementById('bar3').style.transition = 'transform .4s ease';
      document.getElementById('menu-bar').style.transition = 'visibility .2s ease-in-out';
    } else
    {
      setMenuBarVisibility('hidden');
      document.getElementById('bar1').style.transform = 'rotate(-45deg) translate(-9px, 6px)';
      document.getElementById('bar1').style.transition = 'transform .4s ease';
      document.getElementById('bar2').style.opacity = 0;
      document.getElementById('bar2').style.transition = 'opacity .5s ease';
      document.getElementById('bar3').style.transform = 'rotate(45deg)translate(-5px, -3px)';
      document.getElementById('bar3').style.transition = 'transform .4s ease';
      document.getElementById('menu-bar').style.transition = 'visibility .2s ease-n-out';

    }
    document.getElementById('menu-bar').style.visibility = menuBarVisibility;
  };
  return /#_PURE_/(
    React.createElement("header", null, /#_PURE_/
    React.createElement("div", null, /#_PURE_/
    React.createElement("div", { onClick: handleMenuBar, class: "hamburger" }, /#_PURE_/
    React.createElement("div", { id: "bar1", class: "bar1" }), /#_PURE_/
    React.createElement("div", { id: "bar2", class: "bar2" }), /#_PURE_/
    React.createElement("div", { id: "bar3", class: "bar3" })), /#_PURE_/

    React.createElement("div", { class: "dropdown" }, /#_PURE_/
    React.createElement("button", { onClick: handleClick }, /#_PURE_/
    React.createElement("i", { class: "fa fa-user-circle fa-lg", "aria-hidden": "true" }), "curious_coder", /#_PURE_/

    React.createElement("i", { className: fa fa-caret-${profileVisibility == 'hidden' ? 'down' : 'up'}, "aria-hidden": "true" })), /#_PURE_/

    React.createElement("ul", { style: { visibility: ${profileVisibility} } }, /#_PURE_/
    React.createElement("li", null, /#_PURE_/React.createElement("a", { href: "#", target: "_blank" }, "Account", /#_PURE_/React.createElement("i", { class: "fa fa-external-link", "aria-hidden": "true" }))), /#_PURE_/

    React.createElement("li", null, /#_PURE_/React.createElement("a", { href: "#" }, "Profile")), /#_PURE_/
    React.createElement("li", null, /#_PURE_/React.createElement("a", { href: "#" }, "Log Out")))))));





};

const Body = () => {
  const hours = new Date().getHours();
  const greeting = hours < 12 ? "Morning" : hours < 17 ? "Afternoon" : "Evening";

  return /#_PURE_/(
    React.createElement("main", null, /#_PURE_/
    React.createElement("div", { class: "greeting" }, /#_PURE_/
    React.createElement("h2", null, "Good ", greeting)), /#_PURE_/


    React.createElement("div", { class: "recent-activity" }, /#_PURE_/
    React.createElement("div", { class: "activity-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://seed-mix-image.spotifycdn.com/v6/img/pop/4AK6F7OLvEQ5QYCBNiQWHq/en/default", alt: "Pop Mix playlist cover photo" })), /#_PURE_/

    React.createElement("p", null, "Pop Mix")), /#_PURE_/

    React.createElement("div", { class: "activity-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f854bce22cb0e6890dba92dd8", alt: "The Athletic Football Tactics Podcast cover photo" })), /#_PURE_/

    React.createElement("p", null, "The Athletic Football Tactics Podcast")), /#_PURE_/

    React.createElement("div", { class: "activity-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002b75cdf3f088c129cc350c0f8", alt: "This Is One Direction playlist cover photo" })), /#_PURE_/

    React.createElement("p", null, "This Is One Direction")), /#_PURE_/

    React.createElement("div", { class: "activity-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab6761610000e5eb6e9a17ce6d67c02312e3fb89", alt: "Alessia Cara cover photo" })), /#_PURE_/

    React.createElement("p", null, "Alessia Cara")), /#_PURE_/

    React.createElement("div", { class: "activity-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb26dbdbdacda5c30dc95e0c2c/3/en/default", alt: "Daily Mix 3 playlist cover photo" })), /#_PURE_/

    React.createElement("p", null, "Daily Mix 3")), /#_PURE_/

    React.createElement("div", { class: "activity-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706f000000021373358fa4ff03aac54f188e", alt: "All Out 10s playlist cover photo" })), /#_PURE_/

    React.createElement("p", null, "All Out 10s"))), /#_PURE_/



    React.createElement("div", { class: "category" }, /#_PURE_/
    React.createElement("div", { class: "title" }, /#_PURE_/
    React.createElement("h3", null, "Your Shows"), /#_PURE_/
    React.createElement("a", { href: "#" }, "SEE ALL")), /#_PURE_/

    React.createElement("div", null, /#_PURE_/
    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/a3313c9ff4f806345e71728b502022782e92cf34", alt: "HTML All The Things podcast cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "HTML All The Things"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. Matt & Mike")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f854bce22cb0e6890dba92dd8", alt: "The Athletic Football Podcast cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "The Athletic Football Podcast"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. The Athletic")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1fcf5b0c37fe67ebbcdceb930b", alt: "Headline: Breaking Football News playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Headline: Breaking Football News"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. The Athletic")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/fedc8e1c8b93cc9b8e49e8e101ec9d9b8795d1fe", alt: "Raj Prakash Paul playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Raj Prakash Paul"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. Raj Prakash Paul")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f6d655e4364ad1ed1dad7a83d", alt: "The Here We Go Podcast cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "The Here We Go Podcast"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. Here We Go")))), /#_PURE_/




    React.createElement("div", { class: "category" }, /#_PURE_/
    React.createElement("div", { class: "title" }, /#_PURE_/
    React.createElement("h3", null, "Made For curious_coder"), /#_PURE_/
    React.createElement("a", { href: "#" }, "SEE ALL")), /#_PURE_/

    React.createElement("div", null, /#_PURE_/
    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb031619e5eb9ed3b9806b648b/1/en/default", alt: "Daily Mix 1 cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Daily Mix 1"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Ella Mai, Shawn Mendes, Jason Derulo")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6e9a17ce6d67c02312e3fb89/2/en/default", alt: "Daily Mix 2 cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Daily Mix 2"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Alessia Cara, 5 Seconds Of Summer")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb26dbdbdacda5c30dc95e0c2c/3/en/default", alt: "Daily Mix 3 cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Daily Mix 3"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Taylor Swift, Fifth Harmony")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7aff8a274fcec288dd534abc/4/en/default", alt: "Daily Mix 4 cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Daily Mix 4"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Jesus Culture, Bethel Music")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb70859a2e628fd00e8be3a696/5/en/default", alt: "Daily Mix 5 cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Daily Mix 5"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Benny Joshua, Allen Ganta")))), /#_PURE_/




    React.createElement("div", { class: "category" }, /#_PURE_/
    React.createElement("div", { class: "title" }, /#_PURE_/
    React.createElement("h3", null, "Charts"), /#_PURE_/
    React.createElement("a", { href: "#" }, "SEE ALL")), /#_PURE_/

    React.createElement("div", null, /#_PURE_/
    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg", alt: "Top 50 India playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Top 50 India")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002b545db24c5864981ff896f07", alt: "Hot Hits India playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Hot Hits India")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg", alt: "Top 50 Global playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Top 50 Global")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706c0000da84fc156bed23ef2df5814fb190", alt: "Top Albums - Global playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Top Albums - Global")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg", alt: "Viral 50 - India playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Viral 50 - India")))), /#_PURE_/




    React.createElement("div", { class: "category" }, /#_PURE_/
    React.createElement("div", { class: "title" }, /#_PURE_/
    React.createElement("h3", null, "Best Of Artists"), /#_PURE_/
    React.createElement("a", { href: "#" }, "SEE ALL")), /#_PURE_/

    React.createElement("div", null, /#_PURE_/
    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706f000000021230c7f75023a90181e914a0", alt: "This is Alessia Cara playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "This Is Alessia Cara")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002a0a577ed169a7792c9363d6c", alt: "This is Hillsong Worship playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "This Is Hillsong Worship")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002181896dd694bc09e4a0f13c8", alt: "This is Camila Cabello playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "This Is Camila Cabello")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706f000000027988283d13d5654287988494", alt: "This is Shawn Mendes playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "This Is Shawn Mendes")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002b75cdf3f088c129cc350c0f8", alt: "This is One Direction playlist cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "This Is One Direction")))), /#_PURE_/




    React.createElement("div", { class: "category final-category" }, /#_PURE_/
    React.createElement("div", { class: "title" }, /#_PURE_/
    React.createElement("div", { class: "popular-shows" }, /#_PURE_/
    React.createElement("p", null, "POPULAR WITH LISTENERS OF"), /#_PURE_/
    React.createElement("h3", null, "Headline: Breaking Football News")), /#_PURE_/

    React.createElement("a", { href: "#" }, "SEE ALL")), /#_PURE_/

    React.createElement("div", null, /#_PURE_/
    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f6070c8c3beddfeef90cd9044", alt: "Football Cliches podcast cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Football Cliches"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. The Athletic")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1fff3db692e1f2dbe7c73951e2", alt: "The Athletic Football Podcast podcast cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "The Athletic Football Podcast"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. The Athletic")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1fea8a7821ffed11a7bfe73c71", alt: "Beyond the Headline podcast cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "Beyond the Headline"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. The Athletic")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f31a9464d4951d231128babc6", alt: "The Next Big Thing podcast cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "The Next Big Thing"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. The Athletic")), /#_PURE_/

    React.createElement("div", { class: "category-info" }, /#_PURE_/
    React.createElement("div", { class: "img-div" }, /#_PURE_/
    React.createElement("img", { src: "https://i.scdn.co/image/bdd990bddb85baa44c320b2ffba328549e184643", alt: "The Scouted Football Podcast podcast cover photo" })), /#_PURE_/

    React.createElement("p", { class: "category-name" }, "The Scouted Football Podcast"), /#_PURE_/
    React.createElement("p", { class: "author" }, "Show. Scouted Football"))))));





};

ReactDOM.render( /#_PURE_/React.createElement(App, null), document.getElementById('root'));
