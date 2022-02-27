import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';
describe('Pruebas en <GifGridItem />', () => {
    const props = { title: 'Title example', url: 'test.com' };
    const wrapper = shallow(<GifGridItem {...props} />)
    test('Debe de mostrar <GifGridItem />  correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(props.title);
    });

    test('Debe de tener la igual al url y alt de las props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(props.url);
        expect(img.prop('alt')).toBe(props.title);
    });

    test('Debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        
        expect(div.prop('className')).toContain('animate__fadeIn')
    });
} )