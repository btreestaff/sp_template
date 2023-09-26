import Index from "../routes/_index";
import Page1 from "../routes/page1";
import Page2 from "../routes/page2";
import Page3 from "../routes/page3";

const TITLE = "PROJECT TITLE";
const ROUTES = [
  { path: "/", title: undefined, element: <Index /> },
  { path: "/page1", title: "Page 1", element: <Page1 /> },
  { path: "/page2", title: "Page 2", element: <Page2 /> },
  { path: "/page3", title: "Page 3", element: <Page3 /> },
];

export { ROUTES, TITLE };

// path: the url to the page
// title: leave undefined if you do NOT want it to show in the navbar
// element: JSX component, needs to be imported
