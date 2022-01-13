import Navigo from "navigo";
import Dashboard from "./component/dashboard";
import AddNews from "./page/addnews";
import ReadNews from "./page/adlistnews";
import DetailPage from "./page/detail";
import UpdayeNews from "./page/editnews";
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
  "/admin/news": () =>{
    print(ReadNews.render())
  },
  "/admin/news/:id/edit": ({ data }) =>{
      const { id } = data;
    print(UpdayeNews.render(id))
  },
  "/admin/news/add": () =>{
      print(AddNews.render())
  }
});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();