import Header from "../../shared/Header/Header";
import Navber from "../../shared/Navber/Navber";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";

const News = () => {
    return ( 
        <div>
            <Header/>
            <Navber/>
            <div className="grid md:grid-cols-4">
            <div className="col-span-3">
           <h2 className="text-xl font-medium my-5">Dragon News</h2>
            </div>

            <div>


                <RightSideNav/>
            </div>
            </div>
        </div>
     );
}
 
export default News;