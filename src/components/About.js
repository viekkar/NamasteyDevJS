import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div >
      <h1 className="flex justify-center p-14 font-bold text-4xl"> About us</h1>
      <div className="flex justify-center h-screen">
        <UserClass name={"vishnu class"} />
      </div>
    </div>
  );
};

export default About;
