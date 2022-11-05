import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
  maticLogo: `h-6 mr-2 rounded-full`,
};

const NFTImage = ({ selectedNft }) => {
  return (
    <div>
      <div className={style.topBar}>
        <div className={style.topBarContent}>
          <img
            src="https://gateway.pinata.cloud/ipfs/QmY3CUTEuFcUyktqh7BEVzeFYGdiAB5KD5Fn9cey69MhEZ"
            alt="matic"
            className={style.maticLogo}
          />
          <div className={style.likesCounter}>
            <AiOutlineHeart />
            87
          </div>
        </div>
      </div>
      <div>
        <img src={selectedNft?.image} className="rounded-b-2xl" />
      </div>
    </div>
  );
};

export default NFTImage;
