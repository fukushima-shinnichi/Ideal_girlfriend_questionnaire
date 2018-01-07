$(function(){
  
  ////////////    all    ///////////////////////
  ///////// start page erea   //////////////////
  $("div.start_page button").click(function(){
    $("div.start_page").fadeOut("1000",
                              function(){
    $("div.Q_home_page").fadeIn("1000");
    });
  });
  
  ///////////    PC     ////////////////////////
  /////////  question erea  ///////////////////
    //////// click next button ///////////
  if($(window).width()>=768){
  $("div.right_button button").click(function(){
    if(parseInt($("div.question_box").css("marginLeft"))>-11880){
    $("div.question_box").stop(true).animate({
      marginLeft:parseInt($("div.question_box").css("marginLeft"))-1080+"px"
    },"1000",function(){
      $("div.speech_balloon").hide();
    });
  };
  });
    
    //////// click back button ///////////
  $("div.left_button button").click(function(){
    if(parseInt($("div.question_box").css("marginLeft"))<0){
    $("div.question_box").stop(true).animate({
      marginLeft:parseInt($("div.question_box").css("marginLeft"))+1080+"px"
    },"1000",function(){
      if(parseInt($("div.question_box").css("marginLeft"))==0){
        $("div.speech_balloon").show();
      };
    });
  };
  });
    
    //////////////   result page calculation  /////////////////
    $("div.right_button").click(function(){
      
      ////// ecch question calculate ///////////////
      var Q1_result = parseInt($(".Q1 input[name='question1']:checked").val());
      var Q2_result = parseInt($(".Q2 input[name='question2']:checked").val());
      var Q3_result = parseInt($(".Q3 input[name='question3']:checked").val());
      var Q4_result = parseInt($(".Q4 input[name='question4']:checked").val());
      var Q5_result = parseInt($(".Q5 input[name='question5']:checked").val());
      var Q6_result = parseInt($(".Q6 input[name='question6']:checked").val());
      var Q7_result = parseInt($(".Q7 input[name='question7']:checked").val());
      var Q8_result = parseInt($(".Q8 input[name='question8']:checked").val());
      var Q9_result = parseInt($(".Q9 input[name='question9']:checked").val());
      var Q10_result = parseInt($(".Q10 input[name='question10']:checked").val());
      var resultALL = (Q1_result + Q2_result + Q3_result +Q4_result + Q5_result + Q6_result + Q7_result + Q8_result + Q9_result + Q10_result);
      
      ///////   test log  ////////////////
     console.log(Q1_result+":"+Q2_result+":"+Q3_result+":"+Q4_result+":"+Q5_result+":"+Q6_result+":"+Q7_result+":"+Q8_result+":"+Q9_result+":"+Q10_result);
      console.log(resultALL);
      
      ////// ecch result page show ///////////////
      if(resultALL == 10){
        $("div.result_100").fadeIn(0);
        $("h3.result_IN").text(resultALL*10+" points / 100 points");
      }else if(resultALL >=8 && resultALL <=9){
        $("div.result_80over").fadeIn(0);
        $("h3.result_IN").text(resultALL*10+" points / 100 points");
      }else if(resultALL < 8){
        $("div.result_80less").fadeIn(0);
        $("h3.result_IN").text(resultALL*10+" points / 100 points");
      };
    });
  };
  
  
  //////////////   smart phone js   /////////////////
    /////////  question erea  ///////////////////
    //////// click next button ///////////
    if($(window).width()<=767){
    $("div.right_button button").click(function(){
      if(parseInt($("div.question_box").css("marginLeft"))>-3025){
      $("div.question_box").stop(true).animate({
      marginLeft:parseInt($("div.question_box").css("marginLeft"))-275+"px"
        },"1000",function(){
          $("div.speech_balloon").hide();
        });
      };
    });
    
    //////// click back button ///////////
    $("div.left_button button").click(function(){
      if(parseInt($("div.question_box").css("marginLeft"))<0){
        $("div.question_box").stop(true).animate({
      marginLeft:parseInt($("div.question_box").css("marginLeft"))+275+"px"
        },"1000",function(){
          if(parseInt($("div.question_box").css("marginLeft"))==0){
            $("div.speech_balloon").show();
          };
        });
      };
    });
    
    //////////////   result page calculation  /////////////////
    $("div.right_button").click(function(){
      
      ////// ecch question calculate ///////////////
      var Q1_result = parseInt($(".Q1 input[name='question1']:checked").val());
      var Q2_result = parseInt($(".Q2 input[name='question2']:checked").val());
      var Q3_result = parseInt($(".Q3 input[name='question3']:checked").val());
      var Q4_result = parseInt($(".Q4 input[name='question4']:checked").val());
      var Q5_result = parseInt($(".Q5 input[name='question5']:checked").val());
      var Q6_result = parseInt($(".Q6 input[name='question6']:checked").val());
      var Q7_result = parseInt($(".Q7 input[name='question7']:checked").val());
      var Q8_result = parseInt($(".Q8 input[name='question8']:checked").val());
      var Q9_result = parseInt($(".Q9 input[name='question9']:checked").val());
      var Q10_result = parseInt($(".Q10 input[name='question10']:checked").val());
      var resultALL = (Q1_result + Q2_result + Q3_result +Q4_result + Q5_result + Q6_result + Q7_result + Q8_result + Q9_result + Q10_result);
      
      ///////   test log  ////////////////
     console.log(Q1_result+":"+Q2_result+":"+Q3_result+":"+Q4_result+":"+Q5_result+":"+Q6_result+":"+Q7_result+":"+Q8_result+":"+Q9_result+":"+Q10_result);
      console.log(resultALL);
      
      ////// ecch result page show ///////////////
      if(resultALL == 10){
        $("div.result_100").fadeIn(0);
        $("h3.result_IN").text(resultALL*10+" points / 100 points");
      }else if(resultALL >=8 && resultALL <=9){
        $("div.result_80over").fadeIn(0);
        $("h3.result_IN").text(resultALL*10+" points / 100 points");
      }else if(resultALL < 8){
        $("div.result_80less").fadeIn(0);
        $("h3.result_IN").text(resultALL*10+" points / 100 points");
      };
    });
  };
  
  
  
});
