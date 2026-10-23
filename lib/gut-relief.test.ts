import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateMoroccanPhone,
  calculateOrderSummary,
  buildWhatsAppOrderLink,
  GUT_RELIEF_PACKS,
  INGREDIENTS_LIST,
} from './gut-relief';

test('Moroccan phone validation rules', () => {
  assert.equal(validateMoroccanPhone('0612345678'), true);
  assert.equal(validateMoroccanPhone('0712345678'), true);
  assert.equal(validateMoroccanPhone('+212612345678'), true);
  assert.equal(validateMoroccanPhone('212712345678'), true);
  assert.equal(validateMoroccanPhone('06 12 34 56 78'), true);
  // Invalid cases
  assert.equal(validateMoroccanPhone('0512345678'), false); // Landline not mobile
  assert.equal(validateMoroccanPhone('12345'), false);
  assert.equal(validateMoroccanPhone(''), false);
  assert.equal(validateMoroccanPhone('06123456'), false);
});

test('Pricing & calculation logic for Gut Relief packs', () => {
  const pack1 = calculateOrderSummary('pack-1', 1);
  assert.equal(pack1.totalPrice, 299);
  assert.equal(pack1.totalSavings, 100);
  assert.equal(pack1.shippingFee, 0);

  const pack2 = calculateOrderSummary('pack-2', 1);
  assert.equal(pack2.totalPrice, 449);
  assert.equal(pack2.totalSavings, 250);

  const pack3 = calculateOrderSummary('pack-3', 1);
  assert.equal(pack3.totalPrice, 599);
  assert.equal(pack3.totalSavings, 400);
});

test('Ingredients are extracted accurately from real bottle label', () => {
  assert.equal(INGREDIENTS_LIST.length, 5);
  const probiotics = INGREDIENTS_LIST.find((i) => i.nameFr.includes('Probiotiques'));
  assert.ok(probiotics);
  assert.equal(probiotics.amount, '200 mg');

  const ginger = INGREDIENTS_LIST.find((i) => i.nameFr.includes('Gingembre'));
  assert.ok(ginger);
  assert.equal(ginger.amount, '100 mg');

  const fenouil = INGREDIENTS_LIST.find((i) => i.nameFr.includes('Fenouil'));
  assert.ok(fenouil);
  assert.equal(fenouil.amount, '100 mg');
});

test('WhatsApp order link generator produces valid URL with parameters', () => {
  const url = buildWhatsAppOrderLink('سارة بناني', '0612345678', 'الرباط', 'باقة التوفير (علبتان)', 449);
  assert.ok(url.startsWith('https://wa.me/212636460996?text='));
  assert.ok(decodeURIComponent(url).includes('سارة بناني'));
  assert.ok(decodeURIComponent(url).includes('449 درهم'));
});
