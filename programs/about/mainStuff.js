function windowHome() {
  var inject =
    '\
<font size="8">TOKEN TEST - Welcome Screen</font><br>\
    Greetings, and welcome to BLABLA. blah blah blah!   blah blah blah\
    <div class="windowSocails">\
        <font style="position: relative; bottom: 2px;">\
            <center>\
                <font color="#00000" size="5" style="position: relative; bottom: 4px;">|</font>\
                <button type="button" class="deskbutton" onclick="yt()" style="cursor: url(\'cursor/w98hand.cur\'), pointer;">\
                    <img src="ytlogo.png" width="20px" height="20px">\
                </button>\
                <font color="#00000" size="5" style="position: relative; bottom: 4px;">|</font>\
                <button type="button" class="deskbutton" onclick="twitter()" style="cursor: url(\'cursor/w98hand.cur\'), pointer;">\
                    <img src="twitterlogo.png" width="20px" height="20px">\
                </button>\
                <font color="#00000" size="5" style="position: relative; bottom: 4px;">|</font>\
                <button type="button" class="deskbutton" onclick="twitch()" style="cursor: url(\'cursor/w98hand.cur\'), pointer;">\
                    <img src="twitchlogo.png" width="20px" height="20px">\
                </button>\
                <font color="#00000" size="5" style="position: relative; bottom: 4px;">|</font>\
                <button type="button" class="deskbutton" onclick="soundcloud()" style="cursor: url(\'cursor/w98hand.cur\'), pointer;">\
                            <img src="sclogo.png" width="20px" height="20px">\
                </button>\
                <font color="#00000" size="5" style="position: relative; bottom: 4px;">|</font>\
                <button type="button" class="deskbutton" onclick="spotify()" style="cursor: url(\'cursor/w98hand.cur\'), pointer;">\
                    <img src="spotifylogo.png" width="20px" height="20px">\
                </button>\
                <font color="#00000" size="5" style="position: relative; bottom: 4px;">|</font>\
                <button type="button" class="deskbutton" onclick="bandcamp()" style="cursor: url(\'cursor/w98hand.cur\'), pointer;">\
                    <img src="bclogo.png" width="20px" height="20px">\
                </button>\
                <font color="#00000" size="5" style="position: relative; bottom: 4px;">|</font>\
            </center>\
        </font>\
    </div>\
    <br>\
    <div class="news">\
        <center><font size="6" color="#7a00a6">News and Updates:</font></center>\
        \
        <center><hr style="width: 100%; border: 2px solid DarkOrchid; border-radius: 2px;"></center>\
            <div class="newsHeader"><center>\
                <font size="6" color="#B22222">I REVAMPED MY WEBSITE</font><br>\
                -=[ December 1st, 2020 by Bitterli ]=-\
                <hr style="width: 25%; position: relative; left: 0px;">\
                </center></div>\
                <font size="5"><center>\
                    After many months of work, it\'s finally here! The long awaited BitterliOS. I have been working really hard to get this project to work and I hope you guys appreciate the new website design. With the new Windows 98 look, BitterliOS is now fully running and working. Explore the page, see what you can find. I will continuely update the page and add more stuff. See if you can find all the hidden stuff, too! Anyway, hope the facelift is pretty cool for you epic people out there!\
                </center></font>\
                \
                <center><hr style="width: 100%; border: 2px solid DarkOrchid; border-radius: 2px;"></center>\
                <div class="newsHeader"><center>\
                    <font size="6" color="#008710">NOW ON SPOTIFY!</font><br>\
                        -=[ August 1st, 2020 by Bitterli ]=-\
                    <hr style="width: 25%; position: relative; left: 0px;">\
                </center></div>\
                <font size="5"><center>\
                    My music is now streaming on SPOTIFY or any other streaming service<br>\
                    you may use! Click the links below to start jamming out to the beats!\
                </center></font>\
                <div style="padding: 10px;">\
                    <div style="border-style: solid; border-width: 5px; border-color: rgb(221, 221, 221, 0.5); padding: 10px; background-color: rgb(20, 20, 20);"><center>\
                        <div>\
                            <font size="5" color="#fffff">"its samplable" (2020)</font><br><br>\
                            <img src="http://bitterli.us/icons/its_samplable_100px.png"><br><br>\
                            <a href="https://open.spotify.com/album/6wwCRzgPYPv97cwykIEk8G"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/spotify.png" alt="Spotify" height="50" width="50"></button></a>\
                            <a href="https://music.apple.com/us/album/its-samplable/1525446739"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/apple-music.png" alt="Apple Music" height="50" width="50"></button></a>\
                            <a href="https://play.google.com/store/music/album/Bitterli_Its_Samplable?id=Btcupinayhagxtgneqrmyx2xkyu"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/google-play-music.png" alt="Google Play" height="50" width="50"></button></a>\
                            <a href="https://soundcloud.com/bitterli/sets/its-samplable"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/soundcloud.png" alt="Soundcloud" height="50" width="50"></button></a>\
                            <a href="https://bitterli.bandcamp.com/album/its-samplable"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/bandcamp.png" alt="Bandcamp" height="50" width="50"></button></a>\
                        </div>\
                        <br>\
                            <div>\
                                <font size="5" color="#fffff">"Television" (2019)</font><br><br>\
                                <img src="http://bitterli.us/icons/television_100px.jpg"><br><br>\
                                <a href="https://open.spotify.com/album/1JkpJabcTEVThlRZLQuUHo"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/spotify.png" alt="Spotify" height="50" width="50"></button></a>\
                                <a href="https://music.apple.com/us/album/television/1525000231"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/apple-music.png" alt="Apple Music" height="50" width="50"></button></a>\
                                <a href="https://play.google.com/store/music/album/Bitterli_Television?id=Bfuwohv6flaldd7ltj4e6za3vuu"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/google-play-music.png" alt="Google Play" height="50" width="50"></button></a>\
                                <a href="https://soundcloud.com/bitterli/sets/television"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/soundcloud.png" alt="Soundcloud" height="50" width="50"></button></a>\
                                <a href="https://bitterli.bandcamp.com/album/television"><button id="announceBtn" style="cursor: url(\'cursor/w98hand.cur\'), pointer;"><img src="http://bitterli.us/icons/bandcamp.png" alt="Bandcamp" height="50" width="50"></button></a>\
                            </div>\
                            <br>\
                        </center></div>\
                    </div>\
                    <center><hr style="width: 100%; border: 2px solid DarkOrchid; border-radius: 2px;"></center>\
                    <br>This is the end of the news updates. :)<br><br>\
                </div>';
  document.getElementById("windowTabContent").innerHTML = inject;
}

