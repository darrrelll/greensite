api_controller.rb


 $http.get('http://www.similarsitesearch.com/api/similar/' + 'www.apple.com').success(function(data){ 
      console.log(data.result);
      debugger
    });



    $http.get('http://api.thegreenwebfoundation.org/greencheck/' + top_50_websites[i]).success(function(data){ 
      sites[i] = data.green;
      sites[i] = data.data;
    });


        top_50_websites =['Facebook.com', 'Twitter.com', 'Youtube.com', 'Wordpress.org',
    'Adobe.com','Blogspot.com',
    'Wikipedia.org',    'Linkedin.com',
    'Wordpress.com',    'Yahoo.com',
    'Amazon.',    'Flickr.com','Pinterest.com',
    'Tumblr.com',
    'W3.org',    'Apple.com', 'Myspace.com',
    'Vimeo.com',
    'Microsoft.com',
    'Youtu.be',
    'Qq.com',
    'Digg.com',
    'Baidu.com',
    'Stumbleupon.com',
    'Addthis.com',
    'Statcounter.',
    'Feedburner.com',
    'Miibeian.gov.cn',
    'Delicious.com',
    'Nytimes.com',
    'Reddit.com',
    'Weebly.com',
    'Bbc.co.uk',
    'Blogger.com',
    'Msn.com',
    'Macromedia.com',
    'Goo.gl',
    'Instagram.com',
    'Gov.uk',
    'Icio.us',
    'Yandex.ru',
    'Cnn.com',
    'Webs.com',
    'Google.de',
    'T.co',
    'Livejournal.com',
    'Imdb.com',
    'Mail.ru',
    'Jimdo.com']

