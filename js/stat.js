"use strict";
const CLOUD_X = 420;
const CLOUD_Y = 270;
const CLOUD_POS_X = 100;
const CLOUD_POS_Y = 10;
const BAR_X = 40;
const BAR_Y = 150;
const GAP10 = 10;
const GAP50 = 50;
const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_X, CLOUD_Y);
};
const getMaxElement = function (array) {
  let maxElement = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_POS_X + GAP10, CLOUD_POS_Y + GAP10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_POS_X, CLOUD_POS_Y, '#fff');
  let maxTime = getMaxElement(times);
  for (let i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = `rgba(0, 50, 100, ${1 - (i * 0.1)})`;
    }
    ctx.fillRect(CLOUD_POS_X + GAP50 + (BAR_X + GAP50) * i, CLOUD_POS_Y + GAP50 * 1.5 + (BAR_Y - (BAR_Y * times[i]) / maxTime), BAR_X, (BAR_Y * times[i]) / maxTime);
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], CLOUD_POS_X + GAP50 + (BAR_X + GAP50) * i, CLOUD_POS_Y + BAR_Y + GAP50 * 2);
    ctx.fillText(Math.round(times[i]), CLOUD_POS_X + GAP50 + (BAR_X + GAP50) * i, CLOUD_POS_Y + GAP50 * 1.5 + BAR_Y - GAP10 - (BAR_Y * times[i]) / maxTime);
  }
};
