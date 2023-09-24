import React from "react";

const StoryCard = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      <div className="relative h-full rounded shadow-lg">
        <img
          src="https://i.ibb.co/2NjDN5c/cycle.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-gradient-to-t from-black to-black/5  opacity-50"></div>
        <div className="absolute bottom-0 text-white mx-2 my-2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ipsum exercitationem culpa nobis voluptate praesentium
            ex sint hic consectetur quaerat obcaecati rem, officiis enim sed!
            Quisquam quas hic sint sed.
          </p>
        </div>
      </div>

      <div className="relative h-full rounded shadow-lg">
        <img
          src="https://i.ibb.co/K66txK0/golf.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-gradient-to-t from-black to-black/5  opacity-50"></div>
        <div className="absolute bottom-0 text-white mx-2 my-2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ipsum exercitationem culpa nobis voluptate praesentium
            ex sint hic consectetur quaerat obcaecati rem, officiis enim sed!
            Quisquam quas hic sint sed.
          </p>
        </div>
      </div>

      <div className="relative h-full rounded shadow-lg">
        <img
          src="https://i.ibb.co/yYXGMz5/rugby.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-gradient-to-t from-black to-black/5 opacity-80"></div>
        <div className="absolute bottom-0 text-white mx-2 my-2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ipsum exercitationem culpa nobis voluptate praesentium
            ex sint hic consectetur quaerat obcaecati rem, officiis enim sed!
            Quisquam quas hic sint sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
