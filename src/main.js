import Navigo from "navigo";
import HomePage from "./page/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector('#app').innerHTML = content;
};
router.on({
  "/": () => {
    print(HomePage.render())
  },
  "/contact": () => {
    print(ContactPage.render())
  },
});
router.resolve();