import { postRouter } from './routes/postRouter';
import { userRouter } from './routes/userRouter';
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter)
app.use("/post", postRouter)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
