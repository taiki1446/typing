$(function(){

  let time = 0;
  let timer_obj;
  let disp_time;
  let sec_temp
  function timer(){
    time++;
    // 0.1秒単位
    let sec01 = time % 10;
    // 秒
    let sec = Math.floor(time / 10) % 60;
    // 分
    sec_temp = Math.floor(time / 10);
    let minute = Math.floor(sec_temp / 60);

    // 画面への表示 表示形式 → "00:00:0"
    sec = ("00" + sec).slice(-2);
    minute = ("00" + minute).slice(-2);
    disp_time = minute + ":" + sec + ":" +sec01;
    $(".playing").text(disp_time);
  }

  function q_sentence(stc_data){
    let q_s_obj = 
    ` <div class="games__sentences__sentence">
        ${stc_data.text}
      </div>
      <div class="games__sentences__sentence">
        ${stc_data.romaji}
      </div>
    `
    return q_s_obj;
  };

  function first_input (str){
    let apnd_str = `<div class="input-str">
                ${str}</div>`;
    return apnd_str;
  }

  // 対象の文章選択ラジオボタンがクリックされた場合
  // 表示を切り替える
  $(document).on("click", ".games__target-stc--all", function(){
    $(".games__num--myself").hide();
    $(".games__num--all").show();
  });
  $(document).on("click", ".games__target-stc--myself", function(){
    $(".games__num--all").hide();
    $(".games__num--myself").show();
  });

  let flash_obj;
  let btn = ".games__start__btn";
  let sentence_index = 0;
  let sentence_num = 1;
  let stc_data_obj;
  $(document).off("click", btn);
  // スタートボタンがクリックされた場合
  $(document).on("click", btn, function(){
    $(".input-str").remove();
    $(".games__sentences__sentence").remove();
    $(".games__sentences p").remove();
    $(".input-field").focus();

    // ボタンの色を変える
    $(btn).addClass("playing");
    $(btn).removeClass("games__start__btn");

    // ボタンを点滅させる
    $(document).ready(function(){
      flash_obj = setInterval(function(){
        $(".playing").fadeOut(500, function(){
          $(this).fadeIn(500);
        });
      }, 1000);
    });

    // 計測表示を行う
    timer_obj = setInterval(function(){
      timer();
    }, 100);

    // 問題文の表示
    let stc_select = $('input[name=target]:checked').val();
    if(stc_select === "1"){
      stc_data_obj = gon.sentences;
      sentence_num = parseInt($(".select-all").val(), 10);
    } else if(stc_select === "2"){
      stc_data_obj = gon.sentences_myself;
      sentence_num = parseInt($(".select-myself").val(), 10);
    }
    $(".games__sentences").prepend(q_sentence(stc_data_obj[sentence_index]));
  });

  let str_index = 0;
  $(document).off("keydown", ".input-field");
  // 入力されたキーの判定
  $(document).on("keydown", ".input-field", function(e){
    
    let str_array = Array.from(stc_data_obj[sentence_index].romaji);
    if(str_array[str_index] === e.key){
      // 入力された文字を出力する。
      if(str_index === 0){
        // 最初の1文字目の場合
        $(".games").append(first_input(e.key));
      } else{
        let input_str = str_array.slice(0, str_index + 1).join("");
        $(".input-str").text(input_str);
      };
      str_index++;
    };

    // 入力された文字が全て等しかった場合
    if(str_array.length === str_index){
      str_index = 0;
      sentence_index++;

      // 最終問題でなかったら、次の問題を表示
      if (sentence_num !== (sentence_index)){
        $(".games__sentences__sentence").remove();
        $(".input-str").remove();
        $(".games__sentences").prepend(q_sentence(stc_data_obj[sentence_index]));
      };
    };

    // 全ての問題をクリアした場合
    if (sentence_num === sentence_index){
      // 計測を終了する
      clearInterval(timer_obj);
      // ボタンの点滅を止める
      clearInterval(flash_obj);

      // 結果を表示させる
      $(".games").addClass("dsp-none");
      $(".result").removeClass("dsp-none");
      $(".result__stc-num").text(sentence_num);
      $(".result__time").text(disp_time);
      let str_length = 0;
      for(let i = 0; i < sentence_num; i++){
        str_length = str_length + gon.sentences[i].romaji.length;
      }
      console.log(str_length);
      console.log(sec_temp);
      $(".result__stc-str-num").text(str_length);
      let avg = (str_length / sec_temp).toFixed(1);
      $(".result__average").text(avg);

      // resultテーブルへ格納するための、hidden領域への設定
      $(".hidden-stc_num").val(sentence_num);
      $(".hidden-string_num").val(str_length);
      $(".hidden-average").val(avg);

      sentence_index = 0;
      sentence_num = 1;
      str_index = 0;
    };
  });
});