'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var FONT_GAP = 15;
var WIN_GAP = 130;
var TEXT_WIDTH = 50;
var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - WIN_GAP - GAP;
var BAR_WIDTH = 40;
var center = CLOUD_WIDTH / 2;

var drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000';
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color || '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

var getMaxElem = function (arr) {
  var maxElem = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElem) {
      maxElem = arr[i];
    }
  }
  return maxElem;
};

window.renderStatistics = function (ctx, names, times) {
  drawRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.6)');
  drawRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'white');

  var textCalc = CLOUD_Y + (GAP + FONT_GAP);

  drawText(ctx, 'Ура вы победили!', center + GAP, textCalc);
  drawText(ctx, 'Список результатов:', center + GAP, textCalc * 2);

  var maxTime = getMaxElem(times);

  for (var i = 0; i < names.length; i++) {
    var calc = CLOUD_X + GAP + TEXT_WIDTH + (GAP * 4 + BAR_WIDTH) * i;
    var columHeight = CLOUD_HEIGHT - GAP * 6 - (barHeight * times[i]) / maxTime;

    drawText(ctx, names[i], calc, CLOUD_HEIGHT - GAP);

    drawRect(ctx, calc, columHeight + GAP * 2, BAR_WIDTH, (barHeight * times[i]) / maxTime, (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + Math.floor(100 * Math.random().toFixed(2)) + '%,' + Math.floor(100 * Math.random().toFixed(2)) + '%)');

    drawText(ctx, Math.round(times[i]), calc, columHeight);
  }
};
