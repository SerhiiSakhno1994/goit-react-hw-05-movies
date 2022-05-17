import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

import { ReactComponent as Add } from '../icons/magnifier.svg';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [picturesName, setPicturesName] = useState('');

  const handleNameChange = event => {
    setPicturesName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (picturesName.trim() === '') {
      return Notify.warning('Enter the text of the request');
    }
    onSubmit(picturesName);
    setPicturesName('');
  };

  return (
    <div className={s.Searchbar}>
      <form className={s.Form} onSubmit={handleSubmit}>
        <input
          className={s.Input}
          type="text"
          value={picturesName}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleNameChange}
        />
        <button type="submit" className={s.Button}>
          <Add />
        </button>
      </form>
    </div>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
