const SearchBar = () => {
  return (
    <>
      <div class="search-top">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="search-form">
                <form>
                  <div class="sf-type">
                    <div class="sf-input">
                      <input
                        type="text"
                        id="sf-box"
                        placeholder="Search course and discount courses"
                      />
                    </div>
                  </div>
                  <div class="sf-submit">
                    <input type="submit" value="Search" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
