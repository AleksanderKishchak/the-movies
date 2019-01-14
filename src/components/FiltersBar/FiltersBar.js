import React from 'react';
import FormContainer from '../../containers/FormContainer';
import GenresListContainer from '../../containers/GenreListContainer';

function FiltersBar() {
  return (
    <div className="filters">
      <FormContainer />
      <GenresListContainer />
    </div>
  );
}

export default FiltersBar;
