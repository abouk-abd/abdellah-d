import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateDiagnosticResult } from './quiz';

test('calculates correct recommendation for gut bloating', () => {
  const result = calculateDiagnosticResult({
    primaryConcern: 'gut_bloating',
    timing: 'after_meals',
  });
  assert.equal(result.recommendedPackId, 'pack-2');
  assert.ok(result.activeActives.includes('100% Raw Chlorophyllin'));
});

test('calculates dual routine for skin dullness', () => {
  const result = calculateDiagnosticResult({
    primaryConcern: 'skin_dullness',
    timing: 'morning',
  });
  assert.equal(result.recommendedPackId, 'pack-3');
  assert.ok(result.headline.includes('نضارة'));
});

test('calculates hair loss routine', () => {
  const result = calculateDiagnosticResult({
    primaryConcern: 'hair_loss',
    timing: 'daily',
  });
  assert.ok(result.activeActives.some(a => a.includes('Rosemary')));
});
