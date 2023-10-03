import { useLoaderData } from "react-router-dom";
import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftSideNev/LeftSideNev";
import Navber from "../../shared/Navber/Navber";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import BreackingNews from "./BrackingNews/BreackingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return ( 
        <div>
            <Header></Header>
            <BreackingNews></BreackingNews>
            <Navber></Navber>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h2 className="text-3xl font-semibold">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
     );
}
 
export default Home;