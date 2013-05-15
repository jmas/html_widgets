# Widgets.js

JavaScript утилита позволяющая инициализировать JavaScript виджеты из HTML кода.

## Что это такое?

Идея: использовать HTML-код для инициализации JavaScript-виджетов.

Если я правильно понимаю принцип Progressive Enhancement: разработка от HTML к CSS, а затем к JavaScript, тогда здесь я пытаюсь воплотить данный подход.

На первом этапе создаем простой HTML-код, подчиняющийся микроформату hcard.

```html
<div class="vcard">
    <h1 class="fn org">Яндекс</h1>
    <dl>
	<dt>Адрес:</dt>
	<dd class="adr">
	    <span class="postal-code">111033</span>,
	    <span class="locality">Москва</span>,
	    <span class="street-address">
		ул. Самокатная, дом 1
	    </span>
	</dd>
    <dl>
    <div id="map1" class="geo" data-ext="map">
	<abbr class="latitude" title="37.42285760">
	    N 55° 75.82
	</abbr>
	<abbr class="longitude" title="-122.08506470">
	    W 37° 67.86
	</abbr>
    </div>
</div>
```

На втором этапе в конце страницы подключаем JS утилита Widjets.JS:

```html
<script src="http://jmas.github.io/html_widgets/widgets.js"></script>
```

Теперь Widget.JS произведет поиск всех элементов, содержащих атрибут ``data-ext`` и подгрузит JS библиотеки виджетов, соответствующие значению этого атрибута. Библиотека для каждого виджета подгружаются единоразово.

Далее работает код из библиотеки виджета, который попробует превратить HTML-код тега в удобный пользовательский виджет.

## На практике

Список виджетов:

* **map** (позволяет вставлять карту, используя координаты определенные в тегах, содержащих классы ``latitude``, ``longitude``)
