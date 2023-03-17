import React from "react";
import "./Hobby.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap');
</style>;
const Hobby = () => {
  return (
    <div>
      <center className="mt-5 hobby">painting/cycling/cooking/reading</center>
      <div className="d-flex justify-content-center ">
        <img
          className="hobby_img"
          src="https://i.pinimg.com/564x/c9/17/c2/c917c227a5f17295fd379a700b53be89.jpg"
          alt="error"
        />
        <img
          className="hobby_img"
          src="https://i.pinimg.com/236x/45/b6/1a/45b61a34d1b7d00595a6f3b443d226ac.jpg"
          alt="error"
        />
        <img
          className="hobby_img"
          src="https://i.pinimg.com/564x/b8/1f/99/b81f999bbf9c315be5a5b11e736f4e4f.jpg"
          alt="error"
        />
        <img
          className="hobby_img"
          src="https://i.pinimg.com/236x/ba/a4/d3/baa4d31cd9856061e75ed1037774ce44.jpg"
          alt="error"
        />
      </div>
    </div>
  );
};

export default Hobby;
