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

  describe('Wish', () => {
    const itemsIds = [111, 222];

    test('в запрос добавляется параметр full_wish только, если передать массив', async () => {
      let result = await convertParams('wish', []);
      expect(result).toHaveProperty('full_wish', true);

      result = await convertParams('wish', itemsIds);
      expect(result).toHaveProperty('full_wish', true);

      result = await convertParams('wish', 111);
      expect(result).not.toHaveProperty('full_wish');
    });
    test('в запрос добавляется items, если передать не пустой массив', async () => {
      let result = await convertParams('wish', itemsIds);
      expect(result).toHaveProperty('full_wish', true);
      expect(result.items.length).toBe(2);
      itemsIds.forEach(id => {
        expect(result.items).toEqual(expect.arrayContaining([{ id }]));
      });

      result = await convertParams('wish', []);
      expect(result).toHaveProperty('full_wish', true);
      expect(result).not.toHaveProperty('items');
    });
    test('в запрос добавляется один объект в items, если передать строку, или число', async () => {
      const stringId = '111';
      const numberId = 111;

      let result = await convertParams('wish', stringId);
      expect(result).not.toHaveProperty('full_wish');
      expect(result.items.length).toBe(1);
      expect(result.items).toEqual([{ id: stringId }]);

      result = await convertParams('wish', numberId);
      expect(result).not.toHaveProperty('full_wish');
      expect(result.items.length).toBe(1);
      expect(result.items).toEqual([{ id: numberId }]);
    });
  });
});
