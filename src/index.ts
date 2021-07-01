import express from "express"
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
// import { GlobalErrorHandler } from "./middlewares/GlobalErrorHandler";


// const app = createExpressServer({
//      
//       // we specify controllers we want to use
// });

const app = express();
app.use(express.json());

useExpressServer(app, {
     controllers: [UserController],
    //  middlewares: [GlobalErrorHandler],
     defaultErrorHandler: true
})



const port = process.env.PORT || 3000;
// app.get('/', (request, response) => {
//   response.send('Helo world!');
// });


app.listen(port, () => console.log(`Running on port ${port}`));