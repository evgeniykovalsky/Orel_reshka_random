module.exports={
    resolve:{
        fallback:{ "url": require.resolve("url/"),
        "https": require.resolve("https-browserify")
                   
                                                }

    }
}