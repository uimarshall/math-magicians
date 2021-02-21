import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';
import Button from '../components/Button';

const clickHandler = () => { ''; };

describe('ButtonPanel', () => {
  test('renders ButtonPanel component', () => {
    const nonExist = 'No such text';

    render(<ButtonPanel clickHandler={clickHandler}><Button name="AC" clickHandler={clickHandler} /></ButtonPanel>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});
