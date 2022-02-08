const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Quiz = require('../model/quiz');
const Candidate = require('../model/candidate')
const leaderBoard = require('../model/leaderboard')


let arr = ["QnId","Question","option1","option2","option3","option4","Answer"];
router.get('/',(req,res)=>{
    console.log('api works');
    
    //res.send('From API route');
    res.render("index",{elements:arr});
})
router.post('/addCandidate', (req,res)=>{
    let candidates = req.body;
    let newCandidate = new Candidate(candidates);
    newCandidate.save((err, data)=>{
        if(err){
            
            console.log("error in saving",err);
        }
        else{
            console.log("controller",req.body)
            let payload = { subject : data._id}
            let token = jwt.sign(payload,'secretKey',{ expiresIn: '1h' });
            res.status(200).send({token})
            // return res.status(200).send(data )
        }
    })
})
router.post('/postScore', (req,res)=>{
    let candidateScore = req.body;
    let scoreModel = new leaderBoard(candidateScore);
    scoreModel.save((err, data)=>{
        if(err){
            console.log("score model error in saving",err);
        }
        else{
            console.log("score controller",req.body)
            res.status(200).send({success:true})
            // return res.status(200).send(data )
        }
    })
})
router.post('/addItems', (req,res)=>{
        let quizdata = req.body;
        // let newQuiz = new Quiz({
        //     QnId: req.body.QnId,
        //     Question: req.body.Question,
        //     option1: req.body.option1,
        //     option2: req.body.option2,
        //     option3: req.body.option3,
        //     option4: req.body.option4,
        //     Answer: req.body.Answer,
        // })
        let newQuiz = new Quiz(quizdata)
        newQuiz.save(function(error, data){
            if(error){
                console.log("error in saving",error);
            }
            else{
                console.log("controller",req.body)
                //return res.status(200).send(data )
                
                //return res.send('succesfully added')
                
            }
          });
        
        res.render("index",{ elements:arr })
        
    
})

router.get('/getAllQuestions',async(req,res)=>{
    const data = await Quiz.find();
    res.status(200).send({data})
})
module.exports = router;