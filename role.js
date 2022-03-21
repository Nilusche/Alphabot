const firstMessage = require('./first-message');
module.exports = client=>{
    const channelID = '955594905806340116';
    const getEmoji = emojiName=> client.emojis.cache.find(emoji=>emoji.name ===emojiName);

    const swe={
        CompBau:'Compilerbau',
        DBWT2: 'Datenbanken und Webtechnologien 2',
        DevOps: 'Development for Operations',
        FITU: 'Führen im IT-Umfeld',
        MBSE: 'Model-based Systems Engineering',
        MVS: 'Modellierung Verteilter Systeme',
        ORMua: 'Operations Research- Methoden und Anwendungen',
        PALO: 'Performance Analyse und Laufzeitoptimierung',
        SSE: 'System Safety Engineering', 
        ReqEng: 'Requirements Engineering',
    }
    const ti={
         ITIS:'IT-Infrastruktur',
         EEmbS: 'Einführung Embedded Software',
         FSW: 'Fahrzeugsoftware',
         IndRob: 'Industrierobotik',
         AW:'Angewandte Warscheinlichkeitsrechnung',
         InfTheo: 'Informationstheorie',
         Linux: 'Linux: Konzepte und Anwendung',
         WI: 'Wirtschaftinformatik',
         IV: 'InfoVIS'
    }

    const auto={
        KI1: 'Einführung in Künstliche Intelligenz ',
        CompGra:'Computergrafik',
        BDA1: 'Big Data Analytics |',
        ADA: 'Applied Data Analytics',
        LinOpt:'Lineare Optimierung',
       
    }

    const medien={
        GamDes: 'Game Design',
        ExpGamDes:'Experimental Game Design',
        MP: 'Medienproduktion', 
        MIS: 'Mobile Informationssysteme',
         TE: 'Technikethik',
    }

    const its={
        ITS2: 'IT-Sicherheit 2',
    }
    const service={
        ITSM:'IT Service Management',
        ServiceNow: 'Service Management mit ServiceNow',
        AmbInt: 'Ambient Intelligence',
         BusInt:'Business Intelligence',
    }

    let reactions=[];
    let emojitext='\n**Softwaretechnik**\n';

    for(const key in swe){
        const emoji = getEmoji(key);
        reactions.push(emoji);
        const role=swe[key];
        emojitext+= `${emoji} = ${role}\n`;
    }
    
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**Technische Informatik**\n";
    reactions=[];

    for(const key in ti){
        const emoji = getEmoji(key);
        reactions.push(emoji);
        const role=ti[key];
        emojitext+= `${emoji} = ${role}\n`;
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**Autonome Systeme**\n";
    reactions=[];

    for(const key in auto){
        const emoji = getEmoji(key);
        reactions.push(emoji);
        const role=auto[key];
        emojitext+= `${emoji} = ${role}\n`;
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**Medieninformatik**\n";
    reactions=[];

    for(const key in medien){
        const emoji = getEmoji(key);
        reactions.push(emoji);
        const role=medien[key];
        emojitext+= `${emoji} = ${role}\n`;
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**IT-Sicherheit**\n";
    reactions=[];

    for(const key in its){
        const emoji = getEmoji(key);
        reactions.push(emoji);
        const role=its[key];
        emojitext+= `${emoji} = ${role}\n`;
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**IT-Management**\n";
    reactions=[];

    for(const key in service){
        const emoji = getEmoji(key);
        reactions.push(emoji);
        const role=service[key];
        emojitext+= `${emoji} = ${role}\n`;
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="";
    reactions=[];



    const handleReaction = (reaction, user, add)=>{
        if(user.id==='955076790928416868'){
            return;
        }
        const emoji = reaction._emoji.name;

        const {guild} = reaction.message;
        const roleName = emoji;
        if(!roleName){
            return;
        }

        const role = guild.roles.cache.find((role)=>role.name===roleName);
        const member = guild.members.cache.find((member)=>member.id ===user.id);
        if(add){
            
            member.roles.add(role);

        }else{
            member.roles.remove(role);
        }

    }

    client.on('messageReactionAdd', async(reaction, user)=>{
        if(reaction.message.channel.id = channelID){
            handleReaction(reaction,user,true);
        }
    })
    client.on('messageReactionRemove',async(reaction, user)=>{
        if(reaction.message.channel.id = channelID){
            handleReaction(reaction, user, false);
        }
    })
}