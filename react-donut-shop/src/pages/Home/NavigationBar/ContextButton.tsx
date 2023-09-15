import Style from "./ContextButton.module.css";

interface Props {
  children: string;
  inactiveImage: string;
  activeImage: string;
  selected: boolean;
  onClick(): void;
}

const ContextButton = ({
  children,
  inactiveImage,
  activeImage,
  selected,
  onClick,
}: Props) => {
  return (
    <button
      onClick={() => onClick()}
      className={[Style.pickupBtn, selected && Style.selectedMode].join(" ")}
    >
      <img src={selected ? activeImage : inactiveImage} alt="store-photo" />
      <span>{children}</span>
    </button>
  );
};

export default ContextButton;
