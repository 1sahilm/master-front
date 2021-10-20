jQuery(document).ready(function() {
    $('#shwimg_1').css('display','none');
    $('#shwimg_2').css('display','none');
    $('#shwimg_3').css('display','none');
    $('#shwimg_4').css('display','none');
    $('#shwimg_5').css('display','none');
    $('#shwimg_6').css('display','none');
    $('#shwimg_7').css('display','none');
 $('#shwimg_8').css('display','none');
 $('#shwimg_9').css('display','none');
    $('#shwimg_10').css('display','none');
    $('#shwimg_11').css('display','none');
    $('#shwimg_12').css('display','none');
 $('#shwimg_13').css('display','none');


 //next images start
 $('#shwimg_14').css('display','none');
 $('#shwimg_15').css('display','none');
 $('#shwimg_16').css('display','none');
 $('#shwimg_17').css('display','none');
 $('#shwimg_18').css('display','none');
 $('#shwimg_19').css('display','none');
$('#shwimg_20').css('display','none');
$('#shwimg_21').css('display','none');
 $('#shwimg_22').css('display','none');
 $('#shwimg_23').css('display','none');
 $('#shwimg_24').css('display','none');
$('#shwimg_25').css('display','none');
$('#shwimg_26').css('display','none');
$('#shwimg_27').css('display','none');
$('#shwimg_28').css('display','none');
$('#shwimg_29').css('display','none');
$('#shwimg_30').css('display','none');

$('#shwimg_31').css('display','none');
$('#shwimg_32').css('display','none');
$('#shwimg_33').css('display','none');
$('#shwimg_34').css('display','none');
$('#shwimg_35').css('display','none');
$('#shwimg_36').css('display','none');

$('#shwimg_37').css('display','none');
$('#shwimg_38').css('display','none');
$('#shwimg_39').css('display','none');
$('#shwimg_40').css('display','none');
$('#shwimg_41').css('display','none');
$('#shwimg_42').css('display','none');

$('#shwimg_43').css('display','none');
$('#shwimg_44').css('display','none');
$('#shwimg_45').css('display','none');
$('#shwimg_46').css('display','none');
$('#shwimg_47').css('display','none');

$('#shwimg_48').css('display','none');
$('#shwimg_49').css('display','none');
$('#shwimg_50').css('display','none');

$('#shwimg_51').css('display','none');
$('#shwimg_52').css('display','none');
$('#shwimg_53').css('display','none');
$('#shwimg_54').css('display','none');

$('#shwimg_55').css('display','none');
$('#shwimg_56').css('display','none');
$('#shwimg_57').css('display','none');
$('#shwimg_58').css('display','none');

$('#shwimg_59').css('display','none');
$('#shwimg_60').css('display','none');
$('#shwimg_61').css('display','none');
$('#shwimg_62').css('display','none');

$('#shwimg_63').css('display','none');
$('#shwimg_64').css('display','none');
$('#shwimg_65').css('display','none');
$('#shwimg_66').css('display','none');

$('#shwimg_67').css('display','none');
$('#shwimg_68').css('display','none');
$('#shwimg_69').css('display','none');

$('#shwimg_70').css('display','none');
$('#shwimg_71').css('display','none');
$('#shwimg_72').css('display','none');

$('#shwimg_73').css('display','none');
$('#shwimg_74').css('display','none');
$('#shwimg_75').css('display','none');

$('#shwimg_76').css('display','none');
$('#shwimg_77').css('display','none');
$('#shwimg_78').css('display','none');

$('#shwimg_79').css('display','none');
$('#shwimg_80').css('display','none');
$('#shwimg_81').css('display','none');
$('#shwimg_82').css('display','none');
 //next image end
  var colorName='silver'; 
  var storage=0;
  var feet=0;
  var headboard=0;
var bedPrice=1234;
 
    $('#img_1').click(function(){
    img1();
      return false;
    });
    $('#img_2').click(function(){
      img2();
        return false;
      });
      $('#img_3').click(function(){
        img3();
          return false;
        });
        $('#img_4').click(function(){
          img4();
            return false;
          });
          $('#img_5').click(function(){
            img5();
              return false;
            });
            $('#img_6').click(function(){
              img6();
                return false;
              });
              // $('#img_43').click(function(){
              //   img43();
              //     return false;
              //   });
              //   $('#img_44').click(function(){
              //     img44();
              //       return false;
              //     });
              //     $('#img_45').click(function(){
              //       img45();
              //         return false;
              //       });
              //       $('#img_46').click(function(){
              //         img46();
              //           return false;
              //         });

    function img1(){
      var indexNo;     
      switch(colorName){
        case 'silver':
          if(storage==1){ 
            if(feet==1){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
                // bedPrice=4567;
                // alert("454");
                indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
                bedPrice=4009;
                indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              
              $('#shwimg_67').css('display','block'); //feet image 2 show
            indexNo=67;
            break;
            }else if(feet==2){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_68').css('display','block'); //feet image 2 show
              indexNo=68;
              break;
            }else{
              $('#shwimg_69').css('display','block');
              indexNo=69;
            }
            $('#shwimg_43').css('display','block'); //storage image 2 show
            bedPrice=300;
            indexNo=43;
            break;
          } else if(storage==2){
            if(feet==1){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_70').css('display','block'); //feet image 2 show
            indexNo=70;
            break;
            }else if(feet==2){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_71').css('display','block'); //feet image 2 show
              indexNo=71;
              break;
            }else{
              $('#shwimg_72').css('display','block');
              indexNo=72;
            }
           $('#shwimg_44').css('display','block'); //storage image 2 show
           indexNo=44;
            break;
          } else if(storage==3){
            if(feet==1){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_73').css('display','block'); //feet image 2 show
            indexNo=73;
            break;
            }else if(feet==2){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_74').css('display','block'); //feet image 2 show
              indexNo=74;
              break;
            }else{
              $('#shwimg_75').css('display','block');
              indexNo=75;
            }
           $('#shwimg_45').css('display','block'); //storage image 3 show
           indexNo=45;
            break;
          }else if(storage==4){
            if(feet==1){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_76').css('display','block'); //feet image 2 show
            indexNo=76;
            break;
            }else if(feet==2){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_77').css('display','block'); //feet image 2 show
              indexNo=77;
              break;
            }else{
              $('#shwimg_78').css('display','block');
              indexNo=78;
            }
            $('#shwimg_46').css('display','block'); //storage image 4 show
           indexNo=46;
            break;
          }else {
            $('#shwimg_7').css('display','block');
            bedPrice=100;
            indexNo=7;
          }
            break;
         
        case 'blue':
          if(storage==1){
            if(feet==1){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_71').css('display','block'); //feet image 2 show
            indexNo=71;
            break;
            }else if(feet==2){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_72').css('display','block'); //feet image 2 show
              indexNo=72;
              break;
            }else{
              $('#shwimg_73').css('display','block');
              indexNo=73;
            }
           
            $('#shwimg_47').css('display','block'); //storage image 2 show
            indexNo=47;
            break;
          } else if(storage==2){
            if(feet==1){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_61').css('display','block'); //feet image 2 show
            indexNo=61;
            break;
            }else if(feet==2){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_62').css('display','block'); //feet image 2 show
              indexNo=62;
              break;
            }else{
              $('#shwimg_63').css('display','block');
              indexNo=63;
            }
           $('#shwimg_48').css('display','block'); //storage image 2 show
           indexNo=48;
            break;
          } else if(storage==3){
            
            if(feet==1){
              $('#shwimg_51').css('display','block'); //feet image 2 show
            indexNo=51;
            break;
            }else if(feet==2){
              $('#shwimg_52').css('display','block'); //feet image 2 show
              indexNo=52;
              break;
            }else{
              $('#shwimg_53').css('display','block');
              indexNo=53;
            }
           $('#shwimg_49').css('display','block'); //storage image 3 show
           indexNo=49;
            break;
          }else if(storage==4){
            if(feet==1){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_41').css('display','block'); //feet image 2 show
            indexNo=41;
            break;
            }else if(feet==2){
              if(headboard==1){
                $('#shwimg_79').css('display','block'); //storage image 2 show
            indexNo=79;
            break;
              }else if(headboard==2){
                $('#shwimg_80').css('display','block'); //storage image 2 show
           indexNo=80;
            break;

              } else if(headboard==3){
                $('#shwimg_81').css('display','block'); //storage image 2 show
           indexNo=81;
            break;
              } else if(headboard==4){
                $('#shwimg_82').css('display','block'); //storage image 2 show
           indexNo=82;
            break;
              } else{
                $('#shwimg_71').css('display','block'); //storage image 2 show
           indexNo=71;
            
              }
              $('#shwimg_42').css('display','block'); //feet image 2 show
              indexNo=42;
              break;
            }else{
              $('#shwimg_43').css('display','block');
              indexNo=43;
            }
            $('#shwimg_50').css('display','block'); //storage image 4 show
           indexNo=50;
            break;
          }else {
            $('#shwimg_8').css('display','block');
            bedPrice=140;
            indexNo=8;
          }
          break;


          case 'black':
            if(storage==1){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
              $('#shwimg_33').css('display','block'); //storage image 2 show
              indexNo=34;
              break;
            } else if(storage==2){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_33').css('display','block'); //feet image 2 show
              indexNo=33;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_34').css('display','block'); //feet image 2 show
                indexNo=34;
                break;
              }else{
                $('#shwimg_35').css('display','block');
                indexNo=35;
              }
             $('#shwimg_52').css('display','block'); //storage image 2 show
             indexNo=52;
              break;
            } else if(storage==3){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_36').css('display','block'); //feet image 2 show
              indexNo=36;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_37').css('display','block'); //feet image 2 show
                indexNo=37;
                break;
              }else{
                $('#shwimg_38').css('display','block');
                indexNo=38;
              }
             $('#shwimg_53').css('display','block'); //storage image 3 show
             indexNo=53;
              break;
            }else if(storage==4){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_39').css('display','block'); //feet image 2 show
              indexNo=39;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_40').css('display','block'); //feet image 2 show
                indexNo=40;
                break;
              }else{
                $('#shwimg_41').css('display','block');
                indexNo=41;
              }
              $('#shwimg_54').css('display','block'); //storage image 4 show
             indexNo=54;
              break;
            }else {
              $('#shwimg_9').css('display','block');
              bedPrice=70;
              indexNo=9;
            }
            break;
         
       
          case 'yellow':
            if(storage==1){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
              $('#shwimg_55').css('display','block'); //storage image 2 show
              indexNo=55;
              break;
            } else if(storage==2){
              
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_58').css('display','block'); //feet image 2 show
              indexNo=58;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_59').css('display','block'); //feet image 2 show
                indexNo=59;
                break;
              }else{
                $('#shwimg_60').css('display','block');
                indexNo=60;
              }
             $('#shwimg_56').css('display','block'); //storage image 2 show
             indexNo=56;
              break;
            } else if(storage==3){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
             $('#shwimg_57').css('display','block'); //storage image 3 show
             indexNo=57;
              break;
            }else if(storage==4){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_58').css('display','block'); //storage image 4 show
             indexNo=58;
              break;
            }else {
                $('#shwimg_10').css('display','block');
                bedPrice=200;
           indexNo=10;
            }
            break;
           
           
          case 'grey':
            if(storage==1){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_59').css('display','block'); //storage image 2 show
              indexNo=59;
              break;
            } else if(storage==2){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
             $('#shwimg_60').css('display','block'); //storage image 2 show
             indexNo=60;
              break;
            } else if(storage==3){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=42;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_61').css('display','block'); //storage image 3 show
             indexNo=61;
              break;
            }else if(storage==4){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_28').css('display','block'); //feet image 2 show
              indexNo=28;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_29').css('display','block'); //feet image 2 show
                indexNo=29;
                break;
              }else{
                $('#shwimg_30').css('display','block');
                indexNo=30;
              }
              $('#shwimg_62').css('display','block'); //storage image 4 show
             indexNo=62;
              break;
            }else {
              $('#shwimg_11').css('display','block');
              bedPrice=220;
             
           indexNo=11;
            }
            break;
          case 'charcoal':
            if(storage==1){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_63').css('display','block'); //storage image 2 show
              indexNo=63;
              break;
            } else if(storage==2){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=43;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_64').css('display','block'); //storage image 2 show
             indexNo=64;
              break;
            } else if(storage==3){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_44').css('display','block'); //feet image 2 show
              indexNo=44;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_45').css('display','block'); //feet image 2 show
                indexNo=45;
                break;
              }else{
                $('#shwimg_46').css('display','block');
                indexNo=46;
              }
             $('#shwimg_47').css('display','block'); //storage image 3 show
             indexNo=47;
              break;
            }else if(storage==4){
              if(feet==1){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                if(headboard==1){
                  $('#shwimg_79').css('display','block'); //storage image 2 show
              indexNo=79;
              break;
                }else if(headboard==2){
                  $('#shwimg_80').css('display','block'); //storage image 2 show
             indexNo=80;
              break;
  
                } else if(headboard==3){
                  $('#shwimg_81').css('display','block'); //storage image 2 show
             indexNo=81;
              break;
                } else if(headboard==4){
                  $('#shwimg_82').css('display','block'); //storage image 2 show
             indexNo=82;
              break;
                } else{
                  $('#shwimg_71').css('display','block'); //storage image 2 show
             indexNo=71;
              
                }
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_66').css('display','block'); //storage image 4 show
             indexNo=66;
              break;
            }else {
              $('#shwimg_12').css('display','block');
              bedPrice=300;
          indexNo=12;
            }
            break;
            // alert('size 1 color blue');
          //  $('#shwimg_12').css('display','block');
          // indexNo=6;
          break;
          default:
           break;
                     
      }
      hideImges(indexNo);
     
    }

    function img2(){
      var indexNo;     
      switch(colorName){
        case 'silver':
          if(storage==1){ 
            if(feet==1){
              $('#shwimg_67').css('display','block'); //feet image 2 show
            indexNo=67;
            break;
            }else if(feet==2){
              $('#shwimg_68').css('display','block'); //feet image 2 show
              indexNo=68;
              break;
            }else{
              $('#shwimg_69').css('display','block');
              indexNo=69;
            }
            $('#shwimg_43').css('display','block'); //storage image 2 show
            indexNo=43;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_70').css('display','block'); //feet image 2 show
            indexNo=70;
            break;
            }else if(feet==2){
              $('#shwimg_71').css('display','block'); //feet image 2 show
              indexNo=71;
              break;
            }else{
              $('#shwimg_72').css('display','block');
              indexNo=72;
            }
           $('#shwimg_44').css('display','block'); //storage image 2 show
           indexNo=44;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_73').css('display','block'); //feet image 2 show
            indexNo=73;
            break;
            }else if(feet==2){
              $('#shwimg_74').css('display','block'); //feet image 2 show
              indexNo=74;
              break;
            }else{
              $('#shwimg_75').css('display','block');
              indexNo=75;
            }
           $('#shwimg_45').css('display','block'); //storage image 3 show
           indexNo=45;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_76').css('display','block'); //feet image 2 show
            indexNo=76;
            break;
            }else if(feet==2){
              $('#shwimg_77').css('display','block'); //feet image 2 show
              indexNo=77;
              break;
            }else{
              $('#shwimg_78').css('display','block');
              indexNo=78;
            }
            $('#shwimg_46').css('display','block'); //storage image 4 show
           indexNo=46;
            break;
          }else {
            $('#shwimg_13').css('display','block');
            indexNo=13;
          }
            break;
         
        case 'blue':
          if(storage==1){
            if(feet==1){
              $('#shwimg_71').css('display','block'); //feet image 2 show
            indexNo=71;
            break;
            }else if(feet==2){
              $('#shwimg_72').css('display','block'); //feet image 2 show
              indexNo=72;
              break;
            }else{
              $('#shwimg_73').css('display','block');
              indexNo=73;
            }
           
            $('#shwimg_47').css('display','block'); //storage image 2 show
            indexNo=47;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_61').css('display','block'); //feet image 2 show
            indexNo=61;
            break;
            }else if(feet==2){
              $('#shwimg_62').css('display','block'); //feet image 2 show
              indexNo=62;
              break;
            }else{
              $('#shwimg_63').css('display','block');
              indexNo=63;
            }
           $('#shwimg_48').css('display','block'); //storage image 2 show
           indexNo=48;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_51').css('display','block'); //feet image 2 show
            indexNo=51;
            break;
            }else if(feet==2){
              $('#shwimg_52').css('display','block'); //feet image 2 show
              indexNo=52;
              break;
            }else{
              $('#shwimg_53').css('display','block');
              indexNo=53;
            }
           $('#shwimg_49').css('display','block'); //storage image 3 show
           indexNo=49;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_41').css('display','block'); //feet image 2 show
            indexNo=41;
            break;
            }else if(feet==2){
              $('#shwimg_42').css('display','block'); //feet image 2 show
              indexNo=42;
              break;
            }else{
              $('#shwimg_43').css('display','block');
              indexNo=43;
            }
            $('#shwimg_50').css('display','block'); //storage image 4 show
           indexNo=50;
            break;
          }else {
            $('#shwimg_14').css('display','block');
            indexNo=14;
          }
          break;


          case 'black':
            if(storage==1){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
              $('#shwimg_33').css('display','block'); //storage image 2 show
              indexNo=34;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_33').css('display','block'); //feet image 2 show
              indexNo=33;
              break;
              }else if(feet==2){
                $('#shwimg_34').css('display','block'); //feet image 2 show
                indexNo=34;
                break;
              }else{
                $('#shwimg_35').css('display','block');
                indexNo=35;
              }
             $('#shwimg_52').css('display','block'); //storage image 2 show
             indexNo=52;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_36').css('display','block'); //feet image 2 show
              indexNo=36;
              break;
              }else if(feet==2){
                $('#shwimg_37').css('display','block'); //feet image 2 show
                indexNo=37;
                break;
              }else{
                $('#shwimg_38').css('display','block');
                indexNo=38;
              }
             $('#shwimg_53').css('display','block'); //storage image 3 show
             indexNo=53;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_39').css('display','block'); //feet image 2 show
              indexNo=39;
              break;
              }else if(feet==2){
                $('#shwimg_40').css('display','block'); //feet image 2 show
                indexNo=40;
                break;
              }else{
                $('#shwimg_41').css('display','block');
                indexNo=41;
              }
              $('#shwimg_54').css('display','block'); //storage image 4 show
             indexNo=54;
              break;
            }else {
              $('#shwimg_15').css('display','block');
              indexNo=15;
            }
            break;
         
       
          case 'yellow':
            if(storage==1){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
              $('#shwimg_55').css('display','block'); //storage image 2 show
              indexNo=55;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_58').css('display','block'); //feet image 2 show
              indexNo=58;
              break;
              }else if(feet==2){
                $('#shwimg_59').css('display','block'); //feet image 2 show
                indexNo=59;
                break;
              }else{
                $('#shwimg_60').css('display','block');
                indexNo=60;
              }
             $('#shwimg_56').css('display','block'); //storage image 2 show
             indexNo=56;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
             $('#shwimg_57').css('display','block'); //storage image 3 show
             indexNo=57;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_58').css('display','block'); //storage image 4 show
             indexNo=58;
              break;
            }else {
                $('#shwimg_16').css('display','block');
           indexNo=16;
            }
            break;
           
           
          case 'grey':
            if(storage==1){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_59').css('display','block'); //storage image 2 show
              indexNo=59;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
             $('#shwimg_60').css('display','block'); //storage image 2 show
             indexNo=60;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=42;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_61').css('display','block'); //storage image 3 show
             indexNo=61;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_28').css('display','block'); //feet image 2 show
              indexNo=28;
              break;
              }else if(feet==2){
                $('#shwimg_29').css('display','block'); //feet image 2 show
                indexNo=29;
                break;
              }else{
                $('#shwimg_30').css('display','block');
                indexNo=30;
              }
              $('#shwimg_62').css('display','block'); //storage image 4 show
             indexNo=62;
              break;
            }else {
              $('#shwimg_17').css('display','block');
             
           indexNo=17;
            }
            break;
          case 'charcoal':
            if(storage==1){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_63').css('display','block'); //storage image 2 show
              indexNo=63;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=43;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_64').css('display','block'); //storage image 2 show
             indexNo=64;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_44').css('display','block'); //feet image 2 show
              indexNo=44;
              break;
              }else if(feet==2){
                $('#shwimg_45').css('display','block'); //feet image 2 show
                indexNo=45;
                break;
              }else{
                $('#shwimg_46').css('display','block');
                indexNo=46;
              }
             $('#shwimg_47').css('display','block'); //storage image 3 show
             indexNo=47;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_66').css('display','block'); //storage image 4 show
             indexNo=66;
              break;
            }else {
              $('#shwimg_18').css('display','block');
          indexNo=18;
            }
            break;
            // alert('size 1 color blue');
          //  $('#shwimg_12').css('display','block');
          // indexNo=6;
          break;
          default:
           break;
                     
      }
      hideImges(indexNo);
     
    }

    function img3(){
      var indexNo;     
      switch(colorName){
        case 'silver':
          if(storage==1){ 
            if(feet==1){
              $('#shwimg_67').css('display','block'); //feet image 2 show
            indexNo=67;
            break;
            }else if(feet==2){
              $('#shwimg_68').css('display','block'); //feet image 2 show
              indexNo=68;
              break;
            }else{
              $('#shwimg_69').css('display','block');
              indexNo=69;
            }
            $('#shwimg_43').css('display','block'); //storage image 2 show
            indexNo=43;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_70').css('display','block'); //feet image 2 show
            indexNo=70;
            break;
            }else if(feet==2){
              $('#shwimg_71').css('display','block'); //feet image 2 show
              indexNo=71;
              break;
            }else{
              $('#shwimg_72').css('display','block');
              indexNo=72;
            }
           $('#shwimg_44').css('display','block'); //storage image 2 show
           indexNo=44;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_73').css('display','block'); //feet image 2 show
            indexNo=73;
            break;
            }else if(feet==2){
              $('#shwimg_74').css('display','block'); //feet image 2 show
              indexNo=74;
              break;
            }else{
              $('#shwimg_75').css('display','block');
              indexNo=75;
            }
           $('#shwimg_45').css('display','block'); //storage image 3 show
           indexNo=45;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_76').css('display','block'); //feet image 2 show
            indexNo=76;
            break;
            }else if(feet==2){
              $('#shwimg_77').css('display','block'); //feet image 2 show
              indexNo=77;
              break;
            }else{
              $('#shwimg_78').css('display','block');
              indexNo=78;
            }
            $('#shwimg_46').css('display','block'); //storage image 4 show
           indexNo=46;
            break;
          }else {
            $('#shwimg_19').css('display','block');
            indexNo=19;
          }
            break;
         
        case 'blue':
          if(storage==1){
            if(feet==1){
              $('#shwimg_71').css('display','block'); //feet image 2 show
            indexNo=71;
            break;
            }else if(feet==2){
              $('#shwimg_72').css('display','block'); //feet image 2 show
              indexNo=72;
              break;
            }else{
              $('#shwimg_73').css('display','block');
              indexNo=73;
            }
           
            $('#shwimg_47').css('display','block'); //storage image 2 show
            indexNo=47;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_61').css('display','block'); //feet image 2 show
            indexNo=61;
            break;
            }else if(feet==2){
              $('#shwimg_62').css('display','block'); //feet image 2 show
              indexNo=62;
              break;
            }else{
              $('#shwimg_63').css('display','block');
              indexNo=63;
            }
           $('#shwimg_48').css('display','block'); //storage image 2 show
           indexNo=48;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_51').css('display','block'); //feet image 2 show
            indexNo=51;
            break;
            }else if(feet==2){
              $('#shwimg_52').css('display','block'); //feet image 2 show
              indexNo=52;
              break;
            }else{
              $('#shwimg_53').css('display','block');
              indexNo=53;
            }
           $('#shwimg_49').css('display','block'); //storage image 3 show
           indexNo=49;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_41').css('display','block'); //feet image 2 show
            indexNo=41;
            break;
            }else if(feet==2){
              $('#shwimg_42').css('display','block'); //feet image 2 show
              indexNo=42;
              break;
            }else{
              $('#shwimg_43').css('display','block');
              indexNo=43;
            }
            $('#shwimg_50').css('display','block'); //storage image 4 show
           indexNo=50;
            break;
          }else {
            $('#shwimg_20').css('display','block');
            indexNo=20;
          }
          break;


          case 'black':
            if(storage==1){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
              $('#shwimg_33').css('display','block'); //storage image 2 show
              indexNo=34;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_33').css('display','block'); //feet image 2 show
              indexNo=33;
              break;
              }else if(feet==2){
                $('#shwimg_34').css('display','block'); //feet image 2 show
                indexNo=34;
                break;
              }else{
                $('#shwimg_35').css('display','block');
                indexNo=35;
              }
             $('#shwimg_52').css('display','block'); //storage image 2 show
             indexNo=52;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_36').css('display','block'); //feet image 2 show
              indexNo=36;
              break;
              }else if(feet==2){
                $('#shwimg_37').css('display','block'); //feet image 2 show
                indexNo=37;
                break;
              }else{
                $('#shwimg_38').css('display','block');
                indexNo=38;
              }
             $('#shwimg_53').css('display','block'); //storage image 3 show
             indexNo=53;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_39').css('display','block'); //feet image 2 show
              indexNo=39;
              break;
              }else if(feet==2){
                $('#shwimg_40').css('display','block'); //feet image 2 show
                indexNo=40;
                break;
              }else{
                $('#shwimg_41').css('display','block');
                indexNo=41;
              }
              $('#shwimg_54').css('display','block'); //storage image 4 show
             indexNo=54;
              break;
            }else {
              $('#shwimg_21').css('display','block');
              indexNo=21;
            }
            break;
         
       
          case 'yellow':
            if(storage==1){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
              $('#shwimg_55').css('display','block'); //storage image 2 show
              indexNo=55;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_58').css('display','block'); //feet image 2 show
              indexNo=58;
              break;
              }else if(feet==2){
                $('#shwimg_59').css('display','block'); //feet image 2 show
                indexNo=59;
                break;
              }else{
                $('#shwimg_60').css('display','block');
                indexNo=60;
              }
             $('#shwimg_56').css('display','block'); //storage image 2 show
             indexNo=56;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
             $('#shwimg_57').css('display','block'); //storage image 3 show
             indexNo=57;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_58').css('display','block'); //storage image 4 show
             indexNo=58;
              break;
            }else {
                $('#shwimg_22').css('display','block');
           indexNo=22;
            }
            break;
           
           
          case 'grey':
            if(storage==1){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_59').css('display','block'); //storage image 2 show
              indexNo=59;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
             $('#shwimg_60').css('display','block'); //storage image 2 show
             indexNo=60;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=42;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_61').css('display','block'); //storage image 3 show
             indexNo=61;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_28').css('display','block'); //feet image 2 show
              indexNo=28;
              break;
              }else if(feet==2){
                $('#shwimg_29').css('display','block'); //feet image 2 show
                indexNo=29;
                break;
              }else{
                $('#shwimg_30').css('display','block');
                indexNo=30;
              }
              $('#shwimg_62').css('display','block'); //storage image 4 show
             indexNo=62;
              break;
            }else {
              $('#shwimg_23').css('display','block');
             
           indexNo=23;
            }
            break;
          case 'charcoal':
            if(storage==1){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_63').css('display','block'); //storage image 2 show
              indexNo=63;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=43;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_64').css('display','block'); //storage image 2 show
             indexNo=64;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_44').css('display','block'); //feet image 2 show
              indexNo=44;
              break;
              }else if(feet==2){
                $('#shwimg_45').css('display','block'); //feet image 2 show
                indexNo=45;
                break;
              }else{
                $('#shwimg_46').css('display','block');
                indexNo=46;
              }
             $('#shwimg_47').css('display','block'); //storage image 3 show
             indexNo=47;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_66').css('display','block'); //storage image 4 show
             indexNo=66;
              break;
            }else {
              $('#shwimg_24').css('display','block');
          indexNo=24;
            }
            break;
            // alert('size 1 color blue');
          //  $('#shwimg_12').css('display','block');
          // indexNo=6;
          break;
          default:
           break;
                     
      }
      hideImges(indexNo);
     
    }
    function img4(){
      var indexNo;     
      switch(colorName){
        case 'silver':
          if(storage==1){ 
            if(feet==1){
              $('#shwimg_67').css('display','block'); //feet image 2 show
            indexNo=67;
            break;
            }else if(feet==2){
              $('#shwimg_68').css('display','block'); //feet image 2 show
              indexNo=68;
              break;
            }else{
              $('#shwimg_69').css('display','block');
              indexNo=69;
            }
            $('#shwimg_43').css('display','block'); //storage image 2 show
            indexNo=43;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_70').css('display','block'); //feet image 2 show
            indexNo=70;
            break;
            }else if(feet==2){
              $('#shwimg_71').css('display','block'); //feet image 2 show
              indexNo=71;
              break;
            }else{
              $('#shwimg_72').css('display','block');
              indexNo=72;
            }
           $('#shwimg_44').css('display','block'); //storage image 2 show
           indexNo=44;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_73').css('display','block'); //feet image 2 show
            indexNo=73;
            break;
            }else if(feet==2){
              $('#shwimg_74').css('display','block'); //feet image 2 show
              indexNo=74;
              break;
            }else{
              $('#shwimg_75').css('display','block');
              indexNo=75;
            }
           $('#shwimg_45').css('display','block'); //storage image 3 show
           indexNo=45;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_76').css('display','block'); //feet image 2 show
            indexNo=76;
            break;
            }else if(feet==2){
              $('#shwimg_77').css('display','block'); //feet image 2 show
              indexNo=77;
              break;
            }else{
              $('#shwimg_78').css('display','block');
              indexNo=78;
            }
            $('#shwimg_46').css('display','block'); //storage image 4 show
           indexNo=46;
            break;
          }else {
            $('#shwimg_25').css('display','block');
            indexNo=25;
          }
            break;
         
        case 'blue':
          if(storage==1){
            if(feet==1){
              $('#shwimg_71').css('display','block'); //feet image 2 show
            indexNo=71;
            break;
            }else if(feet==2){
              $('#shwimg_72').css('display','block'); //feet image 2 show
              indexNo=72;
              break;
            }else{
              $('#shwimg_73').css('display','block');
              indexNo=73;
            }
           
            $('#shwimg_47').css('display','block'); //storage image 2 show
            indexNo=47;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_61').css('display','block'); //feet image 2 show
            indexNo=61;
            break;
            }else if(feet==2){
              $('#shwimg_62').css('display','block'); //feet image 2 show
              indexNo=62;
              break;
            }else{
              $('#shwimg_63').css('display','block');
              indexNo=63;
            }
           $('#shwimg_48').css('display','block'); //storage image 2 show
           indexNo=48;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_51').css('display','block'); //feet image 2 show
            indexNo=51;
            break;
            }else if(feet==2){
              $('#shwimg_52').css('display','block'); //feet image 2 show
              indexNo=52;
              break;
            }else{
              $('#shwimg_53').css('display','block');
              indexNo=53;
            }
           $('#shwimg_49').css('display','block'); //storage image 3 show
           indexNo=49;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_41').css('display','block'); //feet image 2 show
            indexNo=41;
            break;
            }else if(feet==2){
              $('#shwimg_42').css('display','block'); //feet image 2 show
              indexNo=42;
              break;
            }else{
              $('#shwimg_43').css('display','block');
              indexNo=43;
            }
            $('#shwimg_50').css('display','block'); //storage image 4 show
           indexNo=50;
            break;
          }else {
            $('#shwimg_26').css('display','block');
            indexNo=26;
          }
          break;


          case 'black':
            if(storage==1){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
              $('#shwimg_33').css('display','block'); //storage image 2 show
              indexNo=34;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_33').css('display','block'); //feet image 2 show
              indexNo=33;
              break;
              }else if(feet==2){
                $('#shwimg_34').css('display','block'); //feet image 2 show
                indexNo=34;
                break;
              }else{
                $('#shwimg_35').css('display','block');
                indexNo=35;
              }
             $('#shwimg_52').css('display','block'); //storage image 2 show
             indexNo=52;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_36').css('display','block'); //feet image 2 show
              indexNo=36;
              break;
              }else if(feet==2){
                $('#shwimg_37').css('display','block'); //feet image 2 show
                indexNo=37;
                break;
              }else{
                $('#shwimg_38').css('display','block');
                indexNo=38;
              }
             $('#shwimg_53').css('display','block'); //storage image 3 show
             indexNo=53;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_39').css('display','block'); //feet image 2 show
              indexNo=39;
              break;
              }else if(feet==2){
                $('#shwimg_40').css('display','block'); //feet image 2 show
                indexNo=40;
                break;
              }else{
                $('#shwimg_41').css('display','block');
                indexNo=41;
              }
              $('#shwimg_54').css('display','block'); //storage image 4 show
             indexNo=54;
              break;
            }else {
              $('#shwimg_27').css('display','block');
              indexNo=27;
            }
            break;
         
       
          case 'yellow':
            if(storage==1){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
              $('#shwimg_55').css('display','block'); //storage image 2 show
              indexNo=55;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_58').css('display','block'); //feet image 2 show
              indexNo=58;
              break;
              }else if(feet==2){
                $('#shwimg_59').css('display','block'); //feet image 2 show
                indexNo=59;
                break;
              }else{
                $('#shwimg_60').css('display','block');
                indexNo=60;
              }
             $('#shwimg_56').css('display','block'); //storage image 2 show
             indexNo=56;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
             $('#shwimg_57').css('display','block'); //storage image 3 show
             indexNo=57;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_58').css('display','block'); //storage image 4 show
             indexNo=58;
              break;
            }else {
                $('#shwimg_28').css('display','block');
           indexNo=28;
            }
            break;
           
           
          case 'grey':
            if(storage==1){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_59').css('display','block'); //storage image 2 show
              indexNo=59;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
             $('#shwimg_60').css('display','block'); //storage image 2 show
             indexNo=60;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=42;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_61').css('display','block'); //storage image 3 show
             indexNo=61;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_28').css('display','block'); //feet image 2 show
              indexNo=28;
              break;
              }else if(feet==2){
                $('#shwimg_29').css('display','block'); //feet image 2 show
                indexNo=29;
                break;
              }else{
                $('#shwimg_30').css('display','block');
                indexNo=30;
              }
              $('#shwimg_62').css('display','block'); //storage image 4 show
             indexNo=62;
              break;
            }else {
              $('#shwimg_29').css('display','block');
             
           indexNo=29;
            }
            break;
          case 'charcoal':
            if(storage==1){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_63').css('display','block'); //storage image 2 show
              indexNo=63;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=43;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_64').css('display','block'); //storage image 2 show
             indexNo=64;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_44').css('display','block'); //feet image 2 show
              indexNo=44;
              break;
              }else if(feet==2){
                $('#shwimg_45').css('display','block'); //feet image 2 show
                indexNo=45;
                break;
              }else{
                $('#shwimg_46').css('display','block');
                indexNo=46;
              }
             $('#shwimg_47').css('display','block'); //storage image 3 show
             indexNo=47;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_66').css('display','block'); //storage image 4 show
             indexNo=66;
              break;
            }else {
              $('#shwimg_30').css('display','block');
          indexNo=30;
            }
            break;
            // alert('size 1 color blue');
          //  $('#shwimg_12').css('display','block');
          // indexNo=6;
          break;
          default:
           break;
                     
      }
      hideImges(indexNo);
     
    }
    function img5(){
      var indexNo;     
      switch(colorName){
        case 'silver':
          if(storage==1){ 
            if(feet==1){
              $('#shwimg_67').css('display','block'); //feet image 2 show
            indexNo=67;
            break;
            }else if(feet==2){
              $('#shwimg_68').css('display','block'); //feet image 2 show
              indexNo=68;
              break;
            }else{
              $('#shwimg_69').css('display','block');
              indexNo=69;
            }
            $('#shwimg_43').css('display','block'); //storage image 2 show
            indexNo=43;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_70').css('display','block'); //feet image 2 show
            indexNo=70;
            break;
            }else if(feet==2){
              $('#shwimg_71').css('display','block'); //feet image 2 show
              indexNo=71;
              break;
            }else{
              $('#shwimg_72').css('display','block');
              indexNo=72;
            }
           $('#shwimg_44').css('display','block'); //storage image 2 show
           indexNo=44;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_73').css('display','block'); //feet image 2 show
            indexNo=73;
            break;
            }else if(feet==2){
              $('#shwimg_74').css('display','block'); //feet image 2 show
              indexNo=74;
              break;
            }else{
              $('#shwimg_75').css('display','block');
              indexNo=75;
            }
           $('#shwimg_45').css('display','block'); //storage image 3 show
           indexNo=45;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_76').css('display','block'); //feet image 2 show
            indexNo=76;
            break;
            }else if(feet==2){
              $('#shwimg_77').css('display','block'); //feet image 2 show
              indexNo=77;
              break;
            }else{
              $('#shwimg_78').css('display','block');
              indexNo=78;
            }
            $('#shwimg_46').css('display','block'); //storage image 4 show
           indexNo=46;
            break;
          }else {
            $('#shwimg_31').css('display','block');
            indexNo=31;
          }
            break;
         
        case 'blue':
          if(storage==1){
            if(feet==1){
              $('#shwimg_71').css('display','block'); //feet image 2 show
            indexNo=71;
            break;
            }else if(feet==2){
              $('#shwimg_72').css('display','block'); //feet image 2 show
              indexNo=72;
              break;
            }else{
              $('#shwimg_73').css('display','block');
              indexNo=73;
            }
           
            $('#shwimg_47').css('display','block'); //storage image 2 show
            indexNo=47;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_61').css('display','block'); //feet image 2 show
            indexNo=61;
            break;
            }else if(feet==2){
              $('#shwimg_62').css('display','block'); //feet image 2 show
              indexNo=62;
              break;
            }else{
              $('#shwimg_63').css('display','block');
              indexNo=63;
            }
           $('#shwimg_48').css('display','block'); //storage image 2 show
           indexNo=48;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_51').css('display','block'); //feet image 2 show
            indexNo=51;
            break;
            }else if(feet==2){
              $('#shwimg_52').css('display','block'); //feet image 2 show
              indexNo=52;
              break;
            }else{
              $('#shwimg_53').css('display','block');
              indexNo=53;
            }
           $('#shwimg_49').css('display','block'); //storage image 3 show
           indexNo=49;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_41').css('display','block'); //feet image 2 show
            indexNo=41;
            break;
            }else if(feet==2){
              $('#shwimg_42').css('display','block'); //feet image 2 show
              indexNo=42;
              break;
            }else{
              $('#shwimg_43').css('display','block');
              indexNo=43;
            }
            $('#shwimg_50').css('display','block'); //storage image 4 show
           indexNo=50;
            break;
          }else {
            $('#shwimg_32').css('display','block');
            indexNo=32;
          }
          break;


          case 'black':
            if(storage==1){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
              $('#shwimg_33').css('display','block'); //storage image 2 show
              indexNo=34;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_33').css('display','block'); //feet image 2 show
              indexNo=33;
              break;
              }else if(feet==2){
                $('#shwimg_34').css('display','block'); //feet image 2 show
                indexNo=34;
                break;
              }else{
                $('#shwimg_35').css('display','block');
                indexNo=35;
              }
             $('#shwimg_52').css('display','block'); //storage image 2 show
             indexNo=52;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_36').css('display','block'); //feet image 2 show
              indexNo=36;
              break;
              }else if(feet==2){
                $('#shwimg_37').css('display','block'); //feet image 2 show
                indexNo=37;
                break;
              }else{
                $('#shwimg_38').css('display','block');
                indexNo=38;
              }
             $('#shwimg_53').css('display','block'); //storage image 3 show
             indexNo=53;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_39').css('display','block'); //feet image 2 show
              indexNo=39;
              break;
              }else if(feet==2){
                $('#shwimg_40').css('display','block'); //feet image 2 show
                indexNo=40;
                break;
              }else{
                $('#shwimg_41').css('display','block');
                indexNo=41;
              }
              $('#shwimg_54').css('display','block'); //storage image 4 show
             indexNo=54;
              break;
            }else {
              $('#shwimg_33').css('display','block');
              indexNo=33;
            }
            break;
         
       
          case 'yellow':
            if(storage==1){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
              $('#shwimg_55').css('display','block'); //storage image 2 show
              indexNo=55;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_58').css('display','block'); //feet image 2 show
              indexNo=58;
              break;
              }else if(feet==2){
                $('#shwimg_59').css('display','block'); //feet image 2 show
                indexNo=59;
                break;
              }else{
                $('#shwimg_60').css('display','block');
                indexNo=60;
              }
             $('#shwimg_56').css('display','block'); //storage image 2 show
             indexNo=56;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
             $('#shwimg_57').css('display','block'); //storage image 3 show
             indexNo=57;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_58').css('display','block'); //storage image 4 show
             indexNo=58;
              break;
            }else {
                $('#shwimg_34').css('display','block');
           indexNo=34;
            }
            break;
           
           
          case 'grey':
            if(storage==1){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_59').css('display','block'); //storage image 2 show
              indexNo=59;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
             $('#shwimg_60').css('display','block'); //storage image 2 show
             indexNo=60;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=42;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_61').css('display','block'); //storage image 3 show
             indexNo=61;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_28').css('display','block'); //feet image 2 show
              indexNo=28;
              break;
              }else if(feet==2){
                $('#shwimg_29').css('display','block'); //feet image 2 show
                indexNo=29;
                break;
              }else{
                $('#shwimg_30').css('display','block');
                indexNo=30;
              }
              $('#shwimg_62').css('display','block'); //storage image 4 show
             indexNo=62;
              break;
            }else {
              $('#shwimg_35').css('display','block');
             
           indexNo=35;
            }
            break;
          case 'charcoal':
            if(storage==1){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_63').css('display','block'); //storage image 2 show
              indexNo=63;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=43;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_64').css('display','block'); //storage image 2 show
             indexNo=64;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_44').css('display','block'); //feet image 2 show
              indexNo=44;
              break;
              }else if(feet==2){
                $('#shwimg_45').css('display','block'); //feet image 2 show
                indexNo=45;
                break;
              }else{
                $('#shwimg_46').css('display','block');
                indexNo=46;
              }
             $('#shwimg_47').css('display','block'); //storage image 3 show
             indexNo=47;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_66').css('display','block'); //storage image 4 show
             indexNo=66;
              break;
            }else {
              $('#shwimg_36').css('display','block');
          indexNo=36;
            }
            break;
            // alert('size 1 color blue');
          //  $('#shwimg_12').css('display','block');
          // indexNo=6;
          break;
          default:
           break;
                     
      }
      hideImges(indexNo);
     
    }
    function img6(){
      var indexNo;     
      switch(colorName){
        case 'silver':
          if(storage==1){ 
            if(feet==1){
              $('#shwimg_67').css('display','block'); //feet image 2 show
            indexNo=67;
            break;
            }else if(feet==2){
              $('#shwimg_68').css('display','block'); //feet image 2 show
              indexNo=68;
              break;
            }else{
              $('#shwimg_69').css('display','block');
              indexNo=69;
            }
            $('#shwimg_43').css('display','block'); //storage image 2 show
            indexNo=43;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_70').css('display','block'); //feet image 2 show
            indexNo=70;
            break;
            }else if(feet==2){
              $('#shwimg_71').css('display','block'); //feet image 2 show
              indexNo=71;
              break;
            }else{
              $('#shwimg_72').css('display','block');
              indexNo=72;
            }
           $('#shwimg_44').css('display','block'); //storage image 2 show
           indexNo=44;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_73').css('display','block'); //feet image 2 show
            indexNo=73;
            break;
            }else if(feet==2){
              $('#shwimg_74').css('display','block'); //feet image 2 show
              indexNo=74;
              break;
            }else{
              $('#shwimg_75').css('display','block');
              indexNo=75;
            }
           $('#shwimg_45').css('display','block'); //storage image 3 show
           indexNo=45;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_76').css('display','block'); //feet image 2 show
            indexNo=76;
            break;
            }else if(feet==2){
              $('#shwimg_77').css('display','block'); //feet image 2 show
              indexNo=77;
              break;
            }else{
              $('#shwimg_78').css('display','block');
              indexNo=78;
            }
            $('#shwimg_46').css('display','block'); //storage image 4 show
           indexNo=46;
            break;
          }else {
            $('#shwimg_37').css('display','block');
            indexNo=37;
          }
            break;
         
        case 'blue':
          if(storage==1){
            if(feet==1){
              $('#shwimg_71').css('display','block'); //feet image 2 show
            indexNo=71;
            break;
            }else if(feet==2){
              $('#shwimg_72').css('display','block'); //feet image 2 show
              indexNo=72;
              break;
            }else{
              $('#shwimg_73').css('display','block');
              indexNo=73;
            }
           
            $('#shwimg_47').css('display','block'); //storage image 2 show
            indexNo=47;
            break;
          } else if(storage==2){
            if(feet==1){
              $('#shwimg_61').css('display','block'); //feet image 2 show
            indexNo=61;
            break;
            }else if(feet==2){
              $('#shwimg_62').css('display','block'); //feet image 2 show
              indexNo=62;
              break;
            }else{
              $('#shwimg_63').css('display','block');
              indexNo=63;
            }
           $('#shwimg_48').css('display','block'); //storage image 2 show
           indexNo=48;
            break;
          } else if(storage==3){
            if(feet==1){
              $('#shwimg_51').css('display','block'); //feet image 2 show
            indexNo=51;
            break;
            }else if(feet==2){
              $('#shwimg_52').css('display','block'); //feet image 2 show
              indexNo=52;
              break;
            }else{
              $('#shwimg_53').css('display','block');
              indexNo=53;
            }
           $('#shwimg_49').css('display','block'); //storage image 3 show
           indexNo=49;
            break;
          }else if(storage==4){
            if(feet==1){
              $('#shwimg_41').css('display','block'); //feet image 2 show
            indexNo=41;
            break;
            }else if(feet==2){
              $('#shwimg_42').css('display','block'); //feet image 2 show
              indexNo=42;
              break;
            }else{
              $('#shwimg_43').css('display','block');
              indexNo=43;
            }
            $('#shwimg_50').css('display','block'); //storage image 4 show
           indexNo=50;
            break;
          }else {
            $('#shwimg_38').css('display','block');
            indexNo=38;
          }
          break;


          case 'black':
            if(storage==1){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
              $('#shwimg_33').css('display','block'); //storage image 2 show
              indexNo=34;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_33').css('display','block'); //feet image 2 show
              indexNo=33;
              break;
              }else if(feet==2){
                $('#shwimg_34').css('display','block'); //feet image 2 show
                indexNo=34;
                break;
              }else{
                $('#shwimg_35').css('display','block');
                indexNo=35;
              }
             $('#shwimg_52').css('display','block'); //storage image 2 show
             indexNo=52;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_36').css('display','block'); //feet image 2 show
              indexNo=36;
              break;
              }else if(feet==2){
                $('#shwimg_37').css('display','block'); //feet image 2 show
                indexNo=37;
                break;
              }else{
                $('#shwimg_38').css('display','block');
                indexNo=38;
              }
             $('#shwimg_53').css('display','block'); //storage image 3 show
             indexNo=53;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_39').css('display','block'); //feet image 2 show
              indexNo=39;
              break;
              }else if(feet==2){
                $('#shwimg_40').css('display','block'); //feet image 2 show
                indexNo=40;
                break;
              }else{
                $('#shwimg_41').css('display','block');
                indexNo=41;
              }
              $('#shwimg_54').css('display','block'); //storage image 4 show
             indexNo=54;
              break;
            }else {
              $('#shwimg_39').css('display','block');
              indexNo=39;
            }
            break;
         
       
          case 'yellow':
            if(storage==1){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
              $('#shwimg_55').css('display','block'); //storage image 2 show
              indexNo=55;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_58').css('display','block'); //feet image 2 show
              indexNo=58;
              break;
              }else if(feet==2){
                $('#shwimg_59').css('display','block'); //feet image 2 show
                indexNo=59;
                break;
              }else{
                $('#shwimg_60').css('display','block');
                indexNo=60;
              }
             $('#shwimg_56').css('display','block'); //storage image 2 show
             indexNo=56;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_30').css('display','block'); //feet image 2 show
              indexNo=30;
              break;
              }else if(feet==2){
                $('#shwimg_31').css('display','block'); //feet image 2 show
                indexNo=31;
                break;
              }else{
                $('#shwimg_32').css('display','block');
                indexNo=32;
              }
             $('#shwimg_57').css('display','block'); //storage image 3 show
             indexNo=57;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_58').css('display','block'); //storage image 4 show
             indexNo=58;
              break;
            }else {
                $('#shwimg_40').css('display','block');
           indexNo=40;
            }
            break;
           
           
          case 'grey':
            if(storage==1){
              if(feet==1){
                $('#shwimg_61').css('display','block'); //feet image 2 show
              indexNo=61;
              break;
              }else if(feet==2){
                $('#shwimg_62').css('display','block'); //feet image 2 show
                indexNo=62;
                break;
              }else{
                $('#shwimg_63').css('display','block');
                indexNo=63;
              }
              $('#shwimg_59').css('display','block'); //storage image 2 show
              indexNo=59;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_55').css('display','block'); //feet image 2 show
              indexNo=55;
              break;
              }else if(feet==2){
                $('#shwimg_56').css('display','block'); //feet image 2 show
                indexNo=56;
                break;
              }else{
                $('#shwimg_57').css('display','block');
                indexNo=57;
              }
             $('#shwimg_60').css('display','block'); //storage image 2 show
             indexNo=60;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=42;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_61').css('display','block'); //storage image 3 show
             indexNo=61;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_28').css('display','block'); //feet image 2 show
              indexNo=28;
              break;
              }else if(feet==2){
                $('#shwimg_29').css('display','block'); //feet image 2 show
                indexNo=29;
                break;
              }else{
                $('#shwimg_30').css('display','block');
                indexNo=30;
              }
              $('#shwimg_62').css('display','block'); //storage image 4 show
             indexNo=62;
              break;
            }else {
              $('#shwimg_41').css('display','block');
             
           indexNo=41;
            }
            break;
          case 'charcoal':
            if(storage==1){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_63').css('display','block'); //storage image 2 show
              indexNo=63;
              break;
            } else if(storage==2){
              if(feet==1){
                $('#shwimg_41').css('display','block'); //feet image 2 show
              indexNo=41;
              break;
              }else if(feet==2){
                $('#shwimg_42').css('display','block'); //feet image 2 show
                indexNo=43;
                break;
              }else{
                $('#shwimg_43').css('display','block');
                indexNo=43;
              }
             $('#shwimg_64').css('display','block'); //storage image 2 show
             indexNo=64;
              break;
            } else if(storage==3){
              if(feet==1){
                $('#shwimg_44').css('display','block'); //feet image 2 show
              indexNo=44;
              break;
              }else if(feet==2){
                $('#shwimg_45').css('display','block'); //feet image 2 show
                indexNo=45;
                break;
              }else{
                $('#shwimg_46').css('display','block');
                indexNo=46;
              }
             $('#shwimg_47').css('display','block'); //storage image 3 show
             indexNo=47;
              break;
            }else if(storage==4){
              if(feet==1){
                $('#shwimg_67').css('display','block'); //feet image 2 show
              indexNo=67;
              break;
              }else if(feet==2){
                $('#shwimg_68').css('display','block'); //feet image 2 show
                indexNo=68;
                break;
              }else{
                $('#shwimg_69').css('display','block');
                indexNo=69;
              }
              $('#shwimg_66').css('display','block'); //storage image 4 show
             indexNo=66;
              break;
            }else {
              $('#shwimg_42').css('display','block');
          indexNo=42;
            }
            break;
            // alert('size 1 color blue');
          //  $('#shwimg_12').css('display','block');
          // indexNo=6;
          break;
          default:
           break;
                     
      }
      hideImges(indexNo);
     
    }
    



    function hideImges(index){
      for(var i=1;i<=82;i++){
        if(i!=index){
          $('#shwimg_'+i).css('display','none');
        }else{
          console.log('curent selected index is '+index);
        }
        
      }
      $('#price_now').text(bedPrice);
    }


