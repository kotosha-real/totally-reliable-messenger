Даже законченный проект остаётся только заготовкой, пока им не начнут пользоваться. Но сначала пользователь должен понять, зачем ему пользоваться вашим кодом. В этом помогает файл README.

README — первое, что прочитает пользователь, когда попадёт в репозиторий на «Гитхабе». Хороший REAMDE отвечает на четыре вопроса:

- Готов ли проект к использованию?
- В чём его польза?
- Как установить?
- Как применять?

## Бейджи

Быстро понять статус проекта помогают бейджи на «Гитхабе». Иногда разработчики ограничиваются парой бейджев, которые сообщат о статусе тестов кода:

![Бэйджи](https://github.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/blob/master/mf/b.png)

Если пользователь увидит ошибку в работе тестов, то поймёт: использовать текущую версию в важном проекте — не лучшая идея.

Бейджи помогают похвастаться достижениями: насколько популярен проект, как много разработчиков создавало этот код. Через бейджи можно даже пригласить пользователя в чат:

![Версии](https://github.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/blob/master/mf/vers.png)

В README **Webpack** строка бейджев подробно рассказывает о покрытии кода тестами. Когда проект протестирован, это вызывает доверие пользователя. Последний бейдж приглашает присоединиться к разработке.

Другая строка убедит пользователя в стабильности инфраструктуры и популярности проекта. Последний бейдж зовёт в чат проекта.

## Описание

Краткое опишите, какую задачу решает проект. Пользователь не верит обещаниям и не готов читать «полотна» текста. Поэтому в описании достаточно нескольких строк:

![Описание](https://github.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/blob/master/mf/desc.png)

Авторы **React** дробят описание на абзацы и списки — так проще пробежаться глазами по тексту и найти ключевую информацию.

Если у проекта есть сайт, добавьте ссылку в заголовок.

## Jumpstart

First of all, install dependencies with
```javascript
npm install
```

Start your work with
```javascript
npm start
```

Build production-ready version with
```javascript
npm run build
```

[Netlify](https://quizzical-wiles-72addf.netlify.app/) autodeploy configured from `deploy` branch

- `npm install` — установка стабильной версии,
- `npm start` — запуск версии для разработчика,
- `npm run build:prod` — сборка стабильной версии.

## **Примеры использования**

Хорошо, если сразу после установки пользователь сможет решить свои задачи без изучения проекта. Это особенно верно, если ваш пользователь — не профессиональный разработчик. Но даже профессионал поймёт вас лучше, если показать примеры использования:

![Ссылки](https://github.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/blob/master/mf/link.png)

Для более подробных инструкции добавьте новые разделы или ссылки:

- на документацию,
- вики проекта,
- описание API.

В учебном проекте будут полезен раздел с описанием стиля кода и правилами разработки: как работать с ветками, пул-реквестами и релизами.

### **Команда**

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://sun9-76.userapi.com/c850036/v850036740/1382d3/QsGFOTQD5io.jpg">
        <br>
        <a href="https://github.com/sokra">Anton Subbotin</a>
        <br>
        <p>CEO</p>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="ttps://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/57577131_139746693824462_7930720456520708313_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=QFmYGNy2IKkAX-gQy6j&oh=c41c12bb1ae21cd8e6e1491a2c201f30&oe=5F639D7A">
        <br>
        <a href="https://github.com/sokra">Anton Subbotin</a>
        <br>
        <p>Only dev</p>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/59454362_186222022362627_9007876549048828039_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=8-wJPfKAQzcAX9rNcTz&oh=a919313d53cef40f12faf160e22f2483&oe=5F64FFC9">
        <br>
        <a href="https://github.com/sokra">Anton Subbotin</a>
        <br>
        <p>Cool security guy</p>
      </td>
     </tr>
  </tbody>
</table>

### **Примеры README**

- «[Реакт](https://github.com/facebook/react)»,
- «[Эхо](https://github.com/labstack/echo)»,
- «[Вебпак](https://github.com/webpack/webpack)»,
- «[ТДенгине](https://github.com/taosdata/TDengine)»,
- «[Соул-хантинг](https://github.com/vladpereskokov/soul-hunting/)».
