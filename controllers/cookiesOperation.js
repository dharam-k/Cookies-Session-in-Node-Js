

const setCookiesValue =(req, resp)=>{

    resp.cookie('user', 'dharam', {httpOnly: true, maxAge:1000})
    resp.send('set cookie');
}

const getCookiesValue =(req, resp)=>{

    resp.send(req.cookies);
}

const clearCookiesValue =(req, resp)=>{

    resp.clearCookie('user')
    resp.send('clear cookie');
}



export {setCookiesValue, getCookiesValue, clearCookiesValue}