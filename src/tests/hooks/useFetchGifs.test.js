import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas del useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async () => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Puch Man') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
     });

     test('Debe de retonar un arreglo de imgs y el loading false', async () => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Puch Man') );
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

      })
});