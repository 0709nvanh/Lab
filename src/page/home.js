import ActionList from "../component/actlist";
import NewsList from "../component/newslist";

const HomePage ={
    render() {
        return /* html */`
            <div class="">
                <div class="banner">
                    ${NewsList.render()}
                </div>
                
                <div class="news">
                    ${ActionList.render()}
                </div>
            </div>
        `
    }
}
export default HomePage;