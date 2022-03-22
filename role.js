const firstMessage = require('./first-message');
const randomEmoji = require('./random-emoji');
const random = require('./random-emoji');
module.exports = client=>{
    const channelID = '955594905806340116';
   // const getEmoji = emojiName=> client.emojis.cache.find(emoji=>emoji.name ===emojiName);

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
    /*
    const all= {
        ITSM:'IT Service Management',
        ServiceNow: 'Service Management mit ServiceNow',
        AmbInt: 'Ambient Intelligence',
         BusInt:'Business Intelligence',
         ITS2: 'IT-Sicherheit 2',
         GamDes: 'Game Design',
        ExpGamDes:'Experimental Game Design',
        MP: 'Medienproduktion', 
        MIS: 'Mobile Informationssysteme',
         TE: 'Technikethik',
         KI1: 'Einführung in Künstliche Intelligenz ',
        CompGra:'Computergrafik',
        BDA1: 'Big Data Analytics |',
        ADA: 'Applied Data Analytics',
        LinOpt:'Lineare Optimierung',
        ITIS:'IT-Infrastruktur',
         EEmbS: 'Einführung Embedded Software',
         FSW: 'Fahrzeugsoftware',
         IndRob: 'Industrierobotik',
         AW:'Angewandte Warscheinlichkeitsrechnung',
         InfTheo: 'Informationstheorie',
         Linux: 'Linux: Konzepte und Anwendung',
         WI: 'Wirtschaftinformatik',
         IV: 'InfoVIS',
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
    }*/
/*
    let reactions=[];
    let emojitext='\n**Softwaretechnik**\n';
    let i=0;
    for(const key in swe){
        const emoji = randomEmoji(i);
        reactions.push(emoji);
        const role=swe[key];
        emojitext+= `${emoji} = ${role}\n`;
        
        all[emoji] = all[key];
        delete all[key];
        all[emoji]=key;
        i++
    }
    
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**Technische Informatik**\n";
    reactions=[];
    i=0;
    for(const key in ti){
        const emoji = randomEmoji(i);
        reactions.push(emoji);
        const role=ti[key];
        emojitext+= `${emoji} = ${role}\n`;
        all[emoji] = all[key];
        delete all[key];
        all[emoji]=key;
        i++
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**Autonome Systeme**\n";
    reactions=[];
    i=0;  
    for(const key in auto){
        const emoji = randomEmoji(i);
        reactions.push(emoji);
        const role=auto[key];
        emojitext+= `${emoji} = ${role}\n`;
        all[emoji] = all[key];
        delete all[key];
        all[emoji]=key;
        i++
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**Medieninformatik**\n";
    reactions=[];
    i=0;
    for(const key in medien){
        const emoji = randomEmoji(i);
        reactions.push(emoji);
        const role=medien[key];
        emojitext+= `${emoji} = ${role}\n`;
        all[emoji] = all[key];
        delete all[key];
        all[emoji]=key;
        i++
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**IT-Sicherheit**\n";
    reactions=[];
    i=0;
    for(const key in its){
        const emoji = randomEmoji(i);
        reactions.push(emoji);
        const role=its[key];
        emojitext+= `${emoji} = ${role}\n`;
        all[emoji] = all[key];
        delete all[key];
        all[emoji]=key;
        i++
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="\n**IT-Management**\n";
    reactions=[];
    i=0;
    for(const key in service){
        const emoji = randomEmoji(i);
        reactions.push(emoji);
        const role=service[key];
        emojitext+= `${emoji} = ${role}\n`;
        all[emoji] = all[key];
        delete all[key];
        all[emoji]=key;
        i++
    }
    firstMessage(client, channelID, emojitext, reactions);
    emojitext="";
    reactions=[];

*/
    function getEmoji(e){
        return client.emojis.cache.find(emoji=>emoji.name===e);
    };
    let all ={
        '😁':'CompBau',
        '🐯':'DBWT2',
        '🔇':'DevOps',
        '🍏':'FITU',
        '🐦':'MBSE',
        '💏':'MVS',
        '🚀':'ORMua',
        '🛂':'PALO',
        '🌖':'SSE',
        '🔈':'ReqEng',
        '🔖':'ITIS',
        '🍝':'EEmbS',
        '🚌':'FSW',
        '♑':'IndRob',
        '💞':'AW',
        '😜':'WI',
        '👵':'InfTheo',
        '🎴':'Linux',
        '🐍':'IV',
        '🎷':'KI1',
        '⛺':'CompGra',
        '🎋':'BDA1',
        '💯':'ServiceNow',
        '📙':'LinOpt',
        '💉':'GamDes',
        '🐩':'ExpGamDes',
        '🍧':'MP',
        '😻':'MIS',
        '➖':'TE',
        '😊':'ITS2',
        '💒':'ITSM',
        '🎂':'BusInt',
        '🌏':'AmbInt',




    }
    console.log(all);
    const handleReaction = (reaction, user, add)=>{
        if(user.id==='955076790928416868'){
            return;
        }
        const emoji = reaction._emoji.name;
        //console.log(emoji);
        const {guild} = reaction.message;
        
        const roleName = all[emoji];
        if(!roleName){
            return;
        }
        const role = guild.roles.cache.find((role)=>role.name===roleName);
        const member = guild.members.cache.find((member)=>member.id ===user.id);
        try{
            if(role){
                if(add){
                
                    member.roles.add(role);

                }else{
                    member.roles.remove(role);
                }
            }  
        }catch(E){
            console.log(roleName, role);
        }
        

    }

    client.on('messageReactionAdd', async(reaction, user)=>{
        console.log("add", reaction.message.channel.id, channelID);
        if(reaction.message.channel.id == channelID){
            handleReaction(reaction,user,true);
        }
    })
    client.on('messageReactionRemove',async(reaction, user)=>{
        console.log("remove", reaction.message.channel.id, channelID);
        if(reaction.message.channel.id == channelID){
            handleReaction(reaction, user, false);
        }
    })
}