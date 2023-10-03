import Marquee from "react-fast-marquee";
const BreackingNews = () => {
    return ( 
        <div className="flex items-center border p-3 rounded-md">
            <button className="btn btn-secondary">Latest</button>
            <Marquee className="ml-5 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, culpa eveniet doloremque aliquam asperiores temporibus unde dignissimos sunt provident ipsam.</Marquee>
        </div>
     );
}
 
export default BreackingNews;