import test from 'node:test';
import assert from 'node:assert/strict';
import {
  VIDEO_STAGES,
  VIDEO_TOTAL_DURATION,
  getStageForCurrentTime,
  formatVideoTime,
} from './videoTimeline';

test('VIDEO_STAGES covers the entire duration continuously', () => {
  assert.equal(VIDEO_STAGES.length, 4);
  assert.equal(VIDEO_STAGES[0].timeRange[0], 0);
  assert.equal(VIDEO_STAGES[VIDEO_STAGES.length - 1].timeRange[1], VIDEO_TOTAL_DURATION);
});

test('getStageForCurrentTime identifies correct stage across time', () => {
  assert.equal(getStageForCurrentTime(1).id, 1);
  assert.equal(getStageForCurrentTime(4).id, 2);
  assert.equal(getStageForCurrentTime(7).id, 3);
  assert.equal(getStageForCurrentTime(11).id, 4);
  assert.equal(getStageForCurrentTime(12).id, 4);
});

test('formatVideoTime formats seconds as MM:SS string', () => {
  assert.equal(formatVideoTime(0), '0:00');
  assert.equal(formatVideoTime(5), '0:05');
  assert.equal(formatVideoTime(12), '0:12');
  assert.equal(formatVideoTime(65), '1:05');
});
