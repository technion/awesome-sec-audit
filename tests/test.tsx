import * as React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import * as renderer from 'react-test-renderer';

//import * as renderer from 'react-test-renderer';
import Start from '../assets/awesome-sec-audit.tsx';

test('render displays correctly', () => {

    const component = mount(
            <Start />
    );

    let tree = mountToJson(component);
    expect(tree).toMatchSnapshot();

    component.find("button").simulate("click");

    tree = mountToJson(component);
    expect(tree).toMatchSnapshot();

    component.find("input").get(0).value = "29";
    component.find("button").simulate("click");
    tree = mountToJson(component);
    expect(tree).toMatchSnapshot();

};
