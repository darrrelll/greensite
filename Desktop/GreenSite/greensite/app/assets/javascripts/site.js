(function(){
  var app = angular.module('site-directives', []);

  app.directive("tabDescription", function(){
    return {
      restrict: "E",
      templateUrl: "tab-layout.html",
      controller: function () {
        this.tab = 0;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
          if(setTab===this.tab)
            this.tab=-1
          else
            this.tab = setTab;
        };
      },
      controllerAs: "tab"
    };
  });

    //Change this to the backend and replace with QueryController once layout is finished
  // app.controller("QueryController",['$http',function($http){
  //   var site = this
  //   site.green = []
  //   site.alternatives = []


  //   api_call = ["www.bing.com","duckduckgo.com","www.ask.com","www.dogpile.com","search.yahoo.com","www.info.com","www.exalead.comsearch","www.webcrawler.com","www.gigablast.com","www.lycos.com","blekko.com","www.ixquick.com","www.hotbot.com","search.looksmart.com","izito.com","www.search-results.com","yippy.com","www.mamma.com","www.anoox.com","www.entireweb.com","www.myspace.com","https:plus.google.com","twitter.com","hi5.com","www.bebo.com","www.linkedin.com","www.friendsreunited.com.au","www.meetup.com","www.friendsreunited.com","www.skyrock.com","www.lifeknot.com","www.viadeo.com","www.xing.com","pulse.plaxo.compulse","www.ryze.com","social-networking-websites-review.toptenreviews.com","www.naymz.com","prochan.com","www.ning.com","www.fubar.com","www.metacafe.com","vimeo.com","www.break.com","video.google.com","www.wimp.com","www.dailymotion.com","www.liveleak.com","new.music.yahoo.comvideos","tune.pk","video.google.co.uk","www.yourdailymedia.com","www.ebaumsworld.com","www.heavy.com","keepvid.com","frequency.com","www.flixxy.com","www.smosh.com","video.google.ca","video.stumbleupon.com","vitaminl.tv","www.excite.com","www.lycos.com","go.com","www.myway.com","markmail.org","www.aol.com","www.dogpile.com","www.webcrawler.com","www.bing.com","www.emailfinder.com","www.ask.com","www.msn.com","searchengineshowdown.com","www.crawler.com","gmane.org","www.anoox.com","www.gigablast.com","www.mail.com","duckduckgo.com","www.mahalo.com","www.soso.com","www.google.cn","www.hao123.com","www.sohu.com","www.youdao.com","www.teein.com","www.ifeng.com","www.265.com","www.dianping.com","www.8684.cn","www.findart.com.cn","www.jobui.com","www.jqw.com","bj.ganji.com","www.zdic.net","www.mapbar.com","www.tvmao.com","www.ip138.com","www.cnki.net","www.baidu.jp","www.encyclopedia.com","www.britannica.com","www.answers.com","www.newworldencyclopedia.org","www.scholarpedia.org","www.worldbookonline.com","www.infoplease.com","www.reference.com","www.about.com","everything2.com","mashpedia.com","wikepedia.com","en.citizendium.org","encyclopedia.thefreedictionary.com","www.wikimedia.org","www.eol.org","www.eolss.net","www.digitaluniverse.net","www.factbites.com","wikiwix.com","www.half.ebay.com","www.rakuten.com","brilliantstore.com","www.barnesandnoble.com","www.frys.com","www.buydig.com","www.bookdepository.com","www.newegg.com","www.bestbuy.com","www.bookfinder.com","www.sears.com","www.addall.com","www.sparkfun.com","octopart.com","www.futurlec.com","www.alliedelec.com","www.alibris.com","www.newark.com","www.allelectronics.com","www.betterworldbooks.com","hootsuite.com","plurk.com","foursquare.com","friendfeed.com","twitterfeed.com","www.linkedin.com","friendorfollow.com","www.myspace.com","www.skyrock.com","brightkite.com","unfollowers.com","https:plus.google.com","www.shoutem.com","www.ning.com","seesmic.com","www.chrisbrogan.com50-ideas-on-using-twitter-for-business","twitpic.com","my.mashable.com","www.meetup.com","klout.com","www.sohu.com","www.tom.com","www.hao123.com","www.21cn.com","www.people.com.cn","www.backchina.com","www.xinhuanet.com","www.yesky.com","www.ifeng.com","www.sinovision.net","www.china.com","www.cnd.org","www.eastday.com","www.chinanews.com","japanese.cri.cn","www.wenxuecity.com","www.chinabyte.com","www.southcn.com","www.epochtimes.com","www.sina.com","www.paipai.com","www.eachnet.com","www.amazon.cn","www.dangdang.com","www.gome.com.cn","www.moonbasa.com","www.m18.com","www.mogujie.com","www.vjia.com","www.tmall.com","www.okbuy.com","www.meituan.com","www.panli.com","www.womai.com","www.xiu.com","www.ebay.cn","www.china-pub.com","www.bookschina.com","www.hers.com.cn","www.ea3w.com"]

  //   new_array = []

  //   for(i=0; i<api_call.length; i++){
  //     $http.get('http://api.thegreenwebfoundation.org/greencheck/' + api_call[i]).success(function(data){ 
  //       console.log(i, data);
  //       new_array.push({i: data});
  //     });
  //   }
  // }]);


})();