'use strict';

(function () {
  /* Размер облака для вывода статистики */
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;

  /* Для заголовков */
  var HEAD_TITLE = 40;
  var HEAD_TITLE_GAP = 20;

  /* Для гистограммы */
  var COLUMN_X = 150;
  var COLUMN_Y = 260;
  var COLUMN_WIDTH = 40;
  var COLUMN_GAP = 50;
  var TEXT_TOP_GAP = 20;
  var HISTOGRAM_TOP_GAP = 30;
  var COLUMN_HEIGHT = (CLOUD_HEIGHT - HEAD_TITLE - HEAD_TITLE_GAP - CLOUD_GAP - TEXT_TOP_GAP - HISTOGRAM_TOP_GAP) * (-1);


  /* Функция для отрисовки облак */
  var renderedCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  /* Функция отрисовки заголовка */
  var renderedHeadTitle = function (ctx, text, x, y, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  };

  var getMaxElement = function (arr) {
    if (arr.length) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    }

    return 0;
  };

  /* Функция отрисовки столбцов в гистограмме */
  var renderedColumn = function (ctx, x, y, width, height) {
    ctx.fillRect(x, y, width, height);
  };

  /* Функция отрисовки текста для столбцов */
  var renderedColumnText = function (ctx, text, x, y) {
    ctx.fillText(text, x, y);
  };

  /* Функция для вывода статистики */
  window.renderStatistics = function (ctx, names, times) {
    renderedCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderedCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    /* Заголовки для облака статистики */
    renderedHeadTitle(ctx, 'Ура вы победили!', (CLOUD_WIDTH / 2) + 30, HEAD_TITLE, '16px PT Mono', '#000000');
    renderedHeadTitle(ctx, 'Список результатов:', (CLOUD_WIDTH / 2) + 15, HEAD_TITLE + HEAD_TITLE_GAP, '16px PT Mono', '#000000');


    /* Гистограмма пользователей */
    ctx.fillStyle = '#000000';

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsla(240, 100%, 50%, ' + Math.random() * 1.9 + ')';
      }

      renderedColumnText(ctx, names[i], COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i, COLUMN_Y);
      renderedColumnText(ctx, Math.floor(times[i]), COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i, COLUMN_Y - CLOUD_GAP - ((COLUMN_HEIGHT * times[i]) / maxTime * (-1)) - TEXT_TOP_GAP);
      renderedColumn(ctx, COLUMN_X + (COLUMN_WIDTH + COLUMN_GAP) * i, COLUMN_Y - TEXT_TOP_GAP, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
    }
  };
})();
