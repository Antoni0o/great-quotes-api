import { Router } from "express";
import { CountQuotesController } from "./controllers/CountQuotesController";
import { GetQuoteController } from "./controllers/GetQuoteController"; 
import { GetRandomQuoteController } from "./controllers/GetRandomQuoteController";

const router = Router();

router.get("/quote/find/:id", new GetQuoteController().handle);
router.get("/quote/find", new GetRandomQuoteController().handle);
router.get("/quote/count", new CountQuotesController().handle);

export { router }