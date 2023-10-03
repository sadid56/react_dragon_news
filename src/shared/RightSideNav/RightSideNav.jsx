import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';
const RightSideNav = () => {
  return (
    <div>
      <div className="p-3 space-y-3">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn normal-case btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login with google
        </button>
        <button className="btn normal-case btn-outline w-full">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>

      <div className="p-3 ">
        <h2 className="text-xl font-bold mb-4">Find with Us</h2>
        <a className="p-2 flex items-center text-xl border rounded-t-md border-gray-500" href="">
            <FaFacebook className="text-blue-900"></FaFacebook>
            <span className="ml-2">Facebook</span>
        </a>

        <a className="p-2 flex items-center text-xl border-x border-gray-500" href="">
            <FaTwitter className="text-blue-400"></FaTwitter>
            <span className="ml-2">Twitter</span>
        </a>

        <a className="p-2 flex items-center text-xl border rounded-b-md border-gray-500" href="">
            <FaInstagram className="text-blue-900"></FaInstagram>
            <span className="ml-2">Instagram</span>
        </a>
      </div>
        {/* Qzon */}
        <div className="p-3 space-y-3">
        <h2 className="text-2xl font-bold">Login With</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
