//#region const 
const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const Client = new Discord.Client;
const prefix = "$";
let TalkBot = true;
let SongVolume = 1;
const Queue = new Map();
const { YTSearcher } = require('ytsearcher');
const searcher = new YTSearcher({key: process.env.YTSearcher_Key ,revealed: true });
//Little bot: first account  : AIzaSyBpKDF14e0FQGaDDVIlj8iL2KOV5sgthDk
//Little bot: Second account : AIzaSyBB8Xd0AslU6mlf5V0F4Tnd72W7YTFqblQ
Client.on("ready" , () => {
    console.log("Hello");
});
//#endregion
//=====================================================================================================================================
//#region Member add / remove 
Client.on("guildMemberAdd" , member => {
    console.log("Someone joined !")
    member.guild.channels.cache.find(channel => channel.id === "787486069087273004").send("Welcome " + member.displayName);
});
Client.on("guildMemberRemove" , member => {
    console.log("Someone lefted !")
    member.guild.channels.cache.find(channel => channel.id === "787486069087273004").send("Bye Bye " + member.displayName); 
});
//#endregion
//=====================================================================================================================================
//#region Message Ban
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;
    if(message.content.startsWith(prefix + "Ban"))
    {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            if(message.content.startsWith(prefix +"Ban Help"))
            {
               message.reply(`How to use $Ban ?
               1- Tap the command $Ban @Target.
                   The target will be the person you want to ban.
               2- Tap the @TargetName.
               3- press enter, if you did a mystake, I'll tell you!
               `);
            }
            else
            {
                if(TalkBot == true){
                    message.channel.send(message.author.username + ". Your demand has been accepted");
                }
                let mention = message.mentions.members.first();
                if(mention == undefined)
                {
                    if(TalkBot == true){
                         message.reply("The selected target is miss-tap or does not exist")
                    }
                }
                else
                {
                    if(mention.bannable)
                    {
                        mention.ban(); 
                        message.channel.send(mention.displayName + "as been ban !");
                    }
                    else
                    {
                        if(TalkBot == true){
                            message.channel.send("You have not the possibylity of banning this target");
                        }
                    }
                }
            }
        }
        else 
        {
        message.channel.send(`Sorry ${message.author.username}. But it seems that you don't have privileges' to tap that type of command`); 
        }
    }
});
//#endregion
//=====================================================================================================================================
//#region Message kick
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;

    if(message.content.startsWith(prefix + "Kick"))
    {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            if(message.content.startsWith(prefix +"Kick Help"))
            {
               message.reply(`How to use $Kick ?
               1- Tap the command $Kick @Target
                   The target will be the person you want to Kick.
               2- Tap the @TargetName
               3- press enter, if you did a mystake, I'll tell you!
               `);
            }
            else
            {
                if(TalkBot == true){
                     message.channel.send(message.author.username + ". Your demand has been accepted");
                    }
                let mention = message.mentions.members.first();
                if(mention == undefined)
                {
                    if(TalkBot == true){
                    message.reply("The selected target is miss-tap or does not exist")
                    }
                }
                else
                {
                    if(mention.kickable)
                    {
                        mention.kick();
                        if(TalkBot == true){
                        message.channel.send(mention.displayName + " as been Kick !");
                        }                      
                    }
                    else
                    {
                        if(TalkBot == true){
                       message.channel.send("You have not the possibylity of kicking this target");
                        }                       
                    }
                } 
            }
        }
        else 
        {
        message.channel.send(`Sorry ${message.author.username}. But it seems that you don't have privileges' to tap that type of command`); 
        }
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Mute
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;
    if(message.content.startsWith(prefix + "Mute"))
    {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            if(message.content.startsWith(prefix +"Mute Help"))
            {
               message.reply(`How to use $Mute ?
               1- Tap the command $Mute @Target
                   The target will be the person you want to Mute.
               2- Tap the @TargetName
               3- press enter, if you did a mystake, I'll tell you!
               `);
            }
            else
            {
                if(TalkBot == true){
                     message.channel.send(message.author.username + ". Your demand has been accepted");
                }     
                let mention = message.mentions.members.first();
                if(mention == undefined)
                {
                    if(TalkBot == true){
                     message.reply("The selected target is miss-tap or does not exist");
                    }     
                }
                else
                {
                    mention.roles.add("787817446517243934");
                    if(TalkBot == true){
                    message.channel.send(mention.displayName + " as been mute !");
                    }
                }
            }
        }
        else 
        {
        message.channel.send(`Sorry ${message.author.username}. But it seems that you don't have privileges' to tap that type of command`); 
        }
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Unmute
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm")return;

    if(message.content.startsWith(prefix + "Unmute"))
    {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            if(message.content.startsWith(prefix +"Unmute Help"))
            {
               message.reply(`How to use $Unmute ?
               1- Tap the command $unmute @Target
                   The target will be the person you want to Unmute.
               2- Tap the @TargetName
               3- press enter, if you did a mystake, I'll tell you!
               `);
            }
            else
            {
                if(TalkBot == true){
                    message.channel.send(message.author.username + ". Your demand has been accepted");
                } 
                let mention = message.mentions.members.first();
                if(mention == undefined)
                {
                    if(TalkBot == true){
                     message.reply("The selected target is miss-tap or does not exist");
                    }  
                }
                else
                {
                    mention.roles.remove("787817446517243934");
                    if(TalkBot == true){
                    message.channel.send(mention.displayName + " as been Unmute !");
                    }   
                }
            }
        }
        else 
        {
        message.channel.send(`Sorry ${message.author.username}. But it seems that you don't have privileges' to tap that type of command`); 
        }
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Hello
Client.on("message", message => {
    if(message.author.bot) return;
    let HelloWord = message.content.slice(prefix.length).trim().split(/ +/g);
    const ReplyHello = HelloWord.shift().toLocaleLowerCase();
    switch (ReplyHello){
        case 'hello':
            message.reply('Hello !')
        break;
        case 'hi':
            message.reply('Hello !')
        break;
        case 'allo':
            message.reply('Hello !')
        break;
        case 'bonjour':
            message.reply('Hello !')
        break;
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Buzz
Client.on("message" , message =>{
if(message.author.bot) return;
if(message.content == prefix + "Buzz"){
    message.channel.send("Buzz-Buzz")
};
});
//#endregion
//=====================================================================================================================================
//#region Message Music
Client.on("message" , message => {
    if(message.content.startsWith(prefix + "Youtube")){
        if(message.content.startsWith(prefix +"Youtube Help")){
           message.reply(`How to use $Youtube ?
           1- Tap the command $Youtube
           2- Tap the Link (tap it carfully or copy past)
           3- press enter, if you did a mystake, I'll tell you!
           `) ;
        }else{
            if(message.member.voice.channel){
                message.member.voice.channel.join().then(connection => {
                    let args = message.content.split(" ");
                    message.delete();
                   if(!args[1]){
                    if(TalkBot == true){
                     message.reply("Link miss-tap or none existing !");
                    }         
                        message.channel.send("$Stop");
                    }
                    else{
                        let dispatcher = connection.play(ytdl(args[1], {filter: 'audioonly'}));
                        if(TalkBot == true){
                        message.reply("Now playing")
                        }              
                        dispatcher.on("finish" , () => {
                            dispatcher.destroy();
                            connection.disconnect();
                        });
                        dispatcher.on("error" , err => {
                        console.log("Erreur : " + err )
                        });
                    }
                }).catch(err => {
                    if(TalkBot == true){
                    message.reply("Error as occured ! :" + err);
                    }        
                    message.channel.send("$Stop"); 
                })
            }
            else{
                message.reply("You are not in a voice channel");
            }
        }
    }
});

Client.on("message", message => {
    if(message.content.startsWith(prefix + "Youtube")){
    message.delete();
    }
})
//#endregion
//=====================================================================================================================================
//#region Message Music Developed
Client.on("message" , async(message) =>{
    const Playtime = 0;
if(message.content.startsWith(prefix)){
    if(message.content.startsWith(prefix + "Play Help")){
        message.delete();
        message.reply(`How to use $Play ?
           1- Tap the command $Play
           2- Tap the thing you want to listen, the program will find the link by himself
           3- press enter, if you did a mystake, I'll tell you!
           ------------------------------------------------------------------------------------------------------------------------------------------
           List of the command of $Play:

           $Stop              : Stop everything, and clear the Queue
           $Skip               : Skip to the next song
           $Pause            : Pause the song that is in play
           $Resume        : Resume the song that as been paused
           $Queue           : Show you the queue of the music selected
           $Join                : Make the bot join you in an other voice chat
           $Loop              : Make a loop off the queue, select one of them : <All / One / Off>
           `) ;
    }else if(message.content.startsWith(prefix + "Stop Help")){
        message.delete();
        message.reply(`How to use $Stop ?
           1- Tap the command $Stop
           It will clear all the songs in the queue and stop playing in that instant
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Skip Help")){
        message.delete();
        message.reply(`How to use $Skip ?
           1- Tap the command $Skip
           It will skip to the next song in the list.
           If you are in a loop, it will just loop around the same songs.
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Pause Help")){
        message.delete();
        message.reply(`How to use $Pause ?
           1- Tap the command $pause
           It will pause the song that is playing.
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Resume Help")){
        message.delete();
        message.reply(`How to use $Resume ?
           1- Tap the command $Resume
           It will resume the song if it is on pause.
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Join Help")){
        message.delete();
        message.reply(`How to use $Join ?
           1- Tap the command $Join
           It will make the bot join the conversation instantly.
           2- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Queue Help")){
        message.delete();
        message.reply(`How to use $Queue ?
           1- Tap the command $Queue
           It will show you the queue of all song added and comming.
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Loop Help")){
        message.delete();
        message.reply(`How to use $Loop ?
        1- Tap the command $Loop
        It will ennable a loop of you choice: <All / One / Off>
        -----------------------------------------------------------------------
        $Loop All       : Do a loop with all the song in the queue.
        $Loop One    : Do a loop with the current song playing.
        $Loop Off      : Stop the loop.
        2- Press enter.`)
    }else{
         const prefix = '$';
         const serverQueue = Queue.get(message.guild.id);
         const args = message.content.slice(prefix.length).trim().split(/ +/g);
         const command = args.shift().toLocaleLowerCase();
        
        switch(command){
            case 'play':
                execute(message, serverQueue);
            break;
            case 'stop':
                stop(message, serverQueue);
            break;
            case 'skip':
                skip(message, serverQueue);
            break;
            case 'pause':
                pause(serverQueue);
            break;
            case 'resume':
                resume(serverQueue);
            break;
            case 'loop':
                Loop(args, serverQueue);
            break;
            case 'queue':
                queue(serverQueue);
            break;
            case 'volume':
                VolumeOption(args, serverQueue);
            break;
            case 'join':
                JoinBack(serverQueue);
            break;
        }
         async function execute(message , serverQueue){
             let vc = message.member.voice.channel;
             if(!vc){
                 return message.reply("Please join a voice channel first !");
             }else{
                let result = await searcher.search(args.join(" ") , {type: "video"});
                console.log(result.first.url + "  ||||  " + args.join(" "));
                const songInfo = await ytdl.getInfo(result.first.url)
                let song ={
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url
                };
                if(!serverQueue){
                    const queueConstructor = {
                        txtChannel: message.channel,
                        VChannel: vc,
                        connection: null,
                        songs: [],
                        volume: SongVolume,
                        playing: true,
                        loopone: false,
                        loopall: false,
                        talk: false
                    };
                    Queue.set(message.guild.id, queueConstructor);
                    queueConstructor.songs.push(song);
                    try{
                        let connection = await vc.join();
                        queueConstructor.connection = connection;
                        play(message.guild, queueConstructor.songs[0]);
                    }catch (err){
                        console.error(err);
                        Queue.delete(message.guild.id);
                        return console.log("Unable to join the Voice Channel !")
                    }
                }else{
                    console.log("Adding a song")
                    serverQueue.songs.push(song);
                    return message.reply("The selected song as been added !")                   
                 }
             }
         }
         function play(guild, song){
             const serverQueue = Queue.get(guild.id);
             if(!song){
                 serverQueue.VChannel.leave();
                 Queue.delete(guild.id);
                 if(TalkBot == true){
                     message.channel.send("I am now disconnected !")
                 }
                 return;
             }
            if(TalkBot == true){
              message.reply("Now Playing !");  
            }
            console.log("Now Playing : " );
            let dispatcher = serverQueue.connection
             .play(ytdl(song.url))
             .on('finish', () =>{
                if(serverQueue.loopone){
                    play(guild, serverQueue.songs[0]);             
                }
                else if(serverQueue.loopall){
                    serverQueue.songs.push(serverQueue.songs[0]);
                    serverQueue.songs.shift();      
                }else{
                    serverQueue.songs.shift();
                }
                 play(guild, serverQueue.songs[0]);
             })
         }
         function stop (message, serverQueue){
             if(!message.member.voice.channel){
             return message.reply("You need to be in a Voice Channel first !")}
             serverQueue.songs =[];
             console.log("List Clear and Stop") 
             serverQueue.songs.shift();
             serverQueue.connection.dispatcher.end();
             serverQueue = null;
             console.log("Loops as been disable");     
            }     
         function skip (message, serverQueue){
            if(!message.member.voice.channel)
            return message.reply("You need to be in a Voice Channel first !");
            if(!serverQueue)
            return
            serverQueue.connection.dispatcher.end();
            if(TalkBot == true){
                message.channel.send("Next. . .")
            }
            console.log("Skiping the next song: " )   
         }
         function pause(serverQueue){
            if(!serverQueue.connection)
                return message.channel.send("There is no music currently playing !");
            if(!message.member.voice.channel)
                return message.channel.send("You are not in the Voice Channel !");
            if(!serverQueue.connection.dispatcher.pause)
                return message.channel.send("The song is already paused !")
            serverQueue.connection.dispatcher.pause();
            message.channel.send("The song as been paused !")
         }
         function resume(serverQueue){
            if(!serverQueue.connection)
                return message.channel.send("There is no music currently playing !");
            if(!message.member.voice.channel)
                return message.channel.send("You are not in the Voice Channel !");
            if(serverQueue.connection.dispatcher.resumed)
                return message.channel.send("The song is already playing !")
            serverQueue.connection.dispatcher.resume();
            message.channel.send("The song as been resumed !")
         }
         function queue(serverQueue){
            if(!message.member.voice.channel)
            return message.channel.send("You are not in the Voice Channel !");
            if(!serverQueue.songs[0])
            return message.channel.send('```No song register\n-----------------------------------------```');
            let nowPlaying = serverQueue.songs[0];
            let qmsg =` Now playing : ${nowPlaying.title}\n-----------------------------------------\n`
            for(var index = 1; index < serverQueue.songs.length; index++){
                qmsg += `${index}. ${serverQueue.songs[index].title}\n`
            }
            message.channel.send('```' + qmsg + '```')
         }
         function VolumeOption(args, serverQueue){  
            if(!serverQueue.connection)
            return message.channel.send("There is no music currently playing !");
            if(!message.member.voice.channel)
            return message.channel.send("You are not in the Voice Channel !");
             switch(args[0]){
                 case '1':
                    SongVolume = 1;
                 break;
                 case '2':
                    SongVolume = 2;
                 break;
                 case '3':
                    SongVolume = 3;
                 break;
                 case '4':
                    SongVolume = 4;
                 break;
                 case '5':
                    SongVolume = 5;
                 break;
                 case '6':
                    SongVolume = 6;
                 break;
                 case '7':
                    SongVolume = 7;
                 break;
                 case '8':
                    SongVolume = 8;
                 break;
                 case '9':
                    SongVolume = 9;
                 break;
                 case '10':
                    SongVolume = 10;
                 break;
                 default:
                     message.channel.send("You did not selected a correct volume, please tap a volome that is bettween 1 to 10 !")
                 break;
                } 
            }  
            function JoinBack(serverQueue){
                if(!message.member.voice.channel){
                    message.reply("You are not in the Voice Channel !")
                }else if(!serverQueue){
                    message.reply("There is no songs in the queue !")
                }else{

                message.member.voice.channel.join();

                if(TalkBot == true){
                    message.channel.send("Now joining you !")
                }
                }
            }
        }   
        function Loop(args, serverQueue){
            if(!serverQueue.connection)
            return message.channel.send("There is no music currently playing !");
            if(!message.member.voice.channel)
            return message.channel.send("You are not in the Voice Channel !");
            switch(args[0]){
            case 'All':
                serverQueue.loopall = !serverQueue.loopall;
                serverQueue.loopone = false;                  
                if(serverQueue.loopall === true){
                message.channel.send("Loop All has been turned on !");
                console.log("Loop All ennable ");
                }
                else{
                message.channel.send("Loop All has been turned off !");
                console.log("Loop All disable");
                }
            break;
            case 'One':
               serverQueue.loopone = !serverQueue.loopone;
               serverQueue.loopall = false;
               if(serverQueue.loopone === true){
               message.channel.send("Loop One has been turned on !");
               console.log("Loop One ennable")
               }
               else{
               message.channel.send("Loop One has been turned off !");
               console.log("Loop One disable");
               }
            break;
            case 'Off':
               serverQueue.loopall = false;
               serverQueue.loopone = false;
               message.channel.send("Loop as been tured off")
               console.log("Loops are disable")
            break;
            default:
                message.channel.send("You did not seleted a loop, choose betwen : <$Loop all / $Loop one / $Loop off")
            break;
            } 
        }
    }
});
Client.on("message" , message => {
    if(message.content.startsWith(prefix + "Talk")){
        if(TalkBot == true){
            TalkBot = false
        }else{
            TalkBot = true
        }
        if(TalkBot === false){
            message.reply("Bot will not talk by his own !")
        }else{
            message.reply("Bot will talk by his own !")
        }
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Audio Help
Client.on("message" , message => {
    if(message.content.startsWith(prefix + "Audio Help")){
        message.channel.send(`
How to use $Play ?
        1- Tap the command $Play
        2- Tap the thing you want to listen, the program will find the link by himself
        3- press enter.
How to use $Stop ?
        1- Tap the command $Stop
        It will clear all the songs in the queue and stop playing in that instant
        2- press enter.
How to use $Skip ?
        1- Tap the command $Skip
        It will skip to the next song in the list.
        If you are in a loop, it will just loop around the same songs.
        2- press enter.
How to use $Pause ?
        1- Tap the command $pause
        It will pause the song that is playing.
        2- press enter.
How to use $Resume ?
        1- Tap the command $Resume
        It will resume the song if it is on pause.
        2- press enter.
How to use $Queue ?
        1- Tap the command $Queue
        It will show you the queue of all song added and comming.
        2- press enter.
How to use $Loop ?
        1- Tap the command $Loop
        It will ennable a loop of you choice: <All / One / Off>
        -----------------------------------------------------------------------
        $Loop All       : Do a loop with all the song in the queue.
        $Loop One    : Do a loop with the current song playing.
        $Loop Off      : Stop the loop.
        2- Press enter.
How to use $Join ?
        1- Tap the command $Join
        It will make the bot join the conversation instantly.
        2- press enter.`)
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Embed
Client.on("message", message => {
    if(message.author.bot) return;
    let EmbedMessage = message.content.slice(prefix.length).trim().split(/ +/g);
    const ReplyEmbed = EmbedMessage.shift().toLocaleLowerCase();
    switch (ReplyEmbed){
        case 'lil-bot':
            var embed = new Discord.MessageEmbed()
            .setColor("#0099FF")
            .setTitle("**ME !!!**")
            .setAuthor("Little Bot")
            .setDescription("Can do lot of stuff \n try them all !")
            .setThumbnail(message.author.avatarURL)

            message.channel.send(embed);  
        break;
        case '':
            
        break;
        case '':
           
        break;
        case '':
           
        break;
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Stop
Client.on("message" , message => {
    if(message.content.startsWith(prefix + "Stop"))
   {
    if(message.member.voice.channel){
        message.member.voice.channel.leave();
        }
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Clear
//Client.on("message" , message => {
//    if(message.content.startsWith(prefix)){
//        const args = message.content.slice(prefix.length).trim().split(/ +/g);
//        const command = args.shift().toLocaleLowerCase();
//                message.delete();
//                async function clear() {
//                    var purge = Number(args[0])
//                    if(isNaN(purge)) {
//                        message.channel.send(`Please, put a number of message to remove after the $Clear
//                       ex: $Clear 5`)
//                    }
//                    const fetched = await message.channel.messages.fetch({limit: purge});
//                    console.log(fetched.size + "message found")
//                    message.channel.bulkDelete(fetched)
//                    message.channel.send("I have destroy " + fetched.size + " messages")
//                }
//                clear();
//    }        
//});
//#endregion
//=====================================================================================================================================
//#region Message Kill Bot
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.member.hasPermission('ADMINISTRATOR')){
    if(message.content == prefix + "Kill_Bot"){
        message.delete();
        message.channel.send("Reeboting. . .  no more command will be process !")
    }
    }
});
Client.on("message", message => {
    if(message.author.bot){
    if(message.content == "Reeboting. . .  no more command will be process !"){
        message.delete();
        cnjrencjnc(cnrnckjencjnciew);
    }
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Color
Client.on("message", message => {
    const ColorImage = new Discord.MessageAttachment
    let MessageAutor = message.author;
    if(message.author.bot) return
        if(message.content.startsWith(prefix + "Color Help")){
            message.reply(`How to use $Color ?
            1- tap the command $Color
            2- Tap the color or the number related to the color, use the color available to do so !
            3- press enter, if you did a mistake, i'll tell you !

            !!! TAKE NOTE THAT THE COMMAND TAKE TIME, IT IS NOT INSTANT !!!
            `);
            message.channel.send("All the color available : ", {files: ["./Bot 1/Color.png"]});       
        }else if(message.content.startsWith(prefix + "Color " )){
        if(message.content.startsWith(prefix + "Color " + ( "Random" || "Red" || "Coral" || "Orange" || "Amber" || "Gold" || "Yellow" || "Pear" || "Lime" || "Green" || "Emeraude" || "Aquamarine" || "Blue-Green" || "Cyan" || "Azure" || "Blue" || "Ultramarine" || "Violet" || "Mauve" || "Magenta" || "Rose" || "Ruby" || "Pink" || "White" || "Silver" || "Gray" || "Black" || "Default" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "10" || "11" || "12" || "13" || "14" || "15" || "16" || "17" || "18" || "19" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "27"))){              
        let args = message.content.split(" ");       
        }
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        let ColorType = args[1];
//////      
            message.member.roles.remove('791781065307848710'); //Red
            message.member.roles.remove('791800899630006273'); //Coral
            message.member.roles.remove('791801079653203989'); //Orange
            message.member.roles.remove('791801153910341682'); //Amber
            message.member.roles.remove('791801230237106177'); //Gold
            message.member.roles.remove('791801307995832350'); //Yellow
            message.member.roles.remove('791801395119915038'); //Pear
            message.member.roles.remove('791801614515699732'); //Lime
            message.member.roles.remove('791801735336951838'); //Green
            message.member.roles.remove('791801858008154173'); //Emeraude
            message.member.roles.remove('791801955625205780'); //Aquamarine
            message.member.roles.remove('791802047753355316'); //Blue-Green
            message.member.roles.remove('791802172538486784'); //Cyan
            message.member.roles.remove('791859468710576149'); // Azure
            message.member.roles.remove('791859594795548692'); // Blue
            message.member.roles.remove('791859673077776414'); // Ultramarine
            message.member.roles.remove('791859861000290324'); // Violet
            message.member.roles.remove('791859958898491423'); // Mauve
            message.member.roles.remove('791860033347518534'); // Magenta
            message.member.roles.remove('791860131155148840'); // Rose
            message.member.roles.remove('791860214886170625'); // Ruby
            message.member.roles.remove('791860290366210061'); // Pink 
            message.member.roles.remove('791860403491438601'); // White 
            message.member.roles.remove('791860476065218560'); // Silver
            message.member.roles.remove('791860600199446549'); // Gray
            message.member.roles.remove('791860670064361502'); // Black  
            if(ColorType == 'Random'){
                ColorType = `${Math.floor(Math.random() * 26 + 1)}`;
            }
                //Change color:
             switch (ColorType){
             case 'Red':
                message.member.roles.add("791781065307848710");
                message.reply("Color selected : **Red**  !" )
                console.log(MessageAutor.username + " Have selected Color Red ")
                message.member.roles.add("791781065307848710");
             break;
             case 'Coral':
                message.member.roles.add("791800899630006273");
                message.reply("Color selected : **Coral**  !" )
                console.log(MessageAutor.username + " Have selected Color Coral ")
                message.member.roles.add("791800899630006273");
             break;
             case 'Orange':
                message.member.roles.add("791801079653203989");
                message.reply("Color selected : **Orange**  !" )
                console.log(MessageAutor.username + " Have selected Color Orange ")
                message.member.roles.add("791801079653203989");
             break;
             case 'Amber':
                message.member.roles.add("791801153910341682");
                message.reply("Color selected : **Amber**  !" )
                console.log(MessageAutor.username + " Have selected Color Amber ")
                message.member.roles.add("791801153910341682");
             break;
             case 'Gold':
                message.member.roles.add("791801230237106177");
                message.reply("Color selected : **Gold**  !" )
                console.log(MessageAutor.username + " Have selected Color Gold ")
                message.member.roles.add("791801230237106177");
             break;
             case 'Yellow':
                message.member.roles.add("791801307995832350");
                message.reply("Color selected : **Yellow**  !" )
                console.log(MessageAutor.username + " Have selected Color Yellow ")
                message.member.roles.add("791801307995832350");
             break;
             case 'Pear':
                message.member.roles.add("791801395119915038");
                message.reply("Color selected : **Pear**  !" )
                console.log(MessageAutor.username + " Have selected Color Pear ")
                message.member.roles.add("791801395119915038");
             break;
             case 'Lime':
                message.member.roles.add("791801614515699732");
                message.reply("Color selected : **Lime**  !" )
                console.log(MessageAutor.username + " Have selected Color Lime ")
                message.member.roles.add("791801614515699732");
             break;
             case 'Green':
                message.member.roles.add("791801735336951838");
                message.reply("Color selected : **Green**  !" )
                console.log(MessageAutor.username + " Have selected Color Green ")
                message.member.roles.add("791801735336951838");
             break;
             case 'Emeraude':
                message.member.roles.add("791801858008154173");
                message.reply("Color selected : **Emeraude**  !" )
                console.log(MessageAutor.username + " Have selected Color Emeraude ")
                message.member.roles.add("791801858008154173");
             break;
             case 'Aquamarine':
                message.member.roles.add("791801955625205780");
                message.reply("Color selected : **Aquamarine**  !" )
                console.log(MessageAutor.username + " Have selected Color Aquamarine ")
                message.member.roles.add("791801955625205780");
             break;
             case 'Blue-Green':
                message.member.roles.add("791802047753355316");
                message.reply("Color selected : **Bleu-Green**  !" )
                console.log(MessageAutor.username + " Have selected Color Blue-Green ")
                message.member.roles.add("791802047753355316");
             break;
             case 'Cyan':
                message.member.roles.add("791802172538486784");
                message.reply("Color selected : **Cyan**  !" )
                console.log(MessageAutor.username + " Have selected Color Cyan ")
                message.member.roles.add("791802172538486784");
             break;
             case 'Azure' || '14':
                message.member.roles.add("791859468710576149");
                message.reply("Color selected : **Azure**  !" )
                console.log(MessageAutor.username + " Have selected Color Azure ")
                message.member.roles.add("791859468710576149");
             break;
             case 'Blue':
                message.member.roles.add("791859594795548692");
                message.reply("Color selected : **Blue**  !" )
                console.log(MessageAutor.username + " Have selected Color Blue ")
                message.member.roles.add("791859594795548692");
             break;
             case 'Ultramarine':
                message.member.roles.add("791859673077776414");
                message.reply("Color selected : **Ultramarine**  !" )
                console.log(MessageAutor.username + " Have selected Color Ultramarine ")
                message.member.roles.add("791859673077776414");
             break;
             case 'Violet':
                message.member.roles.add("791859861000290324");
                message.reply("Color selected : **Violet**  !" )
                console.log(MessageAutor.username + " Have selected Color Violet ")
                message.member.roles.add("791859861000290324");
             break;
             case 'Mauve':
                message.member.roles.add("791859958898491423");
                message.reply("Color selected : **Mauve**  !" )
                console.log(MessageAutor.username + " Have selected Color Mauve ")
                message.member.roles.add("791859958898491423");
             break;
             case 'Magenta':
                message.member.roles.add("791860033347518534");
                message.reply("Color selected : **Magenta**  !" )
                console.log(MessageAutor.username + " Have selected Color Magenta ")
                message.member.roles.add("791860033347518534");
             break;
             case 'Rose':
                message.member.roles.add("791860131155148840");
                message.reply("Color selected : **Rose**  !" )
                console.log(MessageAutor.username + " Have selected Color Rose ")
                message.member.roles.add("791860131155148840");
             break;
             case 'Ruby':
                message.member.roles.add("791860214886170625");
                message.reply("Color selected : **Ruby**  !" )
                console.log(MessageAutor.username + " Have selected Color Ruby ")
                message.member.roles.add("791860214886170625");
             break;
             case 'Pink':
                message.member.roles.add("791860290366210061");
                message.reply("Color selected : **Pink**  !" )
                console.log(MessageAutor.username + " Have selected Color Pink ")
                message.member.roles.add("791860290366210061");
             break;
             case 'White':
                message.member.roles.add("791860403491438601");
                message.reply("Color selected : **White**  !" )
                console.log(MessageAutor.username + " Have selected Color White ")
                message.member.roles.add("791860403491438601");
             break;
             case 'Silver':
                message.member.roles.add("791860476065218560");
                message.reply("Color selected : **Silver**  !" )
                console.log(MessageAutor.username + " Have selected Color Silver ")
                message.member.roles.add("791860476065218560");
             break;
             case 'Gray':
                message.member.roles.add("791860600199446549");
                message.reply("Color selected : **Gray**  !" )
                console.log(MessageAutor.username + " Have selected Color Gray ")
                message.member.roles.add("791860600199446549");
             break;
             case 'Black':
                message.member.roles.add("791860670064361502");
                message.reply("Color selected : **Black**  !" )
                console.log(MessageAutor.username + " Have selected Color Black ")
                message.member.roles.add("791860670064361502");
             break;
             case 'Default':
                message.reply("Color selected : **None**  !" )
                console.log(MessageAutor.username + " Have selected Color None ")
             break;
             case '1':
                message.member.roles.add("791781065307848710");
                message.reply("Color selected : **Red**  !" )
                console.log(MessageAutor.username + " Have selected Color Red ")
                message.member.roles.add("791781065307848710");
             break;
             case '2':
                message.member.roles.add("791800899630006273");
                message.reply("Color selected : **Coral**  !" )
                console.log(MessageAutor.username + " Have selected Color Coral ")
                message.member.roles.add("791800899630006273");
             break;
             case '3':
                message.member.roles.add("791801079653203989");
                message.reply("Color selected : **Orange**  !" )
                console.log(MessageAutor.username + " Have selected Color Orange ")
                message.member.roles.add("791801079653203989");
             break;
             case '4':
                message.member.roles.add("791801153910341682");
                message.reply("Color selected : **Amber**  !" )
                console.log(MessageAutor.username + " Have selected Color Amber ")
                message.member.roles.add("791801153910341682");
             break;
             case '5':
                message.member.roles.add("791801230237106177");
                message.reply("Color selected : **Gold**  !" )
                console.log(MessageAutor.username + " Have selected Color Gold ")
                message.member.roles.add("791801230237106177");
             break;
             case '6':
                message.member.roles.add("791801307995832350");
                message.reply("Color selected : **Yellow**  !" )
                console.log(MessageAutor.username + " Have selected Color Yellow ")
                message.member.roles.add("791801307995832350");
             break;
             case '7':
                message.member.roles.add("791801395119915038");
                message.reply("Color selected : **Pear**  !" )
                console.log(MessageAutor.username + " Have selected Color Pear ")
                message.member.roles.add("791801395119915038");
             break;
             case '8':
                message.member.roles.add("791801614515699732");
                message.reply("Color selected : **Lime**  !" )
                console.log(MessageAutor.username + " Have selected Color Lime ")
                message.member.roles.add("791801614515699732");
             break;
             case '9':
                message.member.roles.add("791801735336951838");
                message.reply("Color selected : **Green**  !" )
                console.log(MessageAutor.username + " Have selected Color Green ")
                message.member.roles.add("791801735336951838");
             break;
             case '10':
                message.member.roles.add("791801858008154173");
                message.reply("Color selected : **Emeraude**  !" )
                console.log(MessageAutor.username + " Have selected Color Emeraude ")
                message.member.roles.add("791801858008154173");
             break;
             case '11':
                message.member.roles.add("791801955625205780");
                message.reply("Color selected : **Aquamarine**  !" )
                console.log(MessageAutor.username + " Have selected Color Aquamarine ")
                message.member.roles.add("791801955625205780");
             break;
             case '12':
                message.member.roles.add("791802047753355316");
                message.reply("Color selected : **Bleu-Green**  !" )
                console.log(MessageAutor.username + " Have selected Color Bleu-Green ")
                message.member.roles.add("791802047753355316");
             break;
             case '13':
                message.member.roles.add("791802172538486784");
                message.reply("Color selected : **Cyan**  !" )
                console.log(MessageAutor.username + " Have selected Color Cyan ")
                message.member.roles.add("791802172538486784");
             break;
             case '14':
                message.member.roles.add("791859468710576149");
                message.reply("Color selected : **Azure**  !" )
                console.log(MessageAutor.username + " Have selected Color Azure ")
                message.member.roles.add("791859468710576149");
             break;
             case '15':
                message.member.roles.add("791859594795548692");
                message.reply("Color selected : **Blue**  !" )
                console.log(MessageAutor.username + " Have selected Color Blue ")
                message.member.roles.add("791859594795548692");
             break;
             case '16':
                message.member.roles.add("791859673077776414");
                message.reply("Color selected : **Ultramarine**  !" )
                console.log(MessageAutor.username + " Have selected Color Ultramarne ")
                message.member.roles.add("791859673077776414");
             break;
             case '17':
                message.member.roles.add("791859861000290324");
                message.reply("Color selected : **Violet**  !" )
                console.log(MessageAutor.username + " Have selected Color Violet ")
                message.member.roles.add("791859861000290324");
             break;
             case '18':
                message.member.roles.add("791859958898491423");
                message.reply("Color selected : **Mauve**  !" )
                console.log(MessageAutor.username + " Have selected Color Mauve ")
                message.member.roles.add("791859958898491423");
             break;
             case '19':
                message.member.roles.add("791860033347518534");
                message.reply("Color selected : **Magenta**  !" )
                console.log(MessageAutor.username + " Have selected Color Magenta ")
                message.member.roles.add("791860033347518534");
             break;
             case '20':
                message.member.roles.add("791860131155148840");
                message.reply("Color selected : **Rose**  !" )
                console.log(MessageAutor.username + " Have selected Color Rose ")
                message.member.roles.add("791860131155148840");
             break;
             case '21':
                message.member.roles.add("791860214886170625");
                message.reply("Color selected : **Ruby**  !" )
                console.log(MessageAutor.username + " Have selected Color Ruby ")
                message.member.roles.add("791860214886170625");
             break;
             case '22':
                message.member.roles.add("791860290366210061");
                message.reply("Color selected : **Pink**  !" )
                console.log(MessageAutor.username + " Have selected Color Pink ")
                message.member.roles.add("791860290366210061");
             break;
             case '23':
                message.member.roles.add("791860403491438601");
                message.reply("Color selected : **White**  !" )
                console.log(MessageAutor.username + " Have selected Color White ")
                message.member.roles.add("791860403491438601");
             break;
             case '24':
                message.member.roles.add("791860476065218560");
                message.reply("Color selected : **Silver**  !" )
                console.log(MessageAutor.username + " Have selected Color Silver ")
                message.member.roles.add("791860476065218560");
             break;
             case '25':
                message.member.roles.add("791860600199446549");
                message.reply("Color selected : **Gray**  !" )
                console.log(MessageAutor.username + " Have selected Color Gray ")
                message.member.roles.add("791860600199446549");
             break;
             case '26':
                message.member.roles.add("791860670064361502");
                message.reply("Color selected : **Black**  !" )
                console.log(MessageAutor.username + " Have selected Color Black ")
                message.member.roles.add("791860670064361502");
             break;
             case '27':
                message.reply("Color selected : **None**  !" )
                console.log(MessageAutor.username + " Have selected Color None ")
             break;
             default:
                 message.reply(": You did not entrer a color, or miss tap it,\n If you want to see all the available color, please tap $Color Help\nColor selected : **None**  ! ")
             break;
            }
            args[1] = ' '
            ColorType[0] = ' '
        }else{
            if(message.content.startsWith(prefix + "Color")){
            message.reply(": You did not entrer a color, or miss tap it,\n If you want to see all the available color, please tap $Color Help");
            }  
        }
});
//#endregion
//=====================================================================================================================================
//#region Message Help
Client.on("message", message => {
        if(message.content == prefix + "Help"){
            message.channel.send(`
            Here's the list of all the commands available at this moment !
--------------------------------------------------------------------------------------------------------------------------------------------------
$Ban         (ADMIN ONLY): Ban the desired target                  
$Kick        (ADMIN ONLY): Kick the desired target                   
$Mute      (ADMIN ONLY): Mute the desired target             
$Unmute (ADMIN ONLY): Unmute the desired target       
$Youtube                              : Play the audio of a link Youtube.     
$Play                                      : Play the audio of something.
$Skip                                      : Skip to next song available, or stop the music if there is none in the queue.
$Stop                                     : Stop the audio of $Youtube and $Play.
$Color                                    : Change your color, to see the list, do $Color Help
$Hello                                    : Send you an Hello to boost your day.
$Help                                     : Give you the list of all the commands.
$Buzz                                     : Give you the Buzzzzzzzz.
$Help Audio ( Special command )
--------------------------------------------------------------------------------------------------------------------------------------------------
If you need more Help with a command, type $'the command' Help
`)}
}); 
//#endregion
//=====================================================================================================================================
//#region Command Bot Key
Client.login(process.env.Token);
//#endregion 