import React from 'react';

function SearchForm(props) {

  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    setQuery(props.searchQuery)
  }, [props.searchQuery]);

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function search(e) {
    e.preventDefault();
    props.onSearch(query);
  }

  return (
    <form action="#" className="search-form" onSubmit={search} >
      <input name="query" className="search-form__search-field" placeholder="Enter topic" value={query} onChange={handleQueryChange} required />
      <button aria-label="search button" className="search-form__search-button" type="submit">Search</button>
    </form>
  );
}

export default SearchForm;