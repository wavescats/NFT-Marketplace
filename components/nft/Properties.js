import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
import { MdSubject } from "react-icons/md";

const style = {
  wrapper: `w-1/3 mt-8 border border-[#151b22] rounded-xl bg-[#303339] overflow-hidden`,
  title: `bg-[#262b2f] px-6 py-4 flex items-center`,
  titleLeft: `flex-1 flex items-center text-xl font-bold`,
  titleIcon: `text-3xl mr-2`,
  titleRight: `text-xl`,
};

const Properties = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={style.wrapper}>
      <div className={style.title} onClick={() => setToggle(!toggle)}>
        <div className={style.titleLeft}>
          <span className={style.titleIcon}>
            <MdSubject />
          </span>
          Description
        </div>
        <div className={style.titleRight}>
          {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
    </div>
  );
};

export default Properties;
