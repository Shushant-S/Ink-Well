import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signunInput } from "@shushant0810/medium-common";
import { Hono } from "hono";
import { sign } from "hono/jwt";


export const userRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


userRoute.post('/signup', async (c) => {

    const body = await c.req.json();

    const { success } = signunInput.safeParse(body);

    if(!success){
      c.status(411);
      c.json({
        message: "invalid inputs"
      })
    }

    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate()) 


    try{
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password
        }
      })
    
      const token = await sign({id: user.id}, c.env.JWT_SECRET)
      
      return c.json({jwt: token});
    }catch(e){
      c.status(411)
      return c.json({
        message: "something went wrong"
      })
    }
    
  
  })
  
  
  
userRoute.post('/signin', async (c) => {
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();

    const { success } = signinInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        message: "invalid inputs"
      })
    }
  
    try{
      const user = await prisma.user.findUnique({
        where: {
          username: body.username,
          password: body.password
        }
      })
    
      if(!user){
        c.status(403);
        return c.json({
          error: "invalid credentials"
        })
      }
    
      const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    
      return c.json({message: "user logged in", jwt: jwt});
    }catch(e){

      c.status(411)
      return c.json({
        message: "something went wrong"
      })

    }

  })
  
  