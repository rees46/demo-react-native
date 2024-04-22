import { convertParams } from '../tracker';

describe('Track', () => {
  const initialEventData = {
    email: "john.doe@examplemail.com",
    phone: "4400114527199",
    products: [
      { id: 37, price: 318, quantity: 1 }
    ],
    order: 'N318',
    order_price: 29999
   };

  describe('Purchase', () => {
    test('в запрос добавляется "custom", если передать не пустой объект', async () => {
        const customProperties = {
          date_start: '2024-03-01',
          date_finish: '2024-03-11',
          duration: 11,
          route: 'Москва - Санкт-Петербург - Берлин',
          route_start: 'Москва',
          route_finish: 'Берлин',
          tour_class: 'Люкс',
          adults_count: 2,
          children_count: 1,
          infants_count: 1,
          deck: 'lower1',
          rooms: '334,335'
        };

        const result = await convertParams('purchase', {...initialEventData, custom: customProperties});

        expect(result).toHaveProperty('custom');
        expect(result.custom).toEqual(customProperties);
        expect(result).toHaveProperty('order_id', initialEventData.order);
        expect(result).toHaveProperty('order_price', initialEventData.order_price);
        expect(result.items).toEqual(expect.arrayContaining([expect.objectContaining({ id: initialEventData.products[0].id })]));
      });
      test('в запрос не добавляется "custom", если не передать его при вызове', async () => {
        const result = await convertParams('purchase', initialEventData);

        expect(result).not.toHaveProperty('custom');
        expect(result).toHaveProperty('order_id', initialEventData.order);
        expect(result).toHaveProperty('order_price', initialEventData.order_price);
        expect(result.items).toEqual(expect.arrayContaining([expect.objectContaining({ id: initialEventData.products[0].id })]));
      });
      test('в запрос не добавляется "custom", если передать невалидное значение', async () => {
        const customProperties = [
          {
            date_start: '2024-03-01',
          },
          {
            date_finish: '2024-03-11',
          },
        ];

        const result = await convertParams('purchase', {...initialEventData, custom: customProperties});

        expect(result).not.toHaveProperty('custom');
        expect(result).toHaveProperty('order_id', initialEventData.order);
        expect(result).toHaveProperty('order_price', initialEventData.order_price);
        expect(result.items).toEqual(expect.arrayContaining([expect.objectContaining({ id: initialEventData.products[0].id })]));
      });
  })
});
