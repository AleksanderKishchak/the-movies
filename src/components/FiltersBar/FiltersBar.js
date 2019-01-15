import React from 'react';
import FormContainer from '../../containers/FormContainer';
import GenresListContainer from '../../containers/GenreListContainer';
import SortingBarContainer from '../../containers/SortingBarContainer';

function FiltersBar() {
  return (
    <div className="filters">
      <FormContainer />
      <SortingBarContainer />
      <GenresListContainer />
    </div>
  );
}

export default FiltersBar;