$('#img_7').click(function(){
  colorName='silver';
  img1();
  
return false;
});
$('#img_8').click(function(){
  colorName='blue';
  img1();
   
return false;
});

// $('#img_19').click(function(){
//   headBoard=1;
 
// return false;
// });    for testing



$('#img_9').click(function(){
  colorName='black';
  img1();
   
return false;
});
$('#img_10').click(function(){
  colorName='yellow';
  img1();
 
return false;
});
$('#img_11').click(function(){
  colorName='grey';
  img1();
 
return false;
});
$('#img_12').click(function(){
  colorName='charcoal';
  img1();
 
return false;
});
$('#img_13').click(function(){
  colorName='silver';
 
return false;
});
$('#img_14').click(function(){
  colorName='blue';
  
 return false;

});
$('#img_15').click(function(){
  colorName='black';
   
  return false;
});
$('#img_16').click(function(){
  colorName='yellow';
   
 return false;
});
$('#img_17').click(function(){
  colorName='grey';
  
 return false;
});
$('#img_18').click(function(){
  colorName='charcoal';
  
 return false;
});
$('#img_19').click(function(){
  colorName='silver';
 return false;
});
$('#img_20').click(function(){
  colorName='blue';
 
 return false;
});
$('#img_21').click(function(){
  colorName='black';
 
 return false;
});
$('#img_22').click(function(){
  colorName='yellow';
  
 return false;
});
$('#img_23').click(function(){
  colorName='grey';
  
 return false;
});
$('#img_24').click(function(){
  colorName='charcoal';
 
 return false;
});
$('#img_25').click(function(){
  colorName='silver';
  
 return false;
});
$('#img_26').click(function(){
  colorName='blue';
 
 return false;
});
$('#img_27').click(function(){
  colorName='black';
 
 return false;
});
$('#img_28').click(function(){
  colorName='yellow';
 
 return false;
});
$('#img_29').click(function(){
  colorName='grey';
  $('#shwimg_1').css('display','none');
  $('#shwimg_2').css('display','none');
  $('#shwimg_3').css('display','none');
  $('#shwimg_4').css('display','none');
  $('#shwimg_5').css('display','none');
  $('#shwimg_6').css('display','none');
  $('#shwimg_7').css('display','none');
  $('#shwimg_8').css('display','none');
  $('#shwimg_9').css('display','none');
  $('#shwimg_10').css('display','none');
  $('#shwimg_11').css('display','none');
  $('#shwimg_12').css('display','none');
  $('#shwimg_13').css('display','none');
  $('#shwimg_14').css('display','none');
  $('#shwimg_15').css('display','none');
  $('#shwimg_16').css('display','none');
  $('#shwimg_17').css('display','none');
  $('#shwimg_18').css('display','none');
  $('#shwimg_19').css('display','none');
 $('#shwimg_20').css('display','none');
 $('#shwimg_21').css('display','none');
  $('#shwimg_22').css('display','none');
  $('#shwimg_23').css('display','none');
  $('#shwimg_24').css('display','none');
 $('#shwimg_25').css('display','none');
 $('#shwimg_26').css('display','none');
 $('#shwimg_27').css('display','none');
 $('#shwimg_28').css('display','none');
 $('#shwimg_29').css('display','none');
 $('#shwimg_30').css('display','none');
 $('#shwimg_31').css('display','none');
$('#shwimg_32').css('display','none');
$('#shwimg_33').css('display','none');
$('#shwimg_34').css('display','none');
$('#shwimg_35').css('display','none');
$('#shwimg_36').css('display','none');
$('#shwimg_37').css('display','none');
$('#shwimg_38').css('display','none');
$('#shwimg_39').css('display','none');
$('#shwimg_40').css('display','none');
$('#shwimg_41').css('display','none');
$('#shwimg_42').css('display','none');
 return false;
});
$('#img_30').click(function(){
  colorName='charcoal';
  $('#shwimg_1').css('display','none');
  $('#shwimg_2').css('display','none');
  $('#shwimg_3').css('display','none');
  $('#shwimg_4').css('display','none');
  $('#shwimg_5').css('display','none');
  $('#shwimg_6').css('display','none');
  $('#shwimg_7').css('display','none');
  $('#shwimg_8').css('display','none');
  $('#shwimg_9').css('display','none');
  $('#shwimg_10').css('display','none');
  $('#shwimg_11').css('display','none');
  $('#shwimg_12').css('display','none');
  $('#shwimg_13').css('display','none');
  $('#shwimg_14').css('display','none');
  $('#shwimg_15').css('display','none');
  $('#shwimg_16').css('display','none');
  $('#shwimg_17').css('display','none');
  $('#shwimg_18').css('display','none');
  $('#shwimg_19').css('display','none');
 $('#shwimg_20').css('display','none');
 $('#shwimg_21').css('display','none');
  $('#shwimg_22').css('display','none');
  $('#shwimg_23').css('display','none');
  $('#shwimg_24').css('display','none');
 $('#shwimg_25').css('display','none');
 $('#shwimg_26').css('display','none');
 $('#shwimg_27').css('display','none');
 $('#shwimg_28').css('display','none');
 $('#shwimg_29').css('display','none');
 $('#shwimg_30').css('display','none');
 $('#shwimg_31').css('display','none');
$('#shwimg_32').css('display','none');
$('#shwimg_33').css('display','none');
$('#shwimg_34').css('display','none');
$('#shwimg_35').css('display','none');
$('#shwimg_36').css('display','none');
$('#shwimg_37').css('display','none');
$('#shwimg_38').css('display','none');
$('#shwimg_39').css('display','none');
$('#shwimg_40').css('display','none');
$('#shwimg_41').css('display','none');
$('#shwimg_42').css('display','none');
 return false;
});

