

// // コピペボックス01エリア
// let copyText = document.querySelector(".cOpype01");

// copyText.querySelector("button").addEventListener("click", function () {
//     //アイコンクリックで下記を実行
//     let input = copyText.querySelector("input.link");
//     input.select(); //select()メソッドはinput or textareaのテキストを選択
//     document.execCommand("copy") //document.execCommand("copy")は任意の値をクリップボードにコピーするJSのコマンド
//     copyText.classList.add("active"); //activeクラスを付与し、吹き出しを表示
//     window.getSelection().removeAllRanges(); //range(範囲)を削除

//     setTimeout(function () {
//         copyText.classList.remove("active");
//     }, 2500)  //2.5秒後に吹き出しを非表示
// })

// コピペボックス複数対応
const copyBoxes = document.querySelectorAll(".cOpype01");

copyBoxes.forEach(function (box) {
    const button = box.querySelector("button");

    button.addEventListener("click", function () {
        const input = box.querySelector("input.link");
        input.select();
        document.execCommand("copy");
        box.classList.add("active");
        window.getSelection().removeAllRanges();

        setTimeout(function () {
            box.classList.remove("active");
        }, 2500);
    });})

