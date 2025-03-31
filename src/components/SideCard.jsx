import styles from "./sideCard.module.css";

function SideCard({ data: { image, title } }) {
  return (
    <div className="flex items-center bg-[#1B263B] rounded-md cursor-pointer hover:bg-[#202e41] p-2">
      <img className="w-10 rounded-md" src={image} alt={title} />
      <p className="text-white text-sm ml-2">{title}</p>
    </div>
  );
}

export default SideCard;
