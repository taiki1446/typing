$(function(){

  function q_sentence(){
    let temp = gon.sentences[sentence_index];
    let q_s_obj = 
    ` <div class="games__sentences__sentence">
        ${temp.text}
      </div>
      <div class="games__sentences__sentence">
        ${temp.romaji}
      </div>
    `
    return q_s_obj;
  };

  function first_input (str){
    let apnd_str = `<div class="input-str">
                ${str}</div>`;
    return apnd_str;
  }

  let sentence_index = 0;
  let sentence_num = 1;
  $(".games__start__btn").click(function(){
    sentence_num = parseInt($(".games__num__select").val(), 10);

    $(".input-str").remove();
    $(".games__sentences__sentence").remove();
    $(".games__sentences p").remove();
    $(".input-field").focus();

    $(".games__sentences").prepend(q_sentence(sentence_index));

  });

  let str_index = 0;
  $(".input-field").keydown(function(e){

    let str = gon.sentences[sentence_index].romaji;
    let str_array = Array.from(str);
    if(str_array[str_index] === e.key){
      // 入力された文字を出力する。
      if(str_index === 0){
        // 最初の1文字目の場合
        $(".games").append(first_input(e.key));
      } else{
        let input_str = str_array.slice(0, str_index + 1).join("");
        $(".input-str").text(input_str);
      }
      str_index++;
    }

    // 入力された文字が全て等しかった場合
    if(str_array.length === str_index){
      str_index = 0;
      sentence_index++;

      // 最終問題でなかったら、次の問題を表示
      if (sentence_num !== (sentence_index)){
        $(".games__sentences__sentence").remove();
        $(".input-str").remove();
        $(".games__sentences").prepend(q_sentence(sentence_index));
      }
    }

    // 全ての問題をクリアした場合
    if (sentence_num === sentence_index){
      console.log("全問クリア！");
    }
  });
});