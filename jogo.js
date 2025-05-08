'use strict'

async function getJogos(){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function getJogoPorNome(nomeJogo){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nomeJogo}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

async function getjogo(idJogo){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${idJogo}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function postJogo(jogo){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const options = {
        method: 'POST', //precisa falar o metodo do fetch, pois o padrao é get
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo) //falando transforma isso em json
    }
    const response = await fetch(url, options) //faz um requisição com essa url, com essas opcoes
    return response.ok
}

async function putJogo(id, jogo){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos${id}`
    const options = {
        method: 'PUT', //precisa falar o metodo do fetch, pois o padrao é get
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo) //falando transforma isso em json
    }
    const response = await fetch(url, options) //faz um requisição com essa url, com essas opcoes
    return response.ok
}

async function deleteJogo(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}