import { BsFillCartFill } from "react-icons/bs";

const style = {
  eventItem: `flex px-4 py-5 font-medium`,
  event: `flex items-center`,
  eventIcon: `mr-2 text-xl`,
  eventName: `text-lg font-semibold`,
  eventPrice: `flex items-center`,
  eventPriceValue: `text-lg`,
  maticLogo: `h-5 mr-2 rounded-full`,
  accent: `text-[#2081e2]`,
};

const EventItem = ({ event }) => {
  return (
    <div className={style.eventItem}>
      <div className={`${style.event} flex-[2]`}>
        <div className={style.eventIcon}>
          <BsFillCartFill />
        </div>
        <div className={style.eventName}>Sale</div>
      </div>
      <div className={`${style.eventPrice} flex-[2]`}>
        <img
          src="https://gateway.pinata.cloud/ipfs/QmY3CUTEuFcUyktqh7BEVzeFYGdiAB5KD5Fn9cey69MhEZ"
          alt="matic"
          className={style.maticLogo}
        />
        <div className={style.eventPriceValue}>{event.price}</div>
      </div>
      <div className={`${style.accent} flex-[3]`}>{event.from}</div>
      <div className={`${style.accent} flex-[3]`}>{event.to}</div>
      <div className={`${style.accent} flex-[2]`}>{event.date}</div>
    </div>
  );
};

export default EventItem;
