const Portfolio = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const categories = allCategories;

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter(
      (item) => item.category === category
    );

    setMenuItems(newItems);
  };

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <Categories
        categories={categories}
        filterItems={filterItems}
      />

      <Menu items={menuItems} />
    </article>
  );
};