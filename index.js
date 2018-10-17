#!/usr/bin/node

const express = require('express')

const app =  new express()

let counter = 0;

app.post('*', (req, res) => {
    counter++
    res.send(`Thank you for your POST request. Counter was increased. Current value: ${counter}`)
})

app.get('*', (req, res) => {
    res.send(`THE Achi Counter value is: ${counter}`)
})

app.listen(80)


