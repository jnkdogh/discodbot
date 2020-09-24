const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('this bot is online!');
    bot.user.setActivity('Your world fall apart', { type: 'WATCHING' });
})

bot.on('guildMemberAdd', member=>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "general")
    if(member.user.bot) return;
    else{
        if(!channel) return;
        channel.send(`**Puts away cigarette**\nWelcome ${member}, please visit ${member.guild.channels.cache.get('755707226932379659').toString()}\n**Lights another and gazes into the void**`)
    }
})

bot.on('message', msg=>{

    if (msg.content === '!muteall' || msg.content === '!unmuteall') {
        if (msg.member.voice.channel) {
            let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
            let flag = (msg.content === '!muteall');
            for (const [memberID, member] of channel.members) {
                member.voice.setMute(flag);
            }
        }
        else {
          msg.reply('Pehle voice channel join to karlo bhosdike').then((message)=>{
            setTimeout(()=>{
                message.delete()
            }, 3000)
        })
        msg.delete();
        return;
        }
    }

    let args = msg.content.slice(PREFIX.length).split(" ");
    // let args = args1.shift().toLowerCase();
    const channelt = msg.channel
    if(msg.content[0]!=="!" && !msg.author.bot && !Number.isInteger(parseInt(msg.content, 10))){
        // console.log(msg.author.user.type);
        if(channelt.name === "welcom" || channelt.name === "music-control"){
            msg.reply('only music commands here').then((message)=>{
                setTimeout(()=>{
                    message.delete()
                }, 5000)
            })
            msg.delete();
            return;
        }
        else if(channelt.name === "among-us-code"){
            if(msg.content==msg.content.toUpperCase() || msg.content.toLowerCase()==="asia" || msg.content.toLowerCase()==="europe" || msg.content.toLowerCase()==="north america"){
                return;
            }
            else{
                msg.reply('ONLY GAME CODES AND SERVER NAMES HERE eg(OSWQQQ, asia, europe and north america)').then((message)=>{
                    setTimeout(()=>{
                        message.delete()
                    }, 7000)
                })
                msg.delete();
                return;                
            }
        }
    }

    else if(msg.content[0]==="!" && !msg.author.bot){
        if(channelt.name === "among-us-code"){
            msg.reply('ONLY GAME CODES AND SERVER NAMES HERE eg(OSWQQQ, asia, europe and north america)').then((message)=>{
                setTimeout(()=>{
                    message.delete()
                }, 7000)
            })
            msg.delete();
            return;               
        }
    }

    // if(msg.member.roles.cache.has()){} or some(r => r.name === "whatever")
    // member.role.add(); also remove

    if(msg.content[0]===PREFIX){
    switch(args[0]){
        case 'pinge':
            msg.channel.send('ponge!').then((message)=>{
                setTimeout(()=>{
                    message.delete()
                }, 3000)
            })
        break;

        case 'ksg':
            msg.channel.send('!play https://www.youtube.com/playlist?list=PLLBJrClJPlWJScARaoX_LIw1n3LiPoZZQ');
        break;   
        
        case 'yo':
            if(args[1] === 'kanye'){
                msg.channel.send('piss on my grammy').then((message)=>{
                    setTimeout(()=>{
                        message.delete()
                    }, 3000)
                })
            }
            else{
                msg.reply('no no you only talk like that to the king, say his name!').then((message)=>{
                    setTimeout(()=>{
                        message.delete()
                    }, 5000)
                })
            }
        break;

        case 'peter':
            msg.channel.send('Peter phodega ITC placement, or marega sanghi!!!').then((message)=>{
                setTimeout(()=>{
                    message.delete()
                }, 7000)
            })
        break;

        case 'delete':
            if(msg.member.roles.cache.some(r => r.name === "admin") || msg.author.id===msg.guild.owner.id){
            if(!args[1]) return msg.reply('aye man, how many?')
            msg.channel.bulkDelete(args[1]);
            }
            else{
                msg.reply("no you can't do that, admins and owner only").then((message)=>{
                    setTimeout(()=>{
                        message.delete()
                    }, 5000)
                })
                msg.delete();
            }
        break;

        // case 'gmute':
        //     // msg.guild.channels.cache.filter(ch => ch.type, "voice").each(ch1 => {ch1.members.cache.each(mem =>{if(mem.bot)return;
        //         // mem.roles.add('757187658786013244')})})
        //     if(msg.member.roles.cache.some(r => r.name === "admin") || msg.author.id===msg.guild.owner.id){
        //         msg.guild.members.cache.each(mem =>{if(!mem.bot && mem.roles.cache.some(r => r.name === "Rythm"))return;
        //             mem.roles.add('757187658786013244')})
        //         msg.reply('EVERYONE is muted').then((message)=>{
        //             setTimeout(()=>{
        //                 message.delete()
        //             }, 5000)
        //         })                
        //     }
        //     else{
        //         msg.reply("no you can't do that, admins and owner only").then((message)=>{
        //             setTimeout(()=>{
        //                 message.delete()
        //             }, 5000)    
        //         })  
        //     }
        // break;

        // case 'gunmute':
        //     if(msg.member.roles.cache.some(r => r.name === "admin") || msg.author.id===msg.guild.owner.id){
        //         msg.guild.members.cache.each(mem => {if(!mem.bot && mem.roles.cache.some(r => r.name === "Rythm"))return;
        //             mem.roles.remove('757187658786013244')})
        //         msg.reply('EVERYONE is unmuted').then((message)=>{
        //             setTimeout(()=>{
        //                 message.delete()
        //             }, 5000)    
        //         })            
        //     }
        //     else{
        //         msg.reply("no you can't do that, admins and owner only").then((message)=>{
        //             setTimeout(()=>{
        //                 message.delete()
        //             }, 5000)    
        //         })  
        //     }            
        // break;

        case 'embed':
            const embed = new Discord.MessageEmbed()
            .setTitle('King Card')
            .addField('Player Name', msg.author.username)
            .addField('Current Server', msg.guild.name)
            .setColor(0xF1C40F)
            .setThumbnail(msg.author.displayAvatarURL());
            msg.channel.send(embed);
        break;
     }
    }
})

bot.login(process.env.token);