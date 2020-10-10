import { modifyDateString } from './helpers';

describe('Utils function', () => {
  describe('modifyDateString function', () => {
    it('should invoke function without arguments', () => {
      expect(modifyDateString()).toStrictEqual('');
      expect(modifyDateString()).not.toBeNull();
      expect(modifyDateString()).not.toBeUndefined();
    });

    it('should return empty string with invalid argument', () => {
      expect(modifyDateString(undefined)).toStrictEqual('');
      expect(modifyDateString('')).toStrictEqual('');
    });

    it('should return formatted string  with valid argument', () => {
      const validDate = String(new Date('Tue Sep 29 2020 20:33:42 GMT+0300 (Восточная Европа, летнее время)'));
      expect(modifyDateString(validDate)).toStrictEqual('Tue Sep 29 2020');
      expect(modifyDateString(validDate)).toStrictEqual('Tue Sep 29 2020');
      expect(modifyDateString(validDate).split((' '))).toHaveLength(4);
    });
  });
});
