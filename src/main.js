import Navigo from "navigo";
import FooterClient from "./client/footer";
import AddNews from "./page/admin/news/addnews";
import ReadNews from "./page/admin/news/adlistnews";
import DetailPage from "./page/detail";
import UpdateNews from "./page/admin/news/editnews";
import HomePage from "./page/home";
import NotFoundPage from "./page/notfound";
import SignIn from "./page/signin";
import Signup from "./page/signup";
import DashboardAdmin from "./page/admin/dashboard";

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
    print(DashboardAdmin.render())
  },
  "/admin/news": () =>{
    print(ReadNews.render())
  },
  "/admin/news/:id/edit": ({ data }) =>{
      const { id } = data;
    print(UpdateNews.render(id))
  },
  "/admin/news/add": () =>{
      print(AddNews.render())
  }
});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();