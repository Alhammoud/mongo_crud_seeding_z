//const express = require("express");
const mongoose = require('mongoose');

const Post = require("./Post");

// const dotenu = require('dotenv').config();
require('dotenv').config();

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
     useUnifiedTopology: true
});


const postsData = [{
        title: "Post #1",
        body: "Lorem ipsum sit dolor amet. "
    },
    {
        title: "Post #2",
        body: "Ifnum bra deler manet geranto."
    }
];

(async () => {
    if (!process.argv.includes("--delete")) {
        const found = await Post.find()
        console.log(found);
        if(found.length===0){

            const createdPosts = await Post.insertMany(postsData); // injecting example data in db
            console.log(createdPosts," Done ! Successufully inserted data \n")
            process.exit();
        }else{
            console.log("Done Posts already there ..!")
            process.exit();

        }

    } else {

        await Post.deleteMany();
        console.log("Collection is deleted!");

        /* Post.remove({}, function (err, result) {

            // handle the error if any
            if (err) throw err;

            console.log("Collection is deleted!");

        }); */
           /* */ 
           
           process.exit();
    } // end else


    /* 
            Last thing for today:
             After your scripts are done, your process is still running and you need to CTRL+C to quit it. That sucks.
                - Find out how to exit a node process (bearbeitet) 
            

    */

})()
