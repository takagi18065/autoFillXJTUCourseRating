// ==UserScript==
// @name         AutoFill Form Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto-fill forms in a specific website
// @author       YourName
// @match        http://gste.xjtu.edu.cn/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    // Function to fill the form
    function fillForm(jNode) {
        console.log("Page has loaded");

        const collection = document.getElementsByClassName("webix_el_box");
        console.log(collection);
        //var inputElement1 = collection[3].querySelector('input');
        //inputElement1.value = 'Your desired value';
        var inputElement2 = collection[4].querySelector('input');
        inputElement2.value = '中文';

        var inputElement3 = collection[11].querySelector('textarea');
        inputElement3.value = '非常优秀';

        var inputElement4 = collection[12].querySelector('textarea');
        inputElement4.value = '如今教学效果很好，没有更好的建议，感谢老师！';

        var inputElement5 = collection[13].querySelector('textarea');
        inputElement5.value = '希望允许给老师打最高分';

        const group = document.getElementsByClassName("webix_el_group");
        console.log(group);
        //group[1].getElementsByClassName("webix_radio_option")[2].getElementsByClassName("webix_inp_radio_border webix_radio_0")[0].querySelector('a button').click();
        group[1].getElementsByClassName("webix_radio_option")[2].querySelector("div a button").click();
        group[3].getElementsByClassName("webix_radio_option")[0].querySelector("div a button").click();
        group[4].getElementsByClassName("webix_radio_option")[0].querySelector("div a button").click();
        group[5].getElementsByClassName("webix_radio_option")[0].querySelector("div a button").click();
        group[6].getElementsByClassName("webix_radio_option")[1].querySelector("div a button").click();
        group[7].getElementsByClassName("webix_radio_option")[0].querySelector("div a button").click();

        var button7 = group[7].getElementsByClassName("webix_radio_option")[0].querySelector("div a button");
        console.log(button7);

    }

    // Use waitForKeyElements to wait for the element and call fillForm
    console.log("hi!");
    waitForKeyElements(".webix_win_body", fillForm);
})();