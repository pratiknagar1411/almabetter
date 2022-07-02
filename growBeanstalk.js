
function growBeanstalk(years) {
   if (years <= 0) {
     return 0;
     }
         else if (years <= 2) {
         //console.log(1);
         return 1;
     } 
      console.log("recursion of " + years + ":");console.log(years-1);console.log(years-2)
          return growBeanstalk(years - 1) + 
            growBeanstalk(years - 2);
   }
   growBeanstalk(5);
   
