 var myCookie = Cookies.get('requestDesktop')
      if (myCookie){
      console.log("true");
      } else {
      Cookies.set('requestDesktop', 'true', { expires: 7 });
      
      window.onload=function(){
      var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
      if (mobile) {
      alert("You are on MOBILE VIEW,\nPlease use DESKTOP MODE for better viewing.");
      } else {
      }
      }
      }
