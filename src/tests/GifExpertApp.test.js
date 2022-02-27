import GifExpertApp from "../GifExpertApp";
import { shallow } from 'enzyme';

describe('GifExpertApp test', () => {
    test('should render correctly', () => { 
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
     });

    test('should render a list of categories', () => { 
        const categories = [ 'One Puch Man', ' Dragon Ball Z'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
     });
})