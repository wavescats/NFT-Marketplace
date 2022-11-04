import { useEffect, useState } from "react";
import { HiTag } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
  statValue: `flex mr-4 text-2xl font-bold pt-6 pb-6`,
  maticLogo: `h-6 mr-4 mt-1 rounded-full`,
  maticDoller: `ml-4 mt-2 text-base font-normal`,
};

const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
  const [selectedMarketNft, setSelectedMarketNft] = useState();
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    if (!listings || isListed === "false") return;
    (async () => {
      setSelectedMarketNft(
        listings.find(marketNft => marketNft.asset?.id === selectedNft.id)
      );
    })();
  }, [selectedNft, listings, isListed]);

  useEffect(() => {
    if (!selectedMarketNft || !selectedNft) return;

    setEnableButton(true);
  }, [selectedMarketNft, selectedNft]);

  const confirmPurchase = (toastHandler = toast) =>
    toastHandler.success(`Purchase successful!`, {
      style: {
        background: "#04111d",
        color: "#fff",
      },
    });

  const buyItem = async (
    listingId = selectedMarketNft.id,
    quantityDesired = 1,
    module = marketPlaceModule
  ) => {
    await module
      .buyoutDirectListing({
        listingId: listingId,
        quantityDesired: quantityDesired,
      })
      .catch(error => console.error(error));

    confirmPurchase();
  };

  return (
    <div className="h-40 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
      <Toaster position="bottom-left" reverseOrder={false} />

      {isListed === "true" ? (
        <>
          <div className={style.statValue}>
            <img
              src="https://gateway.pinata.cloud/ipfs/QmY3CUTEuFcUyktqh7BEVzeFYGdiAB5KD5Fn9cey69MhEZ"
              alt="matic"
              className={style.maticLogo}
            />
            0.01 MATIC
            <span className={style.maticDoller}>$ 0.013</span>
          </div>

          <div className={`flex`}>
            <div
              onClick={() => {
                enableButton ? buyItem(selectedMarketNft.id, 1) : null;
              }}
              className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
            >
              <IoMdWallet className={style.buttonIcon} />
              <div className={style.buttonText}>Buy Now</div>
            </div>
            <div
              className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
            >
              <HiTag className={style.buttonIcon} />
              <div className={style.buttonText}>Make Offer</div>
            </div>
          </div>
        </>
      ) : (
        <div className={`flex mt-14`}>
          <div className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
            <IoMdWallet className={style.buttonIcon} />
            <div className={style.buttonText}>List Item</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeOffer;
