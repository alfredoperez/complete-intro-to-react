import React from 'react';
import Search from '../Search';
import  ShowCard from '../ShowCard';
import { shallow } from 'enzyme';
import preload from '../../data.json';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search terms', () => {
  const component = shallow(<Search />);
  const searchWord = 'black';
  component.find('input').simulate('change', {target:{value:searchWord}});

 const showCount  = preload.shows
    .filter(
      show =>
        `${show.title} ${show.description}`.toUpperCase()
          .indexOf(searchWord.toUpperCase()) >=0
    ).length;

  expect(component.find(ShowCard).length).toEqual(showCount);
});