function windowAboutMe() {
  var inject =
    '<img style= " float: right; top: 20px; position:relative; " src= "400pxlogo.png" height="200px" width="200px">\
    <font size="8">About Bitterli</font><br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, I am a small content creator with a passion for making music and YouTube videos.\
    I first started making YouTube videos as far back as 2010 but didn\'t go all in until 2013. I\
    started creating music in 2016. My works have been uploaded to Soundcloud, Spotify, YouTube, etc.<br>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I mainly produce "Twitch Funny Moments" content on my YouTube page, vaporave-ish music on\
    my music media pages and I mostly stream Minecraft with my friends. I guess I code as a hobby, I\
    mean I made this page because I got tired of editing and I was sick. I am also a bit of a memer (HAHAHA)\
    and like to make MEMES when I AM BORED! YES MEMES! I have a folder on the desktop filled with memes I\
    have made which you can explore.<br>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On Twitch, I try to stream every Saturday at 9PM EST. I may stream on Friday at 9PM EST but that isn\'t a guarantee. Follow me on Twitter\
    for updates on when I go live. I try to upload on YouTube once a month but sometimes I do more, sometimes I do less. Once again, Twitter is the place\
    where I will update on stuff like that. I tend to make music every now and again and plan on a complete album release every August of each year. You\
    can view and listen to my discography in the "Listen" application on the desktop.<br>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have a few YouTube handles. My main one is "BitterliStudios" and my old one is now called "BitterliClassic". My channel where I upload\
    full stream vods is called "BitterliLive". My Twitter handle is @BitterliMine and my Twitch, Soundcloud, Spotify and Bandcamp handle is just "Bitterli".\
    My Instagram handle (which I don\'t use often, if at all) is "BitterliStudios". I do not have a Facebok profile.<br>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you wish to contact me, press the "Contact Me" icon on the desktop or just email me with the email "me@bitterli.us" or\
    "bitterliminecraft@gmail.com". Ultimately, the best way to contact me is through Discord: "Bitterli#4274" or Twitter "@BitterliMine". I am more\
    active on there than anything.\
    ';
  document.getElementById("windowTabContent").innerHTML = inject;
}
