  var sites=[
    {
 name: 'Google',
      url: 'www.google.com',
      green: true,
      governance: 48,
      environment: 60,
      community: 57,
      rank: 1,
      news: {headline:"Google Reader shutting down", url:"http://googleblog.blogspot.com/2013/03/a-second-spring-of-cleaning.html"},
      alternatives: [{url: 'izito.com', green:true},{url: 'www.entireweb.com', green:true}]
  	},{
     name: 'Facebook',
      url: 'www.facebook.com',
      green: false,
      governance: 39,
      environment: 52,
      community: 49,
      rank: 2,
      news: {headline:"Facebook Fraud [video]", url:"http://www.youtube.com/watch?v=oVfHeWTKjag"},
      alternatives: [{url: 'No alternatives yet', green:false}]
    },{
     name: 'Youtube',
      url: 'www.youtube.com',
      green: false,
      governance: 45,
      environment: 69,
      community: 72,
      rank: 3,
      news: {headline:"Dear Googles: G+/YouTube Anschluss \- you've done outed me", url:"https://plus.google.com/115668950429167517685/posts/JcPQuXzXTgU"},
      alternatives: [{url: 'vitaminl.tv', green:true},{url: 'www.wimp.com', green:true}]
    },{
     name: 'Yahoo',
      url: 'www.yahoo.com',
      green: false,
      governance: 57,
      environment: 57,
      community: 53,
      rank: 4,
      news: {headline:"NSA infiltrates links to Yahoo, Google data centers worldwide", url:"http://www.washingtonpost.com/world/national-security/nsa-infiltrates-links-to-yahoo-google-data-centers-worldwide-snowden-documents-say/2013/10/30/e51d661e-4166-11e3-8b74-d89d714ca4dd_story.html?Post+generic=%3Ftid%3Dsm_twitter_washingtonpost"},
      alternatives: [{url: 'www.google.com', green:true}]
    
},{
     name: 'Baidu',
      url: 'www.baidu.com',
      green: false,
      governance: 50,
      environment: 56,
      community: 57,
      rank: 5,
      news: {headline:"Baidu Hires Andrew Ng", url:"http://www.technologyreview.com/news/527301/chinese-search-giant-baidu-hires-man-behind-the-google-brain"},
      alternatives: [{url: 'www.google.com', green:true}]
},{
     name: 'Wikipedia',
      url: 'www.wikipedia.org',
      green: false,
      governance: 50,
      environment: 50,
      community: 50,
      rank: 6,
      news: {headline:"Wikipedia to Shut Down on Wednesday to Protest SOPA", url:"http://thenextweb.com/insider/2012/01/16/wikipedia-will-shut-down-for-24-hours-on-wednesday-to-protest-against-sopa/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+TheNextWeb+%28The+Next+Web+All+Stories%29"},
      alternatives: [{url: 'www.mashpedia.com', green:true}, {url: 'www.factbites.com', green:true}]
   },{   
     name: 'Amazon',
      url: 'www.amazon.com',
      green: false,
      governance: 40,
      environment: 49,
      community: 39,
      rank: 7,
      news: {headline:"Breaking down Amazon's mega dropdown", url:"http://bjk5.com/post/44698559168/breaking-down-amazons-mega-dropdown"},
      alternatives: [{url: 'www.allelectronics.com', green:true}]
 	},{
      name: 'Twitter',
      url: 'www.twitter.com',
      green: false,
      governance: 36,
      environment: 49,
      community: 44,
      rank: 8,
      news: {headline:"Twitter Bootstrap", url:"http://twitter.github.com/bootstrap/"},
      alternatives: [{url: 'twitpic.com', green:true},{url: 'www.shootem.com', green:true},{url: 'www.unfollowers.com', green:true}]
	},{
      name:  'Qq',
      url: 'www.Qq.com',      
      green: false,
      governance: 44,
      environment: 46,
      community: 52,
      rank: 9,
      news: {headline:"Why Facebook should worry about Tencent", url:"http://blogs.hbr.org/2014/04/why-facebook-should-worry-about-tencent"},
      alternatives: [{url: 'www.sinovision.net', green:true},{url: 'www.backchina.com', green:true}]
    },{
      name: 'Taobao',
      url: 'www.taobao.com',
      green: false,
      governance: 53,
      environment: 47,
      community: 43,
      rank: 10,
      news: {headline:"Taobao.com breaks record for online sales in a day - $3.1 billion USD", url:"http://westiseast.co.uk/blog/taobao-sales-19-billion-bonanza/"},
      alternatives: [{url: 'www.panli.com', green:true}]
    }];
    
  var reviews = [
    {
      votes: 7,
      body: "It would be great if I could upload all my bookmarks and check if they run on dirty or clean energy.",
      author: "turtleguyy@example.org",
      country: 'Brazil',
      createdOn: 1391490980855
    },{
      votes: 14,
      body: "Add a feature that would allow a user to enter their own websites.",
      author: "LouisW407@example.org",
      country: 'USA',
      createdOn: 1345490980834
    },{
      votes: 99,
      body: "Add a feature that calculates the amount of energy and CO2 used based on the page views.",
      author: "nat@example.org",
      country: 'Sweden',
      createdOn: 1303490980605
    }];