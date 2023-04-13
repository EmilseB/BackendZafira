const workoutService=require("../services/workoutService")

const getAllWorkoutes=(req,res)=>{
    const getAllWorkoutes=workoutService.getAllWorkoutes()
    res.send("Get all Workouts")
}

const getOneWorkout=(req,res)=>{
    const workout=workoutService.getOneWorkout(req.params.workoutId)
    res.send(`Get workout ${req.params.workoutId}`)
}

const createNewWorkout=(req,res)=>{
    const createdWorkout=workoutService.createNewWorkout(req.params.workoutId)
    res.send(`Create workout ${req.params.workoutId}`)
}

const updateOneWorkout=(req,res)=>{
    const updatedWorkout=workoutService.updateOneWorkout(req.params.workoutId)
    res.send(`Update workout ${req.params.workoutId}`)
}

const deleteOneWorkout=(req,res)=>{
    workoutService.deleteOneWorkout(req.params.workoutId)
    res.send(`Delete workout ${req.params.workoutId}`)
}

module.exports={
    getAllWorkoutes,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}