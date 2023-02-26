import config from "config";
import { Express } from "express";
import { getConnection } from "#root/db/connection";

import Products from "#root/db/entities/Products";


const setupRoutes = (app: Express) => {
  const connection = getConnection();
  const productsRepository = connection.getRepository(Products);

  app.get("/products", async (req: {page: number, limit: number}, res, next) => {
    const { page = 1, limit = 40 } = req.query;

    const products = productsRepository.find({skip: page, take: limit})

      return res.json(products);
  });

};

export default setupRoutes;