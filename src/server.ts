import expres from "express";

const app = expres()

app.use(expres.json());

app.get("/", (req,res) => {
    return res.send({
        mensage: "Eaw mans"
    })
})

app.listen(3000)