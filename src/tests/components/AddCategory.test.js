import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import AddCategory from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => { 
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', ()=> {
        const input = wrapper.find('input');
        const value = 'Hi mom';

        input.simulate('change', { target: { value }});
        const h3 = wrapper.find('h3');

        expect(h3.text().trim()).toBe(value);

    });

    test('No debe de postear con submit', () => { 
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
     });
     test('debe de llamar el setCategories y limpiar el input', () => { 
        const input = wrapper.find('input');
        const value = 'Hi World!';

        input.simulate('change', { target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect(input.prop('value')).toBe('');
      })
 });