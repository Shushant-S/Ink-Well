import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@shushant0810/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";



export const blogRoute = new Hono<{
    Bindings:{
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
      userId: string
    }
}>();


blogRoute.use('/*', async(c, next) => {
  
  const authHeader = c.req.header("authorization") || "";

  try{
    const user = await verify(authHeader, c.env.JWT_SECRET);
  
    if(user){
      c.set("userId", user.id);
      await next();
    }
    else{
      c.status(403);
      c.json({
        message: "unauthorized request"
      })
    }
  }
  catch(e){
    c.status(403);
      c.json({
        message: "unauthorized request"
      })
  }


})



blogRoute.post("/", async (c) => {

    const body = await c.req.json();

    const success = createBlogInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        message: "invalid inputs"
      })
    }

    const userId = c.get("userId")

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(userId)
      }
    })

  return c.json({ id: blog.id });
});



blogRoute.put("/", async (c) => {

  const body = await c.req.json();

  const success = updateBlogInput.safeParse(body);

  if(!success){
    c.status(411);
    return c.json({
      message: "invalid inputs"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    }
  })

  return c.json({ message: "your blog has been updated" });
});


// adding pagination
blogRoute.get("/bulk", async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())


  const blogs = await prisma.blog.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author:{
        select:{
          name: true
        }
      }
    }
  })

  return c.json({ blogs });
});



blogRoute.get("/:id", async(c) => {

  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try{
    const blog = await prisma.blog.findFirst({
      where:{ 
        id: Number(id)
      },
      select:{
        id: true,
        title: true,
        content: true,
        author: {
          select:{
            name: true
          }
        }
      }
    })

    return c.json({
      blog
    })
  }
  catch(e){
    c.status(411)
    return c.json({
      message: "error while fetching blog post"
    })
  }
});



