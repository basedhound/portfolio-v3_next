import styles from "./search.module.scss";

const Search = () => {
  return (

    <div className={styles.searchWrapper}>
      <div className={styles.searchBar}>Searchbar</div>
      <div className={styles.filter}>Filter</div>
    </div>
  )
}

export default Search