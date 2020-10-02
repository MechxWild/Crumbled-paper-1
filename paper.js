class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.rectangle(x,y,20,20,options)
        this.radius = 55
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        fill("pink")
        ellipse(pos.x,pos.y,20)
    }
};