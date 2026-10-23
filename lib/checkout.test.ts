import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PACKS,
  validateMoroccanPhone,
  validateOrderForm,
  getWhatsAppOrderUrl,
  OFFICIAL_PHONE,
} from './checkout';

test('PACKS contains the 3 exact promotional packages requested by user', () => {
  assert.equal(PACKS.length, 3);
  assert.equal(PACKS[0].price, 289);
  assert.equal(PACKS[1].price, 449);
  assert.equal(PACKS[2].price, 499);
  assert.equal(PACKS[1].popular, true);
  assert.equal(PACKS[1].savings, 129);
});

test('validateMoroccanPhone accepts valid mobile formats', () => {
  assert.equal(validateMoroccanPhone('0636460996'), true);
  assert.equal(validateMoroccanPhone('0712345678'), true);
  assert.equal(validateMoroccanPhone('+212636460996'), true);
  assert.equal(validateMoroccanPhone('00212636460996'), true);
  assert.equal(validateMoroccanPhone('06 36 46 09 96'), true);
  assert.equal(validateMoroccanPhone('06-36-46-09-96'), true);
});

test('validateMoroccanPhone rejects invalid numbers', () => {
  assert.equal(validateMoroccanPhone('12345'), false);
  assert.equal(validateMoroccanPhone('0123456789'), false);
  assert.equal(validateMoroccanPhone('abcdefghij'), false);
  assert.equal(validateMoroccanPhone(''), false);
});

test('validateOrderForm catches missing fields and invalid phones', () => {
  const invalidResult = validateOrderForm({
    fullName: '',
    phone: '123',
    city: '',
    address: '',
    packId: 'unknown-pack',
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.city);
  assert.ok(invalidResult.errors.address);
  assert.ok(invalidResult.errors.packId);

  const validResult = validateOrderForm({
    fullName: 'فاطمة الزهراء',
    phone: '0636460996',
    city: 'الدار البيضاء (Casablanca)',
    address: 'حي المعاريف شارع المسيرة الخضراء',
    packId: 'pack-2',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('getWhatsAppOrderUrl produces valid link containing official phone and details', () => {
  const defaultUrl = getWhatsAppOrderUrl();
  assert.ok(defaultUrl.includes(OFFICIAL_PHONE));

  const customizedUrl = getWhatsAppOrderUrl({
    fullName: 'سناء',
    phone: '0636460996',
    city: 'مراكش',
    packName: 'الباقة الأكثر طلباً (عبوتان)',
    price: 449,
  });
  assert.ok(customizedUrl.includes(OFFICIAL_PHONE));
  assert.ok(decodeURIComponent(customizedUrl).includes('449'));
  assert.ok(decodeURIComponent(customizedUrl).includes('سناء'));
});
