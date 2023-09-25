import Style from "./ContextMenu.module.css";

interface Props {
  children: React.ReactNode;
}

const ContextMenu = ({ children }: Props) => {
  return <article className={Style.context}>{children}</article>;
};

export default ContextMenu;
