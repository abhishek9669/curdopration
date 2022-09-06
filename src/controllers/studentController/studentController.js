const { Student } = require("../../models/Student")


exports.readController = (req,res)=>{
    Student.find().then((data)=>{
        res.status(200).json({data});


    }).catch((err)=>{
        res.status(400).json({message:err});
    })


}
exports.createController = (req, res) => {
        var data = new Student(req.body);
        data.save().then(() => res.status(200).json({message:"student create successfully"}))
        .catch((e)=>{
            res.status(404).json({message:"error",e})
        })  
}

exports.updateController =(req, res)=>{
    
    console.log(req.params.id)
    const id = req.params.id;
    delete req.body.id; 
    console.log(req.body)

    Student.findOne({ _id : id},(e,s)=>{
        console.log(e)
        console.log(s)
        if(s){
            let data = Student.updateOne(req.body);
            console.log(data)
            if (data) {
                res.status(200).json({
                    msg:"Updated Successfully"
                });
            }else{
                res.status(400).json({
                    error:e
               });

            }
           
        }else{
            res.status(400).json({
                error:e
           });
        }

    });
    


}

exports.deleteController = (req, res)=>{
    Student.findOne({ _id : id},(e,s)=>{
        console.log(e)
        console.log(s)
       
        if(s){
            Student.findByIdAndDelete({
                _id:req.params.id
            }).then((dta)=>{
                res.status(200).json({
                    msg:"Updated Successfully"
                });
            }).catch((err)=>{
                res.status(400).json({
                    error:err
               });
                
            })
           
        }else{
            res.status(400).json({
                error:e
           });
        }

    });

}
