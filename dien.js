function tinh() {

    var n= parseInt(document.getElementById('_n').value);
    console.log(n);
       
    var n1=0,n2=0,n3=0,n4=0,n5=0,n6=0;
    var t1=0,t2=0,t3=0,t4=0,t5=0,t6=0;
    if (n>400) {
        n6= n- 400;
        n5 = n4 = n3 = 100;
        n1 = n2 = 50;        
        } else { if (n>300) {
            n5 = n - 300;
            n4 = n3 = 100;
            n1 = n2 = 50;
            } else { if (n>200) {
                n4 = n - 200;
                n3 = 100;
                n1 = n2 = 50;
                } else { if (n>100) {
                    n3 = n- 100;
                    n1 = n2 = 50;
                    } else { if (n>50) {
                        n2 = n- 50;
                        n1 = 50;
                        } else { 
                            n1 = n;
                        }
                    }
                }
            }
        }
    
        t1= n1 * 1678;
        t2= n2 * 1734;
        t3= n3 * 2014;
        t4= n4 * 2536;
        t5= n5 * 2834;
        t6= n6 * 2927;

    /* 

    if (0<n<=50) {
        n1= n;
        t1= n1 * 1678;
        
    } else {
        if (n<=100) {
            n1=50;
            t1= n1 * 1678;
            n2= n -50;
            t2= n2 * 1734;
            
        } else {
            if (n<=200) {
                n1= 50;
                t1= n1 * 1678;
                n2= 50;
                t2= n2 * 1734;
                n3= n -100;
                t3= n3 * 2014;
                
            } else {
                if (n<=300) {
                    n1= 50;
                    t1= n1 * 1678;
                    n2= 50;
                    t2= n2 * 1734;
                    n3= 100;
                    t3= n3 * 2014;
                    n4= n -200;
                    t4= n4 * 2536;
                    
                } else {
                    if (n<=400) {
                        n1= 50;
                        t1= n1 * 1678;
                        n2= 50;
                        t2= n2 * 1734;
                        n3= 100;
                        t3= n3 * 2014;
                        n4= 100;
                        t4= n4 * 2536;
                        n5= n -300;
                        t5= n5 * 2834;
                        
                    } else {
                        n1= 50;
                        t1= n1 * 1678;
                        n2= 50;
                        t2= n2 * 1734;
                        n3= 100;
                        t3= n3 * 2014;
                        n4= 100;
                        t4= n4 * 2536;
                        n5= 100;
                        t5= n5 * 2834;
                        n6= n -400;
                        t6= n6 * 2927;
                        
                        }
                    }
                }
            }
    } */
    console.log(n1,n2,n3,n4,n5,n6);
    console.log(t1,t2,t3,t4,t5,t6);

    document.getElementById('_n1').innerHTML= '' + n1 ;
    document.getElementById('_n2').innerHTML= '' + n2 ;
    document.getElementById('_n3').innerHTML= '' + n3 ;
    document.getElementById('_n4').innerHTML= '' + n4 ;
    document.getElementById('_n5').innerHTML= '' + n5 ;
    document.getElementById('_n6').innerHTML= '' + n6 ;

    document.getElementById('_t1').innerHTML= '' + t1 ;
    document.getElementById('_t2').innerHTML= '' + t2 ;
    document.getElementById('_t3').innerHTML= '' + t3 ;
    document.getElementById('_t4').innerHTML= '' + t4 ;
    document.getElementById('_t5').innerHTML= '' + t5 ;
    document.getElementById('_t6').innerHTML= '' + t6 ;
    
    var tongtien= t1 + t2 + t3 + t4 + t5 + t6;
    document.getElementById('_tongtien').innerHTML= + tongtien + ' đồng' ;
    document.getElementById('_tongdien').innerHTML= + n + ' kWh';
}