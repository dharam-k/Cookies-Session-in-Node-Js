
const getSessionInfo =(req, resp)=>{

    //resp.send(req.session);
    //resp.send({sessionID: req.session.id});
    //resp.send({sessionID: req.sessionID});
    resp.send({Cookie: req.session.cookie});
}

const deleteSessionInfo =(req, resp)=>{

    req.session.destroy(()=>{
        resp.send({session: 'deleted'});
    })
}

const setSessionData =(req, resp)=>{
    req.session.device = 'laptop';
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count=1;
    }
    resp.send({count :req.session.count, device : req.session.device});
}

const getSessionData =(req, resp)=>{
    if(req.session.device){
        resp.send({Cart :{Device:req.session.device, count:req.session.count}});
    }else{
        resp.send({Device : 'Not set cart'});
    }
    
}

export {getSessionInfo, deleteSessionInfo, setSessionData, getSessionData}