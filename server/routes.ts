import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const validatedData = insertInquirySchema.parse(req.body);
      
      // Create a new inquiry in storage
      const inquiry = await storage.createInquiry({
        ...validatedData,
        dateSubmitted: new Date().toISOString(),
      });
      
      // Return success response
      return res.status(201).json({
        message: "Thank you for your message. We'll get back to you soon!",
        inquiryId: inquiry.id
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      // Handle other errors
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
