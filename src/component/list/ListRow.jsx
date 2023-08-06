import styles from "./ListRow.module.css";

const ListCell = ({ children , setSelectedOrder , index }) => {


  return <tr  className={styles.cell}>{children}</tr>;
};

export default ListCell;