$('#img_31').click(function(){
  colorName='silver';
  
 return false;
});
$('#img_32').click(function(){
  colorName='blue';
  
 return false;
});
$('#img_33').click(function(){
  colorName='black';
  
 return false;
});
$('#img_34').click(function(){
  colorName='yellow';
 
 return false;
});
$('#img_35').click(function(){
  colorName='grey';
  
 return false;
});
$('#img_36').click(function(){
  colorName='charcoal';
 
 return false;
});




$('#img_37').click(function(){
  colorName='silver';
 
 return false;
});
$('#img_38').click(function(){
  colorName='blue';
 
 return false;
});
$('#img_39').click(function(){
  colorName='black';

 return false;
});
$('#img_40').click(function(){
  colorName='yellow';
  
 return false;
});
$('#img_41').click(function(){
  colorName='grey';

 return false;
});
$('#img_42').click(function(){
  colorName='charcoal';
 
 return false;
});
$('#img_43').click(function(){
  
  storage=1;
  return false;
});
$('#img_44').click(function(){
   
  storage=2;
  return false;
});
$('#img_45').click(function(){
  storage=3;
  return false;
});
$('#img_46').click(function(){
  storage=4;
 
  return false;
});

$('#img_67').click(function(){
  feet=1;
   
  return false;
});
$('#img_68').click(function(){
  feet=2;
  
  return false;
});
$('#img_79').click(function(){
  headboard=1;
   
  return false;
});
$('#img_80').click(function(){
  headboard=2;
   
  return false;
});
$('#img_81').click(function(){
  headboard=3;
   
  return false;
});
$('#img_82').click(function(){
  headboard=4;
   
  return false;
});



    });
    
    

