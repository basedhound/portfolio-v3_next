import styles from "./gallery.module.scss";

interface FilterProps {
  activeFilter: string;
  handleFilter: (filter: string) => void;
}

const Filter = ({ activeFilter, handleFilter }: FilterProps) => {
  return (
    <div className={styles.filter} >
      <button
         className={`${styles.filterTag} ${
        activeFilter === "all" ? styles.active : ""
      }`}
        onClick={() => handleFilter("all")}>
        All
      </button>
      {["App", "Design", "Next", "React", "Mobile"].map((filter) => (
        <button
          key={filter}
            className={`${styles.filterTag} ${
          activeFilter === filter ? styles.active : ""
        }`} 
          onClick={() => handleFilter(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
