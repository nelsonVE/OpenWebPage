function createResponse(response){
    let messages = "";

    switch(typeof response){
        case 'object':
            response.foreach((item, value) => {
                messages = messages + '<br>' + value;
            })
            break;
        case 'string':
            messages = response;
            break;
    }

    return response;
}

export default createResponse;