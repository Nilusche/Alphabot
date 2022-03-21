const { Client, Intents } = require('discord.js');
require('dotenv').config();
let token = process.env.token;
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const config = require("./config.json");
const role = require("./role");
const command = require('./command');
const emojis= {
    AW:'angewandte-warscheinlichkeit',
    AmbInt: 'ambient-intelligence',
    ADA: 'applied-data-analytics',
    BDA1: 'big-data-analytics',
    BusInt:'business-intelligence',
    CompilerBau:'compilerbau',
    ComputerGrafik:'computergrafik',
    DBWT2: 'datenbanken-2',
    DevOps: 'development-for-operations',
    EEmbs: 'embedded-software',
    KI1: 'künstliche-intelligenz-1',
    ExpGamDes:'experimental-game-design',
    FSW: 'fahrzeugsoftware',
    FITU: 'führen-im-it-umfeld',
    GamDes: 'game-design',
    IndRob: 'industrierobotik',
    InfTheo: 'informationstheorie',
    ITSM:'it-service-management',
    ITIS:'it-infrastruktur',
    ITS2: 'it-sicherheit-2',
    LinOpt:'lineare-optimierung',
    Linux: 'linux-konzepte-und-anwendung',
    MP: 'medienproduktion', 
    MIS: 'mobile-informationssysteme',
    MBSE: 'nodel-based-systems-engineering',
    MVS: 'modellierung-verteilter-systeme',
    ORMua: 'operations-research',
    PALO: 'performance-analyse',
    ReqEng: 'requirements-engineering',
    ServiceNow: 'serviceNow', 
    SSE: 'safety-engineering', 
    TE: 'technikethik',
    WI: 'wirtschaftinformatik',
    InfoVis: 'information-visualization'
}

client.on('ready',()=>{
    console.log('The Client is ready!');
    command(client, ['cc', 'clearchannel'], (message)=>{
        if(message.member.permissions.has('ADMINISTRATOR')){
            message.channel.messages.fetch().then((results)=>{
                message.channel.bulkDelete(results);
            })
        }
    });
    command(client,'create', (message)=>{
        for(const key in emojis){
            const channel = message.guild.channels.cache
             
            .find((channel)=>{
                return channel.name===key
            })
            if(!channel){
                
                message.guild.channels
                .create(emojis[key],{
                    type:'text',
                })
                .then((channel)=>{
                    const categoryID=  '955537768711335936';
                    
                    const role = message.guild.roles.cache.find((role)=>role.name===key);
                    
                    channel.permissionOverwrites.create(channel.guild.roles.everyone,{VIEW_CHANNEL:false});
                    
                    if(role){
                        channel.permissionOverwrites.create(role.id,{VIEW_CHANNEL:true});
                    }
                    channel.setParent(categoryID, {lockPermissions:false});
                
                })
            }   
        }
    })
    command(client,'delC', (message)=>{
        for(const key in emojis){
            message.guild.channels.cache.
            forEach((channel)=>{
                if(channel.name===emojis[key].toLowerCase()){
                    channel.delete();
                }
            })
        }
    })
    command(client,'delR', (message)=>{
        for(const key in emojis){
            const role =message.guild.roles.cache.find((role)=>role.name===key);
            if(role){
                role.delete();
            }
        }
    })
    command(client, 'roles',(message)=>{
        for(const key in emojis){
            message.guild.roles.create({
                name:key,
                color:'RED'
            })
        }
    })
    command(client, 'show',()=>{
        
    })
    role(client);
})

client.login(token);