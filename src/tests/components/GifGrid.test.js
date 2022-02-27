import { GifGrid } from "../../components/GifGrid";
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs')
describe('GifGrid tests', () => {
    const category = 'Goku';

    test('should render GifGrid correctly', () => { 
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid  category={category}/>);

        expect(wrapper).toMatchSnapshot();
     });

    test('should show items when images are loading useFetchGifs', () => { 
        useFetchGifs.mockReturnValue({
            data: [
                {
                    id: '1',
                    title: 'Goku',
                    url: 'goku.com'
                }
            ],
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(1);
     });


});