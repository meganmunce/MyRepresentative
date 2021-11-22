$(document).on('click','.topicbutton', function(){
  $(".zipform").animate({opacity: '100'}, 'slow');
  $('.topicform').animate({opacity:'50'}, 'slow');
});

$(document).on('click','.submittopic', function(){
  $(".zipform").animate({opacity: '100'}, 'slow');
});

document.getElementById("tweetexamples").innerHTML = `<blockquote class="twitter-tweet kamalatweet"><p lang="en" dir="ltr">Nearly 2M women have been locked out of the workforce during the pandemic, often due to lack of accessible, affordable child and elder care.<br><br>Our Build Back Better Framework will establish universal pre-K and lower costs for caregiving to help families get back on their feet.</p>&mdash; Kamala Harris (@KamalaHarris) <a href="https://twitter.com/KamalaHarris/status/1459928112037351430?ref_src=twsrc%5Etfw">November 14, 2021</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
