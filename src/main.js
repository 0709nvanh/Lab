import Navigo from "navigo";
import DetailPage from "./page/detail";
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
  "/news/:id": ({ data }) =>{
    const { id } = data;
    print(DetailPage.render(id))
  },
});
router.resolve();