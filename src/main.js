import Navigo from "navigo";
import Dashboard from "./component/dashboard";
import AddNews from "./page/addnews";
import DetailPage from "./page/detail";
import HomePage from "./page/home";
import NotFoundPage from "./page/notfound";
import SignIn from "./page/signin";
import Signup from "./page/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector('#app').innerHTML = content;
};
router.on({
  "/": () => {
    print(HomePage.render())
  },
  "/signup": () => {
    print(Signup.render())
  },
  "/signin": () => {
    print(SignIn.render())
  },
  "/news/:id": ({ data }) =>{
    const { id } = data;
    print(DetailPage.render(id))
  },
  "/admin/dashboard": () =>{
    print(Dashboard.render())
  },
  "/admin/dashboard/readnews": () =>{
    print(Dashboard.render())
  },
  "/admin/news/add": () =>{
      print(AddNews.render())
  }
});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();