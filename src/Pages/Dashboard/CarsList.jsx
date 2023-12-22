import axios from "axios";
// import "../../Pages/Dashboard/Dashboard.css";
import "../../Pages/Dashboard/CarsList.css";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { images } from "../../assets/index.js";

function CarsList({ toggle, setToggle, view, setView }) {
  const handleDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:5000/api/delete-agent/${id}`
    );
    console.log(res.data);
  };
  const agent = [
    {
      name: "Sport Car",
      phone: "09076524078",
      email: "onifade@gmail.com",
      experience: "Expert",
      qualification: "B,Tech",
      facebook: "",
      instagram: "",
      linkedin: "",
      model: "Prime Sport",
      engine: "V-Engine reg",
      year: 2024,
    },
    {
      name: "VolkWagon",
      phone: "09076524078",
      email: "onifade@gmail.com",
      experience: "Expert",
      qualification: "B,Tech",
      facebook: "",
      instagram: "",
      linkedin: "",
      engine: "V-Engine reg",
      year: 2024,
      model: "Volkwagon G5",
    },
  ];
  return (
    <div className="w-full p-5 gen-container">
      <div class="relative agent-list-con">
        <p class="dashbord-title text-2xl font-bold">List Of Cars</p> <br />

        <div className="flex my-5 agent-list-tables">
          <p className="w-[7%] text-center text-sm font-[500]">Image</p>
          <p className="w-[13%] text-center  text-sm font-[500]">Name</p>
          <p className="w-[10%] truncate  text-center text-sm font-[500]">
            Model
          </p>
          <p className="w-[10%] truncate text-center text-sm font-[500]">
            Year
          </p>
          <p className="w-[13%] truncate text-center text-sm font-[500]">
            Engine type
          </p>
          <p className="w-[20%] text-center text-sm font-[500]">Social media</p>

          <p className="w-[25%] text-center text-sm font-[500] " id="actions">Actions</p>
        </div>
        <div className="gencontainer">
        {agent &&
          agent.map((agent, index) => {
            return (
              <div className="dashbord-agent mt-5" key={index}>
                <div className="agent-box-container ">
                  <div className="dashbord-agent-box flex items-center">
                    <div className="image-con w-[7%]">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden img-div">
                        <img
                          src={images.racing}
                          alt=""
                          className="w-[50px] h-[50px] rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="name-con w-[13%]">
                      <p class="name text-sm">{agent.name}</p>
                    </div>
                    <div className="name-con w-[13%]">
                      <p class="name text-sm ">{agent.model}</p>
                    </div>
                    <div className="name-con w-[10%]">
                      <p class="name text-sm ">{agent.year}</p>
                    </div>
                    <div className="name-con w-[13%] ">
                      <p class="name text-sm ">{agent.engine}</p>
                    </div>

                    <div className="icons-container w-[20%] flex justify-center items-center   gap-2">
                      <span>
                        <a href={agent.twitter}>
                          <i class="fa-brands fa-twitter">
                            <BiLogoTwitter size={18} />
                          </i>
                        </a>
                      </span>
                      <span>
                        <a href={agent.facebook}>
                          <i class="fa-brands fa-facebook-f">
                            <BiLogoFacebook size={18} />
                          </i>
                        </a>
                      </span>
                      <span>
                        <a href={agent.linkedin}>
                          <i class="fa-brands fa-linkedin-in">
                            <BiLogoLinkedin size={18} />
                          </i>
                        </a>
                      </span>
                      <span>
                        <a href={agent.instagram}>
                          <i class="fa-brands fa-instagram">
                            <BiLogoInstagram size={18} />
                          </i>
                        </a>
                      </span>
                    </div>

                    <div className="w-[25%] socialmedia">
                      <button
                        type="submit"
                        onClick={() => setView(!view)}
                        className="bg-slate-600 text-white py-2 px-3 rounded-md mx-2 text-sm"
                      >
                        View
                      </button>
                      <button
                        type="submit"
                        onClick={() => setToggle(!toggle)}
                        className="bg-[green] text-white py-2 px-3 rounded-md mx-2 text-sm"
                      >
                        Addtime
                      </button>
                      <button
                        type="submit"
                        className="bg-[red] text-white py-2 px-3 rounded-md mx-2 text-sm"
                        onClick={() => handleDelete(agent._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  </div>
  );
}

export default CarsList;
