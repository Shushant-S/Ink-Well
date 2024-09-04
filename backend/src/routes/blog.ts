import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@shushant0810/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";


// types of expected inputs
export const blogRoute = new Hono<{
    Bindings:{
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
      userId: string
    }
}>();


const authMiddleware = async(c:any, next:any) => {
  
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
}




blogRoute.post('/test', authMiddleware, async (c) => {
  
  console.log("reached inside the test");

  const userId = c.get("userId");

  console.log("reached inside the test 2");

  if (!userId) {
    console.log("User ID not found in context");
    return c.json({ message: "User ID not found in context" });
  }

  console.log("reached inside the test 3");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    console.log("reached inside the try block");
    
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) }
    });

    console.log("reached inside the try block 2");

    if (user) {
      console.log("User found:", user);
      return c.json({user});
    } else {
      console.log("User not found");
      return c.json({ message: "User not found" });
    }
  } catch (e) {
    console.error('Error fetching user:', e);
    return c.json({ message: "Failed to fetch user" });
  } finally {
    await prisma.$disconnect();
  }
});





blogRoute.post("/", authMiddleware, async (c) => { 

  const body = await c.req.json();
  const success = createBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ message: "Invalid inputs" });
  }

  const userId = c.get("userId");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      c.status(404);
      return c.json({ message: "User not found" });
    }

    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        imageUrl: body.imageUrl,
        authorId: Number(userId),
        publishedAt: new Date(),
      }
    });

    const author = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: { name: true },
    });

console.log('Fetched user:', user);
    // Update the blog post to include the author's name
    await prisma.blog.update({
      where: { id: blog.id },
      data: { authorName: author?.name || 'No author name' },
    });


    return c.json({ id: blog.id });
  } catch (e) {
    c.status(500);
    return c.json({ message: "Failed to create blog post" });
  }
});




blogRoute.put("/", authMiddleware, async (c) => {

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



blogRoute.get("/bulk", async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())


  const blogs = await prisma.blog.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      publishedAt: true,
      imageUrl: true,
      authorName: true,
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
        publishedAt: true,
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