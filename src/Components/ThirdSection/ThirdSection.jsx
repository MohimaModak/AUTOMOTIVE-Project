import React from "react";
import "./Style.css";

const ThirdSection = () => {
  return (
    <div className="m-10 mt-32">
      <div>
        <h1 className="text-6xl uppercase text-red-700 font-bold text-center">
          Contact
        </h1>
        <div className="flex justify-center mt-8 text-center">
          <p className=" w-2/3">
            With our theme options, creating a stunning car website is
            effortless. Customize every aspect, from colors and fonts to layouts
            and header designs. Our intuitive interface empowers car dealers to
            showcase their inventory beautifully, offering users an immersive
            and personalized experience.
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-3">
        <div className="contact rounded-md m-10 relative">
          <img
            src="https://images.pexels.com/photos/6059094/pexels-photo-6059094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcset=""
            className="w-[100%] h-[100%]"
          />

          <div className="contact-body w-[100%] h-[100%] absolute top-0 right-[-100%] backdrop-blur-sm text-left text-white">
            <div className="flex justify-center items-center h-[100vh] md:h-[70vh]">
              <div className="p-6">
                <h1 className="text-4xl mb-5">Meta</h1>
                <p>
                  Just like a physical office, we have a virtual space in the
                  metaverse. Customers can visit our digital headquarters, where
                  they can interact with virtual representatives, attend
                  meetings, or explore our services and products in an immersive
                  environment.
                </p>
                <button className="border w-full mt-5 rounded-3xl py-1">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact rounded-md m-10 relative">
          <img
            src="https://images.pexels.com/photos/18541789/pexels-photo-18541789/free-photo-of-dodge-challenger-in-smoke-while-drifitng.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            srcset=""
            className="w-[100%] h-[100%]"
          />

          <div className="contact-body w-[100%] h-[100%] absolute top-0 right-[-100%] backdrop-blur-sm text-left text-white">
            <div className="flex justify-center items-center h-[70vh]">
              <div className="p-6">
                <h1 className="text-4xl mb-5">Twitter</h1>
                <p>
                  By including our Twitter handle (e.g., @OurBusinessName) in
                  your tweet, you can publicly communicate with us. Other users
                  will be able to see your message, and we will be notified of
                  your mention.If you prefer a private conversation, you can
                  send us a Direct Message. To do this, navigate to our profile.
                </p>
                <button className="border w-full mt-5 rounded-3xl py-1">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact rounded-md m-10 relative">
          <img
            src="https://images.pexels.com/photos/15176807/pexels-photo-15176807/free-photo-of-woman-sitting-in-an-old-pick-up-truck-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            srcset=""
            className="w-[100%] h-[100%]"
          />

          <div className="contact-body w-[100%] h-[100%] absolute top-0 right-[-100%] backdrop-blur-sm text-left text-white">
            <div className="flex justify-center items-center h-[70vh]">
              <div className="p-6">
                <h1 className="text-4xl mb-5">Instagram</h1>
                <p>
                  The Stray Kids members have started to open individual
                  Instagram accounts! On August 2, Stray Kids' official Twitter
                  account announced the launch of personal Instagram accounts by
                  Bang Chan, Changbin, Hyunjin, Felix, Seungmin, and I.N. Bang
                  Chan Official Instagram is now open!
                </p>
                <button className="border w-full mt-5 rounded-3xl py-1">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
