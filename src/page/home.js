import FooterClient from "../client/footer";
import HeaderClient from "../client/header";
import ActionList from "../component/actlist";
import NewsList from "../component/newslist";

const HomePage ={
    render() {
        return /* html */`
            ${HeaderClient.render()}
            <div class="">
                <div class="banner">
                    ${NewsList.render()}
                </div>
                
                <div class="news">
                    ${ActionList.render()}
                </div>
            </div>
            ${FooterClient.render()}
        `
    }
}
export default HomePage;